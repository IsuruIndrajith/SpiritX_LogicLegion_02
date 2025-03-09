<?php
// tournament_summary.php
require_once 'includes/db.php';
include 'includes/header.php';

// Calculate overall statistics
$sql = "SELECT 
            SUM(`Total Runs`) AS total_runs,
            AVG(`Total Runs`) AS avg_runs,
            SUM(`Wickets`) AS total_wickets,
            COUNT(*) AS total_players
        FROM sample_data";
$result = $conn->query($sql);
$summary = $result->fetch_assoc();


// Determine highest run-scorer
$sql_highest_runs = "SELECT `Name` AS player_name, `Total Runs` AS total_runs
                     FROM sample_data
                     ORDER BY `Total Runs` DESC
                     LIMIT 1 OFFSET 1";
$result_highest_runs = $conn->query($sql_highest_runs);
$highest_run_scorer = $result_highest_runs->fetch_assoc();


// Determine highest wicket-taker
$sql_highest_wickets = "SELECT `Name` AS player_name, `Wickets` AS total_wickets
                        FROM sample_data
                        ORDER BY `Wickets` DESC
                        LIMIT 1 OFFSET 1";
$result_highest_wickets = $conn->query($sql_highest_wickets);
$highest_wicket_taker = $result_highest_wickets->fetch_assoc();

?>

<h2>Tournament Summary</h2>
<table border="1" cellspacing="0" cellpadding="5">
    <tr>
        <th>Total Players</th>
        <td><?php echo htmlspecialchars($summary['total_players']); ?></td>
    </tr>
    <tr>
        <th>Total Runs</th>
        <td><?php echo htmlspecialchars($summary['total_runs']); ?></td>
    </tr>
    <tr>
        <th>Average Runs</th>
        <td><?php echo number_format($summary['avg_runs'], 2); ?></td>
    </tr>
    <tr>
        <th>Total Wickets</th>
        <td><?php echo htmlspecialchars($summary['total_wickets']); ?></td>
    </tr>
    <tr>
        <th>Highest Run-Scorer</th>
        <td><?php echo htmlspecialchars($highest_run_scorer['player_name']) . " (" . htmlspecialchars($highest_run_scorer['total_runs']) . " runs)"; ?></td>
    </tr>
    <tr>
        <th>Highest Wicket-Taker</th>
        <td><?php echo htmlspecialchars($highest_wicket_taker['player_name']) . " (" . htmlspecialchars($highest_wicket_taker['total_wickets']) . " wickets)"; ?></td>
    </tr>
</table>

<?php include 'includes/footer.php'; ?>