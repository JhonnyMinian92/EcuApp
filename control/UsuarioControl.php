<?php
ini_set('memory_limit', '-1');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Código que se ejecuta si la solicitud es POST
  if(isset($_POST["opcion"])){
      //ruta para Servicio de Usuario
      $patch = 'http://localhost/EcuApi/middle/UsuarioMiddle.php';
      $data = null;
      //decifrar opcion cifrada de javascript
      $opcion = base64_decode($_POST["opcion"]);
      //Escoger las opciones
      switch ($opcion) {
          case "op1":
              //armar data para login
              $data = array("opcion" => $_POST["opcion"],"correo" => $_POST["correo"],"clave" => $_POST["clave"]);
              break;
          case "op2":
              
              break;
          case "op3":
              
              break;
          case "op4":
              $data = array("opcion" => $_POST["opcion"], "token" => $_POST["token"]);
              break;
          case "op5":
              $data = array("opcion" => $_POST["opcion"]);
              break;
          default:
              include("../vista/404.php");
              break;
      }

      //enviar data al servicio
      $curl = curl_init();
      curl_setopt_array($curl, array(
        CURLOPT_URL => $patch,
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

    } 
    else {
            include("../vista/405.php");
            exit;
          }
} else {
  include("../vista/404.php");
  exit;
}

?>