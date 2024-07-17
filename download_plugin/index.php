<?php
$file = '/www/wwwroot/api.ht4gvpn.com/public/down/download_plugin/task_manager.zip';
if (file_exists($file)) {
    $md5 = md5_file($file);
    header('Content-Type: application/zip');
    header('Content-Disposition: attachment; filename="' . basename($file) . '"');
    header('File-size: ' . filesize($file));
    header('Content-md5: ' . $md5); 
    header('Content-Transfer-Encoding: binary');
    header('Cache-Control: no-cache, no-store, must-revalidate');
    header('Pragma: no-cache');
    header('Expires: 0');
    readfile($file);
    exit;
} else {
    http_response_code(404);
    echo json_encode(['error' => 'File not found.']);
}
?>
