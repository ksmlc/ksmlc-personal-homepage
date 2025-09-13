// 切换指定元素上的指定类的函数
function toggleClass(selector, className) {
    var elements = document.querySelectorAll(selector);
    elements.forEach(function (element) {
        element.classList.toggle(className);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    var themeState = getCookie("themeState") || "Blue";
    function changeTheme(theme) {
        if (theme == "Dark") {
            document.body.classList.add("dark-theme");
            document.body.classList.remove("blue-theme");
        } else if (theme == "Blue") {
            document.body.classList.add("blue-theme");
            document.body.classList.remove("dark-theme");
        }
        setCookie("themeState", theme, 365);
    }

    // 设置 cookie 的函数
    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + value + expires + "; path=/";
    }
    // 获取 cookie 值的函数
    function getCookie(name) {
        var nameEQ = name + "=";
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i];
            while (cookie.charAt(0) == ' ') {
                cookie = cookie.substring(1, cookie.length);
            }
            if (cookie.indexOf(nameEQ) == 0) {
                return cookie.substring(nameEQ.length, cookie.length);
            }
        }
        return null;
    }
    // 初始化主题设置
    changeTheme(themeState);

    const switchCheckbox = document.getElementById('myonoffswitch');

    // 在夜晚自动切换到暗色主题
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    if (currentHour >= 18 || currentHour < 6) {
        switchCheckbox.checked = true; // 夜晚切换到暗色主题
        changeTheme("Dark");
    } else {
        switchCheckbox.checked = false;
        changeTheme("Blue"); // 如果不是夜晚，可以切换到亮色主题（根据需要修改）
    }


    // 主题切换复选框的监听器
    switchCheckbox.addEventListener('change', function () {
        if (switchCheckbox.checked) {
            // 夜间点击按钮切换到暗色主题
            changeTheme("Dark");
        } else {
            // 白天点击按钮切换到蓝色主题
            changeTheme("Blue");
        }
    });
    var projectItems = document.querySelectorAll(".projectItem");
    // 检查项目项是否在视口中并触发动画的函数
    function checkProjectItems() {
        // 使用 requestAnimationFrame 确保在下一帧进行检查
        requestAnimationFrame(function() {
            var windowHeight = window.innerHeight;

            for (var i = 0; i < projectItems.length; i++) {
                var projectItem = projectItems[i];
                var projectItemTop = projectItem.getBoundingClientRect().top;

                // 当项目项进入视口时添加类
                if (projectItemTop < windowHeight * 1.05) {
                    projectItem.classList.add("fade-in-visible");
                }
            }
        });
    }

    // 友情链接显示效果
    var friendItems = document.querySelectorAll(".friend_image-container");
    function checkFriendItems() {
        requestAnimationFrame(function() {
            var windowHeight = window.innerHeight;
            friendItems.forEach(function(friendItem, index) {
                var rect = friendItem.getBoundingClientRect();
                if (rect.top < windowHeight * 0.9) {
                    setTimeout(function () {
                        friendItem.classList.add("load-animate");
                    }, index * 150); // 每个图标延迟 150ms 出现
                }
            });
        });
    }

    // 滚动和调整大小的事件监听器以检查项目项
    window.addEventListener("scroll", checkProjectItems);
    window.addEventListener("resize", checkProjectItems);
    // 友情链接显示效果
    window.addEventListener("scroll", checkFriendItems);
    window.addEventListener("resize", checkFriendItems);

// 初始检查项目项可见性
    checkProjectItems();
});

// 双击翻译
var translationVisible = {
    personal_career: false, //个人职业
    famous_saying: false,   //名言
    Name_Meaning: false,    //名字含义
    WebSite: false,     //网站
    Projects: false,    //项目
    skills: false,      //技能
    friend: false,  //友情链接
    Left_famous_saying:false,    //左边名言
};

