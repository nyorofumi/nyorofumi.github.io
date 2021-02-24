<?php

$json = '{
"notification":
{
    "title": "テスト送信",
    "body": "This Is 送信テストです"
},
"to": "d2JwRXVCDR4:APA91bFHnRPeJPmtZ5LFMrNTmPRXAKdE-d9myW_fl-ONbPcSlzlT7jOz-GO1w3YXT7l2aV4SiKuA4qIUwq3BTjyZsd10PuVj_QFefwv3isvRW9CQ1HSQoIKU3cqhJtEgR288jhcrD4dV"}';

$ch = curl_init();

$headers = array(
    'Content-Type: application/json',
    'Authorization: key=AAAAFI4qAe0:APA91bG8coZbR1L6eSF2BL5u41eQRQZWwpMUZJg15I8lHKcpxYDkjFL-RIxE_wzXrCAN0RAwsphRrS1PwG7CyvyF0rCVEMOMH_qsP7z4JMij1Yhuzr8BIBiGQGUHuUzO3bTNpGbRKKg_'
);

curl_setopt_array($ch, array(
    CURLOPT_URL => 'https://fcm.googleapis.com/fcm/send',
    CURLOPT_HTTPHEADER => $headers,
    CURLOPT_SSL_VERIFYPEER => true,
    CURLOPT_POST => true,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POSTFIELDS => $json
));

$response = curl_exec($ch);

curl_close($ch);

?>
