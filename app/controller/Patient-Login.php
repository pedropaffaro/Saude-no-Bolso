<?php
    session_start();

    $cpf = $_POST["cpf"];

    $_SESSION["isLogged"] = 1;

    header('Location: ../view/public/pages/profile-page.php');
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Error</title>

    <link rel="stylesheet" href="../view/public/style/style.css">
</head>
<body>
    
</body>
</html>