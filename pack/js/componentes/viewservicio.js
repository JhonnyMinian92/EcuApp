//ventana de link servicio
function btnservicio() {
    var contenedor = document.getElementById("idarticles");
    contenedor.innerHTML = "";
    //contenido donde se ven los servicios
    var div = document.createElement("div");
    div.setAttribute("id", "flexservicio");
    contenedor.appendChild(div);
}