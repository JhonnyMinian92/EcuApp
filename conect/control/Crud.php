<?php

require_once ("../conexion/Conectar.php");

class MICRUD {

    private $instancia;
    private $conexion;

    public function __construct() {}
    
    //funciones de INSERTAR
    public function insertar($sql) {
        //variables de conexion
        $this->instancia = new Conectar();
        $this->conexion  = $this->instancia->ConectarBD();
        //variables de respuesta
        $rest = 0;
        //validar conexion a la base de datos
        if(!$this->conexion){ $rest = 0; }
        else {
            //funcion de insertar junto con controles
            
        }
        //desconectar y responder
        $this->instancia->Desconectar($this->conexion);
        return $rest;
    }

    //funcion de MODIFICAR
    public function modificar($sql){

    }

    //funcion de ELIMINAR
    public function eliminar($sql){

    }

    //funcion de BUSCAR
    public function buscar($sql){

    }

    //funcion de LISTAR
    public function listar($sql){

    }

}
?>