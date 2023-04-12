<?php
error_reporting(E_ERROR | E_PARSE);
// Hacer una solicitud HTTP GET al archivo de validación
$url = 'http://localhost/EcuApi/$2y$10$Zszrx9ki9L1aWluAAFnwt.V.6SQB.Tc4z3CiuLvngM4VWtPdQUOx..php';
$response = file_get_contents($url);
// Mostrar la respuesta del archivo de validación
if ($response === 'true') {
    include("vista/contenedor.php");
} else {
    include("vista/mantenimiento.php");
}

?>