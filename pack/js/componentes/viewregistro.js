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
   //mensaje de cargando por demora de recaptcha
   MensajeCargando();
   //input recaptcha
   var captcha = CrearObjeto("input");
   AddAtributo(captcha,"type","hidden");
   AddAtributo(captcha,"id","token-recaptcha");
   AddAtributo(captcha,"name","token-recaptcha"); 
   SaveObjeto(cuerpo,captcha);
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
   //geolocalizacion
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function showPosition(pos) {
                document.getElementById("lbgeo").innerHTML = "https://www.google.com.ec/maps/@"+pos.coords.latitude+","+pos.coords.longitude+",19z?hl=es";
            }
        );
    }
    //obtener la data de captcha, espera hasta que DOM construya
    setTimeout(function() {
      //funcion de captcha
      grecaptcha.ready(function() {
          grecaptcha.execute('6LdOmlslAAAAAE-iMmmfmbh0Y2ElD5Na35URaUiv', {action: 'login'})
          .then(function(token) {
              document.getElementById('token-recaptcha').value = token;
              OcultarMsg();
          });
      });
    }, 200);
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
    //funcion para segundo metodo de autenticacion
    MensajeCargando();
    var mail = Componente("txtmail");
    var clave = Componente("txtclave");
    if(mail.value == "" || clave.value == ""){
        OcultarMsg();
        MensajeNotif("Ingrese todos los campos","atencion");
    } else {
        if(validarEmail(mail.value)){
                //generar servicio ajax
                var ajax = new XMLHttpRequest();
                ajax.open("POST",""+usuarioservice+"",true);
                ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
                //obtener token captcha
                var captcha = document.getElementById('token-recaptcha').value;
                //enviar data de formulario
                ajax.onreadystatechange = function(){
                    if(ajax.readyState == 4){
                        var json = eval("("+ajax.responseText+")");
                        OcultarMsg();
                        //siguiente paso de autenticacion
                        if(json == true){ doblefactor(); } 
                        //valida si el usuario no tiene bloqueo temporal
                        if (json == "-1"){
                                mail.value = "";
                                clave.value = "";
                                MensajeNotif("Usuario Bloqueado","error");
                        } 
                        //valida si el paso el captcha por exceso de login
                        if (json == "-2"){
                            mail.value = "";
                            clave.value = "";
                            MensajeNotif("Error en servicio de Recaptcha","error");
                        } 
                        //presenta mensaje si no existe cliente o anulado
                        if(json == false) {
                            mail.value = "";
                            clave.value = "";
                            MensajeNotif("Usuario o Clave incorrecta","error");
                        }
                    }
                };
                ajax.timeout = 10000;
                ajax.ontimeout = function () { refresh(); };
                ajax.send("correo="+btoa(mail.value)+"&clave="+btoa(clave.value)+"&opcion="+op1+"&token="+captcha);
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
                sessionStorage.clear();
                VolveraLogin();
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
    //crear componentes para recuperar clave
    ValorTexto(contectauten,"");
    var contenedor = Componente("contectauten");
    //crear contenido de ingreso
    var div = CrearObjeto("div");
    AddAtributo(div,"class","htmlfor")
    SaveObjeto(contenedor,div);
    //crear cabecera
    var cabeza = CrearObjeto("div");
    SaveObjeto(div,cabeza);
    var titulo = CrearObjeto("div");
    AddAtributo(titulo,"class","titu-ingreso");
    SaveObjeto(cabeza,titulo);
    //crear cuerpo
    var cuerpo = CrearObjeto("div");
    AddAtributo(cuerpo,"class","bodyform");
    SaveObjeto(div,cuerpo);
    //crear div para formulario
    var input = CrearObjeto("input");
    AddAtributo(input,"Placeholder","Cedula Ciudadana");
    AddAtributo(input,"oninput","soloNumeros(event);");
    AddAtributo(input,"type","text");
    AddAtributo(input,"maxlength","10");
    SaveObjeto(cuerpo,input);

    //input compuesto de huella dactilar
    var huella = CrearObjeto("div");
    AddAtributo(huella,"class","relative");
    SaveObjeto(cuerpo,huella);
    input = CrearObjeto("input");
    AddAtributo(input,"Placeholder","Huella dactilar");
    AddAtributo(input,"class","input-huella");
    AddAtributo(input,"oninput","convertirMayusculas(this);");
    AddAtributo(input,"type","text");
    AddAtributo(input,"maxlength","10");
    SaveObjeto(huella,input);
    var imgdiv = CrearObjeto("div");
    AddAtributo(imgdiv,"class","img-info");
    AddAtributo(imgdiv,"onclick","MostrarInfoHuella();");
    SaveObjeto(huella,imgdiv);

    //input compuesto de numero celular
    var cjcelular = CrearObjeto("div");
    AddAtributo(cjcelular,"class","esflex");
    SaveObjeto(cuerpo,cjcelular);
    var divnum = CrearObjeto("div");
    AddAtributo(divnum,"class","lbnumec");
    SaveObjeto(cjcelular,divnum);
    input = CrearObjeto("input");
    AddAtributo(input,"Placeholder","Numero celular");
    AddAtributo(input,"class","input-numop");
    AddAtributo(input,"oninput","soloNumeros(event);");
    AddAtributo(input,"type","text");
    AddAtributo(input,"maxlength","10");
    SaveObjeto(cjcelular,input);

    //input de correo electronico
    input = CrearObjeto("input");
    AddAtributo(input,"Placeholder","Correo electrónico");
    AddAtributo(input,"maxlength","200");
    AddAtributo(input,"type","email");
    SaveObjeto(cuerpo,input);

    //seccion de ubicacion
    //Agregar los datos a provincia
    var select = CrearObjeto("select");
    AddAtributo(select,"class","cmbx");
    AddAtributo(select,"onchange","CargarCiudades(this.value);");
    SaveObjeto(cuerpo,select);
    CargarProvincia(select);

    select = CrearObjeto("select");
    AddAtributo(select,"class","cmbx");
    AddAtributo(select,"id","cmbCiudad");
    SaveObjeto(cuerpo,select);
    var option = CrearObjeto('option');
    option.value = 0;
    ValorTexto(option, "Seleccione una ciudad");
    SaveObjeto(select,option);

    //input para la direccion
    input = CrearObjeto("input");
    AddAtributo(input,"Placeholder","Direccion domiciliaria");
    AddAtributo(input,"maxlength","200");
    SaveObjeto(cuerpo,input);

    //seccion de contraseña compuesta
    var clave = CrearObjeto("div");
    AddAtributo(clave,"class","relative");
    SaveObjeto(cuerpo,clave);
    input = CrearObjeto("input");
    AddAtributo(input,"id","pass1");
    AddAtributo(input,"Placeholder","Ingrese una contraseña");
    AddAtributo(input,"class","input-huella");
    AddAtributo(input,"maxlength","20");
    AddAtributo(input,"type","password");
    SaveObjeto(clave,input);
    var ojo = CrearObjeto("div");
    AddAtributo(ojo,"class","tipo-ojo ojo-cerrado");
    AddAtributo(ojo,"onclick","CambiardeOjos(this,'pass1');");
    SaveObjeto(clave,ojo);

    //seccion de contraseña repetida
    var clave = CrearObjeto("div");
    AddAtributo(clave,"class","relative");
    SaveObjeto(cuerpo,clave);
    input = CrearObjeto("input");
    AddAtributo(input,"id","pass2");
    AddAtributo(input,"Placeholder","Repita contraseña");
    AddAtributo(input,"class","input-huella");
    AddAtributo(input,"maxlength","20");
    AddAtributo(input,"type","password");
    SaveObjeto(clave,input);
    var ojo = CrearObjeto("div");
    AddAtributo(ojo,"class","tipo-ojo ojo-cerrado");
    AddAtributo(ojo,"onclick","CambiardeOjos(this,'pass2');");
    SaveObjeto(clave,ojo);

    //crear botonera
    var cjboton = CrearObjeto("div");
    AddAtributo(cjboton,"class","dosbtn");
    SaveObjeto(div,cjboton);
    //botones
    var btn = CrearObjeto("div");
    AddAtributo(btn,"class","btn-crear");
    SaveObjeto(cjboton,btn);
    btn = CrearObjeto("div");
    AddAtributo(btn,"class","btn-cancelar");
    AddAtributo(btn,"onclick","VolveraLogin();")
    SaveObjeto(cjboton,btn);
}

//funcion para recuperar clave
function btnolvido(){
    //codigo para cuando olvido clave
    window.history.pushState({},"", "/EcuApp/#recuperacion");
    //crear componentes para recuperar clave
    ValorTexto(contectauten,"");
    var contenedor = Componente("contectauten");
    AddAtributo(contectauten,"class","cjrecupera");
    //crear diseño
    var cabeza = CrearObjeto("div");
    SaveObjeto(contenedor,cabeza);
    //contenido de la cabecera
    var div = CrearObjeto("div");
    AddAtributo(div,"class","lb-recupera");
    SaveObjeto(cabeza,div);
    //crear caja de cuerpo
    var cuerpo = CrearObjeto("div");
    SaveObjeto(contenedor,cuerpo);
    //crear input con diseño
    var div = CrearObjeto("div");
    AddAtributo(div,"class","img-mail sobre");
    SaveObjeto(cuerpo,div);
    var input = CrearObjeto("input");
    AddAtributo(input,"id","txtrecupera");
    AddAtributo(input,"type","email");
    AddAtributo(input,"maxlength","200");
    AddAtributo(input,"Placeholder","Ingrese su correo electrónico");
    SaveObjeto(cuerpo,input);
    //crear caja de boton
    var botonera = CrearObjeto("div");
    SaveObjeto(contenedor,botonera);
    //crear boton enviar mail
    var div = CrearObjeto("div");
    AddAtributo(div,"class","btn-sendmail");
    AddAtributo(div,"onclick","EnviarMailOlvido();");
    SaveObjeto(botonera,div);
    //crear pie de componente
    var pie = CrearObjeto("div");
    SaveObjeto(contenedor,pie);
    //crear boton de retorno
    var div = CrearObjeto("div");
    AddAtributo(div,"class","btn-regresar");
    AddAtributo(div,"onclick","VolveraLogin();");
    SaveObjeto(pie,div);
}

function EnviarMailOlvido(){
    MensajeCargando();
    //obtener el mail
    var mail = Componente("txtrecupera");
    if(mail.value == ""){
      OcultarMsg();
      MensajeNotif("Ingrese todos los campos","atencion");
    } else {
        if(validarEmail(mail.value)){
            //enviar correo servicio ajax
            var ajax = new XMLHttpRequest();
            ajax.open("POST",""+usuarioservice+"",true);
            ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
            //obtener token captcha
            var captcha = document.getElementById('token-recaptcha').value;
            //enviar correo de recuperacion
            ajax.onreadystatechange = function(){
                if(ajax.readyState == 4){
                    var json = eval("("+ajax.responseText+")");
                    OcultarMsg();
                    if(json == true){ 
                      //presentar mensaje de enviado correctamente
                      MensajeNotif("Correo enviado exitosamente","correcto");
                      mail.value = "";
                     } 
                    //valida si el usuario no tiene bloqueo temporal
                    if (json == "-1"){
                            mail.value = "";
                            MensajeNotif("El correo indicado no existe","error");
                            setTimeout(refresh, 500);
                    } 
                    //presenta mensaje si no existe cliente o anulado
                    if(json == false) {
                        mail.value = "";
                        MensajeNotif("Error al enviar correo","error");
                    }
                }
            };
            ajax.timeout = 10000;
            ajax.ontimeout = function () { refresh(); };
            ajax.send("correo="+btoa(mail.value)+"&opcion="+op3+"&token="+captcha);
        } else { mail.value = ""; OcultarMsg(); MensajeNotif("Ingrese un correo valido","error"); }
      }
}

function VolveraLogin(){
    var bodyElement = document.querySelector("body");
    bodyElement.innerHTML = "";
    var section = CrearObjeto('section');
    AddAtributo(section,'id', 'cuerpogeneral');
    bodyElement.appendChild(section);
    btnlogin();
}

function CambiardeOjos(ojo, input){
    if (ojo.classList.contains('ojo-abierto')) {
        ojo.classList.remove('ojo-abierto');
        ojo.classList.add('ojo-cerrado');
        document.getElementById(input).type = "password";
    } else {
        ojo.classList.remove('ojo-cerrado');
        ojo.classList.add('ojo-abierto');
        document.getElementById(input).type = "text";
    }
}

function CargarProvincia(select){
    //listado de provincias
    const provincias = [
        'Azuay',
        'Bolívar',
        'Cañar',
        'Carchi',
        'Chimborazo',
        'Cotopaxi',
        'El Oro',
        'Esmeraldas',
        'Galápagos',
        'Guayas',
        'Imbabura',
        'Loja',
        'Los Ríos',
        'Manabí',
        'Morona Santiago',
        'Napo',
        'Orellana',
        'Pastaza',
        'Pichincha',
        'Santa Elena',
        'Santo Domingo de los Tsáchilas',
        'Sucumbíos',
        'Tungurahua',
        'Zamora Chinchipe'
      ];   
      //crear opciones de provincias
      const option = CrearObjeto('option');
      option.value = 0;
      ValorTexto(option, "Seleccione una provincia");
      SaveObjeto(select,option);
      //recorrer array
      provincias.forEach((provincia, index) => {
        const option = CrearObjeto('option');
        option.value = index+1;
        ValorTexto(option,provincia);
        SaveObjeto(select,option);
      }); 
}

function CargarCiudades(index){
    const listaCiudades = [
        { provincia: "", ciudades: ["Seleccione una ciudad"] },
        {
            provincia: "Azuay",
            ciudades: ["Cuenca", "Girón", "Gualaceo", "Paute", "Sígsig"]
        },
        {
            provincia: "Bolívar",
            ciudades: ["Guaranda", "Chillanes", "Chimbo", "Echeandía", "San Miguel"]
          },
          {
            provincia: "Cañar",
            ciudades: ["Azogues", "Biblián", "Cañar", "La Troncal", "El Tambo"]
          },
          {
            provincia: "Carchi",
            ciudades: ["Tulcán", "Bolívar", "Espejo", "Mira", "Montúfar"]
          },
          {
            provincia: "Chimborazo",
            ciudades: ["Riobamba", "Alausí", "Colta", "Cumandá", "Guamote"]
          },
          {
            provincia: "Cotopaxi",
            ciudades: ["Latacunga", "La Maná", "Pangua", "Pujilí", "Salcedo"]
          },
          {
            provincia: "El Oro",
            ciudades: ["Machala", "Arenillas", "Atahualpa", "Huaquillas", "Zaruma"]
          },
          {
            provincia: "Esmeraldas",
            ciudades: ["Esmeraldas", "Eloy Alfaro", "Muisne", "Quinindé", "San Lorenzo"]
          },
          {
            provincia: "Galápagos",
            ciudades: ["Puerto Baquerizo Moreno", "Isabela", "Santa Cruz", "San Cristóbal"]
          },
          {
            provincia: "Guayas",
            ciudades: ["Guayaquil", "Alfredo Baquerizo Moreno", "Balao", "Balzar", "Colimes"]
          },
          {
            provincia: "Imbabura",
            ciudades: ["Ibarra", "Antonio Ante", "Cotacachi", "Otavalo", "Pimampiro"]
          },
          {
            provincia: "Loja",
            ciudades: ["Loja", "Calvas", "Catamayo", "Macará", "Paltas"]
          },
          {
            provincia: "Los Ríos",
            ciudades: ["Babahoyo", "Baba", "Montalvo", "Puebloviejo", "Quevedo"]
          },
          {
            provincia: "Manabí",
            ciudades: ["Portoviejo", "Bolívar", "Chone", "El Carmen", "Flavio Alfaro"]
          },
          {
            provincia: "Morona Santiago",
            ciudades: ["Macas", "Gualaquiza", "Huamboya", "Limón Indanza", "Logroño"]
          },
          {
            provincia: "Napo",
            ciudades: ["Tena", "Archidona", "El Chaco", "Quijos"]
          },
          {
            provincia: "Orellana",
            ciudades: ["Francisco de Orellana", "Aguarico", "La Joya de los Sachas", "Lago Agrio"]
          },
          {
            provincia: "Pastaza",
            ciudades: ['Puyo', 'Arajuno', 'Mera', 'Tarqui']
          },
          {
            provincia: "Pichincha",
            ciudades: ['Quito', 'Cayambe', 'Mejía', 'Pedro Moncayo', 'Rumiñahui', 'San Miguel de los Bancos']
          },
          {
            provincia: "Santa Elena",
            ciudades: ['Santa Elena', 'La Libertad', 'Salinas']
          },
          {
            provincia: "Santo Domingo de los Tsáchilas",
            ciudades: ['Santo Domingo', 'La Concordia']
          },
          {
            provincia: "Sucumbíos",
            ciudades: ['Nueva Loja', 'Cascales', 'Cuyabeno', 'Gonzalo Pizarro', 'Lago Agrio', 'Shushufindi', 'Sucumbíos']
          },
          {
            provincia: "Tungurahua",
            ciudades: ['Ambato', 'Baños de Agua Santa', 'Cevallos', 'Mocha', 'Patate', 'Pelileo', 'Píllaro', 'Quero']
          },
          {
            provincia: "Zamora Chinchipe",
            ciudades: ['Zamora', 'Centinela del Cóndor', 'Chinchipe', 'Nangaritza', 'Palanda', 'Paquisha', 'Yacuambi', 'Yantzaza']
          }
    ];
    //seleccionar la lista de ciudades
    const listaciudad = listaCiudades[index].ciudades;
    var select = Componente("cmbCiudad");
    Contenido("cmbCiudad","");
    listaciudad.forEach((ciudad, i) => {
        const option = CrearObjeto('option');
        option.value = i+1;
        ValorTexto(option,ciudad);
        SaveObjeto(select,option);
    });
}

function MostrarInfoHuella(){
    MostrarInfo();
    var contenido = Componente("cajainfo");
    //crear contenido dentro
    var cuerpo = CrearObjeto("div");
    AddAtributo(cuerpo,"class","img-infohuella");
    SaveObjeto(contenido,cuerpo);
    var botonera = CrearObjeto("div");
    AddAtributo(botonera,"class","esflex");
    SaveObjeto(contenido,botonera);
    var cbot = CrearObjeto("div");
    AddAtributo(cbot, "Class", "btn-aceptar coloracepto");
    AddAtributo(cbot, "onclick", "OcultarMsg();");
    SaveObjeto(botonera, cbot);
}