<!DOCTYPE html>
<html lang="zh_CN">

<head>
    <meta charset="utf-8"><meta http-equiv="x-ua-compatible" content="IE=edge"><title>Hi, I'm KS-MLC Is a Developer</title><link rel="icon" href="images/ksmlc.ico"><meta name="description" content="Hello,I'm KS-MLC@MoLechun莫乐春,Front-end,Software Developer / Studying at Guangxi Vocational and Technical College of Manufacture Engineering(Software Development)."><meta name="keywords" content="ksmlc,KS-MLC,KSMLC主页,KSMLC个人介绍,KS-MLC,molechun,莫乐春"><meta name="og:title" contect="KS-MLC"><meta name="og:type" contect="website"><meta property="og:locale" content="zh_CN"><meta name="og:description" contect="Hello,I'm KS-MLC@MoLechun莫乐春,Front-end,Software Developer / Studying at Guangxi Vocational and Technical College of Manufacture Engineering(Software Development)."><meta name="og:site_name" contect="KS-MLC"><meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="css/mouse.css">
    <link rel="stylesheet" href="./css/time.css">
<!--    <link rel="manifest" href="./manifest.json">-->
    <script src="./js/notification.js" rel="external nofollow"></script>
</head>
<script src="js/jiami.js"></script>

