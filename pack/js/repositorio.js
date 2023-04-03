//url para los componentes js
var url = "http://192.168.1.5/EcuApp/pack/js/componentes/";
//variable para almacenar ubicacion (login)
var ubicacion = "";

//ventana de link de servicio
document.write('<script src="'+url+'viewservicio.js"></script>');
//ventana de link de informacion
document.write('<script src="'+url+'viewinformacion.js"></script>');
//ventana de link de contactenos
document.write('<script src="'+url+'viewcontactenos.js"></script>');
//ventana con cambios de logueado
document.write('<script src="'+url+'viewlogueado.js"></script>');
//ventana registro de usuarios
document.write('<script src="'+url+'viewregistro.js"></script>');
//ventana inicial 
document.write('<script src="'+url+'viewinicial.js"></script>');

//Funciones para seleccionar objeto
function refresh() {
    window.location.reload();
}

//seleccionar objeto
function Componente(id){
    return document.getElementById(id);
}

//agregar o eliminar contenido
function Contenido(id, contenido){
    document.getElementById(id).innerHTML = contenido;
}

//agregar texto a un componente recien creado
function ValorTexto(objeto, contenido){
    objeto.innerHTML = contenido;
}

//codigo para crear objetos
function CrearObjeto(tipo){
    return document.createElement(tipo);
}

//Agregar atributos al objeto creado
function AddAtributo(objeto, tipo, atributo){
    objeto.setAttribute(tipo,atributo); 
}

//Guardar el objeto creado dentro de la pagina
function SaveObjeto(contenedor, objeto){
    contenedor.appendChild(objeto);
}

//eliminar un objeto seleccionado
function DelObjeto(id){
    document.getElementById(id).remove();
}

//geolocalizacion para registro de usuarios
if (navigator.geolocation) { navigator.geolocation.getCurrentPosition(capturaPosicion); }
//funcion que genera ubicacion con google maps
function capturaPosicion(pos){
  this.ubicacion = "https://www.google.com.ec/maps/@"+pos.coords.latitude+","+pos.coords.longitude+",19z?hl=es";
}

//funcion para mostrar el mensaje de cargando
function MensajeCargando(){
        //crear capa transparente
        var capa = CrearObjeto("section");
        AddAtributo(capa, "Class", "capa-transpa");
        AddAtributo(capa, "id", "idcapa");
        SaveObjeto(cuerpogeneral, capa);
        //crear cuadro de mensaje
        var cuadro = CrearObjeto("article");
        AddAtributo(cuadro, "Class", "cuadro-error");
        AddAtributo(cuadro, "id", "idcuadromsg");
        SaveObjeto(cuerpogeneral, cuadro);
        //mostrar cargando en pantalla
        var div = CrearObjeto("div");
        AddAtributo(div,"Class","loader");
        SaveObjeto(cuadro,div);
}

