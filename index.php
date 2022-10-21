
    <?php
      if (isset($_POST['test'])) {
        $email_to = "michaelchidera2005@gmail.com";
        $email_subject = "New form submissions";
        echo "hiiii";
      }
      if (!isset($_POST['test'])) {
        echo "error with the request";
      }
    ?>
