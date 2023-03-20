<?php

class Conectar {
    private $host = "localhost";
    private $usuario = "root";
    private $contrasena = "";
    private $baseDatos = "ecuabd";
    private $conexion;

    public function __construct() {}

    public function ConectarBD() {
        $this->conexion = mysqli_connect($this->host, $this->usuario, $this->contrasena, $this->baseDatos);
        return $this->conexion;
    }

    public function Desconectar($conexion) {
        mysqli_close($conexion);
    }
}
?>