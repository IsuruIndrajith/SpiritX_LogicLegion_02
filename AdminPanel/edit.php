<?php
// edit.php
require_once 'includes/db.php';
include 'includes/header.php';

if (!isset($_GET['player_name'])) {
    echo "Player name not provided.";
    exit;
}

$playerName = $conn->real_escape_string($_GET['player_name']);

// Process form submission to update the player record.
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $conn->real_escape_string($_POST['name']);
    $university = $conn->real_escape_string($_POST['university']);
    $category = $conn->real_escape_string($_POST['category']);
    $total_runs = intval($_POST['total_runs']);
    $balls_faced = intval($_POST['balls_faced']);
    $innings_played = intval($_POST['innings_played']);
    $wickets = intval($_POST['wickets']);
    $overs_bowled = floatval($_POST['overs_bowled']);
    $runs_conceded = intval($_POST['runs_conceded']);

    $sql = "UPDATE sample_data SET 
        `Name`='$name', 
        `University`='$university', 
        `Category`='$category', 
        `Total Runs`=$total_runs, 
        `Balls Faced`=$balls_faced, 
        `Innings Played`=$innings_played, 
        `Wickets`=$wickets, 
        `Overs Bowled`=$overs_bowled, 
        `Runs Conceded`=$runs_conceded
    WHERE `Name`='$playerName'";
            
    if ($conn->query($sql) === TRUE) {
        echo "<p>Player updated successfully.</p>";
    } else {
        echo "<p>Error: " . $conn->error . "</p>";
    }
}

// Fetch the player's current data.
$sql = "SELECT * FROM sample_data WHERE `Name`='$playerName'";
$result = $conn->query($sql);
if ($result->num_rows == 0) {
    echo "<p>Player not found.</p>";
    include 'includes.footer.php';
    exit;
}
$player = $result->fetch_assoc();
?>

<h2>Edit Player</h2>
<form method="post" action="">
    <label>Name: <input type="text" name="name" value="<?php echo htmlspecialchars($player['Name']); ?>" required></label><br>
    <label>University: <input type="text" name="university" value="<?php echo htmlspecialchars($player['University']); ?>" required></label><br>
    <label>Category: <input type="text" name="category" value="<?php echo htmlspecialchars($player['Category']); ?>" required></label><br>
    <label>Total Runs: <input type="number" name="total_runs" value="<?php echo htmlspecialchars($player['Total Runs']); ?>" required></label><br>
    <label>Balls Faced: <input type="number" name="balls_faced" value="<?php echo htmlspecialchars($player['Balls Faced']); ?>" required></label><br>
    <label>Innings Played: <input type="number" name="innings_played" value="<?php echo htmlspecialchars($player['Innings Played']); ?>" required></label><br>
    <label>Wickets: <input type="number" name="wickets" value="<?php echo htmlspecialchars($player['Wickets']); ?>" required></label><br>
    <label>Overs Bowled: <input type="text" name="overs_bowled" value="<?php echo htmlspecialchars($player['Overs Bowled']); ?>" required></label><br>
    <label>Runs Conceded: <input type="number" name="runs_conceded" value="<?php echo htmlspecialchars($player['Runs Conceded']); ?>" required></label><br>
    <button type="submit">Update Player</button>
</form>

<?php include 'includes/footer.php'; ?>