<?php

const SAVE_DIR = __DIR__ . '/../data/saves/';
const UPGRADE_KEYS = ['engine', 'tires', 'turbo', 'contracts', 'crit', 'shift', 'driver', 'van', 'trailer', 'depot', 'route', 'port'];

function respond(array $data): void {
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($data, JSON_UNESCAPED_UNICODE);
    exit;
}

function clean_name($name): string {
    $name = preg_replace('/[^\p{L}\p{N} _-]/u', '', trim((string)$name));
    return mb_substr($name, 0, 20);
}

function save_path(string $name): string {
    return SAVE_DIR . sha1(mb_strtolower($name)) . '.json';
}


function clean_state($state): ?array {
    if (!is_array($state)) return null;
    $clean = [
        'points'      => max(0, (int)($state['points'] ?? 0)),
        'totalEarned' => max(0, (int)($state['totalEarned'] ?? 0)),
        'levels'      => [],
    ];
    foreach (UPGRADE_KEYS as $key) {
        $clean['levels'][$key] = max(0, min(999, (int)($state['levels'][$key] ?? 0)));
    }
    return $clean;
}
