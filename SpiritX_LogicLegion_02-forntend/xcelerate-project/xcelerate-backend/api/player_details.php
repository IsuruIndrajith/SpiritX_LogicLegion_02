<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *"); 

include '../db.php';

$player_id = $_GET['id'];

$sql = "SELECT * FROM players WHERE id = $player_id";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  $player = $result->fetch_assoc();
  echo json_encode($player);
} else {
  echo json_encode(["error" => "Player not found"]);
}

$conn->close();
?>