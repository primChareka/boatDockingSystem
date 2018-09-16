<?php
$myPDO = new PDO('mysql:host=localhost;dbname=hackNorth', 'root', '');
$result = $myPDO->query("SELECT numBoats from boatsDocked LIMIT 1");
$row = $result->fetch(PDO::FETCH_ASSOC);
$val = $row['numBoats'];
echo $val;
?>
