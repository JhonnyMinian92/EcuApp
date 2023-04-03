//front para pagina con login
function CrearCuerpoLogin(){
    //cargar la pagina inicial
    CrearCuerpoHTML();
    //cambios para el login
    var botonlogin = Componente("btnmenu4");
    AddAtributo(botonlogin,"onclick", "btnveruser();");
    AddAtributo(botonlogin,"class", "btnuser");
    //cambio para mini login
    var minilogin = Componente("liminilogin");
    AddAtributo(minilogin,"onclick", "btnveruser();");
    AddAtributo(minilogin,"class", "li-logueado");
}

function btnveruser() {
    window.history.pushState({},"", "/EcuApp/#DatosPersonales");
    //retornar giro boton
    var btn = Componente("btnmenu5");
    btn.style.transform = "rotate(0deg)";
    var contenedor = Componente("idarticles");
    Contenido("idarticles","");
    //contenido donde se ven los datos del cliente logueado
    var div = CrearObjeto("div");
    AddAtributo(div,"id", "flexVerDatos");
    SaveObjeto(contenedor,div);
}