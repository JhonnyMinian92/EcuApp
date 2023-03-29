<?php

//definir sesion solo mientras pestaña esta abierta
session_set_cookie_params(0);
//iniciar sesion para guardar token y usuario
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
                $json = ServicioLogueo($_POST["correo"],$_POST["clave"]);
                $data = json_decode($json);
                // Acceder a los valores
                echo json_encode($data->status);
                if($data->status){ $_SESSION["token"] = $data->token; $_SESSION["idusuario"]  = $data->idusuario; }
                break;
            case "op2":
                //funcion para Ingresar Usuario
                
                break;
            case "op3":
                //funcion para Modificar Clave
                
                break;
            case "op4":
                //funcion para Validar Autenticacion
                $_POST["token"] = base64_decode($_POST["token"]);
                echo ValidarToken($_POST["token"]);
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

function ValidarToken($token){
    // Construir el array con los datos
    $data = array(
        "opcion" => "permiso",
        "token" => $token,
        "almacen" => $_SESSION['token']
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