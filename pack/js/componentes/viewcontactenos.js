function btncontactenos() {
    //routing de servicios
    window.history.pushState({}, "", "/EcuApp/#contactenos");
    //contenido de los contactos
    var contenedor = Componente("idarticles");
    Contenido("idarticles","");
    //contenido donde se ven los servicios
    var div = CrearObjeto("div");
    AddAtributo(div,"id","flexcontacto");
    SaveObjeto(contenedor,div);
}

