<?php
require_once ("../control/Crud.php");

//varible para devolver
$respuesta = null;

// Verificar que la solicitud sea un POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('HTTP/1.1 405 Method Not Allowed');
    echo 'Acceso incorrecto';
    exit;
}
else {

    // Verificar las credenciales del usuario antes de permitir que se ejecute la solicitud POST
    $username = $_SERVER['PHP_AUTH_USER'];
    $password = $_SERVER['PHP_AUTH_PW'];

    if ($username !== $usuarioservice || $password !== $claveservicio) {
        header('WWW-Authenticate: Basic realm="EcuApp"');
        header('HTTP/1.0 401 Unauthorized');
        echo 'Autenticación incorrecta';
        exit;
    } 
    else {
            // Recibir la solicitud POST con el array, el texto y el número
            $data = json_decode(file_get_contents('php://input'), true);
            if (isset($data['opcion'])) {
                $crud = new MICRUD();
                //caso con las opciones a ejecutar
                switch ($data['opcion']) {
                    case "cifrar":
                        $respuesta = $crud->CifrarDato($data['clave']);
                        break;
                    case "validar":
                        $respuesta = $crud->ValidarCifrado($data['valor'],$data['cifrado']);
                        break;
                    case "token":
                        $respuesta = $crud->GenerarToken();
                        break;
                    default:
                        header('HTTP/1.1 405 Method Not Allowed');
                        echo 'Acceso incorrecto';
                        break;
                }
                echo json_encode($respuesta);
            }
            else {
                    header('HTTP/1.1 405 Method Not Allowed');
                    echo 'Acceso incorrecto';
                    exit;
            }
    }

}

?>