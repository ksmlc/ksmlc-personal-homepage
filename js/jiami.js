//右键
document.addEventListener("contextmenu", function (e) {
    // alert("为了页面美观所以禁掉了右键！");
    e.preventDefault();
});

//加载动画
// window.addEventListener("load", function() {
//     // 当所有资源加载完成后隐藏加载动画
//     document.getElementById("loading").style.display = "none";
// });

window.addEventListener("load", function () {
    // 当所有资源加载完成后隐藏加载动画
    hideLoading();
});

// 设置一个最大超时时间，例如 10 秒
setTimeout(function () {
    hideLoading();
}, 5000); // 5秒超时

// 隐藏加载动画的函数
function hideLoading() {
    const loadingElement = document.getElementById("loading");
    if (loadingElement) {
        loadingElement.style.display = "none";
    }
}

// 阻止 F12 键（开发者工具）的默认行为
document.onkeydown = function (e) {
    if (e.key === "F12") {
        e.preventDefault();
    }
};

//右键
//window.oncontextmenu = function() {
//    return false;
//}
//禁止任何键盘敲击事件（防止F12和shift+ctrl+i调起开发者工具） 
// window.onkeydown = window.onkeyup = window.onkeypress = function () {
//     window.event.returnValue = false;
//     return false;
// }

// 检测控制台打开
// function detectDevTools() {
//     const start = new Date()
//     debugger
//     const delta = new Date() - start
//     if (delta > 10) {
//         window.close();
//         alert('KS-MLC提醒您：请关闭控制台！')
//         window.location.href = "http://ksmlc.steam.cf/";
//
//     }
// }
// // 每500毫秒检测一次
// setInterval(detectDevTools, 500);

// 禁用快捷键
// 如果按下了 Control + Shift + I 或 Control + Shift + J，则禁止打开控制台
// document.addEventListener("keydown", function (e) {
//     if (e.key == "i" && e.ctrlKey && e.shiftKey || e.key == "j" && e.ctrlKey && e.shiftKey) {
//         e.preventDefault();
//     }
// });

//密码复制
// function copyPassword() {
//     let password = "ksmlc";
//     var tmpInput = document.createElement("input");
//     document.body.appendChild(tmpInput);
//     tmpInput.value = password;
//     tmpInput.select();
//     document.execCommand("copy");
//     tmpInput.remove();
//     alert("密码复制成功！" + password);
// }

// function copyText(text) {
//     var confirmed = confirm(text + "\n请确认是否复制？");
//     if (confirmed) {
//         prompt("请手动将以下内容复制：", text);
//         return true; // 防止链接跳转
//     } else {
//         return true; // 执行链接跳转
//     }
// }

//密码复制
//     function copyPassword() {
//     let password = "ksmlc";
//     var tmpInput = document.createElement("input");
//     document.body.appendChild(tmpInput);
//     tmpInput.value = password;
//     tmpInput.select();
//     document.execCommand("copy");
//     tmpInput.remove();
//     // alert("密码复制成功！" + password);
// }


//密码复制
//     function zhPassword() {
//     let password = "2331054132@qq.com";
//     var tmpInput = document.createElement("input");
//     document.body.appendChild(tmpInput);
//     tmpInput.value = password;
//     tmpInput.select();
//     document.execCommand("copy");
//     tmpInput.remove();
// }

//公告

