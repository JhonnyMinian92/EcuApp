//ventana de link servicio
function btnservicio() {
    var contenedor = Componente("idarticles");
    Contenido("idarticles","");
    //contenido donde se ven los servicios
    var div = CrearObjeto("div");
    AddAtributo(div,"id","flexservicio");
    SaveObjeto(contenedor,div);
}