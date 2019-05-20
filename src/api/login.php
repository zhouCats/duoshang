<?php
include 'conn.php';
$userTel = isset($_POST['username'])?$_POST['username'] :'15814891106';
$userpwd = isset($_POST['userpwd'])?$_POST['userpwd'] :'123456789';
// echo $type;
$sql = "SELECT * FROM dsuserinf WHERE Uphone = $userTel AND Upwd =$userpwd;";
$res = $conn->query($sql);
    // var_dump($res);
    if($res->num_rows){
        echo 'yes';
    }else{
        echo 'no';
}
?>