//funciones y animaciones
function btnservicio(){
    var contenedor = document.getElementById("idarticles");
    contenedor.innerHTML = "";
    //contenido donde se ven los servicios
    var div = document.createElement("div");
    div.setAttribute("id", "flexservicio");
    contenedor.appendChild(div);
}

function btninformacion(){
    var contenedor = document.getElementById("idarticles");
    contenedor.innerHTML = "";
    //contenido donde se ven los servicios
    var div = document.createElement("div");
    div.setAttribute("id", "flexinformacion");
    contenedor.appendChild(div);
}

function btncontactenos(){
    var contenedor = document.getElementById("idarticles");
    contenedor.innerHTML = "";
    //contenido donde se ven los servicios
    var div = document.createElement("div");
    div.setAttribute("id", "flexcontacto");
    contenedor.appendChild(div);
}

function btnlogin(){
    //front para loguearse
    var cuerpo = document.getElementById("cuerpogeneral");
    cuerpo.innerHTML = "";
}

function btnveruser(){
    var contenedor = document.getElementById("idarticles");
    contenedor.innerHTML = "";
    //contenido donde se ven los servicios
    var div = document.createElement("div");
    div.setAttribute("id", "flexcontacto");
    contenedor.appendChild(div);
}