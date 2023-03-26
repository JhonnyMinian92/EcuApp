<?php 
//function generarTokenSeguro() {
    // Generamos una cadena aleatoria de longitud 20
    $cadenaAleatoria = bin2hex(random_bytes(10));
  
    // Aplicamos la función hash SHA-256 a la cadena aleatoria
    $hash = hash('sha256', $cadenaAleatoria);
  
    // Obtenemos los primeros 6 dígitos numéricos del hash
    $token = preg_replace("/[^0-9]/", "", substr($hash, 0, 6));
  
    // Si el token tiene menos de 6 dígitos, lo completamos con dígitos aleatorios
    while(strlen($token) < 6) {
      $token .= mt_rand(0, 9);
    }
  
    // Devolvemos el token generado
    //return $token;
    echo $token;
//  }
  
      
?>