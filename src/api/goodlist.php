<?php
include 'conn.php';
    // echo 'ok';
$gdsnums = isset($_GET['gdsnum'])?$_GET['gdsnum'] :'15';
$pages = isset($_GET['page'])?$_GET['page'] :'1';
$page = $pages -1;
$gdsnum = $pages * $gdsnums;
$sql ="SELECT * FROM dsgoodlist LIMIT $page,$gdsnum";
$res = $conn->query($sql);
$content = $res->fetch_all(MYSQLI_ASSOC);
echo json_encode($content,JSON_UNESCAPED_UNICODE);
?>