<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

include '../db.php';

$sql = "SELECT * FROM leaderboard ORDER BY points DESC";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  $leaderboard = array();
  while ($row = $result->fetch_assoc()) {
    $leaderboard[] = $row;
  }
  echo json_encode($leaderboard);
} else {
  echo json_encode([]);
}

$conn->close();
?>