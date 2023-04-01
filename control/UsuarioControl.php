<?php

//ruta para Servicio de Usuario
$usuario = 'http://localhost/EcuApi/middle/UsuarioMiddle.php';

$_POST["opcion"] = "b3Ax";
$_POST["correo"] = "amhvbm55bWluaWFuQGdtYWlsLmNvbQ==";
$_POST["clave"] = "MTIzNDU2Nzg5";

//armar data para login
$data = array(
    "opcion" => $_POST["opcion"],
    "correo" => $_POST["correo"],
    "clave" => $_POST["clave"]
    );

$curl = curl_init();
curl_setopt_array($curl, array(
  CURLOPT_URL => $usuario,
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS => $data,
  CURLOPT_HTTPHEADER => array('Cookie: PHPSESSID=da9odhh2m0olvl5cm065f1jv14'),));
$response = curl_exec($curl);
curl_close($curl);
echo $response;

?>