//ejecutador con el body


//crear todos los componentes del body
function CrearDiv(){
    //cuerpo general de la pagina
    var cuerpo = document.getElementById("cuerpogeneral");
    //creacion de cabezera
    var header = document.createElement("header");
    header.setAttribute("id", "idheader");
    cuerpo.appendChild(header);
    //creacion de nav

    //creacion de semicuerpo
    var section = document.createElement("section");
    section.setAttribute("id", "idsection");
    cuerpo.appendChild(section);
    //creacion de article

    //creacion de pie de pagina
    var footer = document.createElement("footer");
    footer.setAttribute("id", "idfooter");
    cuerpo.appendChild(footer);
    //creacion de article

}

//listar media query
document.write('<script src="../../pack/js/crud/frontphone.js"></script>');