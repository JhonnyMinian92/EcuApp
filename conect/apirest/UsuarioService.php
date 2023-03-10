<?php
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

    if ($username !== '3Cu4ppServ1c3' || $password !== 'R3st3cu4pp') {
        header('WWW-Authenticate: Basic realm="EcuApp"');
        header('HTTP/1.0 401 Unauthorized');
        echo 'Autenticación incorrecta';
        exit;
    } 
    else {
            // Recibir la solicitud POST con el array, el texto y el número
            $data = json_decode(file_get_contents('php://input'), true);
            if (isset($data['numero'])) {
                $opcion = $data['numero'];
                //caso con las opciones a ejecutar
                switch ($opcion) {
                    case 1:
                        echo "opcion 1";
                        break;
                    case 2:
                        echo "opcion 3";
                        break;
                    case 3:
                        echo "opcion 4";
                        break;
                    default:
                        echo "Opcion no existe";
                        break;
                }
            }
            else {
                header('WWW-Authenticate: Basic realm="EcuApp"');
                header('HTTP/1.0 401 Unauthorized');
                echo 'Acceso incorrecta';
                exit;
            }
    }

}
?>