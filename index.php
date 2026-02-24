<!DOCTYPE html>
<html lang="zh_CN">

<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="IE=edge">
    <title>Hi, I'm ksmlc | Full-Stack Developer</title>
    <link rel="icon" href="images/ksmlc.ico">
    <meta name="description" content="Hello, I'm ksmlc, A full-stack developer who loves Python development, writing down my passion in the form of code!">
    <meta name="keywords" content="ksmlc, KS-MLC, 个人主页, 全栈开发者, Python开发">
    <!-- QQ专属分享元标签（优先被QQ解析） -->
    <meta name="qzone:title" content="Hi, I'm ksmlc | Python全栈开发者">
    <meta name="qzone:description" content="ksmlc，一名热爱Python的全栈开发者，以代码书写我所热爱！">
    <meta name="qzone:image" content="https://ksmlc.cn/images/ksmlc.jpg">
    <meta name="qzone:type" content="website">
    <!-- Open Graph 元数据（通用社交分享，QQ也会兼容） -->
    <meta property="og:title" content="ksmlc | Full-Stack Developer">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="zh_CN">
    <meta property="og:description" content="Hello, I'm ksmlc, A full-stack developer who loves Python development, writing down my passion in the form of code!">
    <meta property="og:site_name" content="ksmlc">
    <meta property="og:image" content="https://ksmlc.cn/images/ksmlc.jpg">
    <meta property="og:url" content="https://ksmlc.cn">
    <!-- 移动端视口配置 -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="css/mouse.css">
    <link rel="stylesheet" href="./css/time.css">
<!--    <link rel="manifest" href="./manifest.json">-->
</head>
<script src="js/jiami.js"></script>
  <script src="./js/music.js"></script>
  <body>
