<?php
include 'conn.php';
$userIs = isset($_GET['userId'])?$_GET['userId'] :'15814891105';
$sql = "SELECT * from orders where Usid =$userIs";
$res = $conn->query($sql);
$content = $res->fetch_all(MYSQLI_ASSOC);
echo json_encode($content,JSON_UNESCAPED_UNICODE);
?>