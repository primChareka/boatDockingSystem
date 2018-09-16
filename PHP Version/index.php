<!DOCTYPE html>
<html>
<head>
  <style>
body{
  background-color: "#111AA66";
}
  </style>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="google-site-verification" content="VMNLH54MU__Fgf0gVo2oVeRaja5ec6i0pmehMB4Ds1U" />
  <title>FleetKit</title>
  <link href="/hackNorth/css/style.css" rel="stylesheet">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="/hackNorth/js/jquery-1.9.0.js"></script>
  <script src="/hackNorth/js/docked.js"></script>
</head>
<body>
  <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <ul class="nav navbar-nav">
        <li><a href="index.php">Dock Map</a></li>
        <li><a href="schedule.php">Schedule</a></li>
      </ul>
    </div>
  </nav>

    <img class="center" id="dockImage"src="/hackNorth/images/Dock00.png">
    <input id="valueEntered" type="text" name="value" required autofocus>
    <button onclick="insert()">Sign in</button>
</body>
</html>
