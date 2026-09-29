<?php
// Saglabā spēlētāja progresu failā data/saves/<hash>.json
require __DIR__ . '/config.php';
session_start();

$input = json_decode(file_get_contents('php://input'), true);
$name  = clean_name($input['name'] ?? '');
$state = clean_state($input['state'] ?? null);

if ($name === '' || $state === null) respond(['ok' => false]);

$_SESSION['player'] = $name;
$record = ['name' => $name, 'state' => $state, 'updated' => date('c')];
$ok = file_put_contents(save_path($name), json_encode($record, JSON_UNESCAPED_UNICODE), LOCK_EX);
respond(['ok' => $ok !== false]);
