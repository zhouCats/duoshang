<?php
include 'conn.php';

$userIs = isset($_GET['isphone'])?$_GET['isphone'] :'15814891105';

$sql = "SELECT * from dsUserInf where Uphone =$userIs";
$res = $conn->query($sql);
// var_dump($res);
if($res->num_rows){
    echo 'yes';
}else{
    echo 'no';
}
?>