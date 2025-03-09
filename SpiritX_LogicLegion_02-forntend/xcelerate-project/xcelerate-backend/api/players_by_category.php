<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

include '../db.php';

$category = $_GET['category_id'];

$sql = "SELECT * FROM players WHERE category_id = '$category'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  $players = array();
  while ($row = $result->fetch_assoc()) {
    $players[] = $row;
  }
  echo json_encode($players);
} else {
  echo json_encode([]);
}

$conn->close();
?>