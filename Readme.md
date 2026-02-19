# 💻 KS-MLC 个人主页

[![License](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![GitHub stars](https://img.shields.io/github/stars/ksmlc/ksmlc-personal-homepage.svg?style=social)](https://github.com/ksmlc/ksmlc-personal-homepage/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/ksmlc/ksmlc-personal-homepage.svg?style=social)](https://github.com/ksmlc/ksmlc-personal-homepage/network/members)

这是我的个人主页完整源码 [ksmlc.cn](https://ksmlc.cn)，一个现代化的个人展示网站，使用 **HTML**、**CSS**、**PHP** 和 **JavaScript** 构建，集成了多种交互功能和视觉效果。

![主页预览](https://github.com/user-attachments/assets/ec76ccf1-79ff-414b-a216-64597601409a)

## 📑 目录

- [核心功能](#-核心功能)
- [技术架构](#-技术架构)
- [项目结构](#-项目结构)
- [快速开始](#-快速开始)
- [配置说明](#-配置说明)
- [自定义指南](#-自定义指南)
- [API 集成](#-api-集成)
- [设计参考](#-设计参考)
- [浏览器兼容性](#-浏览器兼容性)
- [许可证](#-许可证)

## 🌟 核心功能

### 📱 响应式设计
- 完全响应式布局，适配移动端和桌面端
- 流畅的动画效果和过渡
- 支持触摸设备交互

### 🎨 主题系统
- 双主题支持：暗色主题(Dark)和蓝色主题(Blue)
- 自动主题切换（夜间自动切换至暗色主题）
- 主题偏好本地存储

### 🎵 音乐播放器
- 集成网易云音乐 API
- 支持多个歌单切换（个人歌单、热歌榜等）
- 实时歌词显示与悬浮歌词
- 播放进度控制与时间显示
- 歌单列表浏览界面

### 🌤️ 实时信息展示
- 实时天气小组件
- IP 地理位置显示
- 访问计数器（基于 IP 记录）
- 网站运行时间统计

### 📝 内容展示
- 个人技能与兴趣标签（基于 JSON 数据动态生成）
- 项目作品集展示
- 友情链接展示
- 随机"一言" API 集成
- 中英文双语切换（双击翻译）

### 🎉 交互特效
- 节日倒计时与灯笼动画（元旦、春节、国庆、中秋）
- 滚动渐入动画效果
- 项目卡片磁性吸附效果
- 数字翻转时钟
- FPS 性能显示（桌面端）

## 🛠️ 技术架构

### 前端技术栈
| 技术 | 说明 |
|------|------|
| HTML5 | 语义化标记与结构 |
| CSS3 | 现代样式与动画，使用 CSS 变量实现主题系统 |
| JavaScript (ES6+) | 交互逻辑与动态内容 |
| 响应式设计 | 媒体查询与弹性布局 |

### 后端技术
| 技术 | 说明 |
|------|------|
| PHP | 服务器端数据处理与 API 集成 |
| JSON | 数据存储与配置管理 |

## 📁 项目结构

```
ksmlc.cn/
├── css/
│   ├── style.css          # 主样式文件（包含主题系统）
│   ├── mouse.css          # 鼠标样式
│   └── time.css           # 时钟样式
├── js/
│   ├── script.js          # 主要交互逻辑
│   ├── music.js           # 音乐播放器功能
│   ├── time.js            # 数字时钟功能
│   ├── fps.js             # FPS 显示功能
│   ├── mouse.js           # 鼠标特效
│   └── jiami.js           # 加密相关
├── json/
│   └── links.json         # 网站配置数据
├── images/
│   ├── QR_Code/           # 二维码图片
│   ├── icon/              # 图标资源
│   └── img/               # 其他图片
├── index.php              # 主页文件
├── 404.html               # 404 错误页面
├── manifest.json          # PWA 配置
├── robots.txt             # 爬虫规则
├── LICENSE                # GPL-3.0 许可证
├── Readme.md              # 项目说明文档（中文）
└── Readme_en.md           # 项目说明文档（英文）
```

## 🚀 快速开始

### 环境要求
- PHP 7.0 或更高版本
- 现代Web浏览器（支持 ES6+）
- Web服务器（如 Apache、Nginx）

### 安装步骤

```bash
# 克隆项目
git clone https://github.com/ksmlc/ksmlc-personal-homepage.git

# 进入项目目录
cd ksmlc-personal-homepage

# 将项目部署到 Web 服务器目录
# 访问 index.php 即可使用
```

## ⚙️ 配置说明

### 基础配置
- 修改 `json/links.json` 文件可自定义网站内容
- 主题偏好会自动保存在浏览器 Cookie 中
- IP 访问记录保存在 `ip_log.txt` 文件中

### links.json 配置示例

```json
{
  "icons": {
    "GitHub": {
      "icon": "images/icon/github.svg",
      "url": "https://github.com/ksmlc"
    }
  },
  "WebSite": [
    {
      "url": "https://blog.ksmlc.cn/",
      "title": "KS-MLC|Blog",
      "description": "My Blog",
      "image": "./images/icon/typecho.svg"
    }
  ],
  "Projects": [
    {
      "url": "https://github.com/ksmlc/ksmlc-personal-homepage",
      "title": "KS-MLC|个人主页",
      "description": "本站点的开源代码",
      "image": "./images/ksmlc.png"
    }
  ],
  "friend": [
    {
      "href": "https://example.com",
      "img_src": "avatar.jpg",
      "alt": "好友名称"
    }
  ],
  "Left_block_list_Information": ["中国", "广西柳州", "大学生"],
  "Left_block_list_interest": ["旅行", "音乐", "Python"]
}
```

## 🔧 自定义指南

### 主题定制
主题系统基于 CSS 变量实现，可在 `css/style.css` 中修改：

```css
:root {
  --main-bg-color-dark: #1a1a2e;    /* 暗色主题背景 */
  --main-bg-color-blue: #0f3460;    /* 蓝色主题背景 */
  --main-text-color-dark: #eaeaea;  /* 暗色主题文本颜色 */
  --main-text-color-blue: #ffffff;  /* 蓝色主题文本颜色 */
}
```

### 功能扩展
- 添加新功能模块可修改 `index.php` 和相关 CSS/JS 文件
- 新增数据项可扩展 `json/links.json` 配置文件
- 自定义音乐播放器可修改 `js/music.js` 中的 API 配置

### 节日灯笼配置
在 `index.php` 中可自定义节日显示：

```javascript
if (currentMonth === 1 && currentDate === 1) {
    return "元旦快乐";
}
if (currentMonth === 10 && currentDate === 1) {
    return "国庆快乐";
}
```

## 🔌 API 集成

项目集成以下外部 API：

| API | 功能 | 来源 |
|-----|------|------|
| 网易云音乐 API | 音乐播放器 | 自建 API |
| IP 地理位置 API | 访问者信息 | 自建 API |
| 天气 API | 实时天气显示 | 心知天气 |
| 一言 API | 随机名言 | 自建 API |

## 🎨 设计参考

本项目设计参考以下优秀作品：
- [nn.ci](https://nn.ci) - 信息展示方式
- [zyyo.cc](https://zyyo.cc) - 布局结构与交互逻辑

## 🌐 浏览器兼容性

| 浏览器 | 支持版本 |
|--------|----------|
| Chrome | 60+ |
| Firefox | 55+ |
| Safari | 12+ |
| Edge | 79+ |
| 移动端浏览器 | ✅ |

## 🛡️ 许可证

本项目基于 [GNU General Public License v3.0 (GPL-3.0)](https://www.gnu.org/licenses/gpl-3.0.html) 许可证开源。

## 📞 联系方式

- 主页：[ksmlc.cn](https://ksmlc.cn)
- 邮箱：ksmlc@qq.com
- GitHub：[@ksmlc](https://github.com/ksmlc)
- Telegram：[@ksmlc](https://t.me/ksmlc)

---

⭐ 如果这个项目对你有帮助，请给它一个星标！
