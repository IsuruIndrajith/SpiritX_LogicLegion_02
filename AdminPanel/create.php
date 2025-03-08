<?php
// create.php
require_once 'includes/db.php';
include 'includes/header.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and collect form data.
    $name = $conn->real_escape_string($_POST['name']);
    $university = $conn->real_escape_string($_POST['university']);
    $category = $conn->real_escape_string($_POST['category']);
    $total_runs = intval($_POST['total_runs']);
    $balls_faced = intval($_POST['balls_faced']);
    $innings_played = intval($_POST['innings_played']);
    $wickets = intval($_POST['wickets']);
    $overs_bowled = floatval($_POST['overs_bowled']);
    $runs_conceded = intval($_POST['runs_conceded']);

    $sql = "INSERT INTO players (Name, University, Category, `Total Runs`, `Balls Faced`, `Innings Played`, Wickets, `Overs Bowled`, `Runs Conceded`)
            VALUES ('$name', '$university', '$category', $total_runs, $balls_faced, $innings_played, $wickets, $overs_bowled, $runs_conceded)";
            
    if ($conn->query($sql) === TRUE) {
        echo "<p>New player added successfully.</p>";
    } else {
        echo "<p>Error: " . $conn->error . "</p>";
    }
}
?>

<h2>Add New Player</h2>
<form method="post" action="">
    <label>Name: <input type="text" name="name" required></label><br>
    <label>University: <input type="text" name="university" required></label><br>
    <label>Category: <input type="text" name="category" required></label><br>
    <label>Total Runs: <input type="number" name="total_runs" required></label><br>
    <label>Balls Faced: <input type="number" name="balls_faced" required></label><br>
    <label>Innings Played: <input type="number" name="innings_played" required></label><br>
    <label>Wickets: <input type="number" name="wickets" required></label><br>
    <label>Overs Bowled: <input type="text" name="overs_bowled" required></label><br>
    <label>Runs Conceded: <input type="number" name="runs_conceded" required></label><br>
    <button type="submit">Add Player</button>
</form>

<?php include 'includes/footer.php'; ?>
