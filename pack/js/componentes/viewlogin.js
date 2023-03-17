//front para pagina con login
function CrearCuerpoLogin(){
    //cargar la pagina inicial
    CrearCuerpoHTML();
    //cambios para el login
    var botonlogin = Componente("btnmenu4");
    AddAtributo(botonlogin,"onclick", "btnveruser();");
    AddAtributo(botonlogin,"class", "btnuser");
}
