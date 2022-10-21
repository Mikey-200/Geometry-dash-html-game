
    <?php
    $x = $_POST["test"];
    if (isset($x)) {
    echo "welcome".$x;
    $y = fopen("name.txt", "w");
    fwrite($y, $x);
    fclose($y);
  }
    ?>
