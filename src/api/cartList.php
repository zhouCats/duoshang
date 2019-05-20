<?php
include 'conn.php';
$goods = isset($_GET['goods'])?$_GET['goods'] :'15814891105';
$sql = "SELECT * from dsgoodlist where Gid =$goods";
$res = $conn->query($sql);
$content = $res->fetch_all(MYSQLI_ASSOC);
echo json_encode($content,JSON_UNESCAPED_UNICODE);
?>