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

// 输出控制台log
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
    showCustomAlert("本站(此版本源码)已运行 " + sourceCodeDays + " 天 \n ksmlc.cn 域名已注册 " + domainNameDays + " 天 \n ksmlc已创建 " + ksmlcDays + " 天");
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
    showCustomAlert("嘻嘻，你被骗了，这啥也没有！");
}

function hidePopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'none';
}

// 自定义弹窗函数
function showCustomAlert(message, type = 'info') {
    // 创建弹窗容器
    const alertOverlay = document.createElement('div');
    alertOverlay.className = 'custom-alert-overlay';

    // 创建弹窗内容
    const alertBox = document.createElement('div');
    alertBox.className = `custom-alert-box ${type}`;

    // 添加图标
    let icon = '';
    switch(type) {
        case 'success':
            icon = '✓';
            break;
        case 'error':
            icon = '✗';
            break;
        case 'warning':
            icon = '⚠';
            break;
        default:
            icon = 'ℹ';
    }

    // 设置弹窗内容
    alertBox.innerHTML = `
        <div class="custom-alert-icon">${icon}</div>
        <div class="custom-alert-message">${message.replace(/\n/g, '<br>')}</div>
        <button class="custom-alert-close" onclick="closeCustomAlert()">确定</button>
    `;

    alertOverlay.appendChild(alertBox);
    document.body.appendChild(alertOverlay);

    // 显示动画
    setTimeout(() => {
        alertOverlay.classList.add('show');
    }, 10);

    // 存储当前弹窗引用
    window.currentAlert = alertOverlay;
}

// 关闭自定义弹窗
function closeCustomAlert() {
    if (window.currentAlert) {
        window.currentAlert.classList.remove('show');
        setTimeout(() => {
            if (window.currentAlert && window.currentAlert.parentNode) {
                document.body.removeChild(window.currentAlert);
            }
            window.currentAlert = null;
        }, 300);
    }
}

// 点击遮罩层关闭弹窗
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('custom-alert-overlay')) {
        closeCustomAlert();
    }
});

// 处理技能点击事件
function handleSkillClick(skill) {
    // 检查是否为链接
    const urlPattern = /^(https?:\/\/|www\.|[a-zA-Z0-9-]+\.[a-zA-Z]{2,})/i;

    if (urlPattern.test(skill)) {
        // 如果是链接，直接打开
        let url = skill;
        // 如果没有协议，添加 https://
        if (!skill.startsWith('http://') && !skill.startsWith('https://')) {
            url = 'https://' + skill;
        }
        window.open(url, '_blank', 'noopener,noreferrer');
    } else {
        // 如果不是链接，使用浏览器默认搜索
        // 构造搜索查询，让浏览器使用默认搜索引擎
        const searchQuery = encodeURIComponent(skill);

        // 尝试使用浏览器的搜索功能
        // 方法1：使用 window.find() 或者构造一个搜索URL让浏览器处理
        try {
            // 创建一个搜索链接，浏览器会使用默认搜索引擎
            const searchUrl = `https://cn.bing.com/search?form=bing&q=${searchQuery}`;
            window.open(searchUrl, '_blank', 'noopener,noreferrer');
        } catch (error) {
            // 备用方案：显示提示让用户手动搜索
            showCustomAlert(`请在浏览器中搜索：${skill}`);
        }
    }
}

// 随机一言弹窗
function copyText() {
    var sloganText = document.getElementById('slogan').innerText;

    // 使用现代的 Clipboard API
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(sloganText).then(() => {
            showCustomAlert("已复制：" + sloganText, "success");
        }).catch(() => {
            fallbackCopyText(sloganText);
        });
    } else {
        fallbackCopyText(sloganText);
    }
}

// 备用复制方法
function fallbackCopyText(text) {
    var tempTextArea = document.createElement('textarea');
    tempTextArea.value = text;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);
    showCustomAlert("已复制：" + text, "success");
}

//项目链接没有就弹窗
function showNeumorphicAlert(message) {
    showCustomAlert(message);
}

// 磁性吸附效果
function initMagneticEffect() {
    const projectItems = document.querySelectorAll('.projectItem');

    projectItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.classList.add('magnetic');
        });

        item.addEventListener('mouseleave', function() {
            this.classList.remove('magnetic');
            this.style.transform = '';
        });

        item.addEventListener('mousemove', function(e) {
            if (!this.classList.contains('magnetic')) return;

            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const deltaX = (x - centerX) / centerX;
            const deltaY = (y - centerY) / centerY;

            const maxMove = 8;
            const moveX = deltaX * maxMove;
            const moveY = deltaY * maxMove;

            this.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.02)`;
        });
    });
}

// 波浪动画效果
function initWaveAnimation() {
    const projectItems = document.querySelectorAll('.projectItem');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('wave-animate');
                }, index * 100);
            }
        });
    }, {
        threshold: 0.1
    });

    projectItems.forEach(item => {
        observer.observe(item);
    });
}

// 页面加载完成后初始化效果
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        initMagneticEffect();
        initWaveAnimation();
    }, 1000);
});

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


