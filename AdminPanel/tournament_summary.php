<?php
// tournament_summary.php
require_once 'includes/db.php';
include 'includes/header.php';

// Calculate overall statistics.
$sql = "SELECT 
            SUM(`COL 4`) AS total_runs,
            AVG(`COL 4`) AS avg_runs,
            SUM(`COL 7`) AS total_wickets,
            COUNT(*) AS total_players
        FROM sample_data";
$result = $conn->query($sql);
$summary = $result->fetch_assoc();
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
</table>

<?php include 'includes/footer.php'; ?>