<?php
include 'conn.php';

$Uid = isset($_GET['Uid']) ? $_GET['Uid'] : '';
// echo $Uid;
$sql = "SELECT * FROM dsgoodlist where gid=$Uid";
$res = $conn->query($sql);
$content = $res->fetch_all(MYSQLI_ASSOC);
echo json_encode($content,JSON_UNESCAPED_UNICODE);
?>