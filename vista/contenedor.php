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
        <title><?php echo $titulo; ?></title>
        <link rel="shortcut icon" href="favicon.ico">
    </head>
    <body>
        <!-- Crear con js los componentes-->
        <section id="cuerpogeneral"></section>
        <!-- fin de la creacion-->
    </body>
    <!-- Llamar todos los css -->
    <link rel="stylesheet" type="text/css" href="<?php echo $urlcss ?>repositorio.css" media="screen" />
    <!-- Llamar todos los js -->
    <script src="<?php echo $urljs ?>repositorio.js"></script>
</html>