function btninformacion() {
    //routing de informacion
    window.history.pushState({}, "", "/EcuApp/#informacion");
    //retornar giro boton
    var btn = Componente("btnmenu5");
    btn.style.transform = "rotate(0deg)";
    //ocultar el menu
    var menu = Componente("idminimenu");
    AddAtributo(menu,"Class","ocultar");
    //contenido de la informacion de la empresa
    var contenedor = Componente("idarticles");
    Contenido("idarticles","");
    //contenido donde se ven los servicios
    var div = CrearObjeto("div");
    AddAtributo(div,"id","flexinformacion");
    SaveObjeto(contenedor,div);
}

