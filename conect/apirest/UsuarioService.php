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
            if (isset($data['opcion'])) {
                //caso con las opciones a ejecutar
                switch ($data['opcion']) {
                    case 1:
                        if(LogueoUsuario($data['correo'],$data['clave'])){ echo "Logueo de Usuario"; }
                        break;
                    case 2:
                        echo "Ingresar Usuario";
                        break;
                    case 3:
                        echo "Modificar Clave";
                        break;
                    case 4:
                        echo "Modificar Rol";
                        break;
                    default:
                        echo "";
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

//funcion Logueo de Usuario
function LogueoUsuario($correo, $clave){
    return true;
}

//funcion Ingresar Usuario

//funcion  Modificar Clave

//funcion Modificar Rol


?>