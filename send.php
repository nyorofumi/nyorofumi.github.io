<?php

$json = '{
"notification":
{
    "title": "テスト送信",
    "body": "This Is 送信テストです"
},
"to": "e0jYEv334RU:APA91bF1vaykfiaAJbdufttlQC6C5NWP0-s8D1mq293m3HPV50Vvjcwms7fMkPRJfuLu3es38osGtF0VPr9dRQUKZqjl4oayhx31B5UIunXfDBf_Wmre9jxhNFtImn3kxNNaT8612Lrs"}';

$ch = curl_init();

$headers = array(
    'Content-Type: application/json',
    'Authorization: key=AAAAFI4qAe0:APA91bG8coZbR1L6eSF2BL5u41eQRQZWwpMUZJg15I8lHKcpxYDkjFL-RIxE_wzXrCAN0RAwsphRrS1PwG7CyvyF0rCVEMOMH_qsP7z4JMij1Yhuzr8BIBiGQGUHuUzO3bTNpGbRKKg_'
);

curl_setopt_array($ch, array(
    CURLOPT_URL => 'https://fcm.googleapis.com/fcm/send',
    CURLOPT_HTTPHEADER => $headers,
    CURLOPT_SSL_VERIFYPEER => false,
    CURLOPT_POST => true,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POSTFIELDS => $json
));

$response = curl_exec($ch);

curl_close($ch);

?>
