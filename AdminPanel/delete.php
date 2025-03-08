<?php
// delete.php
require_once 'includes/db.php';

if (!isset($_GET['player_name'])) {
    echo "Player name not provided.";
    exit;
}

$playerName = $conn->real_escape_string($_GET['player_name']);

$sql = "DELETE FROM sample_data WHERE `COL 1`='$playerName'";
if ($conn->query($sql) === TRUE) {
    // Redirect back to the index page after deletion.
    header("Location: index.php");
    exit;
} else {
    echo "Error: " . $conn->error;
}
?>