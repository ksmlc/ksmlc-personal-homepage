var CURSOR;

// 线性插值函数
Math.lerp = (a, b, n) => (1 - n) * a + n * b;

// 获取元素样式，改进错误处理
const getStyle = (el, attr) => {
    try {
        return window.getComputedStyle ? window.getComputedStyle(el)[attr] : el.currentStyle[attr];
    } catch (error) {
        console.warn('Error getting style:', error);
        return "";
    }
};

class Cursor {
    constructor(options = {}) {
        // 配置选项
        this.config = {
            lerpSpeed: 0.15,
            offset: 8,
            cursorId: 'cursor',
            hiddenClass: 'hidden',
            hoverClass: 'hover',
            activeClass: 'active'
        };

        // 合并用户配置
        Object.assign(this.config, options);

        // 状态属性
        this.pos = { curr: null, prev: null };
        this.pt = [];
        this.cursor = null;
        this.observer = null;
        this.animationId = null;

        // 事件处理器引用，用于后续移除
        this.eventHandlers = {};

        // 初始化
        this.create();
        this.init();
        this.render();
    }

    // 移动光标
    move(left, top) {
        if (this.cursor) {
            this.cursor.style.left = `${left}px`;
            this.cursor.style.top = `${top}px`;
        }
    }

    // 创建光标元素和初始化指针元素检测
    create() {
        // 创建光标元素
        if (!this.cursor) {
            this.cursor = document.createElement("div");
            this.cursor.id = this.config.cursorId;
            this.cursor.classList.add(this.config.hiddenClass);
            document.body.append(this.cursor);
        }

        // 更新指针元素列表
        this.updatePointerElements();

        // 使用 MutationObserver 监听 DOM 变化
        this.observer = new MutationObserver(() => {
            this.updatePointerElements();
        });

        this.observer.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['style', 'class']
        });
    }

    // 更新指针元素列表
    updatePointerElements() {
        // 使用更高效的选择器查询指针元素
        const pointerElements = document.querySelectorAll(
            "[style*='cursor: pointer'], [style*='cursor:pointer'], .cursor-pointer, button, a, [onclick], [role='button'], [tabindex]:not([tabindex='-1'])"
        );
        this.pt = Array.from(pointerElements).map(el => el.outerHTML);
    }

    // 初始化事件监听器
    init() {
        // 鼠标悬停事件
        this.eventHandlers.mouseover = (e) => {
            if (this.pt.includes(e.target.outerHTML)) {
                this.cursor.classList.add(this.config.hoverClass);
            }
        };

        this.eventHandlers.mouseout = (e) => {
            if (this.pt.includes(e.target.outerHTML)) {
                this.cursor.classList.remove(this.config.hoverClass);
            }
        };

        // 鼠标移动事件
        this.eventHandlers.mousemove = (e) => {
            if (this.pos.curr == null) {
                this.move(e.clientX - this.config.offset, e.clientY - this.config.offset);
            }
            this.pos.curr = {
                x: e.clientX - this.config.offset,
                y: e.clientY - this.config.offset
            };
            this.cursor.classList.remove(this.config.hiddenClass);
        };

        // 鼠标进入/离开事件
        this.eventHandlers.mouseenter = () => {
            this.cursor.classList.remove(this.config.hiddenClass);
        };

        this.eventHandlers.mouseleave = () => {
            this.cursor.classList.add(this.config.hiddenClass);
        };

        // 鼠标按下/释放事件
        this.eventHandlers.mousedown = () => {
            this.cursor.classList.add(this.config.activeClass);
        };

        this.eventHandlers.mouseup = () => {
            this.cursor.classList.remove(this.config.activeClass);
        };

        // 添加事件监听器
        Object.entries(this.eventHandlers).forEach(([event, handler]) => {
            document.addEventListener(event, handler);
        });
    }

    // 渲染循环
    render() {
        if (this.pos.prev) {
            this.pos.prev.x = Math.lerp(this.pos.prev.x, this.pos.curr.x, this.config.lerpSpeed);
            this.pos.prev.y = Math.lerp(this.pos.prev.y, this.pos.curr.y, this.config.lerpSpeed);
            this.move(this.pos.prev.x, this.pos.prev.y);
        } else {
            this.pos.prev = this.pos.curr;
        }

        this.animationId = requestAnimationFrame(() => this.render());
    }

    // 销毁方法，防止内存泄漏
    destroy() {
        // 移除事件监听器
        Object.entries(this.eventHandlers).forEach(([event, handler]) => {
            document.removeEventListener(event, handler);
        });

        // 停止 MutationObserver
        if (this.observer) {
            this.observer.disconnect();
            this.observer = null;
        }

        // 移除光标元素
        if (this.cursor && this.cursor.parentNode) {
            this.cursor.parentNode.removeChild(this.cursor);
            this.cursor = null;
        }

        // 清除动画帧
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }

        // 重置属性
        this.pos = { curr: null, prev: null };
        this.pt = [];
        this.eventHandlers = {};
    }

    // 刷新方法（重新初始化）
    refresh() {
        this.destroy();
        this.pos = { curr: null, prev: null };
        this.pt = [];
        this.create();
        this.init();
        this.render();
    }
}

// 初始化光标
(() => {
    CURSOR = new Cursor();

    // 可选：在页面卸载时清理资源
    window.addEventListener('beforeunload', () => {
        if (CURSOR && typeof CURSOR.destroy === 'function') {
            CURSOR.destroy();
        }
    });
})();