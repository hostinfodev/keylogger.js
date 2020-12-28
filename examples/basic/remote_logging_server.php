<?php
//CONFIG
$allowFrom = "*";
$fileName = "logging.txt";
?>

<?php
// HEADERS
ini_set('max_execution_time', 30);
header("Access-Control-Allow-Origin: $allowFrom");

// ENSURE POST ONLY
if ($_SERVER['REQUEST_METHOD'] != 'POST')
{
    header('Location: /');
}

// GET POST INPUT
$postData = file_get_contents('php://input');

// APPEND DATA TO LOG
$myfile = file_put_contents($fileName, "\r\n$postData, FILE_APPEND | LOCK_EX);
?>
