<?php 
class Usuario {

    private $user;
    private $clave;

    public function __construct($user, $clave) {
        $this->user = $user;
        $this->clave = $clave;
    }  

}
?>