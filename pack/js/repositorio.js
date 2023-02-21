//ejecutador con el body
CrearCuerpoHTML();

//acciones media query telefono
document.write('<script src="http://localhost/EcuApp/pack/js/crud/frontphone.js"></script>');
//listar media query tablet

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
    //creacion de logo
    var div = document.createElement("div");
    div.setAttribute("id", "idlogo");
    nav.appendChild(div);
    //creacion de nombre web
    var div = document.createElement("div");
    div.setAttribute("id", "idlbnom");
    nav.appendChild(div);
    //creacion de menu varia por screen
    var div = document.createElement("div");
    div.setAttribute("id", "cjmenu");
    nav.appendChild(div);
    //creacion de nav
    var minimenu = document.createElement("nav");
    minimenu.setAttribute("id", "idminimenu");
    header.appendChild(minimenu);

    //creacion de semicuerpo
    var section = document.createElement("section");
    section.setAttribute("id", "idsection");
    cuerpo.appendChild(section);
    //creacion de article
    var article = document.createElement("article");
    article.setAttribute("id", "idarticles");
    section.appendChild(article);

    //creacion de pie de pagina
    var footer = document.createElement("footer");
    footer.setAttribute("id", "idfooter");
    cuerpo.appendChild(footer);
    //creacion de article
    var article = document.createElement("article");
    article.setAttribute("id", "idarticlef");
    footer.appendChild(article);

}