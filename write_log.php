<?php
// 日志文件路径
$logFile = 'debug_log.txt';

// 获取请求体中的日志内容
$logContent = file_get_contents('php://input');

// 确保有内容
if (!empty($logContent)) {
    // 写入日志文件
    $result = file_put_contents($logFile, $logContent, FILE_APPEND);
    if ($result === false) {
        http_response_code(500);
        echo '写入日志失败';
    } else {
        http_response_code(200);
        echo '日志写入成功';
    }
} else {
    http_response_code(400);
    echo '没有提供日志内容';
}
?>