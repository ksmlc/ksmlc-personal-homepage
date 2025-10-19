// 配置常量
const CONFIG = {
    API_BASE_URL: 'https://api.ksmlc.cn/wyy',
    UPDATE_INTERVAL: 200, // 进度更新间隔(ms)
    CACHE_DURATION: 5 * 60 * 1000, // 缓存时长(5分钟)
    REQUEST_TIMEOUT: 10000, // 请求超时时间(10秒)
    MAX_RETRY_COUNT: 3 // 最大重试次数
};

const uid1 = 5157485399; // ksmlc
const uid2 = 19723756; // 飙升榜
const uid3 = 7785066739; // 黑胶VIP热歌榜
const uid4 = 3779629; // 新歌榜
const uid5 = 3778678; // 热歌榜
const uid6 = 2629584905; // 2025抖音热歌精选好听到单曲循环鸭
const userIds = [uid1,uid2,uid3,uid4,uid5,uid6]; // 用户 ID 列表

let currentUid = uid1; // 当前歌单用户ID
let currentSongIndex = 0;
let songs = [];
let lyricsLines = [];

// 缓存管理
const cache = {
    playlists: new Map(),
    playlistNames: new Map(),
    
    set(key, data) {
        this.playlists.set(key, {
            data,
            timestamp: Date.now()
        });
    },
    
    get(key) {
        const cached = this.playlists.get(key);
        if (cached && (Date.now() - cached.timestamp) < CONFIG.CACHE_DURATION) {
            return cached.data;
        }
        this.playlists.delete(key);
        return null;
    },
    
    setPlaylistName(uid, name) {
        this.playlistNames.set(uid, name);
    },
    
    getPlaylistName(uid) {
        return this.playlistNames.get(uid);
    }
};

// 请求工具函数
async function fetchWithTimeout(url, options = {}) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), CONFIG.REQUEST_TIMEOUT);
    
    try {
        const response = await fetch(url, {
            ...options,
            signal: controller.signal
        });
        clearTimeout(timeoutId);
        return response;
    } catch (error) {
        clearTimeout(timeoutId);
        throw error;
    }
}

// 重试机制
async function fetchWithRetry(url, options = {}, retryCount = 0) {
    try {
        return await fetchWithTimeout(url, options);
    } catch (error) {
        if (retryCount < CONFIG.MAX_RETRY_COUNT) {
            console.warn(`请求失败，正在重试 (${retryCount + 1}/${CONFIG.MAX_RETRY_COUNT}):`, error.message);
            await new Promise(resolve => setTimeout(resolve, 1000 * (retryCount + 1))); // 递增延迟
            return fetchWithRetry(url, options, retryCount + 1);
        }
        throw error;
    }
}

