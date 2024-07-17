<?php
// Đường dẫn tới tệp JSON
$json_file = 'plugin.json';

// Kiểm tra xem tệp JSON có tồn tại không
if (!file_exists($json_file)) {
    die("Tệp $json_file không tồn tại.");
}

// Đọc nội dung tệp JSON
$json_content = file_get_contents($json_file);
$plugins = json_decode($json_content, true);

// Kiểm tra lỗi trong quá trình giải mã JSON
if (json_last_error() !== JSON_ERROR_NONE) {
    die("Lỗi trong quá trình giải mã JSON: " . json_last_error_msg());
}

// Duyệt qua từng plugin và tải xuống
foreach ($plugins['list'] as $plugin) {
    $name = $plugin['name'];
    $versions = $plugin['versions'];

    echo "Đang xử lý plugin: $name\n";

    // Duyệt qua từng phiên bản của plugin và tải xuống
    foreach ($versions as $version_info) {
        $version = $version_info['full_version'];

        // Tạo URL tải xuống từ thông tin name và version
        $url = "https://bt.maxcdn.top/api/download_plugin";

        // Cấu hình cURL
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query([
            'name' => $name,
            'version' => $version,
            'os' => 'Linux',
            'environment_info' => '{}'
        ]));
        curl_setopt($ch, CURLOPT_HEADER, false);
        curl_setopt($ch, CURLOPT_TIMEOUT, 60);

        // Đường dẫn lưu file
        $file_path = "${name}_${version}.zip";
        $file = fopen($file_path, 'w');

        curl_setopt($ch, CURLOPT_FILE, $file);

        // Thực thi cURL
        $response = curl_exec($ch);

        // Kiểm tra lỗi cURL
        if (curl_errno($ch)) {
            echo 'Lỗi cURL: ' . curl_error($ch) . "\n";
        } else {
            echo "Đã tải xuống $name phiên bản $version\n";
        }

        // Đóng cURL
        curl_close($ch);
        fclose($file);
    }
}

echo "Hoàn thành tải xuống tất cả plugin.\n";
?>