<body>
<h1 style="display: none;">KS-MLC|个人主页 - 开发者KS-MLC的个人介绍主页</h1>
<style>
    .deng-box{position:fixed;top:-40px;right:-20px;z-index:99;pointer-events:none}.deng-box1{position:fixed;top:-30px;right:10px;z-index:99;pointer-events:none}.deng-box2{position:fixed;top:-40px;left:-20px;z-index:99;pointer-events:none}.deng-box3{position:fixed;top:-30px;left:10px;z-index:99;pointer-events:none}.deng-box1 .deng,.deng-box3 .deng{position:relative;width:120px;height:90px;margin:50px;background:#d8000f;background:rgba(216,0,15,.8);border-radius:50% 50%;-webkit-transform-origin:50% -100px;-webkit-animation:swing 5s infinite ease-in-out;box-shadow:-5px 5px 30px 4px #fc903d}.deng{position:relative;width:120px;height:90px;margin:50px;background:#d8000f;background:rgba(216,0,15,.8);border-radius:50% 50%;-webkit-transform-origin:50% -100px;-webkit-animation:swing 3s infinite ease-in-out;box-shadow:-5px 5px 50px 4px #fa6c00}.deng-a{width:100px;height:90px;background:#d8000f;background:rgba(216,0,15,.1);margin:12px 8px 8px;border-radius:50% 50%;border:2px solid #dc8f03}.deng-b{width:45px;height:90px;background:#d8000f;background:rgba(216,0,15,.1);margin:-4px 8px 8px 26px;border-radius:50% 50%;border:2px solid #dc8f03}.xian{position:absolute;top:-20px;left:60px;width:2px;height:20px;background:#dc8f03}.shui-a{position:relative;width:5px;height:20px;margin:-5px 0 0 59px;-webkit-animation:swing 4s infinite ease-in-out;-webkit-transform-origin:50% -45px;background:orange;border-radius:0 0 5px 5px}.shui-b{position:absolute;top:14px;left:-2px;width:10px;height:10px;background:#dc8f03;border-radius:50%}.shui-c{position:absolute;top:18px;left:-2px;width:10px;height:35px;background:orange;border-radius:0 0 0 5px}.deng:before{position:absolute;top:-7px;left:29px;height:12px;width:60px;content:" ";display:block;z-index:999;border-radius:5px 5px 0 0;border:solid 1px #dc8f03;background:orange;background:linear-gradient(to right,#dc8f03,orange,#dc8f03,orange,#dc8f03)}.deng:after{position:absolute;bottom:-7px;left:10px;height:12px;width:60px;content:" ";display:block;margin-left:20px;border-radius:0 0 5px 5px;border:solid 1px #dc8f03;background:orange;background:linear-gradient(to right,#dc8f03,orange,#dc8f03,orange,#dc8f03)}.deng-t{font-family:华文行楷,Arial,Lucida Grande,Tahoma,sans-serif;font-size:3.2rem;color:#dc8f03;font-weight:700;line-height:85px;text-align:center}.night .deng-box,.night .deng-box1,.night .deng-t{background:0 0!important}@-moz-keyframes swing{0%{-moz-transform:rotate(-10deg)}50%{-moz-transform:rotate(10deg)}100%{-moz-transform:rotate(-10deg)}}@-webkit-keyframes swing{0%{-webkit-transform:rotate(-10deg)}50%{-webkit-transform:rotate(10deg)}100%{-webkit-transform:rotate(-10deg)}}@media(max-width:600px){#container{display:none}}
</style>
<!--灯笼-->
<!-- 包含HTML代码的容器元素 -->
<div id="container"></div>
<script>
    // 检查当前时间是否已经达到指定的时间
    function isTimeToDisplay() {
        var currentTime = new Date();
        var targetTime = new Date("2025-01-01T00:00:00"); // 用您的目标时间替换这里

        return currentTime >= targetTime;
    }

    // 如果是显示时间，将HTML元素添加到DOM的函数
    function displayElementsIfTime() {
        if (isTimeToDisplay()) {
            var container = document.getElementById("container"); // 用您的容器元素的ID替换这里

            // 将HTML代码添加到容器
            container.innerHTML = `
<div class="deng-box2"><div class="deng"><div class="xian"></div><div class="deng-a"><div class="deng-b"><div class="deng-t">岁</div></div></div><div class="shui shui-a"><div class="shui-c"></div><div class="shui-b"></div></div></div></div><div class="deng-box3"><div class="deng"><div class="xian"></div><div class="deng-a"><div class="deng-b"><div class="deng-t">岁</div></div></div><div class="shui shui-a"><div class="shui-c"></div><div class="shui-b"></div></div></div></div><div class="deng-box1"><div class="deng"><div class="xian"></div><div class="deng-a"><div class="deng-b"><div class="deng-t">平</div></div></div><div class="shui shui-a"><div class="shui-c"></div><div class="shui-b"></div></div></div></div><div class="deng-box"><div class="deng"><div class="xian"></div><div class="deng-a"><div class="deng-b"><div class="deng-t">安</div></div></div><div class="shui shui-a"><div class="shui-c"></div><div class="shui-b"></div></div></div></div>
            `;

            // 一旦元素显示，停止间隔检查
            clearInterval(intervalId);
        }
    }

    // 每1000毫秒（1秒）检查并显示元素
    var intervalId = setInterval(displayElementsIfTime, 200);
</script>
<!--灯笼-->
<script src="./js/fps.js"></script>
<div id="loading">
    <div class="loader">正在努力加载...</div>
</div>
<div class="body_main">
<div class="main">
    <div class="main-left">
        <img style="width: 150px;" src="images/ksmlc.png" alt="头像">
        <div class="Left_block Left_famous_saying-description" ondblclick="toggleTranslation('Left_famous_saying')">
            <p>无论近远 不分昼夜</p>
        </div>
        <div class="translated-Left_famous_saying-description translated-description Left_block" ondblclick="toggleTranslation('Left_famous_saying')">
            <p>只管优雅 从容四方</p>
        </div>

        <div class="Left_block">
            <div class="Left_block_list">
                <!--卡片开始-->
                <?php
                $jsonData = file_get_contents('./json/links.json');
                $data = json_decode($jsonData, true);
                $card_skill = $data['Left_block_list_Information'];
                ?>

                <div>
                    <?php
                    $skills_to_display = array_slice($card_skill, 0);
                    foreach ($skills_to_display as $skill) :
                        $encoded_skill = urlencode($skill);
                        $search_url = "https://cn.bing.com/search?q=$encoded_skill";
                        ?>
                        <div class="circle">
                            <a href="<?php echo $search_url; ?>" target="_blank" rel="noopener noreferrer">
                                <span><?php echo $skill; ?></span>
                            </a>
                        </div>
                    <?php endforeach; ?>
                </div>
                <!--卡片结束-->
            </div>

        </div>
        <!--兴趣-开始-->
        <div class="Left_block">
            <div class="Left_block_list">
                <!--卡片开始-->
                <?php
                $data = json_decode($jsonData, true);
                $card_skill = $data['Left_block_list_interest'];
                ?>
                <div>
                    <?php
                    $skills_to_display = array_slice($card_skill, 0);
                    foreach ($skills_to_display as $skill) :
                        // 将技能名称编码为URL安全的格式
                        $encoded_skill = urlencode($skill);
                        $search_url = "https://cn.bing.com/search?q=$encoded_skill";
                        ?>
                        <div class="circle">
                            <a href="<?php echo $search_url; ?>" target="_blank" rel="noopener noreferrer">
                                <span><?php echo $skill; ?></span>
                            </a>
                        </div>
                    <?php endforeach; ?>
                </div>
                <!--卡片结束-->
            </div>

        </div>
    </div>
    <div class="main-right">
        <header>
            <!-- 头像与天气 -->
            <div style="display: flex; align-items: center; justify-content: space-between;">
                <!-- 头像 -->
                <img style="width: 15%;" src="images/ksmlc.png" alt="头像">
                <!-- 天气 -->
                <div id="tp-weather-widget"></div>
                <script>(function(e,t,n,s,o,i,a,r){r=function(){i=t.createElement(n),a=t.getElementsByTagName(n)[0],i.src=o,i.charset="utf-8",i.async=1,a.parentNode.insertBefore(i,a)},e.SeniverseWeatherWidgetObject=s,e[s]||(e[s]=function(){(e[s].q=e[s].q||[]).push(arguments)}),e[s].l=+new Date,e.attachEvent?e.attachEvent("onload",r):e.addEventListener("load",r,!1)})(window,document,"script","SeniverseWeatherWidget","//cdn.sencdn.com/widget2/static/js/bundle.js?t="+parseInt(((new Date).getTime()/1e8).toString(),10)),window.SeniverseWeatherWidget("show",{flavor:"slim",location:"WKMF3VJHWB9X",geolocation:!0,language:"zh-Hans",unit:"c",theme:"auto",token:"28b1385d-ceab-416a-b62e-fbfe89b38309",hover:"enabled",container:"tp-weather-widget"})</script>
            </div>
        </header>
        <!--介绍-->
        <div class="welcome Name_Meaning-description" ondblclick="toggleTranslation('Name_Meaning')">Hi, I'm
            <div class="gradientText">KS</div>
            -
            <div class="gradientText">MLC</div>
        </div>
        <div class="welcome translated-Name_Meaning-description translated-description"
             ondblclick="toggleTranslation('Name_Meaning')">Hi, welcome to
            <div class="gradientText">ksmlc.cn</div>
        </div>
        <!-- 介绍个人 -->
        <div class="personal_career-description description" ondblclick='toggleTranslation("personal_career")'>🧑🏻‍💻 <span class="purpleText">Front-end</span>, <span class="purpleText">Software</span> Developer /
            Studying at <span class="purpleText">Guangxi Vocational and Technical College of Manufacture Engineering(Software Development)</span></div>
        <!-- 翻译个人 -->
        <div class="translated-personal_career-description translated-description description"
             ondblclick="toggleTranslation('personal_career')">
            🧑🏻‍💻 <span class="purpleText">前端</span>、<span class="purpleText">软件</span>开发人员/就读于<span
                    class="purpleText">广西制造工程职业技术学院(软件开发)</span>
        </div>
        <!-- 名言 -->
        <div class="famous_saying-description description" ondblclick='toggleTranslation("famous_saying")'>📋 You say <span class="purpleText textBackground">hesitant to encounter things</span>, can go and ask about
            the <span class="purpleText textBackground">spring wind</span>,
            The spring wind <span class="purpleText textBackground">doesn't speak</span>, Then follow <span class="purpleText textBackground">your heart</span>. If I have a <span class="purpleText textBackground">firm</span> heart,
            <span class="purpleText textBackground">How can</span> encounter a hesitation in things? The spring wind
            also has its <span class="purpleText textBackground">sorrows</span>, <span class="purpleText textBackground">Don't let</span> the spring winds <span class="purpleText textBackground">worry</span> about me.</div>
        <!-- 翻译名言 -->
        <div class="translated-famous_saying-description translated-description description" ondblclick='toggleTranslation("famous_saying")'>📋 你说<span class="purpleText textBackground">遇事不决</span>，可问<span class="purpleText textBackground">春风</span>，春风<span class="purpleText textBackground">不语</span>，既随<span class="purpleText textBackground">本心</span>。我若本心<span class="purpleText textBackground">坚定</span>，<span class="purpleText textBackground">怎会</span>遇事不决？春风也有春风<span class="purpleText textBackground">愁</span>，<span class="purpleText textBackground">不劳</span>春风为我<span class="purpleText textBackground">忧</span>。</div>
        <!-- 随机一言 -->
        <div class="description" style="display: flex; align-items: center;">
            <span style="margin-right: 10px; font-weight: bold;">📢：</span>
            <div id="slogan" class="purpleText" style="font-weight: bold;" ondblclick="copyText()">
                <?php
                // API 地址
                $filePath = 'https://api.ksmlc.cn/random_word/index.php';

                // 获取远程 API 数据
                $remoteContent = file_get_contents($filePath);

                // 解析 JSON
                $data = json_decode($remoteContent, true);

                // 检查是否成功解析，并输出
                if (isset($data['yiyan'])) {
                    echo htmlspecialchars($data['yiyan'], ENT_QUOTES, 'UTF-8');
                } else {
                    echo '无法获取一言';
                }
                ?>
            </div>

        </div>

        <!--IP地址-->
        <div class="description" id="ipAddressContainer">
            <?php
            // 获取真实IP的函数
            function getRealIpAddr() {
                if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
                    $ip = $_SERVER['HTTP_CLIENT_IP'];
                } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
                    $ipList = explode(',', $_SERVER['HTTP_X_FORWARDED_FOR']);
                    $ip = trim($ipList[0]);
                } else {
                    $ip = $_SERVER['REMOTE_ADDR'];
                }
                return $ip;
            }

            // 文件路径
            $ipLogFilePath = 'ip_log.txt';

            // 获取用户的真实IP地址
            $ipAddress = getRealIpAddr();

            // 检查ip_log.txt文件是否存在
            if (file_exists($ipLogFilePath)) {
                $ipLogData = file($ipLogFilePath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
                $currentCount = count($ipLogData) + 1;
            } else {
                $currentCount = 1;
            }

            // 使用 cURL 获取IP地址信息
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, "https://api.ksmlc.cn/IP/ip.php?ip=$ipAddress");
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            $response = curl_exec($ch);
            curl_close($ch);

            // 解析响应JSON数据
            $responseData = json_decode($response, true);
            $city = $responseData['data']['city'] ?? '未知地点';

            // 输出IP地址、访问次数和城市信息
            echo "当前IP地址是：<span id='ipAddress'>$ipAddress</span><br>来自：<span id='location'>$city</span><br>";
            echo "您是第 $currentCount 个访问者";

            // 保存IP地址到ip_log.txt文件
            $ipLogEntry = date('Y-m-d H:i:s') . "\t" . $ipAddress . PHP_EOL;
            file_put_contents($ipLogFilePath, $ipLogEntry, FILE_APPEND | LOCK_EX);
            ?>
        </div>
        <!--        网站运行时间-->
        <?php
        // 源码日期
        $Source_code_date = strtotime("2024-01-21");
        // 域名日期
        $Domain_name = strtotime("2023-11-07");
        // ksmlc日期
        $ksmlc_date = strtotime("2022-03-01");

        // 当前日期
        $current_date = time();

        // 计算源码日期天数差
        $Source_code_date_days_running = floor(($current_date - $Source_code_date) / (60 * 60 * 24));
        // 计算域名日期天数差
        $Domain_name_date_days_running = floor(($current_date - $Domain_name) / (60 * 60 * 24));
        // 计算ksmlc日期天数差
        $ksmlc_date_days_running = floor(($current_date - $ksmlc_date) / (60 * 60 * 24));
        // 显示已运行天数
        echo "<a onclick='Running_days()'>点击查看更多</a>";
        ?>
        <script>
            // 获取 PHP 变量的值
            var sourceCodeDays = <?php echo $Source_code_date_days_running; ?>;
            var domainNameDays = <?php echo $Domain_name_date_days_running; ?>;
            var ksmlcDays = <?php echo $ksmlc_date_days_running; ?>;
        </script>
        <!--我的联系方法-->
        <div class="iconContainer">
            <!-- 微信图标 popupImg -->
            <a class="iconItem" href="javascript:void(0)" onclick="showContactPopup('wx')">
                <img src="images/icon/微信.svg" alt="微信 Icon" width="22" height="22">
                <span class="tooltip">微信</span>
            </a>
            <!-- QQ图标 popupImg -->
            <a class="iconItem" href="javascript:void(0)" onclick="showContactPopup('qq')">
                <img src="images/icon/qq.svg" alt="QQ Icon" width="22" height="22">
                <span class="tooltip">QQ</span>
            </a>
            <?php
            // 读取JSON文件内容
            $jsonData = file_get_contents('./json/links.json');
            // 将JSON字符串转换为PHP数组
            $data = json_decode($jsonData, true);

            // 处理链接的 JSON 数据
            $icons = $data['icons'];
            foreach ($icons as $tooltip => $link) {
                $icon = $link['icon'];
                $url = $link['url'];

                // 输出链接的HTML
                echo '<a class="iconItem" target="_blank" href="' . $url . '">';
                echo '<img src="' . $icon . '" alt="' . $tooltip . ' Icon" width="22" height="22">';
                echo '<span class="tooltip">'.$tooltip.'</span>';
                echo '</a>';
            }
            ?>
            <!--赞助-->
