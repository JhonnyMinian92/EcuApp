//unica ruta del servicio para Usuarios
var usuarioservice = "http://localhost/EcuApp/conect/control/UsuarioMiddle.php";
//opciones cifradas para accedo a servicio
const op1 = btoa("op1");
const op2 = btoa("op2");
const op3 = btoa("op3");
const op4 = btoa("op4");

function btnlogin() {
    //routing de logueo/registro
    window.history.pushState({},"", "/EcuApp/#registro");
    //front para loguearse/registrarse
   Contenido("cuerpogeneral","");
   //crear conteniido
   var cuerpo = Componente("cuerpogeneral");
   var div = CrearObjeto("div");
   AddAtributo(div,"Class","centrador");
   SaveObjeto(cuerpo,div);
   //crear cuadro de login
   var article = CrearObjeto("article");
   AddAtributo(article,"Class","cjlogueo");
   AddAtributo(article,"id","contectauten");
   SaveObjeto(div,article);
   //crear cajas con componentes
   //caja para icono
   var div = CrearObjeto("div");
   SaveObjeto(article,div);
   var logo = CrearObjeto("div");
   AddAtributo(logo,"Class","img-logueo");
   AddAtributo(logo,"onclick","refresh();");
   SaveObjeto(div,logo);  
   //caja para correo
   var div = CrearObjeto("div");
   AddAtributo(div,"Class","caja-input");
   SaveObjeto(article,div);
   //img para el correo
   var imgmail = CrearObjeto("div");
   AddAtributo(imgmail,"Class","img-mail");
   SaveObjeto(div,imgmail);
   //input para el correo
   var input = CrearObjeto("input");
   AddAtributo(input,"Class","text-correo");
   AddAtributo(input,"type","email");
   AddAtributo(input,"maxlength","200");
   AddAtributo(input,"id","txtmail");
   AddAtributo(input,"placeholder","Ingrese su correo electronico");
   SaveObjeto(div,input);
   //caja para clave
   var div = CrearObjeto("div");
   AddAtributo(div,"Class","caja-input");
   SaveObjeto(article,div);
   //img para el correo
   var imgpass = CrearObjeto("div");
   AddAtributo(imgpass,"Class","img-pass");
   SaveObjeto(div,imgpass);
   //input para la clave
   var input = CrearObjeto("input");
   AddAtributo(input,"Class","text-clave");
   AddAtributo(input,"type","password");
   AddAtributo(input,"maxlength","20");
   AddAtributo(input,"id","txtclave");
   AddAtributo(input,"placeholder","Ingrese su contraseña");
   SaveObjeto(div,input);
   //caja para olvido
   var div = CrearObjeto("div");
   SaveObjeto(article,div);
   var hiper = CrearObjeto("div");
   AddAtributo(hiper,"Class","lb-olvido");
   AddAtributo(hiper,"onclick","btnolvido");
   SaveObjeto(div,hiper);
   var registro = CrearObjeto("div");
   AddAtributo(registro,"Class","lb-singup");
   AddAtributo(registro,"onclick","btnregister");
   SaveObjeto(div,registro);
   //caja boton de logueo
   var div = CrearObjeto("div");
   SaveObjeto(article,div);
   var boton = CrearObjeto("div");
   AddAtributo(boton,"Class","btn-loguear");
   AddAtributo(boton,"onclick","IngresarLogin();");
   SaveObjeto(div,boton);
}

function btnregister(){
    //codigo para registrar nuevo usuario

}

function btnolvido(){
    //codigo para cuando olvido clave
    
}

function doblefactor(){
    //codigo para crear el form de doble factor

}

function IngresarLogin(){
    //funcion para segundo metodo de autenticacion
    var mail = Componente("txtmail");
    var clave = Componente("txtclave");
    if(mail.value == "" || clave.value == ""){
        MensajeNotif("Ingrese todos los campos","atencion");
    } else {
        if(validarEmail(mail.value)){
                var ajax = new XMLHttpRequest();
                ajax.open("POST",""+usuarioservice+"",true);
                ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
                ajax.onreadystatechange = function(){
                    if(ajax.readyState == 4){
                        var json = eval("("+ajax.responseText+")");
                        if(json){
                            ValorTexto(contectauten,"");
                            doblefactor();
                        } else {
                                mail.value = "";
                                clave.value = "";
                                MensajeNotif("Usuario o Clave incorrecta","error");
                        }
                    }
                };
                ajax.send("correo="+mail.value+"&clave="+clave.value+"&opcion="+op1+"");
        } else { mail.value = ""; MensajeNotif("Ingrese un correo valido","error"); }
    }
}