<?php
include 'conn.php';
$nums = isset($_GET['nums'])?$_GET['nums'] :'';
$numIds = isset($_GET['numIds'])?$_GET['numIds'] :'';
$sql = "UPDATE orders SET Gnum =$nums WHERE id=$numIds";
$res = $conn->query($sql);
echo $res;
?>