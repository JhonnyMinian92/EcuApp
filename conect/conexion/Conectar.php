<?php

class Conectar {
    private $host = "localhost";
    private $usuario = "root";
    private $contrasena = "EcuaP@ss2023";
    private $baseDatos = "ecuabd";
    private $conexion;

    public function __construct() {}

    public function ConectarBD() {
        $this->conexion = mysqli_connect($this->host, $this->usuario, $this->contrasena, $this->baseDatos);
        return $this->conexion;
    }

    public function Desconectar() {
        mysqli_close($this->conexion);
    }
}

?>