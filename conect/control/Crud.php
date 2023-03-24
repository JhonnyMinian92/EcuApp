<?php

require_once ("../conexion/Conectar.php");

class MICRUD {

    private $instancia;
    private $conexion;

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

    //funcion para loguear usuario
    public function encontrar($usuario, $clave){
        //prepara el select
        $stmt = $this->conexion->prepare("SELECT * FROM userapp WHERE mail_user = ? LIMIT 1");
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
            if (password_verify($clave, $fila["pass_user"])) { return true; } else { return false; }
        } else { return false; }
        //desconectar luego de la consulta
        $this->instancia->Desconectar();
    }

    //funcion de LISTAR
    public function listar($sql){

    }

}

?>