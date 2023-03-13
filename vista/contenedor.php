<?php
$titulo = "EcuApp";

$dominio = "";
//url de la carpeta js
$urljs = "".$dominio."pack/js/";
//url de la carpeta css
$urlcss = "".$dominio."pack/css/";
?>

<!DOCTYPE html>
<html>
    <head>
        <!-- Llamar todos los css -->
        <link rel="stylesheet" type="text/css" href="<?php echo $urlcss ?>repositorio.css" media="screen" />
        <!-- Llamar todos los js -->
        <script src="<?php echo $urljs ?>repositorio.js"></script>
    </head>
</html>