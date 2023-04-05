//unica ruta del servicio para Usuarios
var usuarioservice = "control/UsuarioControl.php";
// Configuramos la duración de la cuenta regresiva (en segundos)
var duracion = 180;
var intervalID;
//opciones cifradas para accedo a servicio
const op1 = btoa("op1");
const op2 = btoa("op2");
const op3 = btoa("op3");
const op4 = btoa("op4");
const op5 = btoa("op5");

function btnlogin() {
    //routing de logueo/registro
    window.history.pushState({},"", "/EcuApp/#login");
    //front para loguearse/registrarse
   Contenido("cuerpogeneral","");
   //crear conteniido
   var cuerpo = Componente("cuerpogeneral");
   var div = CrearObjeto("div");
   AddAtributo(div,"Class","centrador");
   SaveObjeto(cuerpo,div);
   //geolocalizacion
   var geo = CrearObjeto("a");
   AddAtributo(geo,"id","lbgeo");
   AddAtributo(geo,"class","ocultar");
   SaveObjeto(cuerpo,geo);
   //componente de recaptcha
   var script = document.createElement('script');
   script.src = "https://www.google.com/recaptcha/api.js?render=6LdOmlslAAAAAE-iMmmfmbh0Y2ElD5Na35URaUiv";
   SaveObjeto(div,script);
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
   AddAtributo(hiper,"onclick","btnolvido();");
   SaveObjeto(div,hiper);
   var registro = CrearObjeto("div");
   AddAtributo(registro,"Class","lb-singup");
   AddAtributo(registro,"onclick","btnregister();");
   SaveObjeto(div,registro);
   //caja boton de logueo
   var div = CrearObjeto("div");
   SaveObjeto(article,div);
   var boton = CrearObjeto("div");
   AddAtributo(boton,"Class","btn-loguear");
   AddAtributo(boton,"onclick","IngresarLogin();");
   SaveObjeto(div,boton);
   //input recaptcha
   var captcha = CrearObjeto("input");
   AddAtributo(captcha,"type","hidden");
   AddAtributo(captcha,"id","token-recaptcha");
   AddAtributo(captcha,"name","token-recaptcha"); 
   SaveObjeto(cuerpo,captcha);
   //geolocalizacion
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function showPosition(pos) {
                document.getElementById("lbgeo").innerHTML = "https://www.google.com.ec/maps/@"+pos.coords.latitude+","+pos.coords.longitude+",19z?hl=es";
            }
        );
    }
}

//funcion para cargar pantalla de doble factor
function doblefactor(){
    window.history.pushState({},"", "/EcuApp/#autenticacion");
    ValorTexto(contectauten,"");
    //codigo para crear el form de doble factor
    var contenedor = Componente("contectauten");
    //crear caja contenedora
    var article = CrearObjeto("article");
    AddAtributo(article,"Class","doble-factor");
    SaveObjeto(contenedor,article);
    //cabecera
    var cabeza = CrearObjeto("div");
    SaveObjeto(article,cabeza);
    var imgaut = CrearObjeto("div");
    AddAtributo(imgaut,"Class","img-auten");
    SaveObjeto(cabeza,imgaut);
    var lbaut = CrearObjeto("div");
    AddAtributo(lbaut,"Class","lbtt-auten");
    ValorTexto(lbaut,"AUTENTICACIÓN");
    SaveObjeto(cabeza,lbaut);
    //cuerpo
    var cuerp = CrearObjeto("div");
    AddAtributo(cuerp,"Class","caja-digitos");
    SaveObjeto(article,cuerp);
    var digitos = CrearObjeto("div");
    SaveObjeto(cuerp,digitos);
    //input para los 6 digitos
    for(var i=1; i<=6; i++){
        var dig  = CrearObjeto("input");
        AddAtributo(dig,"id","txtdig"+i);
        AddAtributo(dig,"Class","input-digito");
        AddAtributo(dig,"maxlength","1");
        AddAtributo(dig,"onkeydown","validarNumeros(event,this.id)");
        SaveObjeto(digitos,dig);
        if(i == 1){  dig.focus(); }
    }
    //indicacion
    var indica = CrearObjeto("p");
    ValorTexto(indica,"El codigo se envio a su correo");
    SaveObjeto(cuerp,indica);
    //cuenta atras
    var cjcuenta = CrearObjeto("div");
    SaveObjeto(article,cjcuenta);
    var cuenta = CrearObjeto("div");
    AddAtributo(cuenta,"id","lbcuentatras");
    ValorTexto(cuenta,"00:00");
    SaveObjeto(cjcuenta,cuenta);
    intervalID = setInterval(actualizarCuentaAtras, 1000);
    //botonera
    var cjboton = CrearObjeto("div");
    SaveObjeto(article,cjboton);
    var btnaut = CrearObjeto("div");
    AddAtributo(btnaut,"Class","btn-autentica");
    AddAtributo(btnaut,"onclick","ValidarToken();");
    SaveObjeto(cjboton,btnaut);
}

