<?php
function isZipFile($file) {
    // Kiểm tra xem tệp có tồn tại không
    if (!file_exists($file)) {
        return false;
    }

    // Mở tệp ở chế độ đọc nhị phân
    $handle = fopen($file, 'rb');
    if ($handle === false) {
        return false;
    }

    // Đọc 4 byte đầu tiên của tệp
    $signature = fread($handle, 4);
    fclose($handle);

    // So sánh với chữ ký của tệp ZIP
    return $signature === "\x50\x4b\x03\x04";
}

$directory = '/www/wwwroot/api.ht4gvpn.com/public/down/download_plugin';
$files = scandir($directory);

foreach ($files as $file) {
    if (pathinfo($file, PATHINFO_EXTENSION) === 'zip') {
        $filePath = $directory . '/' . $file;
        if (isZipFile($filePath)) {
            echo "$file            CÓ\n";
        } else {
            echo "$file            KHÔNG\n";
        }
    }
}
?>
