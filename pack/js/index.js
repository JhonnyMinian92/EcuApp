//ejecutador con el body
CrearCuerpoHTML();

//listar media query
document.write('<script src="../../pack/js/crud/frontphone.js"></script>');

//crear todos los componentes del body
function CrearCuerpoHTML(){
    //cuerpo general de la pagina
    var cuerpo = document.getElementById("cuerpogeneral");
    cuerpo.innerHTML = "";
    //creacion de cabezera
    var header = document.createElement("header");
    header.setAttribute("id", "idheader");
    cuerpo.appendChild(header);
    //creacion de nav
    var nav = document.createElement("nav");
    nav.setAttribute("id", "idnav");
    header.appendChild(nav);

    //creacion de semicuerpo
    var section = document.createElement("section");
    section.setAttribute("id", "idsection");
    cuerpo.appendChild(section);
    //creacion de article
    var article = document.createElement("article");
    article.setAttribute("id", "idarticle");
    section.appendChild(article);

    //creacion de pie de pagina
    var footer = document.createElement("footer");
    footer.setAttribute("id", "idfooter");
    cuerpo.appendChild(footer);
    //creacion de article
    var article = document.createElement("article");
    article.setAttribute("id", "idarticle");
    footer.appendChild(article);

}