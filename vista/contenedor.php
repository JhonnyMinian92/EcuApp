<?php

$titulo = "EcuApp";

$dominio = "../EcuApp/";
//url de la carpeta js
$urljs = "".$dominio."pack/js/";
//url de la carpeta css
$urlcss = "".$dominio."pack/css/";

?>

<!DOCTYPE html>
<html>

    <head>
        <meta charset="UTF-8">
        <link rel="shortcut icon" href="https://lh3.googleusercontent.com/fuNiXP8WGBk0l4nnWGJqCmh724hLgZGOZZD6ov7YhxAyngC2_Q77Ul4pIuRlV6jjutsBM5N5Zk3g_wkLGKt8hLgErZ4S-moBpD17BFejMjID2tCd7UV2Q7nICHqQUUobQEvYD9lnzFgGO3pABbi37iTjqyDZ79ulzOvS5RWsdjX9q19_QoB86N7M8G1GvScoQ2RdLtTKak8UdEtSVpM9-teTeYEczibZwpjCA_IOxZzeAD_qBa56DcrIjdXoceBTjuRb1AsZA9ritpbn8aV2byyIbHgk5rPXcwgFP8l4opaG19E1xfTSZS-QqQhzYSLCJloWYI7_mND5j1PrLRbpXOKnG7LOqi7vAVwZOXA0PR1uxMixukG2qg1D_OQH0HcpVMbBb5_-58R3IYAnyj2ZL-HNwSfxHLMsXcwT552pPUY_dr0pO1Tgtsidflo4ad1nqHwlnIwSPfmTUjqxgd8TsEhkfPAKXeqz73QW4f3i5GmWNXWA1oWuHazIZ7PXk66x828QiNDyZsRVQhYYEwJKcKcfDFIXBZ1Kx9RPEjE77gcDjyrYtdIJVKbEX-IyI_MomUwxHb8YkVF0eLa7Ro141D2KublIxI_uEWJi_kULIpeybwoKeOxuyiNyAwvafMpWgq_Qy8RUdIYcvv0o3MoMwd4fV4KmFOObKH7GYI7YXiXPm1vW_hjP6JBTfmkJMConW17zwWSwkXP5hvUe3HLYvzm-l-ZXO-ExNdot00UHulDzzCZARhhqmv7tDAH_aCTOpvcN-Kabrlm0uTwA4DKLj41gEIMswrBgnJFoFaTtdKz5P0gQfslF0Va4Eh-3E69Q6nYPVNov8aEeA-WRp9X8Efd_RmlAYofrudrLy_SdXikAR8GHVggKkNaUJUqHHU-Ta70u1S_aqOEG7HHzj_nYcF4yXDOtEdOuJPYrbSZPc8uw=s256-no?authuser=0">
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