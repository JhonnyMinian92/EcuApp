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

                    //variable mensaje personalizada
                    $mensaje = '<html><body>';
                    $mensaje .= '<img src="https://i.postimg.cc/Y0Q2rkRt/logo2.png" alt="Logo ECUAPP" style="display:block; margin:auto;">';
                    $mensaje .= '<h1 style="text-align:center; color:#2d3b4e;">Bienvenido a ECUAPP</h1>';
                    $mensaje .= '<p style="text-align:center;">Gracias por unirte a nuestra plataforma de servicios ciudadanos. Nos complace tenerte como parte de nuestra comunidad. </p>';
                    $mensaje .= '<p style="text-align:center;">Tu código de seguridad es:</p>';
                    $mensaje .= '<h2 style="text-align:center; font-size:36px; color:#2d3b4e;">' . $data['token'] . '</h2>';
                    $mensaje .= '<p style="text-align:center;">Este código es confidencial, por favor no lo compartas con nadie. </p>';
                    $mensaje .= '</body></html>';

                    //datos de entrada
                    $para = $data["destinatario"];
                    $titulo = "Codigo de Autenticacion ECUAPP";
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