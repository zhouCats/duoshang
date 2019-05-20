<?php
include 'conn.php';
$shopNum = isset($_POST['shopNum'])?$_POST['shopNum']:'';
$shopColor = isset($_POST['shopColor'])?$_POST['shopColor']:'';
$shopId = isset($_POST['shopId'])?$_POST['shopId']:'';
$userIds = isset($_POST['userIds'])?$_POST['userIds']:'';
$shopP = isset($_POST['shopP'])?$_POST['shopP']:'';
$shopImg = isset($_POST['shopImg'])?$_POST['shopImg']:'';
$shopTitle = isset($_POST['shopTitle'])?$_POST['shopTitle']:'';
$sql="INSERT INTO orders(Usid,Gid,Gnum,Gcolor,Gimg,Gtitle,Gprice)VALUES($userIds,$shopId,$shopNum,'$shopColor','$shopImg','$shopTitle',$shopP)";
$res=$conn->query($sql);
if($res){
    echo 'yes';
}else{
    echo 'no';
}
?>