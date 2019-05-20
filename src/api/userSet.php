<?php
include 'conn.php';
$userTel = isset($_POST['userphone'])?$_POST['userphone'] :'15814891106';
$userpwd = isset($_POST['userpwd'])?$_POST['userpwd'] :'123456789';
$sql = "INSERT INTO dsUserInf(Uphone,Upwd)VALUES($userTel,$userpwd);";
$res = $conn->query($sql);
echo $res;
?>