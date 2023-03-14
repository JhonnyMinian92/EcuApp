function btninformacion() {
    var contenedor = document.getElementById("idarticles");
    contenedor.innerHTML = "";
    //contenido donde se ven los servicios
    var div = document.createElement("div");
    div.setAttribute("id", "flexinformacion");
    contenedor.appendChild(div);
}

