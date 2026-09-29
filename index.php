<?php
session_start();
// Sesija atceras pēdējo spēlētāju, lai pēc lapas pārlādes nav jāievada vārds no jauna
$player = $_SESSION['player'] ?? '';
?>
<!DOCTYPE html>
<html lang="lv">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Truck Clicker</title>
    <link rel="stylesheet" href="css/base.css">
    <link rel="stylesheet" href="css/truck.css">
    <link rel="stylesheet" href="css/shop.css">
    <link rel="stylesheet" href="css/settings.css">
</head>
<body>
<div class="layout">

    <main class="game">
        <header class="topbar">
            <div class="brand">
                <h1>Truck Clicker</h1>
                <span>kravu pārvadājumi</span>
            </div>
            <div class="buttons">
                <button id="bonusButton" class="bonus-btn" disabled>Nakts maiņa</button>
                <button id="saveButton">Saglabāt</button>
                <button id="settingsButton">Iestatījumi</button>
            </div>
        </header>

        <div class="plate">
            <span class="plate-eu">LV</span>
            <span class="plate-num">€<span id="score">0</span></span>
        </div>
        <div class="stats" id="stats"></div>

        <div class="odo">
            <div class="odo-row"><span id="stageName"></span><span id="progressText"></span></div>
            <div class="odo-bar"><div id="progressBar"></div></div>
        </div>

        <div id="stage">
            <div id="truckWrap" class="stage-0">
                <span id="badge">1</span>
                <input type="image" src="assets/images/truck.png" name="truck" id="truck" alt="Kravas auto">
            </div>
        </div>
        <small id="status"></small>
    </main>

    <aside class="shop">
        <div class="tabs">
            <button class="tab active" data-tab="fleet">Flote</button>
            <button class="tab" data-tab="upgrades">Uzlabojumi</button>
        </div>
        <div class="sheet">
            <div id="fleetList"></div>
            <div id="upgradesList" hidden></div>
        </div>
    </aside>

</div>

<div id="settingsMenu" class="settings-menu">
    <div class="settings-box">
        <h2>Iestatījumi</h2>
        <label>Skaļums <input type="range" id="volume" min="0" max="1" step="0.05" value="0.6"></label>
        <label><input type="checkbox" id="mute"> Izslēgt skaņu</label>
        <button id="changePlayer">Mainīt spēlētāju</button>
        <button id="resetButton">Sākt no jauna</button>
        <button id="closeSettings">Aizvērt</button>
    </div>
</div>

<div id="nameScreen" class="settings-menu">
    <div class="settings-box">
        <h2>Šofera vārds</h2>
        <input type="text" id="nameInput" maxlength="20" placeholder="Ieraksti vārdu">
        <button id="startButton">Sākt darbu</button>
    </div>
</div>

<div id="banner"></div>

<script>window.PLAYER = <?= json_encode($player, JSON_UNESCAPED_UNICODE) ?>;</script>
<script src="js/config.js"></script>
<script src="js/state.js"></script>
<script src="js/sound.js"></script>
<script src="js/calc.js"></script>
<script src="js/truck.js"></script>
<script src="js/shop.js"></script>
<script src="js/save.js"></script>
<script src="js/main.js"></script>
</body>
</html>
