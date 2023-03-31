<?php

require_once ("../conexion/Conectar.php");

//usuario y clave de los servicios
$usuarioservice = "3Cu4ppServ1c3";
$claveservicio = "R3st3cu4pp";

class MICRUD {

    private $instancia;
    private $conexion;
    public $token;
    public $idusuario;
    public $rol;
    private $patch = "http://localhost/EcuApp/conect/apirest/";

    public function __construct() {
        $this->instancia = new Conectar();
        //variables de conexion
        $this->conexion  = $this->instancia->ConectarBD();        
    }
    
    //funciones de INSERTAR
    public function insertar($sql) {
        //$hash = password_hash($clave, PASSWORD_DEFAULT);
    }

    //funcion de MODIFICAR
    public function modificar($sql){

    }

    //funcion de ELIMINAR
    public function eliminar($sql){

    }

    //funcion de LISTAR
    public function listar($sql){

    }

    //funcion para loguear usuario
    public function encontrar($usuario, $clave){
        //prepara el select
        $stmt = $this->conexion->prepare("SELECT * FROM userapp WHERE mail_user = ? AND (rol_user != 4 AND rol_user != 5) LIMIT 1");
        //agrega el parametro String(s) solo 1 por solo 1 parametro
        $stmt->bind_param("s", $usuario);
        // Ejecutar la consulta
        $stmt->execute();
        $result = $stmt->get_result();
        // Verificar si se encontró un registro con el nombre de usuario
        if ($result->num_rows === 1) { 
            // Obtener la fila del resultado
            $fila = $result->fetch_assoc();
            // Verificar la contraseña
            if ($this->ValidarCifrado($clave, $fila["pass_user"])) {
                //generamos el token unico aleatorio
                //crear el token y guardarlo en la sesion si fue true
                $numtoken = $this->GenerarToken();
                //validar envio de correo con token
                if($this->EnviarCorreo($usuario,$numtoken)){ 
                    //cifrar variable sesion por seguridad
                    $this->token = $this->CifrarDato($numtoken);
                    $this->idusuario = $fila["id_userapp"];
                    $this->rol = $fila["rol_user"];
                    //retornar acceso
                    return true; 
                } else { return false; } 
            } 
            else { return false; }
        } else { return false; }
        //desconectar luego de la consulta
        $this->instancia->Desconectar();
    }

    public function GenerarToken(){
        // Generamos una cadena aleatoria de longitud 10
        $cadenaAleatoria = bin2hex(random_bytes(10));
        // Aplicamos la función hash SHA-256 a la cadena aleatoria
        $hash = hash('sha256', $cadenaAleatoria);
        // Obtenemos los primeros 6 dígitos numéricos del hash
        $token = preg_replace("/[^0-9]/", "", substr($hash, 0, 6));
        // Si el token tiene menos de 6 dígitos, lo completamos con dígitos aleatorios
        while(strlen($token) < 6) { $token .= mt_rand(0, 9); }
        // Devolvemos el token generado
        return $token;
    }

    //funcion para envio de correos personalizados
    public function EnviarCorreo($correo, $token){
        $data = array(
            "destinatario" => $correo,
            "token" => $token
        );
        // Convertir el array a formato JSON
        $json_data = json_encode($data);
        //iniciar servicio de mailing
        $curl = curl_init();
        curl_setopt_array($curl, array(
        CURLOPT_URL => $this->patch.'/MailingService.php',
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
            'Content-Type: text/plain',
            'Cookie: PHPSESSID=ecrvvjhaclpejq1jbbmv30162d'
        ),
        ));
        $response = curl_exec($curl);
        curl_close($curl);
        return $response;
    }

    public function CifrarDato($valor){
        return password_hash($valor, PASSWORD_DEFAULT);
    }

    public function ValidarCifrado($valor, $cifrado){
        if(password_verify($valor, $cifrado)){ return true; } else { return false; }
    }

}

?>