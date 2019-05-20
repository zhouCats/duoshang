<?php
include 'conn.php';
$page = isset($_GET['page']) ? $_GET['page'] : '1';
$num = isset($_GET['num']) ? $_GET['num'] : '4';
$type = isset($_GET['type']) ? $_GET['type'] : '';

$index = ($page - 1) * $num;
if($type) {
    //不为空：意味已经有值传过来，需要排序
    $sql = "SELECT * FROM dsgoodlist ORDER BY $type LIMIT $index,$num";
}else {
    //空：没有传值过来，不需要排序
    $sql = "SELECT * FROM dsgoodlist LIMIT $index,$num";
}
$res = $conn->query($sql);//结果集
	
	//需求：要数据
$content = $res->fetch_all(MYSQLI_ASSOC);

echo json_encode($content,JSON_UNESCAPED_UNICODE);
?>