//funcion  para mensaje de error
function MensajeNotif(texto, tipo){
    //crear capa transparente
    var capa = CrearObjeto("section");
    AddAtributo(capa, "Class", "capa-transpa");
    AddAtributo(capa, "id", "idcapa");
    SaveObjeto(cuerpogeneral, capa);
    //crear cuadro de mensaje
    var cuadro = CrearObjeto("article");
    AddAtributo(cuadro, "Class", "cuadro-error");
    AddAtributo(cuadro, "id", "idcuadromsg");
    SaveObjeto(cuerpogeneral, cuadro);
    //crear componentes del cuadro
    var div = CrearObjeto("div");
    AddAtributo(div, "Class", "desing-error");
    SaveObjeto(cuadro, div);
    //contenido de caja de mensaje error
    //cabecera
    var cabecera = CrearObjeto("div");
    SaveObjeto(div, cabecera);
    //cuerpo
    var conten = CrearObjeto("div");
    SaveObjeto(div, conten);
    //botonera
    var botonera = CrearObjeto("div");
    SaveObjeto(div, botonera);

    //dentro de cabecera
    var cdiv = CrearObjeto("div");
    AddAtributo(cdiv, "Class", "lb-encabezado");
    SaveObjeto(cabecera, cdiv);
    if (tipo == "error") {
        //icono error
        var icon = CrearObjeto("div");
        AddAtributo(icon,"Class","img-iconerror");
        SaveObjeto(cdiv, icon);
        var lbtitu = CrearObjeto("div");
        AddAtributo(lbtitu,"Class","color-warnin");
        SaveObjeto(cdiv, lbtitu);
    }
    if(tipo == "atencion"){
        //icono atencion
        var icon = CrearObjeto("div");
        AddAtributo(icon,"Class","img-iconatencion");
        SaveObjeto(cdiv, icon);
        var lbtitu = CrearObjeto("div");
        AddAtributo(lbtitu,"Class","color-atencion");
        SaveObjeto(cdiv, lbtitu);
    }
    if(tipo == "correcto"){
        //icono atencion
        var icon = CrearObjeto("div");
        AddAtributo(icon,"Class","img-iconcorrecto");
        SaveObjeto(cdiv, icon);
        var lbtitu = CrearObjeto("div");
        AddAtributo(lbtitu,"Class","color-correcto");
        SaveObjeto(cdiv, lbtitu);
    }
    //dentro de contenido
    var ccon = CrearObjeto("div");
    ValorTexto(ccon, texto);
    SaveObjeto(conten, ccon);
    //dentro de botonera
    var cbot = CrearObjeto("div");
    AddAtributo(cbot, "Class", "btn-aceptar");
    if(tipo == "correcto"){ AddAtributo(cbot, "Class", "btn-aceptar coloracepto"); }
    AddAtributo(cbot, "onclick", "OcultarMsg();");
    SaveObjeto(botonera, cbot);
}

//funcion para ocultar mensajes de error
function OcultarMsg(){
    DelObjeto("idcapa");
    DelObjeto("idcuadromsg");
}

//validaciones de input mail
function validarEmail(correo) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(correo)) { return true; } else { return false; }
}

//funcionpara validar solo ingreso de numeros
function validarNumeros(event, indice) {
    // Obtener el código de la tecla presionada
    var codigoTecla = event.which || event.keyCode;
    // Verificar si la tecla presionada es un número
    if (codigoTecla >= 48 && codigoTecla <= 57) { 
        //previene el ingreso en el input actual
        event.preventDefault();
        //preguarda el valor en el input actual
        document.getElementById(indice).value = String.fromCharCode(codigoTecla);
        //salta al siguiente input
        SaltarFocus(indice);
        return false;
    } else { 
        return true; 
    }
} 

//funcion para al dar click pasar al siguiente input
function SaltarFocus(id) {
    var numero = parseInt(id.toString().slice(-1)) + 1;
    //verifica que no exceda de los 6 inputs existentes
    if(numero <= 6){
        document.getElementById("txtdig" + numero).value = "";
        document.getElementById("txtdig" + numero).focus();
    }
}

//impedir click derecho en el documento
document.addEventListener("contextmenu", function(e){
    e.preventDefault();
}, false);

//quitar el zoom del scroll del mouse
document.addEventListener('wheel', function(event) {
    if (event.ctrlKey) {
      event.preventDefault();
    }
}, { passive: false });  

//Deshabilitar opciones de teclas
document.onkeydown = function(e) {
    // impedir la tecla F12
    if (e.keyCode == 123) {
      return false;
    }
    // Deshabilitar la visualización de la fuente de la página al presionar Ctrl+U
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
    // Deshabilitar la visualización presionar Win+U en sistemas Windows o Cmd+U en sistemas macOS
    if ((e.metaKey && e.keyCode == 'U'.charCodeAt(0)) || (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0))) {
        return false;
    }
    //quitar el zoom a nivel de pagina
    if (e.ctrlKey==true && (e.which == '187' || e.which == '189')) {
        e.preventDefault();
    }
  }
