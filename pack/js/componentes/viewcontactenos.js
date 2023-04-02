function btncontactenos() {
    //routing de servicios
    window.history.pushState({}, "", "/EcuApp/#contactenos");
    //retornar giro boton
    var btn = Componente("btnmenu5");
    btn.style.transform = "rotate(0deg)";
    //ocultar el menu
    var menu = Componente("idminimenu");
    AddAtributo(menu,"Class","ocultar");
    //contenido de los contactos
    var contenedor = Componente("idarticles");
    Contenido("idarticles","");
    //contenido donde se ven los servicios
    var div = CrearObjeto("div");
    AddAtributo(div,"id","flexcontacto");
    SaveObjeto(contenedor,div);
}