function toggleTranslation(type) {
    var description = document.querySelector('.' + type + '-description');
    var translatedDescription = document.querySelector('.translated-' + type + '-description');

    // 检查元素是否在DOM中找到
    if (description && translatedDescription) {
        // 切换显示属性
        if (translationVisible[type]) {
            description.style.display = 'block';
            translatedDescription.style.display = 'none';
        } else {
            description.style.display = 'none';
            translatedDescription.style.display = 'block';
        }

        // 切换可见状态
        translationVisible[type] = !translationVisible[type];
    } else {
        console.error('在DOM中找不到元素');
    }
}

// 控制台样式
var console_displays = [
    "padding: 5px 10px; border-radius: 5px 0 0 5px; background-color: #8b52ec; font-weight: bold;",
    "padding: 5px 10px; border-radius: 0 5px 5px 0; background-color: #a17eff; font-weight: bold;"
];

// 输出 KS-MLC
console.log("%cKS-MLC%chttps://ksmlc.cn/", console_displays[0], console_displays[1]);


// 阻止没有链接地址的元素点击时的默认行为
document.querySelectorAll('.friend-link.no-link').forEach(function(element) {
    element.addEventListener('click', function(event) {
        event.preventDefault(); // 阻止默认行为
    });
});

//双击ip地址跳转查询
document.addEventListener('DOMContentLoaded', function() {
    var ipAddressElement = document.getElementById('ipAddress');

    // 添加双击事件监听器
    ipAddressElement.addEventListener('dblclick', function() {
        var ipAddress = ipAddressElement.innerText.trim();
        // 构造跳转链接
        var redirectUrl = 'https://ip.900cha.com/' + ipAddress + '.html';
        // 在新窗口中打开链接
        window.open(redirectUrl, '_blank');
    });
});

// 赞助弹窗
// function SponsorshipPopup() {
//     swal({
//         text: "以代码形式展示我所热爱！",
//     });
// }

// 运行天数弹窗
function Running_days() {
    swal({
        text: "本站(此版本源码)已运行 " + sourceCodeDays + " 天 \n ksmlc.cn域名已注册 " + domainNameDays + " 天 \n 踏入编程开发已有 ≈ " + ksmlcDays
    });
}

/*QQ微信弹窗图片框*/
function popupImg(icon) {
    var popup = document.getElementById('popup');
    var popupImg = document.getElementById('popup-img');

    if (icon === 'wx') {
        popupImg.src = 'images/QR_Code/wx.png';
    } else if (icon === 'qq') {
        popupImg.src = 'images/QR_Code/qq.jpg';
    }

    popup.style.display = 'flex';
}

/*QQ微信弹窗*/
function showContactPopup() {
    swal({
        text: "嘻嘻，你被骗了，这啥也没有！",
    });
}

function hidePopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'none';
}

// 随机一言弹窗
function copyText() {
    var sloganText = document.getElementById('slogan').innerText;

    var tempTextArea = document.createElement('textarea');
    tempTextArea.value = sloganText;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);

    swal({
        text: "已复制：" + sloganText,
        icon: "success",
        buttons: false,
        timer: 2000,
    });
}


