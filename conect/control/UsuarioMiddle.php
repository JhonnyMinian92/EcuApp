<?php

session_start();
include("../conexion/Directorio.php");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    // Código que se ejecuta si la solicitud es POST
    if(isset($_POST["opcion"])){

        //decifrar opcion cifrada de javascript
        $_POST["opcion"] = base64_decode($_POST["opcion"]);
    
        //Escoger las opciones
        switch ($_POST["opcion"]) {
            case "op1":
                //decifrar clave y usuario enviados por javascript
                $_POST["correo"] = base64_decode($_POST["correo"]);
                $_POST["clave"] = base64_decode($_POST["clave"]);
                //funcion para logueo incial de usuario
                echo ServicioLogueo($_POST["correo"],$_POST["clave"]);
                break;
            case "op2":
                //funcion para Ingresar Usuario
                
                break;
            case "op3":
                //funcion para Modificar Clave
                
                break;
            case "op4":
                //funcion para Validar Autenticacion
                
                break;
            case "op5":
                //resetear sesion
                session_destroy();
                echo json_encode(true);
                break;
            default:
                header('HTTP/1.1 405 Method Not Allowed');
                echo 'Acceso incorrecto';
                break;
        }
    } 
    else {
            header('HTTP/1.1 405 Method Not Allowed');
            echo 'Acceso incorrecto';
            exit;
    }

} else {
    // Código que se ejecuta si la solicitud no es POST
    header('HTTP/1.1 405 Method Not Allowed');
    echo 'Acceso incorrecto';
    exit;
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