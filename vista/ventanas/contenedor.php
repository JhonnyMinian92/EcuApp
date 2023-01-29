<?php
//url de la carpeta js
$urljs = "http://localhost/EcuApp/pack/js/";
//url de la carpeta css
$urlcss = "http://localhost/EcuApp/pack/css/";
?>

<!DOCTYPE html>
<html>

    <head>
        <meta charset="UTF-8">
        <link rel="shortcut icon" href="http://localhost/EcuApp/pack/re/favicon.png">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">      
        <title>EcuApp</title>
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
    <link rel="stylesheet" type="text/css" href="<?php echo $urlcss ?>index.css" media="screen" />
    <!-- Llamar todos los js -->
    <script src="<?php echo $urljs ?>index.js"></script>

</html>