//funcion para logueo inicial
function IngresarLogin(){
    //funcion de captcha
    grecaptcha.ready(function() {
        grecaptcha.execute('6LdOmlslAAAAAE-iMmmfmbh0Y2ElD5Na35URaUiv', {action: 'login'})
        .then(function(token) {
            document.getElementById('token-recaptcha').value = token;
        });
    });
    //funcion para segundo metodo de autenticacion
    MensajeCargando();
    var mail = Componente("txtmail");
    var clave = Componente("txtclave");
    if(mail.value == "" || clave.value == ""){
        OcultarMsg();
        MensajeNotif("Ingrese todos los campos","atencion");
    } else {
        if(validarEmail(mail.value)){
                var ajax = new XMLHttpRequest();
                ajax.open("POST",""+usuarioservice+"",true);
                ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
                ajax.onreadystatechange = function(){
                    if(ajax.readyState == 4){
                        var json = eval("("+ajax.responseText+")");
                        OcultarMsg();
                        if(json == true){
                            doblefactor();
                        } else if (json == "-1"){
                                mail.value = "";
                                clave.value = "";
                                MensajeNotif("Usuario Bloqueado","error");
                        } else {
                            mail.value = "";
                            clave.value = "";
                            MensajeNotif("Usuario o Clave incorrecta","error");
                        }
                    }
                };
                ajax.timeout = 10000;
                ajax.ontimeout = function () { refresh(); };
                ajax.send("correo="+btoa(mail.value)+"&clave="+btoa(clave.value)+"&opcion="+op1+"");
        } else { mail.value = ""; OcultarMsg(); MensajeNotif("Ingrese un correo valido","error"); }
    }
}

// Función que actualiza cuenta regresiva
function actualizarCuentaAtras() {
    var cuentaAtras = document.getElementById("lbcuentatras");
    // Obtenemos los minutos y segundos restantes
    var minutos = Math.floor(duracion / 60);
    var segundos = duracion % 60;
    // Formateamos los minutos y segundos para mostrarlos con dos dígitos
    var minutosTexto = minutos < 10 ? "0" + minutos : minutos;
    var segundosTexto = segundos < 10 ? "0" + segundos : segundos;
    // Actualizamos el contenido del elemento HTML con la cuenta regresiva
    cuentaAtras.innerHTML = minutosTexto + ":" + segundosTexto;
    // Restamos un segundo a la duración de la cuenta regresiva
    duracion--;
    // Si llegamos a cero, detenemos la cuenta regresiva
    if (duracion < 0) {
        //funcion para destruir la session
        cuentaAtras.innerHTML = "00:00";
        clearInterval(intervalID);
        RompeSesion();
    }
}

  //anular cualquier posible sesion pendiente
  function RompeSesion(){
    MensajeCargando();
    var ajax = new XMLHttpRequest();
    ajax.open("POST",""+usuarioservice+"",true);
    ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    ajax.onreadystatechange = function(){
        if(ajax.readyState == 4){
            var json = eval("("+ajax.responseText+")");
            OcultarMsg();
            if(json){
                //codigo para retornar al inicio por no colocar token
                duracion = 180;
                btnlogin();
            } else { MensajeNotif("Por favor  cerrar el navegador por seguridad","error"); }
        }
    };
    ajax.timeout = 5000;
    ajax.ontimeout = function () { refresh(); };
    ajax.send("opcion="+op5+"");
  }

//funcion para la validacion del token
function ValidarToken(){
    MensajeCargando();
    //texto ingresado de token
    var txtcode1 = Componente("txtdig1");
    var txtcode2 = Componente("txtdig2");
    var txtcode3 = Componente("txtdig3");
    var txtcode4 = Componente("txtdig4");
    var txtcode5 = Componente("txtdig5");
    var txtcode6 = Componente("txtdig6");
    //concatenar token
    var codigo = btoa(""+txtcode1.value+txtcode2.value+txtcode3.value+txtcode4.value+txtcode5.value+txtcode6.value+""); 
    //obtener geolocalizacion
    geo = Componente("lbgeo");
    //enviar token por ajax
    var ajax = new XMLHttpRequest();
    ajax.open("POST",""+usuarioservice+"",true);
    ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    ajax.onreadystatechange = function(){
        if(ajax.readyState == 4){
            //ocultar el cargando
            OcultarMsg();
            var json = eval("("+ajax.responseText+")");
            if(json){ 
                //guardar el token
                sessionStorage.setItem('token', codigo);
                sessionStorage.setItem('Statuslogueo',json); 
                //llamar formulario logueado
                refresh();
                //detener el intervalo
                clearInterval(intervalID);
            }
            else { MensajeNotif("El Token es incorrecto","error"); }
        }
    };
    ajax.send("opcion="+op4+"&token="+codigo+"&geolocalizacion="+geo.innerHTML);
}

//funcion para registro de clientes
function btnregister(){
    //codigo para registrar nuevo usuario
    window.history.pushState({},"", "/EcuApp/#registro");
}

//funcion para recuperar clave
function btnolvido(){
    //codigo para cuando olvido clave
    window.history.pushState({},"", "/EcuApp/#recuperacion");
    //MensajeNotif("Cambio de clave exitoso", "correcto");
}
