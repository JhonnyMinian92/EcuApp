<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>EcuApp</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" href="favicon.ico">
    <style>
        /* Estilos de página en mantenimiento */
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
        }

        .maintenance-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            background-color: #15232d;
            color: #fff;
        }

        .maintenance-message {
            text-align: center;
        }

        .maintenance-message h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
        }

        .maintenance-message p {
            font-size: 1.2rem;
        }

        .maintenance-working {
            width: 150px;
            height: 150px;
            margin-top: 3rem;
            border-radius: 50%;
            border: 10px solid rgba(255, 255, 255, 0.2);
            border-top-color: #fff;
            animation: rotation 2s linear infinite;
        }

        @keyframes rotation {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(359deg);
            }
        }
    </style>
</head>
<body>
    <div class="maintenance-container">
        <div class="maintenance-message">
            <h1>Sitio en mantenimiento</h1>
            <p>Lo siento, estamos realizando tareas de mantenimiento. Volveremos en breve.</p>
        </div>
        <div class="maintenance-working"></div>
        <p>Trabajando para restablecer el servicio.</p>
    </div>
</body>
</html>
