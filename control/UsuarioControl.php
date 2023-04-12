<?php
ini_set('memory_limit', '-1');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Código que se ejecuta si la solicitud es POST
  if(isset($_POST["opcion"])){
      //ruta para Servicio de Usuario
      $patch = 'http://localhost/EcuApi/middle/UsuarioMiddle.php';
      //obtener la clave de autorizacion
      $auth = ObtenerAutorizacion();
      //inicilizar variable de datos a enviar
      $data = null;
      //decifrar opcion cifrada de javascript
      $opcion = base64_decode($_POST["opcion"]);
      //Escoger las opciones
      switch ($opcion) {
          case "op1":
              //token del captcha (clave secreta)
              $secretKey = "6LdOmlslAAAAAJ6CC6H07g0nNK48H2okrNlz0kxG";
              $token = $_POST["token"];
              $action = "login";
              $ip = $_SERVER["REMOTE_ADDR"];
              $url = "https://www.google.com/recaptcha/api/siteverify?secret=$secretKey&response=$token&action=$action&ip=$ip";
              $response = file_get_contents($url);
              $responseData = json_decode($response);
              if ($responseData->success) {
                //armar data para login
                $data = array("opcion" => $_POST["opcion"],"correo" => $_POST["correo"],"clave" => $_POST["clave"],"auth"=>$auth);
              } else { echo json_encode("-2"); exit; }
              break;
          case "op2":
              
              break;
          case "op3":
              
              break;
          case "op4":
              //armar la data para autenticar y guardar login
              $data = array("opcion" => $_POST["opcion"], "token" => $_POST["token"], "geolocalizacion" => $_POST["geolocalizacion"],"auth"=>$auth);
              break;
          case "op5":
              //cerrar sesion
              $data = array("opcion" => $_POST["opcion"],"auth"=>$auth);
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
        CURLOPT_HTTPHEADER => array(
          'Authorization: Basic M0N1NHBwU2VydjFjMzpSM3N0M2N1NHBw',
          'Cookie: PHPSESSID=foo23eob2gvms47m1io8ru9re9'),));
      $response = curl_exec($curl);
      curl_close($curl);
      echo $response;
    } else {
            include("../vista/405.php");
            exit;
          }
} else {
  include("../vista/404.php");
  exit;
}

//obtener codigo para conectar front con back
function ObtenerAutorizacion(){
    $curl = curl_init();
  curl_setopt_array($curl, array(
    CURLOPT_URL => 'http://localhost/EcuApi/microservicios/Soporte/validar.php',
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => '',
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => 'POST',
    CURLOPT_HTTPHEADER => array(
      'Authorization: Basic M0N1NHBwU2VydjFjMzpSM3N0M2N1NHBw'
    ),
  ));
  $response = curl_exec($curl);
  curl_close($curl);
  return $response;
}

?>