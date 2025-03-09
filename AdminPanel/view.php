<?php
// view.php
require_once 'includes/db.php';
include 'includes/header.php';

// Check if the unique identifier ("player_name") is provided via GET.
if (!isset($_GET['player_name'])) {
    echo "Player name not provided.";
    exit;
}

// Since "player_name" contains a string (the unique name), we do not use intval().
$playerName = $conn->real_escape_string($_GET['player_name']);

// Note: If your column name contains spaces, enclose it in backticks in your SQL query.
$sql = "SELECT * FROM sample_data WHERE `Name` = '$playerName'";
$result = $conn->query($sql);

if ($result->num_rows == 0) {
    echo "<p>Player not found.</p>";
    include 'includes/footer.php';
    exit;
}

$player = $result->fetch_assoc();
?>

<h2>Player Detailed Stats</h2>
<table border="1" cellspacing="0" cellpadding="5">
    <tr>
        <th>Name</th>
        <td><?php echo htmlspecialchars($player['Name']); ?></td>
    </tr>
    <tr>
        <th>University</th>
        <td><?php echo htmlspecialchars($player['University']); ?></td>
    </tr>
    <tr>
        <th>Category</th>
        <td><?php echo htmlspecialchars($player['Category']); ?></td>
    </tr>
    <tr>
        <th>Total Runs</th>
        <td><?php echo htmlspecialchars($player['Total Runs']); ?></td>
    </tr>
    <tr>
        <th>Balls Faced</th>
        <td><?php echo htmlspecialchars($player['Balls Faced']); ?></td>
    </tr>
    <tr>
        <th>Innings Played</th>
        <td><?php echo htmlspecialchars($player['Innings Played']); ?></td>
    </tr>
    <tr>
        <th>Wickets</th>
        <td><?php echo htmlspecialchars($player['Wickets']); ?></td>
    </tr>
    <tr>
        <th>Overs Bowled</th>
        <td><?php echo htmlspecialchars($player['Overs Bowled']); ?></td>
    </tr>
    <tr>
        <th>Runs Conceded</th>
        <td><?php echo htmlspecialchars($player['Runs Conceded']); ?></td>
    </tr>
</table>

<p>
    <!-- Adjust the edit link to pass the unique column "player_name" instead of an id -->
    <a href="edit.php?player_name=<?php echo urlencode($player['Name']); ?>">Edit Player</a> | 
    <a href="index.php">Back to Player List</a>
</p>

<?php include 'includes/footer.php'; ?>