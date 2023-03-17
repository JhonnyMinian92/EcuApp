function btnlogin() {
    //front para loguearse/registrarse
   Contenido("cuerpogeneral","");
   //crear conteniido
   var cuerpo = Componente("cuerpogeneral");
   var div = CrearObjeto("div");
   SaveObjeto(cuerpo,div);
   //crear cuadro de login
   var article = CrearObjeto("article");
   AddAtributo(article,"Class","cjlogueo");
   SaveObjeto(div,article);
   //crear cajas con componentes
   //caja para icono
   var div = CrearObjeto("div");
   SaveObjeto(article,div);
   var logo = CrearObjeto("div");
   AddAtributo(logo,"Class","img-logueo");
   SaveObjeto(div,logo);  
   //caja para correo
   var div = CrearObjeto("div");
   SaveObjeto(article,div);
   var input = CrearObjeto("input");
   AddAtributo(input,"Class","text-correo");
   SaveObjeto(div,input);
   //caja para clave
   var div = CrearObjeto("div");
   SaveObjeto(article,div);
   var input = CrearObjeto("input");
   AddAtributo(input,"Class","text-clave");
   SaveObjeto(div,input);
   //caja para olvido
   var div = CrearObjeto("div");
   AddAtributo(div,"Class","cj-opciones");
   SaveObjeto(article,div);
   var hiper = CrearObjeto("div");
   AddAtributo(hiper,"Class","lb-olvido");
   ValorTexto(hiper,"¿ Olvidó su contraseña ?");
   SaveObjeto(div,hiper);
   var registro = CrearObjeto("div");
   AddAtributo(registro,"Class","lb-singup");
   ValorTexto(registro,"Crear Cuenta");
   SaveObjeto(div,registro);
   //caja boton de logueo
   var div = CrearObjeto("div");
   SaveObjeto(article,div);
   var boton = CrearObjeto("div");
   AddAtributo(boton,"Class","btn-loguear");
   AddAtributo(boton,"onclick","IngresarLogin();");
   ValorTexto(boton,"Ingresar");
   SaveObjeto(div,boton);
}

function btnregister(){

}

function btnolvido(){
    
}