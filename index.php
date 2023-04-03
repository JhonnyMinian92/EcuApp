<?php
error_reporting(E_ERROR | E_PARSE);
// URL del archivo que valida la conexión
$url = 'http://192.168.1.5/EcuApi/microservicios/Soporte/validar_conexion.php';
// Hacer una solicitud HTTP GET al archivo de validación
$response = file_get_contents($url);
// Mostrar la respuesta del archivo de validación
if ($response === 'true') {
    include("vista/contenedor.php");
} else {
    include("vista/mantenimiento.php");
}

?>