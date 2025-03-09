// db.php
<?php
$host = "127.0.0.1";
$username = "thilina";
$password = "12345678";
$database = "xcelerate_db";

$conn = new mysqli($host, $username, $password, $dbname);

if ($conn->connect_error) {
    error_log("Database connection failed: " . $conn->connect_error);
    die("Connection failed: " . $conn->connect_error);
}

$conn->set_charset("utf8mb4");
?>