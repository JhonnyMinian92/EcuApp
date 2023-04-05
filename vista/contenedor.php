<?php
$titulo = "EcuApp";

$dominio = "pack/";
//url de la carpeta js
$urljs = "".$dominio."js/";
//url de la carpeta css
$urlcss = "".$dominio."css/";
?>

<!DOCTYPE html>
<html lang="es">
    <head>
        <!-- para definir codificacion -->
        <meta charset="UTF-8">
        <!-- meta para responsive design -->
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <!-- Llamar todos los css -->
        <link rel="stylesheet" type="text/css" href="<?php echo $urlcss ?>repositorio.css" media="screen" />
        <!-- Llamar todos los js -->
        <script src="<?php echo $urljs ?>repositorio.js"></script>
        <!-- meta para no guardar cache -->
        <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
        <meta http-equiv="Pragma" content="no-cache">
        <meta http-equiv="Expires" content="0">
        <!-- meta para no indexar paginas -->
        <meta name="robots" content="noindex">
        <link rel="canonical" href="https://wwww.ecuapp.com.ec">
        <meta name="robots" content="nofollow">
    </head>
    <body id="cuerpobody"></body>
</html>