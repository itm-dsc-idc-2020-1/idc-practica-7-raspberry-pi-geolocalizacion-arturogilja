<?php
$servername="localhost";
$username="root";
$password="";
$database="mapas";

$conn =  mysqli_connect($servername,$username,$password,$database);

mysqli_set_charset($conn, "utf8");

if(!$conn)
	echo "Connection Failed: " . mysqli_connect_error();

// // Create connection
// $conn = new mysqli($servername, $username, $password, $dbname);
// // Check connection
// if ($conn->connect_error) {
//     die("Connection failed: " . $conn->connect_error);
// } 

?>