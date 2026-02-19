# 💻 KS-MLC Personal Homepage

[![License](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![GitHub stars](https://img.shields.io/github/stars/ksmlc/ksmlc-personal-homepage.svg?style=social)](https://github.com/ksmlc/ksmlc-personal-homepage/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/ksmlc/ksmlc-personal-homepage.svg?style=social)](https://github.com/ksmlc/ksmlc-personal-homepage/network/members)

This is the complete source code of my personal homepage [ksmlc.cn](https://ksmlc.cn), a modern personal portfolio website built with **HTML**, **CSS**, **PHP**, and **JavaScript**, integrating various interactive features and visual effects.

![Homepage Preview](https://github.com/user-attachments/assets/ec76ccf1-79ff-414b-a216-64597601409a)

## 📑 Table of Contents

- [Core Features](#-core-features)
- [Technical Architecture](#-technical-architecture)
- [Project Structure](#-project-structure)
- [Quick Start](#-quick-start)
- [Configuration](#️-configuration)
- [Customization Guide](#-customization-guide)
- [API Integration](#-api-integration)
- [Design References](#-design-references)
- [Browser Compatibility](#-browser-compatibility)
- [License](#️-license)

## 🌟 Core Features

### 📱 Responsive Design
- Fully responsive layout, compatible with mobile and desktop devices
- Smooth animations and transitions
- Touch device interaction support

### 🎨 Theme System
- Dual theme support: Dark theme and Blue theme
- Automatic theme switching (automatically switches to dark theme at night)
- Local storage for theme preferences

### 🎵 Music Player
- Integrated NetEase Cloud Music API
- Support for multiple playlist switching (personal playlists, hot charts, etc.)
- Real-time lyrics display and floating lyrics
- Playback progress control and time display
- Playlist browsing interface

### 🌤️ Real-time Information Display
- Real-time weather widget
- IP geolocation display
- Visit counter (based on IP records)
- Website uptime statistics

### 📝 Content Display
- Personal skills and interest tags (dynamically generated from JSON data)
- Project portfolio showcase
- Friend links display
- Random "Hitokoto" API integration
- Bilingual switching (Chinese/English, double-click to translate)

### 🎉 Interactive Effects
- Festival countdown and lantern animation (New Year, Spring Festival, National Day, Mid-Autumn Festival)
- Scroll-in animation effects
- Project card magnetic attraction effect
- Digital flip clock
- FPS performance display (desktop only)

## 🛠️ Technical Architecture

### Frontend Technology Stack
| Technology | Description |
|------------|-------------|
| HTML5 | Semantic markup and structure |
| CSS3 | Modern styles and animations, using CSS variables for theme system |
| JavaScript (ES6+) | Interactive logic and dynamic content |
| Responsive Design | Media queries and flexible layout |

### Backend Technology
| Technology | Description |
|------------|-------------|
| PHP | Server-side data processing and API integration |
| JSON | Data storage and configuration management |

## 📁 Project Structure

```
ksmlc.cn/
├── css/
│   ├── style.css          # Main style file (including theme system)
│   ├── mouse.css          # Mouse cursor styles
│   └── time.css           # Clock styles
├── js/
│   ├── script.js          # Main interactive logic
│   ├── music.js           # Music player functionality
│   ├── time.js            # Digital clock functionality
│   ├── fps.js             # FPS display functionality
│   ├── mouse.js           # Mouse effects
│   └── jiami.js           # Encryption related
├── json/
│   └── links.json         # Website configuration data
├── images/
│   ├── QR_Code/           # QR code images
│   ├── icon/              # Icon resources
│   └── img/               # Other images
├── index.php              # Homepage file
├── 404.html               # 404 error page
├── manifest.json          # PWA configuration
├── robots.txt             # Crawler rules
├── LICENSE                # GPL-3.0 license
├── Readme.md              # Project documentation (Chinese)
└── Readme_en.md           # Project documentation (English)
```

## 🚀 Quick Start

### Environment Requirements
- PHP 7.0 or higher
- Modern web browser (ES6+ support)
- Web server (such as Apache, Nginx)

### Installation Steps

```bash
# Clone the project
git clone https://github.com/ksmlc/ksmlc-personal-homepage.git

# Enter project directory
cd ksmlc-personal-homepage

# Deploy to web server directory
# Access index.php to use
```

## ⚙️ Configuration

### Basic Configuration
- Modify the `json/links.json` file to customize website content
- Theme preferences are automatically saved in browser cookies
- IP access records are saved in the `ip_log.txt` file

### links.json Configuration Example

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
      "title": "KS-MLC|Personal Homepage",
      "description": "Source code of this site",
      "image": "./images/ksmlc.png"
    }
  ],
  "friend": [
    {
      "href": "https://example.com",
      "img_src": "avatar.jpg",
      "alt": "Friend Name"
    }
  ],
  "Left_block_list_Information": ["China", "Liuzhou, Guangxi", "University Student"],
  "Left_block_list_interest": ["Travel", "Music", "Python"]
}
```

## 🔧 Customization Guide

### Theme Customization
The theme system is implemented using CSS variables, which can be modified in `css/style.css`:

```css
:root {
  --main-bg-color-dark: #1a1a2e;    /* Dark theme background */
  --main-bg-color-blue: #0f3460;    /* Blue theme background */
  --main-text-color-dark: #eaeaea;  /* Dark theme text color */
  --main-text-color-blue: #ffffff;  /* Blue theme text color */
}
```

### Feature Extension
- Add new feature modules by modifying `index.php` and related CSS/JS files
- Extend data items by expanding the `json/links.json` configuration file
- Customize music player by modifying API configuration in `js/music.js`

### Festival Lantern Configuration
Customize festival display in `index.php`:

```javascript
if (currentMonth === 1 && currentDate === 1) {
    return "Happy New Year";
}
if (currentMonth === 10 && currentDate === 1) {
    return "Happy National Day";
}
```

## 🔌 API Integration

The project integrates the following external APIs:

| API | Function | Source |
|-----|----------|--------|
| NetEase Cloud Music API | Music player | Self-hosted API |
| IP Geolocation API | Visitor information | Self-hosted API |
| Weather API | Real-time weather display | Seniverse Weather |
| Hitokoto API | Random quotes | Self-hosted API |

## 🎨 Design References

This project references the following excellent works:
- [nn.ci](https://nn.ci) - Information display style
- [zyyo.cc](https://zyyo.cc) - Layout structure and interaction logic

## 🌐 Browser Compatibility

| Browser | Supported Version |
|---------|-------------------|
| Chrome | 60+ |
| Firefox | 55+ |
| Safari | 12+ |
| Edge | 79+ |
| Mobile browsers | ✅ |

## 🛡️ License

This project is open source under the [GNU General Public License v3.0 (GPL-3.0)](https://www.gnu.org/licenses/gpl-3.0.html).

## 📞 Contact

- Homepage: [ksmlc.cn](https://ksmlc.cn)
- Email: ksmlc@qq.com
- GitHub: [@ksmlc](https://github.com/ksmlc)
- Telegram: [@ksmlc](https://t.me/ksmlc)

---

⭐ If this project helps you, please give it a star!
