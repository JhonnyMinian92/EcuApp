<?php

    //obtener usuario y pass permitidos
    include("../control/Crud.php");

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
            //variable mensaje personalizada
            $frontmensaje = "El codigo es : ";

            if ($username !== $usuarioservice || $password !== $claveservicio) {
                header('WWW-Authenticate: Basic realm="EcuApp"');
                header('HTTP/1.0 401 Unauthorized');
                echo 'Autenticación incorrecta';
                exit;
            } 
            //formato para enviar correo electronico
            else {
                    // Recibir la solicitud POST para los datos del correo
                    $data = json_decode(file_get_contents('php://input'), true);
                    //datos de entrada
                    $para = $data["destinatario"];
                    $titulo = "Codigo de Autenticacion ECUAPP";
                    $mensaje = $frontmensaje."".$data['token'];
                    $headers = [
                        'From' => 'Ecuapp Mail <ecuappmail@gmail.com>',
                        'X-Sender' => 'Ecuapp Mail <ecuappmail@gmail.com>',
                        'X-Mailer' => 'PHP/' . phpversion(),
                        'X-Priority' => '1',
                        'Return-Path' => 'ecuappmail@gmail.com',
                        'MIME-Version' => '1.0',
                        'Content-Type' => 'text/html; charset=iso-8859-1'
                    ];
                    // Envío del correo electrónico
                    if (mail($para, $titulo, $mensaje, $headers)) { echo true; } else { echo false; }
            }
    }

?>