<h1 style="display: none;">KS-MLC|个人主页 - Hello, I'm ksmlc, A full-stack developer who loves Python development, writing down my passion in the form of code!</h1>
<style>
    .deng-box{position:fixed;top:-40px;right:-20px;z-index:99;pointer-events:none}.deng-box1{position:fixed;top:-30px;right:10px;z-index:99;pointer-events:none}.deng-box2{position:fixed;top:-40px;left:-20px;z-index:99;pointer-events:none}.deng-box3{position:fixed;top:-30px;left:10px;z-index:99;pointer-events:none}.deng-box1 .deng,.deng-box3 .deng{position:relative;width:120px;height:90px;margin:50px;background:#d8000f;background:rgba(216,0,15,.8);border-radius:50% 50%;-webkit-transform-origin:50% -100px;-webkit-animation:swing 5s infinite ease-in-out;box-shadow:-5px 5px 30px 4px #fc903d}.deng{position:relative;width:120px;height:90px;margin:50px;background:#d8000f;background:rgba(216,0,15,.8);border-radius:50% 50%;-webkit-transform-origin:50% -100px;-webkit-animation:swing 3s infinite ease-in-out;box-shadow:-5px 5px 50px 4px #fa6c00}.deng-a{width:100px;height:90px;background:#d8000f;background:rgba(216,0,15,.1);margin:12px 8px 8px;border-radius:50% 50%;border:2px solid #dc8f03}.deng-b{width:45px;height:90px;background:#d8000f;background:rgba(216,0,15,.1);margin:-4px 8px 8px 26px;border-radius:50% 50%;border:2px solid #dc8f03}.xian{position:absolute;top:-20px;left:60px;width:2px;height:20px;background:#dc8f03}.shui-a{position:relative;width:5px;height:20px;margin:-5px 0 0 59px;-webkit-animation:swing 4s infinite ease-in-out;-webkit-transform-origin:50% -45px;background:orange;border-radius:0 0 5px 5px}.shui-b{position:absolute;top:14px;left:-2px;width:10px;height:10px;background:#dc8f03;border-radius:50%}.shui-c{position:absolute;top:18px;left:-2px;width:10px;height:35px;background:orange;border-radius:0 0 0 5px}.deng:before{position:absolute;top:-7px;left:29px;height:12px;width:60px;content:" ";display:block;z-index:999;border-radius:5px 5px 0 0;border:solid 1px #dc8f03;background:orange;background:linear-gradient(to right,#dc8f03,orange,#dc8f03,orange,#dc8f03)}.deng:after{position:absolute;bottom:-7px;left:10px;height:12px;width:60px;content:" ";display:block;margin-left:20px;border-radius:0 0 5px 5px;border:solid 1px #dc8f03;background:orange;background:linear-gradient(to right,#dc8f03,orange,#dc8f03,orange,#dc8f03)}.deng-t{font-family:华文行楷,Arial,Lucida Grande,Tahoma,sans-serif;font-size:3.5rem;color:#dc8f03;font-weight:700;line-height:85px;text-align:center}.night .deng-t,.night .shui-a,.night .shui-c{background:orange!important}.night .deng-a,.night .deng-b,.night .deng-box1 .deng,.night .deng-box3 .deng,.night .deng{background:#d8000f!important;box-shadow:-5px 5px 30px 4px #fc903d!important}@-webkit-keyframes swing{0%{-webkit-transform:rotate(-10deg)}50%{-webkit-transform:rotate(10deg)}100%{-webkit-transform:rotate(-10deg)}}

    /* 移动端隐藏灯笼 */
    @media (max-width: 768px) {
        .deng-box, .deng-box1, .deng-box2, .deng-box3 {
            display: none !important;
        }
    }
</style>
<!--灯笼-->
<div id="container"></div>
<script>
    function getDisplayText() {
        var currentTime = new Date();
        var currentMonth = currentTime.getMonth() + 1;
        var currentDate = currentTime.getDate();
        var currentHour = currentTime.getHours();
        var currentMinute = currentTime.getMinutes();
        var currentSecond = currentTime.getSeconds();

        if (currentMonth === 1 && currentDate === 1) {
            return "元旦快乐";
        }
        if (currentMonth === 12 && currentDate === 24) {
            return "岁岁平安";
        }
        if (currentMonth === 10 && currentDate === 1) {
            return "国庆快乐";
        }
        // 以下为不固定日期的事件
        if (currentMonth === 9 && currentDate === 25) {
            return "中秋快乐";
        }
        if (currentMonth === 2 && currentDate === 16) {
            return "除夕快乐";
        }

        return "四季如春";
    }

    // 生成灯笼HTML的函数
    function generateLanternHTML(text) {
        // 确保text是4个字符
        while (text.length < 4) {
            text += " "; // 如果不够4个字符，用空格补充
        }
        text = text.substring(0, 4); // 如果超过4个字符，截取前4个

        var container = document.getElementById("container");

        // 将HTML代码添加到容器
        container.innerHTML = `
<div class="deng-box2"><div class="deng"><div class="xian"></div><div class="deng-a"><div class="deng-b"><div class="deng-t">${text[0]}</div></div></div><div class="shui shui-a"><div class="shui-c"></div><div class="shui-b"></div></div></div></div><div class="deng-box3"><div class="deng"><div class="xian"></div><div class="deng-a"><div class="deng-b"><div class="deng-t">${text[1]}</div></div></div><div class="shui shui-a"><div class="shui-c"></div><div class="shui-b"></div></div></div></div><div class="deng-box1"><div class="deng"><div class="xian"></div><div class="deng-a"><div class="deng-b"><div class="deng-t">${text[2]}</div></div></div><div class="shui shui-a"><div class="shui-c"></div><div class="shui-b"></div></div></div></div><div class="deng-box"><div class="deng"><div class="xian"></div><div class="deng-a"><div class="deng-b"><div class="deng-t">${text[3]}</div></div></div><div class="shui shui-a"><div class="shui-c"></div><div class="shui-b"></div></div></div></div>
            `;
    }

    // 显示灯笼的函数
    function displayLanterns() {
        var displayText = getDisplayText();

        // 只在文本变化时更新DOM，避免不必要的重绘
        if (window.currentDisplayText !== displayText) {
            generateLanternHTML(displayText);
            window.currentDisplayText = displayText;

            // 控制台输出样式
            var console_displays = [
                "padding: 5px 10px; border-radius: 5px 0 0 5px; background-color: #f0c75e; font-weight: bold; color: #8b4513;",
                "padding: 5px 10px; border-radius: 0 5px 5px 0; background-color: #8b4513; font-weight: bold; color: #f0c75e;"
            ];

            var consoleMessage = "";
            if (displayText === "元旦快乐") {
                consoleMessage = "祝大家新年快乐！";
            } else if (displayText === "岁岁平安") {
                consoleMessage = "岁岁平 岁岁安 岁岁平安，年年岁岁 岁岁年年 平平安安！";
            } else if (displayText === "国庆快乐") {
                consoleMessage = "大家国庆快乐！";
            } else if (displayText === "中秋快乐") {
                consoleMessage = "水中有明月，碎碎圆圆；心中有良人，平平安安。";
            } else if (displayText === "除夕快乐") {
                consoleMessage = "愿大家在除夕，平安喜乐！";
            } else {
                consoleMessage = "愿大家心境，四季如春！";
            }

            // 输出控制台log - 左边displayText，右边祝福语
            console.log("%c" + displayText + "%c " + consoleMessage, console_displays[0], console_displays[1]);
        }
    }

    // 每200毫秒检查并显示灯笼
    var intervalId = setInterval(displayLanterns, 200);
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
            <p style="font-family: 'Cascadia Code', serif;">Hello, World！</p>
        </div>
        <div class="translated-Left_famous_saying-description translated-description Left_block" ondblclick="toggleTranslation('Left_famous_saying')">
            <p style="font-family: '楷体', serif;">你好, 世界！</p>
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
                        ?>
                        <div class="circle">
                            <a href="javascript:void(0)" onclick="handleSkillClick('<?php echo addslashes($skill); ?>')" rel="noopener noreferrer">
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
        <div class="welcome Name_Meaning-description" ondblclick="toggleTranslation('Name_Meaning')">𝐻𝑖, 𝐼'𝑚
            <div class="gradientText">𝒌𝒔𝒎𝒍𝒄</div>
        </div>
        <div class="welcome translated-Name_Meaning-description translated-description"
             ondblclick="toggleTranslation('Name_Meaning')">𝐻𝑖, 𝑤𝑒𝑙𝑐𝑜𝑚𝑒 𝑡𝑜
            <div class="gradientText">𝒌𝒔𝒎𝒍𝒄.𝒄𝒏</div>
        </div>
        <!-- 介绍个人 -->
        <div class="personal_career-description description" ondblclick='toggleTranslation("personal_career")'>
            🧑🏻‍💻 A <span class="purpleText">full-stack developer</span> who loves <span class="purpleText">Python</span> development, writing down my <span class="purpleText">passion</span> in the form of <span class="purpleText">code</span>!
        </div>
        <!-- 翻译个人 -->
        <div class="translated-personal_career-description translated-description description" ondblclick="toggleTranslation('personal_career')">
            🧑🏻‍💻 一名热爱<span class="purpleText">Python</span>开发的<span class="purpleText">全栈开发者</span>，以<span class="purpleText">代码</span>形式书写我所<span class="purpleText">热爱</span>！
        </div>

        <!-- 名言 -->
        <div class="famous_saying-description description" ondblclick='toggleTranslation("famous_saying")'>📋 If you <span class="purpleText textBackground">hesitate when facing a dilemma</span>, you may ask the <span class="purpleText textBackground">spring breeze</span>. The spring breeze <span class="purpleText textBackground">says nothing</span>; then follow your <span class="purpleText textBackground">original heart</span>. If my original heart is <span class="purpleText textBackground">firm</span>, <span class="purpleText textBackground">how could</span> I hesitate when facing a dilemma? The spring breeze has its own <span class="purpleText textBackground">sorrows</span> too; <span class="purpleText textBackground">spare</span> the spring breeze from <span class="purpleText textBackground">worrying</span> about me.</div>
        <!-- 翻译名言 -->
        <div class="translated-famous_saying-description translated-description description" ondblclick='toggleTranslation("famous_saying")'>📋 若<span class="purpleText textBackground">遇事不决</span>，可问<span class="purpleText textBackground">春风</span>，春风<span class="purpleText textBackground">不语</span>，既随<span class="purpleText textBackground">本心</span>。可我若本心<span class="purpleText textBackground">坚定</span>，又<span class="purpleText textBackground">怎会</span>遇事不决？春风也有春风<span class="purpleText textBackground">愁</span>，<span class="purpleText textBackground">不劳</span>春风为我<span class="purpleText textBackground">忧</span>。</div>        <div class="description" style="display: flex; align-items: center;">
            <span style="margin-right: 10px; font-weight: bold;">📢：</span>
            <div id="slogan" class="purpleText" style="font-weight: bold; font-family: 楷体;" ondblclick="copyText()">
                <?php
                // API 地址
                $apiUrl = 'https://api.ksmlc.cn/random_word/index.php';
                
                try {
                    // 创建上下文选项，设置超时和错误处理
                    $context = stream_context_create([
                        'http' => [
                            'timeout' => 10, // 10秒超时
                            'method' => 'GET',
                            'header' => [
                                'User-Agent: Mozilla/5.0 (compatible; YiyanClient/1.0)',
                                'Accept: application/json'
                            ]
                        ]
                    ]);
                    
                    // 获取远程 API 数据
                    $remoteContent = file_get_contents($apiUrl, false, $context);
                    
                    if ($remoteContent === false) {
                        throw new Exception('无法连接到一言 API');
                    }
                    
                    // 解析 JSON
                    $data = json_decode($remoteContent, true);
                    
                    if (json_last_error() !== JSON_ERROR_NONE) {
                        throw new Exception('API 响应格式错误');
                    }
                    
                    // 检查 API 是否返回错误
                    if (isset($data['error'])) {
                        throw new Exception($data['error']);
                    }
                    
                    // 输出一言内容
                    if (isset($data['yiyan']) && !empty($data['yiyan'])) {
                        echo htmlspecialchars($data['yiyan'], ENT_QUOTES, 'UTF-8');
                    } else {
                        throw new Exception('API 未返回有效的一言内容');
                    }
                    
                } catch (Exception $e) {
                    // 错误处理：显示友好的错误信息
                    error_log("一言获取失败: " . $e->getMessage());
                    echo '今日一言暂时无法获取，请稍后再试';
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

            // 检查ip_log.txt文件是否存在并处理访问计数逻辑
            $shouldLogAccess = true;
            $currentCount = 1;

            if (file_exists($ipLogFilePath)) {
                $ipLogData = file($ipLogFilePath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);

                if (!empty($ipLogData)) {
                    // 获取最后一条记录
                    $lastLogEntry = end($ipLogData);
                    $lastLogParts = explode("\t", $lastLogEntry);
                    $lastIp = isset($lastLogParts[1]) ? trim($lastLogParts[1]) : '';

                    // 如果当前IP与最后记录的IP相同，则不增加计数，也不记录新访问
                    if ($lastIp === $ipAddress) {
                        $shouldLogAccess = false;
                        $currentCount = count($ipLogData);
                    } else {
                        // 如果IP不同，则增加计数
                        $currentCount = count($ipLogData) + 1;
                    }
                } else {
                    // 文件存在但为空，这是第一次访问
                    $currentCount = 1;
                }
            }

            // 使用 file_get_contents 获取IP地址信息（更简单的方式）
            $apiUrl = "https://api.ksmlc.cn/IP/ip.php?ip=" . urlencode($ipAddress);
            $response = @file_get_contents($apiUrl);

            // 如果file_get_contents失败，尝试使用cURL
            if ($response === false) {
                $ch = curl_init();
                curl_setopt($ch, CURLOPT_URL, $apiUrl);
                curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
                curl_setopt($ch, CURLOPT_TIMEOUT, 5); // 设置超时时间为5秒
                curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); // 在开发环境中禁用SSL验证
                $response = curl_exec($ch);

                if (curl_errno($ch)) {
                    $error = curl_error($ch);
                    // 记录错误日志
                    error_log("cURL Error: " . $error);
                }

                curl_close($ch);
            }

            // 解析响应JSON数据
            $locationData = [
                'city' => '未知地点',
                'province' => '',
                'country' => '',
                'area' => ''
            ];

            if ($response !== false) {
                $responseData = json_decode($response, true);
                if (json_last_error() === JSON_ERROR_NONE && isset($responseData['data'])) {
                    $locationData = array_merge($locationData, $responseData['data']);
                }
            }

            // 输出IP地址、访问次数和城市信息
            echo "当前IP地址是：<span id='ipAddress'>" . htmlspecialchars($ipAddress) . "</span><br>";
            echo "来自：<span id='location'>" . htmlspecialchars($locationData['city']) . "</span><br>";
            echo "您是第 " . (int)$currentCount . " 次访问者";

            // 只有当需要记录访问时才保存到文件
            if ($shouldLogAccess) {
                $ipLogEntry = date('Y-m-d H:i:s') . "\t" . $ipAddress . PHP_EOL;
                $result = file_put_contents($ipLogFilePath, $ipLogEntry, FILE_APPEND | LOCK_EX);

                if ($result === false) {
                    // 记录错误日志
                    error_log("Failed to write to IP log file: " . $ipLogFilePath);
                }
            }
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
            <a class="iconItem" href="javascript:void(0)" onclick="popupImg('wx')">
                <img src="images/icon/微信.svg" alt="微信 Icon" width="22" height="22">
                <span class="tooltip">微信</span>
            </a>
            <!-- QQ图标 popupImg -->
            <a class="iconItem" href="javascript:void(0)" onclick="popupImg('qq')">
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
                            <button id="play-mode-btn" title="列表循环"><img id="play-mode-icon" src="./images/icon/循环播放.svg" alt="模式"></button>
                            <button id="view-songs-btn"><img src="./images/icon/音乐列表.svg" alt="音乐"></button>
                            <button id="prev-btn"><img src="./images/icon/音乐后退.svg" alt="上一首"></button>
                            <button id="play-pause-btn"><img src="./images/icon/音乐播放.svg" alt="播放"></button>
                            <button id="next-btn"><img src="./images/icon/音乐前进.svg" alt="下一首"></button>
                        </div>
                        <audio id="music-audio" src=""></audio>
                    </div>
                </div>

                <div id="songs-modal" class="chart-modal">
                    <div class="chart-modal-content">
                        <span class="close">&times;</span>
                        <h2>音乐列表</h2>
                        <div class="modal-controls-container">
                            <div class="playlist-select-container">
                                <select id="playlist-selector">
                                    <option value="" disabled selected>选择歌单...</option>
                                </select>
                            </div>
                            <div class="search-container">
                                <input type="text" id="song-search-input" placeholder="搜索歌曲名称">
                            </div>
                        </div>
                        <ul id="songs-list"></ul>
                    </div>
                </div>
            </div>
            <!--音乐结束-->
        </div>

        <!-- 悬浮歌词显示 -->
        <div id="floating-lyrics" class="floating-lyrics">
            <div class="floating-lyrics-content">
                <canvas id="audio-visualizer" class="audio-visualizer"></canvas>
                <div class="floating-lyrics-text" id="floating-lyrics-text">暂无歌词</div>
                <div class="floating-lyrics-controls">
                    <button id="floating-lyrics-close" class="floating-lyrics-close">&times;</button>
                </div>
            </div>
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
                // 生成更多项目项的 HTML 代码
                foreach ($projectItems as $item) {
                    echo '<a class="projectItem" target="_blank" href="' . $item["url"] . '">
    <!-- 网站列表开始 -->
    <div class="projectItemLeft">
        <h2>' . $item["title"] . '</h2>
        <p>' . $item["description"] . '</p>
    </div>
    <div class="projectItemRight">
        <img src="' . $item["image"] . '" alt="网站列表图标">
    </div>
    <!-- 网站列表结束 -->
</a>';
                }
                ?>
            </div>
            <!-- 网站列表结束 -->
            <!--标题图标文字-->
            <div class="title"><img src="images/icon/code.svg" alt="Projects Icon" width="22" height="22">
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

            <!--标题图标文字-->
            <div class="title"><img src="images/icon/github.svg" alt="ContribProjects Icon" width="22" height="22">
                <span class="ContribProjects-description" ondblclick='toggleTranslation("ContribProjects")'>Contrib</span>
                <span class="translated-ContribProjects-description ContribProjects-description Title_Hidden" ondblclick='toggleTranslation("ContribProjects")'>贡献项目</span></div>
            <!-- 贡献项目列表开始 -->
            <div class="projectList">
                <?php
                $ContribProjects = $data['ContribProjects'];
                // 生成更多项目项的 HTML 代码
                foreach ($ContribProjects as $item) {
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
</main>
    <!-- 模态框容器 -->
    <div id="popup" class="popup" onclick="hidePopup()">
        <div class="popup-content" onclick="event.stopPropagation()">
            <span class="close" onclick="hidePopup()">&times;</span>
            <img id="popup-img" class="popup-img" src="" alt="微信或QQ二维码图片">
        </div>
    </div>
</div>
<footer role="contentinfo">Copyright © 2023-2026 Website source code developed by ksmlc.<br><a href="https://beian.miit.gov.cn" target="_blank" rel="noopener noreferrer"><img src="https://ksmlc.cn/images/icon/ICP备案.ico" alt="备案图标" style="width: 16px; height: 16px; margin-right: 5px; vertical-align: middle;">桂ICP备2025078585号-1</a></footer>
</body>
<script src="js/mouse.js"></script>
<script src="./js/time.js"></script>
<script src="js/script.js"></script>
</html>