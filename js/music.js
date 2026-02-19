// 配置常量
const CONFIG = {
    API_BASE_URL: 'https://api.ksmlc.cn/wyy',
    UPDATE_INTERVAL: 200, // 进度更新间隔(ms)
    CACHE_DURATION: 5 * 60 * 1000, // 缓存时长(5分钟)
    REQUEST_TIMEOUT: 10000, // 请求超时时间(10秒)
    MAX_RETRY_COUNT: 3, // 最大重试次数
    STORAGE_KEY: 'music_player_state' // 本地存储键名
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
let playMode = 'list-loop'; // 播放模式: list-loop, single-loop, random

const PLAY_MODES = {
    LIST_LOOP: 'list-loop',
    SINGLE_LOOP: 'single-loop',
    RANDOM: 'random'
};

const MODE_ICONS = {
    'list-loop': '🔁',
    'single-loop': '🔂',
    'random': '🔀'
};

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

// 本地存储管理（用于记忆播放状态）
const storageManager = {
    // 保存播放状态
    savePlayerState(state) {
        try {
            localStorage.setItem(CONFIG.STORAGE_KEY, JSON.stringify(state));
            console.log('播放状态已保存');
        } catch (error) {
            console.error('保存播放状态失败:', error);
        }
    },
    
    // 获取播放状态
    getPlayerState() {
        try {
            const savedState = localStorage.getItem(CONFIG.STORAGE_KEY);
            return savedState ? JSON.parse(savedState) : null;
        } catch (error) {
            console.error('获取播放状态失败:', error);
            return null;
        }
    },
    
    // 清除播放状态
    clearPlayerState() {
        try {
            localStorage.removeItem(CONFIG.STORAGE_KEY);
            console.log('播放状态已清除');
        } catch (error) {
            console.error('清除播放状态失败:', error);
        }
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
    const playModeBtn = document.getElementById('play-mode-btn');
    const playModeIcon = document.getElementById('play-mode-icon');
    const progress = document.getElementById('progress');
    const timeDisplay = document.getElementById('time-display');
    const lyricsLine = document.getElementById('lyrics-line');
    const lyricsLineContainer = document.querySelector('.lyrics-line-container');
    const viewSongsBtn = document.getElementById('view-songs-btn');
    const songsModal = document.getElementById('songs-modal');
    const closeModalBtn = document.querySelector('.close');
    const songsList = document.getElementById('songs-list');
    const songSearchInput = document.getElementById('song-search-input');
    const playlistSelector = document.getElementById('playlist-selector');

    const closeModals = document.querySelectorAll('.close');
    const progressContainer = document.querySelector('.progress-container');

    // 悬浮歌词相关元素
    const floatingLyrics = document.getElementById('floating-lyrics');
    const floatingLyricsText = document.getElementById('floating-lyrics-text');
    const floatingLyricsClose = document.getElementById('floating-lyrics-close');
    const visualizerCanvas = document.getElementById('audio-visualizer');

    // 音频可视化相关变量
    let audioContext;
    let analyser;
    let source;
    let animationId;
    let isVisualizerInitialized = false;

    // 初始化音频可视化
    function initVisualizer() {
        if (isVisualizerInitialized) {
            if (audioContext && audioContext.state === 'suspended') {
                audioContext.resume();
            }
            return;
        }
        
        try {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
            analyser = audioContext.createAnalyser();
            
            // 确保跨域属性
            if (!musicAudio.crossOrigin) {
                musicAudio.crossOrigin = "anonymous";
            }
            
            source = audioContext.createMediaElementSource(musicAudio);
            
            source.connect(analyser);
            analyser.connect(audioContext.destination);
            
            analyser.fftSize = 256;
            isVisualizerInitialized = true;
            
            renderVisualizer();
            
            if (audioContext.state === 'suspended') {
                audioContext.resume();
            }
        } catch (error) {
            console.error('初始化音频可视化失败:', error);
        }
    }

    function renderVisualizer() {
        if (!visualizerCanvas || !analyser) return;
        
        const ctx = visualizerCanvas.getContext('2d');
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        
        function draw() {
            animationId = requestAnimationFrame(draw);
            analyser.getByteFrequencyData(dataArray);
            
            // 动态获取画布尺寸
            const width = visualizerCanvas.width = visualizerCanvas.clientWidth;
            const height = visualizerCanvas.height = visualizerCanvas.clientHeight;
            
            ctx.clearRect(0, 0, width, height);
            
            const barWidth = (width / bufferLength) * 2.5;
            let barHeight;
            let x = 0;
            
            // 获取当前主题色
            const isBlueTheme = document.body.classList.contains('blue-theme');
            const barColor = isBlueTheme ? 'rgba(218, 165, 32, 0.4)' : 'rgba(147, 112, 219, 0.4)';
            
            for (let i = 0; i < bufferLength; i++) {
                barHeight = (dataArray[i] / 255) * height * 0.8;
                
                ctx.fillStyle = barColor;
                // 绘制圆角矩形或简单的条形
                ctx.fillRect(x, height - barHeight, barWidth - 1, barHeight);
                
                x += barWidth;
            }
        }
        
        draw();
    }

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



    async function populatePlaylistSelector() {
        if (!playlistSelector) return;
        
        try {
            const playlistData = await preloadPlaylistNames();
            // 清空现有选项（保留第一个占位符）
            playlistSelector.innerHTML = '<option value="" disabled>选择歌单...</option>';
            
            playlistData.forEach(({ uid, name }) => {
                const option = document.createElement('option');
                option.value = uid;
                option.textContent = name;
                if (uid === currentUid) {
                    option.selected = true;
                }
                playlistSelector.appendChild(option);
            });
        } catch (error) {
            console.error('填充歌单选择器失败:', error);
        }
    }

    // 歌单下拉框切换事件
    if (playlistSelector) {
        playlistSelector.addEventListener('change', (e) => {
            const newUid = e.target.value;
            if (newUid && newUid !== currentUid) {
                switchPlaylist(newUid);
            }
        });
    }

    // 修改 fetchPlaylist 为异步函数，以便 await
    async function fetchPlaylist() {
        try {
            const cachedPlaylist = cache.get(`playlist_${currentUid}`);
            if (cachedPlaylist) {
                songs = cachedPlaylist.songs;
                updateSongsList();
                return;
            }

            if (songsList) {
                songsList.innerHTML = '<li class="loading-item">加载歌单中...</li>';
            }

            const response = await fetchWithRetry(`${CONFIG.API_BASE_URL}/getPlaylistDetail.php?id=${currentUid}`);
            const data = await response.json();

            if (data.code === 200) {
                songs = data.data.songs;
                cache.set(`playlist_${currentUid}`, { songs });
                updateSongsList();
            }
        } catch (error) {
            console.error('请求出错:', error);
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

    // 保存当前播放状态
    function saveCurrentState() {
        // 只有在有歌曲播放时才保存状态
        if (songs.length > 0 && currentSongIndex >= 0 && currentSongIndex < songs.length) {
            const currentSong = songs[currentSongIndex];
            const state = {
                currentUid,
                currentSongIndex,
                songId: currentSong.id,
                currentTime: musicAudio.currentTime,
                isPlaying: !musicAudio.paused,
                playMode: playMode,
                timestamp: Date.now()
            };
            storageManager.savePlayerState(state);
        }
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
            
            // 重要：先设置 crossOrigin，再设置 src
            musicAudio.crossOrigin = "anonymous";
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
                musicAudio.play().then(() => {
                    showFloatingLyrics(); // 自动播放成功后显示悬浮歌词
                }).catch(error => {
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
            songsModal.style.display = 'none';
        });
    });

    function playMusic() {
        musicAudio.play().then(() => {
            playPauseBtn.innerHTML = '<img src="./images/icon/音乐暂停.svg" alt="暂停">'; // 切换为暂停图标
            showFloatingLyrics(); // 确保点击播放时显示悬浮歌词
        }).catch(error => {
            console.error('播放失败:', error);
        });
    }

    musicAudio.addEventListener('ended', () => {
        hideFloatingLyrics(); // 歌曲结束时隐藏悬浮歌词
        // 歌曲播放结束后保存状态
        saveCurrentState();
        
        if (playMode === PLAY_MODES.SINGLE_LOOP) {
            loadMusic(songs[currentSongIndex]);
            tryAutoPlay();
        } else {
            loadNextMusic();
        }
    });


    function pauseMusic() {
        musicAudio.pause();
        playPauseBtn.innerHTML = '<img src="./images/icon/音乐播放.svg" alt="播放">'; // 切换为播放图标
    }

    // 修改切换歌曲的函数
    function loadNextMusic() {
        saveCurrentState(); // 切换歌曲前保存当前状态
        
        if (playMode === PLAY_MODES.RANDOM) {
            currentSongIndex = Math.floor(Math.random() * songs.length);
        } else {
            currentSongIndex = (currentSongIndex + 1) % songs.length;
        }
        
        loadMusic(songs[currentSongIndex]);
        tryAutoPlay();
    }

    function loadPrevMusic() {
        saveCurrentState(); // 切换歌曲前保存当前状态
        
        if (playMode === PLAY_MODES.RANDOM) {
            currentSongIndex = Math.floor(Math.random() * songs.length);
        } else {
            currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        }
        
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

    function updateSongsList(filterText = '') {
        songsList.innerHTML = '';
        const filteredSongs = songs.filter(song => {
            const searchStr = filterText.toLowerCase();
            return song.name.toLowerCase().includes(searchStr) || 
                   (song.singer && song.singer.toLowerCase().includes(searchStr));
        });

        if (filteredSongs.length === 0) {
            songsList.innerHTML = '<li class="no-results">未找到相关歌曲</li>';
            return;
        }

        filteredSongs.forEach((song) => {
            // 在原始 songs 数组中查找真实的索引，以确保点击播放正确
            const originalIndex = songs.findIndex(s => s.id === song.id);
            const listItem = document.createElement('li');
            listItem.textContent = song.name;
            listItem.classList.add('song-btn');
            listItem.setAttribute('data-index', originalIndex);
            songsList.appendChild(listItem);
        });
    }

    // 搜索框输入事件
    if (songSearchInput) {
        songSearchInput.addEventListener('input', (e) => {
            updateSongsList(e.target.value);
        });
    }

    // 更新播放模式图标
    function updatePlayModeIcon() {
        if (!playModeBtn || !playModeIcon) return;
        
        let iconSrc = '';
        let title = '';
        
        switch (playMode) {
            case PLAY_MODES.LIST_LOOP:
                iconSrc = './images/icon/循环播放.svg';
                title = '列表循环';
                break;
            case PLAY_MODES.SINGLE_LOOP:
                iconSrc = './images/icon/单曲循环.svg';
                title = '单曲循环';
                break;
            case PLAY_MODES.RANDOM:
                iconSrc = './images/icon/随机播放.svg';
                title = '随机播放';
                break;
        }
        
        playModeIcon.src = iconSrc;
        playModeBtn.title = title;
    }

    // 切换播放模式
    function switchPlayMode() {
        const modes = Object.values(PLAY_MODES);
        const currentIndex = modes.indexOf(playMode);
        playMode = modes[(currentIndex + 1) % modes.length];
        updatePlayModeIcon();
        saveCurrentState();
        
        // 提示当前模式
        const modeNames = {
            'list-loop': '列表循环',
            'single-loop': '单曲循环',
            'random': '随机播放'
        };
        console.log('播放模式已切换为:', modeNames[playMode]);
    }

    // 播放模式按钮点击事件
    if (playModeBtn) {
        playModeBtn.addEventListener('click', switchPlayMode);
    }

    function switchPlaylist(newUid) {
        saveCurrentState(); // 切换歌单前保存当前状态
        currentUid = newUid;
        if (playlistSelector) playlistSelector.value = newUid;
        fetchPlaylist();
    }

    viewSongsBtn.addEventListener('click', () => {
        if (songSearchInput) songSearchInput.value = ''; // 打开时清空搜索框
        if (playlistSelector) playlistSelector.value = currentUid; // 同步当前歌单
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
            saveCurrentState(); // 切换歌曲前保存当前状态
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
            startAutoSave(); // 开始自动保存
            initVisualizer(); // 交互后初始化音频可视化
        } else {
            pauseMusic();
            saveCurrentState(); // 暂停时立即保存
            stopAutoSave(); // 停止自动保存
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

    // 尝试恢复上次播放状态
    async function restorePlayerState() {
        const savedState = storageManager.getPlayerState();
        if (!savedState) {
            console.log('没有找到保存的播放状态');
            return false;
        }
        
        try {
            console.log('尝试恢复播放状态:', savedState);
            
            // 0. 恢复播放模式
            if (savedState.playMode) {
                playMode = savedState.playMode;
                updatePlayModeIcon();
            }

            // 1. 如果保存的歌单ID不同，先切换并等待歌单数据加载
            if (savedState.currentUid && savedState.currentUid !== currentUid) {
                currentUid = savedState.currentUid;
                if (playlistSelector) playlistSelector.value = currentUid;
                await fetchPlaylist(); // 确保歌单数据加载完成
            }
            
            // 2. 校验歌曲索引有效性
            if (songs.length > 0 && 
                savedState.currentSongIndex !== undefined && 
                savedState.currentSongIndex >= 0 && 
                savedState.currentSongIndex < songs.length) {
                
                // 校验歌曲ID是否匹配，如果不匹配则搜索正确索引
                let targetIndex = savedState.currentSongIndex;
                if (savedState.songId && songs[targetIndex].id !== savedState.songId) {
                    const foundIndex = songs.findIndex(s => s.id === savedState.songId);
                    if (foundIndex !== -1) {
                        targetIndex = foundIndex;
                    }
                }

                currentSongIndex = targetIndex;
                const song = songs[currentSongIndex];

                // 3. 加载歌曲详情并恢复进度
                const musicDetails = await fetchMusicDetails(song.id);
                if (!musicDetails) return false;

                // 更新界面
                musicImg.src = musicDetails.picurl;
                musicTitle.textContent = musicDetails.name;
                musicArtist.textContent = musicDetails.artistsname;
                
                // 重要：先设置 crossOrigin，再设置 src，否则 Web Audio API 会静音
                musicAudio.crossOrigin = "anonymous";
                musicAudio.src = musicDetails.url;

                // 加载歌词
                fetchLyrics(song.id).then(lyric => {
                    if (lyric) {
                        lyricsLines = parseLyrics(lyric);
                        displayLyrics();
                    }
                });

                // 4. 设置进度和播放状态
                const setProgress = () => {
                    return new Promise((resolve) => {
                        const onLoaded = () => {
                            if (savedState.currentTime) {
                                musicAudio.currentTime = savedState.currentTime;
                            }
                            musicAudio.removeEventListener('loadedmetadata', onLoaded);
                            resolve();
                        };
                        musicAudio.addEventListener('loadedmetadata', onLoaded);
                        // 如果已经加载完成，手动触发
                        if (musicAudio.readyState >= 1) onLoaded();
                    });
                };

                await setProgress();

                // 5. 恢复播放状态 (需要用户点击后才能真正播放，这里标记状态)
                if (savedState.isPlaying) {
                    // 标记用户交互，尝试恢复自动播放
                    // 注意：由于浏览器限制，静默加载后直接 play() 可能会失败
                    console.log('准备恢复播放...');
                    showFloatingLyrics(); // 恢复播放状态时显示悬浮歌词
                    // 如果有自动播放逻辑，也尝试初始化
                    document.addEventListener('click', initVisualizer, { once: true });
                }

                return true;
            }
            return false;
        } catch (error) {
            console.error('恢复播放状态失败:', error);
            return false;
        }
    }
    
    // 切换歌单并等待加载完成
    async function switchPlaylistAndWait(newUid) {
        currentUid = newUid;
        if (playlistSelector) playlistSelector.value = newUid;
        return fetchPlaylist();
    }
    
    // 初始化函数
    async function initialize() {
        // 预加载歌单名称（后台进行，不阻塞界面）
        preloadPlaylistNames().then(() => {
            populatePlaylistSelector();
        }).catch(error => {
            console.warn('预加载歌单名称失败:', error);
        });
        
        // 加载初始歌单
        await fetchPlaylist();
        
        // 尝试恢复播放状态
        await restorePlayerState().catch(error => {
            console.error('恢复播放状态失败:', error);
        });
    }
    
    // 添加定期保存播放进度的机制
    let saveInterval;
    function startAutoSave() {
        // 每10秒自动保存一次播放进度
        saveInterval = setInterval(() => {
            if (musicAudio && !musicAudio.paused) {
                saveCurrentState();
            }
        }, 10000);
    }
    
    function stopAutoSave() {
        if (saveInterval) {
            clearInterval(saveInterval);
        }
    }



    // 监听页面关闭或刷新事件，保存播放状态
    window.addEventListener('beforeunload', () => {
        saveCurrentState();
    });
    
    // 启动应用
    initialize();
});
