<?php
if (isset($_POST["value"])) {
  $value = $_POST["value"];

  $myPDO = new PDO('mysql:host=localhost;dbname=hackNorth', 'root', '');
  $result = $myPDO->query("UPDATE boatsDocked SET numBoats =$value");
  echo $value;
}
?>
