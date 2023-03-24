<?php

include("../conexion/Directorio.php");

//$_POST["opcion"] = 1;
//$_POST["correo"] = "jhonnyminian@gmail.com";
//$_POST["clave"] = "123456789";

//Escoger las opciones
switch ($_POST["opcion"]) {
    case 1:
        echo ServicioLogueo($_POST["correo"],$_POST["clave"]);
        break;
    case 2:
        
        break;
    case 3:
        
        break;
    case 4:
        
        break;
    default:
        echo "La opcion no existe";
        break;
}


function ServicioLogueo($correo, $clave){
    // Construir el array con los datos
    $data = array(
        "opcion" => "logueo",
        "correo" => $correo,
        "clave" => $clave
    );
  
    // Convertir el array a formato JSON
    $json_data = json_encode($data);
    global $patch;

    // Configurar las opciones de cURL
    $curl = curl_init();
    curl_setopt_array($curl, array(
        CURLOPT_URL => ''.$patch.'UsuarioService.php',
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => '',
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => 'POST',
        CURLOPT_POSTFIELDS => $json_data,
        CURLOPT_HTTPHEADER => array(
        'Authorization: Basic M0N1NHBwU2VydjFjMzpSM3N0M2N1NHBw',
        'Content-Type: application/json'
        ),
    ));

    // Enviar la solicitud cURL y recibir la respuesta
    $response = curl_exec($curl);
    curl_close($curl);
    return $response;
}

?>