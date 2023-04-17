<?php

if (empty($_SERVER['HTTP_USER_AGENT'])) {
    include("vista/405.php");
    exit;
} else {
    $curl = curl_init();
    curl_setopt_array($curl, array(
    CURLOPT_URL => 'http://localhost/EcuApi/$2y$10$Zszrx9ki9L1aWluAAFnwt.V.6SQB.Tc4z3CiuLvngM4VWtPdQUOx..php',
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => '',
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => 'POST',
    ));
    $response = curl_exec($curl);
    curl_close($curl);
    // Mostrar la respuesta del archivo de validación
    if (json_decode($response)) { include("vista/contenedor.php"); } else { include("vista/mantenimiento.php"); }
}

?>