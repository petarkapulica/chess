<!DOCTYPE html>
<html>
<head>
    <title>chess</title>
    <link rel="stylesheet" href="public/css/style.css" media="all" />
</head>

<body>
  <div class="score-board">
    <span class="score-board-black">Black</span>
    <span class="score-board-white">White</span>
     is on the move ...
  </div>
  <div class="chess clearfix">
    <?php
      require_once('setup.php');
     ?>
  </div>
  <footer>
      <script src="public/javascripts/dist/config.js"></script>
      <script data-main="public/javascripts/src/app" src="public/bower/requirejs/require.js"></script>
</footer>
</body>
</html>
