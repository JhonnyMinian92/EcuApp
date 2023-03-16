//front para pagina con login
function CrearCuerpoLogin(){
    //cargar la pagina inicial
    CrearCuerpoHTML();
    //cambios para el login
    var botonlogin = Componente("btnmenu4");
    botonlogin.setAttribute("onclick", "btnveruser();");
    botonlogin.setAttribute("class", "btnuser");
}
