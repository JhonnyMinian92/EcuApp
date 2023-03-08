<?php

$titulo = "EcuApp";

$dominio = "http://localhost/EcuApp/";
//url de la carpeta js
$urljs = "".$dominio."pack/js/";
//url de la carpeta css
$urlcss = "".$dominio."pack/css/";
//url de la carpeta re
$urlre = "".$dominio."pack/re/";

?>

<!DOCTYPE html>
<html>

    <head>
        <meta charset="UTF-8">
        <link rel="shortcut icon" href="<?php echo $urlre ?>favicon.ico">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">      
        <title><?php echo $titulo; ?></title>
        <meta name="description" content="aplicacion web para la interconectividad de los servicios del gobierno ecuatoriano y los requerimientos ciudadanos para los mismos"/>
        <meta name="keywords" content="ecuador,ecuatoriano,ciudadano,aplicacion,appecuador,webecuador,sitiociudadano,sri,registro civil,tramite"/>
        <meta name="author" content="Jhonny Miñan" />
        <meta name="copyright" content="Propietario del copyright"/>
        <meta name="robots" content="index,nofollow"/>
        <meta http-equiv="cache-control" content="no-cache"/>
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