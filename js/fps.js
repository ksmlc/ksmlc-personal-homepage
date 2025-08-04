// var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
// if (!isMobile) {
//     var fpsDisplay = document.createElement("div");
//     fpsDisplay.style.position = "fixed", fpsDisplay.style.top = "10px", fpsDisplay.style.left = "10px", fpsDisplay.style.backgroundColor = "rgba(0,0,0,0)", fpsDisplay.style.color = "white", fpsDisplay.style.padding = "5px", document.body.appendChild(fpsDisplay);
//     var lastFrameTime = performance.now(), frameCount = 0;
//
//     function updateFPS() {
//         var currentFrameTime = performance.now(), fps, deltaTime = currentFrameTime - lastFrameTime;
//         frameCount++, deltaTime >= 1e3 && (fps = frameCount / deltaTime * 500, fpsDisplay.textContent = "FPS: " + fps.toFixed(2), lastFrameTime = currentFrameTime, frameCount = 0), requestAnimationFrame(updateFPS)
//     }
//
//     updateFPS()
// }

var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

if (!isMobile) {
    var fpsElement = document.createElement('div');
    fpsElement.id = 'fps';
    fpsElement.style.cssText = 'z-index: 10000; position: fixed; left: 0;';
    document.body.insertBefore(fpsElement, document.body.firstChild);

    var showFPS = (function () {
        var requestAnimationFrame = window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (callback) {
                window.setTimeout(callback, 1000 / 60);
            };

        var fps = 0,
            last = Date.now(),
            offset, step, appendFps;

        step = function () {
            offset = Date.now() - last;
            fps += 1;

            if (offset >= 1000) {
                last += offset;
                appendFps(fps);
                fps = 0;
            }

            requestAnimationFrame(step);
        };

        appendFps = function (fpsValue) {
            fpsElement.textContent = 'FPS: ' + fpsValue;
        };

        step();
    })();
}