// 防抖函数
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// DOM内容加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
    const musicImg = document.getElementById('music-img');
    const musicTitle = document.getElementById('music-title');
    const musicArtist = document.getElementById('music-artist');
    const musicAudio = document.getElementById('music-audio');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const progress = document.getElementById('progress');
    const timeDisplay = document.getElementById('time-display');
    const lyricsLine = document.getElementById('lyrics-line');
    const lyricsLineContainer = document.querySelector('.lyrics-line-container');
    const viewSongsBtn = document.getElementById('view-songs-btn');
    const songsModal = document.getElementById('songs-modal');
    const closeModalBtn = document.querySelector('.close');
    const songsList = document.getElementById('songs-list');
    const chartModal = document.getElementById('chart-modal');
    const playlistButtonsContainer = document.getElementById('playlist-buttons-container');
    const chartListBtn = document.getElementById('chart-list-btn');
    const closeModals = document.querySelectorAll('.close');
    const progressContainer = document.querySelector('.progress-container');

    // 悬浮歌词相关元素
    const floatingLyrics = document.getElementById('floating-lyrics');
    const floatingLyricsText = document.getElementById('floating-lyrics-text');
    const floatingLyricsClose = document.getElementById('floating-lyrics-close');

    // 悬浮歌词控制函数
    function showFloatingLyrics() {
        if (floatingLyrics) {
            floatingLyrics.classList.add('show');
        }
    }

    function hideFloatingLyrics() {
        if (floatingLyrics) {
            floatingLyrics.classList.remove('show');
        }
    }

    function updateFloatingLyrics(lyricsText) {
        if (floatingLyricsText) {
            floatingLyricsText.textContent = lyricsText || '暂无歌词';
        }
    }

    // 悬浮歌词关闭按钮事件
    if (floatingLyricsClose) {
        floatingLyricsClose.addEventListener('click', () => {
            hideFloatingLyrics();
        });
    }

    // 监听进度条点击事件，点击后跳转到相应位置
    progressContainer.addEventListener('click', (event) => {
        const progressWidth = progressContainer.clientWidth;
        const clickX = event.offsetX;
        const duration = musicAudio.duration;

        // 计算点击位置占总进度条的百分比
        const newTime = (clickX / progressWidth) * duration;
        musicAudio.currentTime = newTime; // 跳转到新的时间
    });

    // 监听拖动事件
    let isDragging = false; // 标记是否正在拖动

    // 鼠标按下时开始拖动
    progressContainer.addEventListener('mousedown', (event) => {
        isDragging = true;
        updateProgress(event); // 实时更新进度
    });

    // 鼠标移动时更新进度
    progressContainer.addEventListener('mousemove', (event) => {
        if (isDragging) {
            updateProgress(event); // 实时更新进度
        }
    });

    // 鼠标抬起时停止拖动
    document.addEventListener('mouseup', () => {
        isDragging = false;
    });

    // 更新进度函数
    function updateProgress(event) {
        const progressWidth = progressContainer.clientWidth;
        const clickX = event.offsetX;
        const duration = musicAudio.duration;

        const newTime = (clickX / progressWidth) * duration;
        musicAudio.currentTime = newTime; // 跳转到新的时间

        // 实时更新显示的进度条宽度
        const progressPercent = (musicAudio.currentTime / musicAudio.duration) * 100;
        progress.style.width = `${progressPercent}%`;

        // 更新时间显示
        const currentMinutes = Math.floor(musicAudio.currentTime / 60);
        const currentSeconds = Math.floor(musicAudio.currentTime % 60);
        const durationMinutes = Math.floor(musicAudio.duration / 60);
        const durationSeconds = Math.floor(musicAudio.duration % 60);

        const currentTimeDisplay = `${currentMinutes}:${currentSeconds < 10 ? '0' : ''}${currentSeconds}`;
        const durationTimeDisplay = `${durationMinutes}:${durationSeconds < 10 ? '0' : ''}${durationSeconds}`;

        timeDisplay.textContent = `${currentTimeDisplay} / ${durationTimeDisplay}`;
    }

    // 预加载所有歌单名称
    async function preloadPlaylistNames() {
        const promises = userIds.map(async (uid) => {
            // 检查缓存
            const cachedName = cache.getPlaylistName(uid);
            if (cachedName) {
                return { uid, name: cachedName };
            }

            try {
                const response = await fetchWithRetry(`${CONFIG.API_BASE_URL}/getPlaylistDetail.php?id=${uid}`);
                const data = await response.json();
                if (data.code === 200) {
                    const name = data.data.name;
                    cache.setPlaylistName(uid, name);
                    return { uid, name };
                } else {
                    console.error('获取歌单失败:', data.msg);
                    return { uid, name: `歌单 ${uid}` };
                }
            } catch (error) {
                console.error('请求出错:', error);
                return { uid, name: `歌单 ${uid}` };
            }
        });

        return Promise.all(promises);
    }

    // 优化后的动态生成歌单选择按钮
    async function populatePlaylistButtons() {
        // 显示加载状态
        playlistButtonsContainer.innerHTML = '<div class="loading-text">加载歌单中...</div>';
        
        try {
            const playlistData = await preloadPlaylistNames();
            playlistButtonsContainer.innerHTML = ''; // 清空加载提示

            playlistData.forEach(({ uid, name }) => {
                const button = document.createElement('button');
                button.classList.add('chart-btn');
                button.textContent = name;
                button.dataset.uid = uid;

                button.addEventListener('click', () => {
                    switchPlaylist(uid);
                    chartModal.style.display = 'none';
                });
                
                playlistButtonsContainer.appendChild(button);
            });
        } catch (error) {
            console.error('加载歌单失败:', error);
            playlistButtonsContainer.innerHTML = '<div class="error-text">加载失败，请重试</div>';
        }
    }

    async function fetchPlaylist() {
        try {
            // 检查缓存
            const cachedPlaylist = cache.get(`playlist_${currentUid}`);
            if (cachedPlaylist) {
                console.log('使用缓存的歌单数据');
                songs = cachedPlaylist.songs;
                if (songs.length > 0) {
                    loadMusic(songs[currentSongIndex]);
                }
                updateSongsList();
                return;
            }

            // 显示加载状态
            if (songsList) {
                songsList.innerHTML = '<li class="loading-item">加载歌单中...</li>';
            }

            const response = await fetchWithRetry(`${CONFIG.API_BASE_URL}/getPlaylistDetail.php?id=${currentUid}`);
            const data = await response.json();

            if (data.code === 200) {
                songs = data.data.songs;
                
                // 缓存歌单数据
                cache.set(`playlist_${currentUid}`, { songs });
                
                if (songs.length > 0) {
                    loadMusic(songs[currentSongIndex]);
                }
                updateSongsList();
            } else {
                console.error('获取歌单失败:', data.msg);
                if (songsList) {
                    songsList.innerHTML = '<li class="error-item">获取歌单失败，请重试</li>';
                }
            }
        } catch (error) {
            console.error('请求出错:', error);
            if (songsList) {
                songsList.innerHTML = '<li class="error-item">网络错误，请检查连接</li>';
            }
        }
    }

    // 添加函数级别的重试机制
    async function fetchMusicDetails(songId, retryCount = 0) {
        try {
            // 检查缓存
            const cachedDetails = cache.get(`music_${songId}`);
            if (cachedDetails) {
                console.log('使用缓存的音乐详情');
                return cachedDetails;
            }

            // 并发请求播放地址和歌曲信息
            const [vipResponse, detailResponse] = await Promise.all([
                fetchWithRetry(`${CONFIG.API_BASE_URL}/getMusicUrl.php?id=${songId}`),
                fetchWithRetry(`${CONFIG.API_BASE_URL}/getSongDetail.php?id=${songId}`)
            ]);

            const [vipData, detailData] = await Promise.all([
                vipResponse.json(),
                detailResponse.json()
            ]);

            if (vipData.code !== 200 || !vipData.data || vipData.data.length === 0) {
                // 如果获取播放地址失败，尝试重试整个函数
                if (retryCount < CONFIG.MAX_RETRY_COUNT) {
                    console.warn(`获取音乐播放地址失败，正在重试 (${retryCount + 1}/${CONFIG.MAX_RETRY_COUNT})`);
                    await new Promise(resolve => setTimeout(resolve, 1500 * (retryCount + 1))); // 递增延迟
                    return fetchMusicDetails(songId, retryCount + 1);
                }
                console.error('获取音乐播放地址失败');
                return null;
            }

            const url = vipData.data[0].url;
            let musicDetails;

            if (detailData.code !== 200) {
                console.error('获取歌曲信息失败:', detailData.message);
                musicDetails = {
                    url,
                    picurl: '',
                    name: '',
                    artistsname: ''
                };
            } else {
                musicDetails = {
                    url,
                    picurl: detailData.data.picimg || '',
                    name: detailData.data.name || '',
                    artistsname: detailData.data.singer || ''
                };
            }

            // 缓存音乐详情
            cache.set(`music_${songId}`, musicDetails);
            return musicDetails;

        } catch (error) {
            // 网络错误或其他异常时的重试机制
            if (retryCount < CONFIG.MAX_RETRY_COUNT) {
                console.warn(`请求出错，正在重试 (${retryCount + 1}/${CONFIG.MAX_RETRY_COUNT}):`, error.message);
                await new Promise(resolve => setTimeout(resolve, 1500 * (retryCount + 1))); // 递增延迟
                return fetchMusicDetails(songId, retryCount + 1);
            }
            console.error('请求达到最大重试次数后失败:', error);
            return null;
        }
    }

    async function fetchLyrics(songId) {
    try {
        const response = await fetch(`https://api.ksmlc.cn/wyy/getLyric.php?id=${songId}`);
        const data = await response.json();
        if (data.code === 200 && data.data && data.data.lrc) {
            return data.data.lrc;
        } else {
            console.error('获取歌词失败');
            return null;
        }
    } catch (error) {
        console.error('请求出错:', error);
        return null;
    }
}


    function parseLyrics(lyric) {
        const lines = lyric.split('\n');
        const parsedLyrics = [];
        for (let line of lines) {
            const timeEndIndex = line.indexOf(']');
            const time = line.substring(0, timeEndIndex + 1);
            const text = line.substring(timeEndIndex + 1).trim();
            if (time && text) {
                parsedLyrics.push({ time, text });
            }
        }
        return parsedLyrics;
    }

    function displayLyrics() {
        const initialLyrics = lyricsLines.length > 0 ? lyricsLines[0].text : '暂无歌词';
        lyricsLine.textContent = initialLyrics;
        updateFloatingLyrics(initialLyrics); // 同时更新悬浮歌词
        lyricsLineContainer.scrollTo({
            left: 0,
            top: 0,
            behavior: 'smooth'
        });
    }

    // 优化歌词更新，减少频繁的DOM操作
    let lastLyricsIndex = -1;
    function updateLyricsHighlight() {
        const currentTime = musicAudio.currentTime * 1000;
        for (let i = 0; i < lyricsLines.length; i++) {
            if (i === lyricsLines.length - 1 || currentTime < parseTime(lyricsLines[i + 1].time)) {
                // 只在歌词变化时更新DOM
                if (i !== lastLyricsIndex) {
                    const currentLyrics = lyricsLines[i].text;
                    lyricsLine.textContent = currentLyrics;
                    updateFloatingLyrics(currentLyrics);
                    lastLyricsIndex = i;
                }
                break;
            }
        }
    }

    function parseTime(timeString) {
        const minutes = parseInt(timeString.substring(1, 3));
        const seconds = parseFloat(timeString.substring(4, timeString.length - 1));
        return (minutes * 60 + seconds) * 1000;
    }

    function loadMusic(song) {
        if (!song || !song.id) {
            console.error('无效的歌曲数据:', song);
            return;
        }

        fetchMusicDetails(song.id).then(musicDetails => {
            if (!musicDetails) return;

            musicImg.src = musicDetails.picurl;
            musicTitle.textContent = musicDetails.name;
            musicArtist.textContent = musicDetails.artistsname;
            musicAudio.src = musicDetails.url;

            fetchLyrics(song.id).then(lyric => {
                if (lyric) {
                    lyricsLines = parseLyrics(lyric);
                    displayLyrics();
                } else {
                    lyricsLine.textContent = '暂无歌词';
                }
            }).catch(error => {
                lyricsLine.textContent = '歌词加载失败';
                console.error('歌词加载失败:', error);
            });

            // 自动播放逻辑（仅在用户已交互时触发）
            if (hasUserInteracted) {
                musicAudio.play().catch(error => {
                    console.log('自动播放被阻止');
                });
            }

            // 避免重复绑定事件监听器
            if (!musicAudio.hasAttribute('data-events-bound')) {
                musicAudio.addEventListener('play', () => {
                    playPauseBtn.innerHTML = '<img src="./images/icon/音乐暂停.svg" alt="暂停">';
                    showFloatingLyrics(); // 播放时显示悬浮歌词
                });
                musicAudio.addEventListener('pause', () => {
                    playPauseBtn.innerHTML = '<img src="./images/icon/音乐播放.svg" alt="播放">';
                    hideFloatingLyrics(); // 暂停时隐藏悬浮歌词
                });
                musicAudio.setAttribute('data-events-bound', 'true');
            }
        }).catch(error => {
            console.error('音乐详情加载失败:', error);
        });
    }

    closeModals.forEach(close => {
        close.addEventListener('click', () => {
            chartModal.style.display = 'none';
            songsModal.style.display = 'none';
        });
    });

    function playMusic() {
        musicAudio.play().then(() => {
            playPauseBtn.innerHTML = '<img src="./images/icon/音乐暂停.svg" alt="暂停">'; // 切换为暂停图标
        }).catch(error => {
            console.error('播放失败:', error);
        });
    }

    musicAudio.addEventListener('ended', () => {
        hideFloatingLyrics(); // 歌曲结束时隐藏悬浮歌词
        loadNextMusic();
    });


    function pauseMusic() {
        musicAudio.pause();
        playPauseBtn.innerHTML = '<img src="./images/icon/音乐播放.svg" alt="播放">'; // 切换为播放图标
    }

    // 修改切换歌曲的函数
    function loadNextMusic() {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        loadMusic(songs[currentSongIndex]);
        tryAutoPlay();
    }

    function loadPrevMusic() {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        loadMusic(songs[currentSongIndex]);
        tryAutoPlay();
    }

    // 新增自动播放尝试函数
    function tryAutoPlay() {
        if (hasUserInteracted) {
            musicAudio.play().catch(error => {
                console.log('切换自动播放失败');
            });
        }
    }

    function updateSongsList() {
        songsList.innerHTML = '';
        songs.forEach((song, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = song.name;
            listItem.classList.add('song-btn');
            listItem.setAttribute('data-index', index);
            songsList.appendChild(listItem);
        });
    }

    function switchPlaylist(newUid) {
        currentUid = newUid;
        fetchPlaylist(); // 重新加载新的歌单
    }

    viewSongsBtn.addEventListener('click', () => {
        updateSongsList();
        songsModal.style.display = 'block';
    });

    closeModalBtn.addEventListener('click', () => {
        songsModal.style.display = 'none';
    });
    window.addEventListener('click', (event) => {
        if (event.target === songsModal) {
            songsModal.style.display = 'none';
        }
        if (event.target === chartModal) {
            chartModal.style.display = 'none';
        }
    });

    // 修改歌曲列表点击事件
    songsList.addEventListener('click', (event) => {
        if (event.target.classList.contains('song-btn')) {
            const songIndex = event.target.getAttribute('data-index');
            currentSongIndex = parseInt(songIndex, 10);
            loadMusic(songs[currentSongIndex]);
            tryAutoPlay(); // 新增自动播放尝试
            songsModal.style.display = 'none';
        }
    });

    // 在全局区域添加交互状态标记
    let hasUserInteracted = false;

