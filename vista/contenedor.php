<?php
//url de la carpeta js
$urljs = "../../pack/js/";
//url de la carpeta css
$urlcss = "../../pack/css/";
?>

<!DOCTYPE html>
<html>

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">        
        <title>EcuApp</title>
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