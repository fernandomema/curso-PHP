<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        if (isset($_POST['descripcion'])) {
            $mysql = new mysqli('localhost', 'root', '110299aa');
            if ($mysql->connection_error) {
                die('Problemas con la conexion a la base de datos');
            }
            $mysql->query("") or die($mysql->error);
            $mysql->close();
        }
    ?>
    <form action="">
        <input type="text" name="descripcion">
        <input type="submit">
    </form>
</body>
</html>