// 修改播放按钮点击事件
    playPauseBtn.addEventListener('click', () => {
        if (musicAudio.paused) {
            playMusic();
            hasUserInteracted = true; // 标记用户已交互
        } else {
            pauseMusic();
        }
    });

    prevBtn.addEventListener('click', () => {
        loadPrevMusic();
    });

    nextBtn.addEventListener('click', () => {
        loadNextMusic();
    });

    // 优化时间更新，使用配置常量和防抖
    let lastUpdateTime = 0;
    const updateTimeDisplay = debounce(() => {
        const progressPercent = (musicAudio.currentTime / musicAudio.duration) * 100;
        progress.style.width = `${progressPercent}%`;

        const currentMinutes = Math.floor(musicAudio.currentTime / 60);
        const currentSeconds = Math.floor(musicAudio.currentTime % 60);
        const durationMinutes = Math.floor(musicAudio.duration / 60);
        const durationSeconds = Math.floor(musicAudio.duration % 60);

        const currentTimeDisplay = `${currentMinutes}:${currentSeconds < 10 ? '0' : ''}${currentSeconds}`;
        const durationTimeDisplay = `${durationMinutes}:${durationSeconds < 10 ? '0' : ''}${durationSeconds}`;

        timeDisplay.textContent = `${currentTimeDisplay} / ${durationTimeDisplay}`;
    }, 100);

    musicAudio.addEventListener('timeupdate', () => {
        const now = Date.now();
        // 使用配置常量限制更新频率
        if (now - lastUpdateTime < CONFIG.UPDATE_INTERVAL) return;
        lastUpdateTime = now;

        updateTimeDisplay();
        updateLyricsHighlight();
    });

    // 初始化函数
    async function initialize() {
        // 预加载歌单名称（后台进行，不阻塞界面）
        preloadPlaylistNames().catch(error => {
            console.warn('预加载歌单名称失败:', error);
        });
        
        // 加载初始歌单
        await fetchPlaylist();
    }

    // 点击显示歌单选择模态框
    chartListBtn.addEventListener('click', () => {
        chartModal.style.display = 'block';
        populatePlaylistButtons(); // 动态生成歌单选择按钮
    });

    // 启动应用
    initialize();
});
