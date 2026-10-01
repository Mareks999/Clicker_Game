<?php

require __DIR__ . '/config.php';
session_start();

$name = clean_name($_GET['name'] ?? ($_SESSION['player'] ?? ''));
if ($name === '') respond(['ok' => false]);
$_SESSION['player'] = $name;

$path = save_path($name);
if (!is_file($path)) respond(['ok' => true, 'state' => null]); 

$record = json_decode(file_get_contents($path), true);
respond(['ok' => true, 'state' => clean_state($record['state'] ?? null)]);
