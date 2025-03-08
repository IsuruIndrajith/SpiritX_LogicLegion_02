<?php
// delete.php
require_once 'includes/db.php';

if (!isset($_GET['id'])) {
    echo "Player ID not provided.";
    exit;
}

$id = intval($_GET['id']);

$sql = "DELETE FROM players WHERE id=$id";
if ($conn->query($sql) === TRUE) {
    // Redirect back to the index page after deletion.
    header("Location: index.php");
    exit;
} else {
    echo "Error: " . $conn->error;
}
?>
