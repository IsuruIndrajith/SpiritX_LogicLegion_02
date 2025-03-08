<?php
require_once 'includes/db.php';
include 'includes/header.php';

// Retrieve all players from the database.
$sql = "SELECT * FROM sample_data";
$result = $conn->query($sql);
?>

<h2>Player List</h2>
<table border="1" cellspacing="0" cellpadding="5">
    <?php if ($result->num_rows > 0): ?>
        <?php while ($row = $result->fetch_assoc()): ?>
            <tr>
                <td><?php echo htmlspecialchars($row['COL 1']); ?></td>
                <td><?php echo htmlspecialchars($row['COL 2']); ?></td>
                <td><?php echo htmlspecialchars($row['COL 3']); ?></td>
                <td><?php echo htmlspecialchars($row['COL 4']); ?></td>
                <td>
                    <a href="view.php?player_name=<?php echo urlencode($row['COL 1']); ?>">View</a>
                    <a href="edit.php?player_name=<?php echo urlencode($row['COL 1']); ?>">Edit</a>
                    <a href="delete.php?player_name=<?php echo urlencode($row['COL 1']); ?>" onclick="return confirm('Are you sure?');">Delete</a>
                </td>
            </tr>
        <?php endwhile; ?>
    <?php else: ?>
        <tr>
            <td colspan="5">No players found.</td>
        </tr>
    <?php endif; ?>
</table>

<?php include 'includes/footer.php'; ?>