<!--            <a class="iconItem" href="javascript:void(0)" onclick="SponsorshipPopup()">-->
<!--                <img src="images/icon/赞助.svg" alt="赞助 Icon" width="22" height="22">-->
<!--                <span class="tooltip">赞助</span>-->
<!--            </a>-->
            <!--切换主题-->
            <a class="iconItem" href="javascript:void(0)"><div class="onoffswitch"><input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch" checked>
                    <label class="onoffswitch-label" for="myonoffswitch"><span class="onoffswitch-inner"></span>
                        <span class="onoffswitch-switch"></span></label></div>
                <span class="tooltip">主题切换</span></a>
        </div>
        <!--时间与音乐-->
        <div class="music_and_time">
            <!--时间开始-->
            <div class="clock"><div class="flip"><div class="digital front" data-number="0"></div><div class="digital back" data-number="1"></div></div><div class="flip"><div class="digital front" data-number="0"></div><div class="digital back" data-number="1"></div></div><em class="divider">:</em><div class="flip"><div class="digital front" data-number="0"></div><div class="digital back" data-number="1"></div></div><div class="flip"><div class="digital front" data-number="0"></div><div class="digital back" data-number="1"></div></div><em class="divider">:</em><div class="flip"><div class="digital front" data-number="0"></div><div class="digital back" data-number="1"></div></div><div class="flip"><div class="digital front" data-number="0"></div><div class="digital back" data-number="1"></div></div></div>
            <!--时间结束-->
            <!--音乐开始-->
            <div class="music_div">
                <div class="music-player">
                    <img id="music-img" src="" alt="音乐封面">
                    <div class="music-info">
                        <h3 id="music-title">歌曲标题</h3>
                        <p id="music-artist">歌手</p>
                        <div class="progress-container">
                            <div class="progress" id="progress"></div>
                            <div class="time-display" id="time-display">0:00 / 0:00</div>
                        </div>
                        <div class="lyrics-line-container">
                            <p class="lyrics-line" id="lyrics-line"></p>
                        </div>
                        <div class="controls">
                            <button id="chart-list-btn"><img src="./images/icon/音乐歌单.svg" alt="歌单"></button>
                            <button id="view-songs-btn"><img src="./images/icon/音乐列表.svg" alt="音乐"></button>
                            <button id="prev-btn"><img src="./images/icon/音乐后退.svg" alt="上一首"></button>
                            <button id="play-pause-btn"><img src="./images/icon/音乐播放.svg" alt="播放"></button>
                            <button id="next-btn"><img src="./images/icon/音乐前进.svg" alt="下一首"></button>
                        </div>
                        <audio id="music-audio" src=""></audio>
                    </div>
                </div>

                <div id="chart-modal" class="chart-modal">
                    <div class="chart-modal-content">
                        <span class="close">&times;</span>
                        <h2>选择音乐歌单</h2>
                        <div id="playlist-buttons-container"></div> <!-- 动态生成歌单按钮的容器 -->
                    </div>
                </div>

                <div id="songs-modal" class="chart-modal">
                    <div class="chart-modal-content">
                        <span class="close">&times;</span>
                        <h2>音乐列表</h2>
                        <ul id="songs-list"></ul>
                    </div>
                </div>
            </div>
            <!--音乐结束-->
        </div>

        <content>
            <!--标题图标文字-->
            <div class="title"><img src="images/icon/website.svg" alt="WebSite Icon" width="22" height="22">
                <span class="WebSite-description" ondblclick='toggleTranslation("WebSite")'>WebSite</span>
                <span class="translated-WebSite-description WebSite-description Title_Hidden" ondblclick='toggleTranslation("WebSite")'>网站</span></div>
            <!-- 网站列表开始 -->
            <div class="projectList">
                <?php
                // 处理项目的 JSON 数据
                $projectItems = $data['WebSite'];
                foreach ($projectItems as $item) {
                    echo '<a class="projectItem" target="_blank" href="' . $item["url"] . '">
    <!-- 项目项开始 -->
    <div class="projectItemLeft">
        <h2>' . $item["title"] . '</h2>
        <p>' . $item["description"] . '</p>
    </div>
    <div class="projectItemRight">
        <img src="' . $item["image"] . '" alt="项目图标">
    </div>
    <!-- 项目项结束 -->
</a>';
                }
                ?>
            </div>
            <!-- 网站列表结束 -->
            <!--标题图标文字-->
            <div class="title"><img src="images/icon/github.svg" alt="Projects Icon" width="22" height="22">
                <span class="Projects-description" ondblclick='toggleTranslation("Projects")'>Projects</span>
                <span class="translated-Projects-description Projects-description Title_Hidden" ondblclick='toggleTranslation("Projects")'>项目</span></div>
            <!-- 项目列表开始 -->
            <div class="projectList">
                <?php
                $Projects = $data['Projects'];
                // 生成更多项目项的 HTML 代码
                foreach ($Projects as $item) {
                    // 检查是否有链接
                    if (!empty($item["url"])) {
                        echo '<a class="projectItem" target="_blank" href="' . $item["url"] . '">
            <!-- 项目项开始 -->
            <div class="projectItemLeft">
                <h2>' . $item["title"] . '</h2>
                <p>' . $item["description"] . '</p>
            </div>
            <div class="projectItemRight">
                <img src="' . $item["image"] . '" alt="项目图标">
            </div>
            <!-- 项目项结束 -->
        </a>';
                    } else {
                        echo '<a class="projectItem" href="javascript:void(0);" onclick="showNeumorphicAlert(\'开发者未添加跳转链接\');">
            <!-- 项目项开始 -->
            <div class="projectItemLeft">
                <h2>' . $item["title"] . '</h2>
                <p>' . $item["description"] . '</p>
            </div>
            <div class="projectItemRight">
                <img src="' . $item["image"] . '" alt="项目图标">
            </div>
            <!-- 项目项结束 -->
        </a>';
                    }
                }
                ?>
            </div>

            <!-- 友情链接-->
            <div class="title"><img src="images/icon/friendship.svg" alt="friend Icon" width="22" height="22">
                <span class="friend-description" ondblclick='toggleTranslation("friend")'>Friend</span>
                <span class="translated-friend-description Projects-description Title_Hidden" ondblclick='toggleTranslation("friend")'>友情链接</span></div>
            <!-- 友情链接列表开始 -->
            <div class="projectList">
                <div style="text-align: center;margin: 0 auto;">
                    <?php
                    $friend = $data['friend'];
                    foreach ($friend as $link) {
                        $href = !empty($link['href']) ? 'href="' . $link['href'] . '" target="_blank"' : '';
                        echo '<div class="friend_image-container">';
                        echo '<a ' . $href . '>';
                        echo '<img src="' . $link['img_src'] . '" class="friend_image" alt="友情头像">';
                        echo '<div class="friend_overlay">' . $link['alt'] . '</div>';
                        echo '</a>';
                        echo '</div>';
                    }
                    ?>
                </div>
            </div>
            <!-- 友情链接结束-->
            <!--标题图标文字-->
            <div class="title"><img src="images/icon/skills.svg" alt="skills Icon" width="22" height="22">
                <span class="skills-description" ondblclick='toggleTranslation("skills")'>Skills</span>
                <span class="translated-skills-description skills-description Title_Hidden" ondblclick='toggleTranslation("skills")'>技能</span></div>
            <!-- 技能图标，前往https://skillicons.dev/生成，一个pc端，一个移动端，区别是一行的个数 -->
            <div class="skill">
                <img id="skillPc" src="images/icon/skillPc.svg" alt="技能PC" srcset="">
                <img id="skillWap" src="images/icon/skillWap.svg" alt="技能Wap" srcset="">
            </div>
        </content>
    </div>
</div>
    <!-- 模态框容器 -->
    <div id="popup" class="popup" onclick="hidePopup()">
        <div class="popup-content" onclick="event.stopPropagation()">
            <span class="close" onclick="hidePopup()">&times;</span>
            <img id="popup-img" class="popup-img" src="" alt="模态框图片">
        </div>
    </div>
</div>
<footer>Copyright © 2024-2025 Website source code developed by KS-MLC.</footer>
</body>
<script src="js/mouse.js"></script>
<script src="./js/time.js"></script>
<script src="js/script.js"></script>
</html>