// 音乐播放器
const uid1 = 5157485399; // ksmlc
const uid2 = 19723756; // 飙升榜
const uid3 = 7785066739; // 黑胶VIP热歌榜
const uid4 = 3779629; // 新歌榜
const uid5 = 3778678; // 热歌榜
const userIds = [uid1,uid2,uid3,uid4,uid5]; // 用户 ID 列表
let currentUid = uid1; // 当前歌单用户ID
let currentSongIndex = 0;
let songs = [];
let lyricsLines = [];

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

    // 动态生成歌单选择按钮
    async function populatePlaylistButtons() {
        playlistButtonsContainer.innerHTML = ''; // 清空现有按钮
        for (let uid of userIds) {
            const button = document.createElement('button');
            button.classList.add('chart-btn');
            button.textContent = `歌单 ${uid}`; // 按钮上显示"歌单 {uid}"
            button.dataset.uid = uid; // 存储用户 ID

            // 获取歌单名称并在模态框的按钮中显示
            try {
                const response = await fetch(`https://node.api.xfabe.com/api/wangyi/userSongs?uid=${uid}&limit=1`);
                const data = await response.json();
                if (data.code === 200) {
                    const songName = data.data.songName;
                    button.textContent = songName; // 按钮显示歌单名称
                } else {
                    console.error('获取歌单失败:', data.msg);
                }
            } catch (error) {
                console.error('请求出错:', error);
            }

            button.addEventListener('click', () => {
                switchPlaylist(uid);
                chartModal.style.display = 'none';
            });
            playlistButtonsContainer.appendChild(button);
        }
    }

    async function fetchPlaylist() {
        try {
            const response = await fetch(`https://node.api.xfabe.com/api/wangyi/userSongs?uid=${currentUid}&limit=200`);
            const data = await response.json();

            if (data.code === 200) {
                songs = data.data.songs;
                if (songs.length > 0) {
                    loadMusic(songs[currentSongIndex]); // 加载第一首歌
                }
                updateSongsList();
            } else {
                console.error('获取歌单失败:', data.msg);
            }
        } catch (error) {
            console.error('请求出错:', error);
        }
    }

    async function fetchMusicDetails(songId) {
        try {
            const response = await fetch(`https://node.api.xfabe.com/api/wangyi/music?type=json&id=${songId}`);
            const data = await response.json();
            if (data.code === 200) {
                return data.data;
            } else {
                console.error('获取音乐详情失败:', data.msg);
                return null;
            }
        } catch (error) {
            console.error('请求出错:', error);
            return null;
        }
    }

    async function fetchLyrics(songId) {
        try {
            const response = await fetch(`https://node.api.xfabe.com/api/wangyi/lyrics?id=${songId}`);
            const data = await response.json();
            if (data.code === 200) {
                return data.data.lyric;
            } else {
                console.error('获取歌词失败:', data.msg);
                return null;
            }
        } catch (error) {
            console.error('获取歌词时出错:', error);
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

            // 事件监听保持原有逻辑
            musicAudio.addEventListener('play', () => {
                playPauseBtn.innerHTML = '<img src="./images/icon/音乐暂停.svg" alt="暂停">';
                showFloatingLyrics(); // 播放时显示悬浮歌词
            });
            musicAudio.addEventListener('pause', () => {
                playPauseBtn.innerHTML = '<img src="./images/icon/音乐播放.svg" alt="播放">';
                hideFloatingLyrics(); // 暂停时隐藏悬浮歌词
            });
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

    // 优化时间更新，降低更新频率
    let lastUpdateTime = 0;
    musicAudio.addEventListener('timeupdate', () => {
        const now = Date.now();
        // 限制更新频率为每200ms一次
        if (now - lastUpdateTime < 200) return;
        lastUpdateTime = now;

        const progressPercent = (musicAudio.currentTime / musicAudio.duration) * 100;
        progress.style.width = `${progressPercent}%`;

        const currentMinutes = Math.floor(musicAudio.currentTime / 60);
        const currentSeconds = Math.floor(musicAudio.currentTime % 60);
        const durationMinutes = Math.floor(musicAudio.duration / 60);
        const durationSeconds = Math.floor(musicAudio.duration % 60);

        const currentTimeDisplay = `${currentMinutes}:${currentSeconds < 10 ? '0' : ''}${currentSeconds}`;
        const durationTimeDisplay = `${durationMinutes}:${durationSeconds < 10 ? '0' : ''}${durationSeconds}`;

        timeDisplay.textContent = `${currentTimeDisplay} / ${durationTimeDisplay}`;

        updateLyricsHighlight();
    });

    // 点击显示歌单选择模态框
    chartListBtn.addEventListener('click', () => {
        chartModal.style.display = 'block';
        populatePlaylistButtons(); // 动态生成歌单选择按钮
    });

    // 加载初始歌单
    fetchPlaylist();
});


//项目链接没有就弹窗
function showNeumorphicAlert(message) {
    swal({
        text: message,
    });
}

// 公告
// const notice = document.querySelector(".notice");
// const notices = document.querySelectorAll(".notice-item");
// let currentIndex = 0;
//
// function switchNotice() {
//     currentIndex = (currentIndex + 1) % notices.length;
//     const offset = -currentIndex * 50;
//     notice.style.transform = `translateY(${offset}px)`;
// }
//
// // 每1.5秒切换一次
// setInterval(switchNotice, 3000);


