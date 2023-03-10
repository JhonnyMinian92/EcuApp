var url = "../EcuApp/pack/js/crud/";

//ejecutador con el body
CrearCuerpoHTML();

//verificacion de login


//acciones media query telefono
document.write('<script src="'+url+'frontphone.js"></script>');
//acciones media query tablet
document.write('<script src="'+url+'fronttablet.js"></script>');
//acciones media query computador
document.write('<script src="'+url+'frontcompu.js"></script>');
//acciones media query televisor
document.write('<script src="'+url+'fronttv.js"></script>');
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
    //creacion de nav
    var minimenu = document.createElement("nav");
    minimenu.setAttribute("id", "idminimenu");
    header.appendChild(minimenu);
    //creacion de logo
    var div = document.createElement("div");
    div.setAttribute("id", "idlogo");
    nav.appendChild(div);
    //creacion de nombre web
    var div = document.createElement("div");
    div.setAttribute("id", "idlbnom");
    div.setAttribute("onclick", "refresh();");
    nav.appendChild(div);
    //creacion de menu varia por screen
    var div = document.createElement("div");
    div.setAttribute("id", "cjmenu");
    nav.appendChild(div);
    //creacion de botonera de menu
    //boton 1
    var cjmenu = document.getElementById("cjmenu");
    var div = document.createElement("div");
    div.setAttribute("id", "btnmenu1");
    div.setAttribute("onclick", "btnservicio();");
    cjmenu.appendChild(div);
    //boton 2
    var div = document.createElement("div");
    div.setAttribute("id", "btnmenu2");
    div.setAttribute("onclick", "btninformacion();");
    cjmenu.appendChild(div);
    //boton 3
    var div = document.createElement("div");
    div.setAttribute("id", "btnmenu3");
    div.setAttribute("onclick", "btncontactenos();");
    cjmenu.appendChild(div);
    //boton 4
    var div = document.createElement("div");
    div.setAttribute("id", "btnmenu4");
    div.setAttribute("class", "btnlogin");
    cjmenu.appendChild(div);
    //boton 5
    var div = document.createElement("div");
    div.setAttribute("id", "btnmenu5");
    div.setAttribute("class", "btnmenu");
    cjmenu.appendChild(div);

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

function refresh(){
    window.location.reload();
}

function btnservicio(){
    document.getElementById("btnmenu1").style.borderBottom = "3px solid #6f9aba";
    document.getElementById("btnmenu2").style.borderBottom = "none";
    document.getElementById("btnmenu3").style.borderBottom = "none";
}

function btninformacion(){
    document.getElementById("btnmenu1").style.borderBottom = "none";
    document.getElementById("btnmenu2").style.borderBottom = "3px solid #6f9aba";
    document.getElementById("btnmenu3").style.borderBottom = "none";
}

function btncontactenos(){
    document.getElementById("btnmenu1").style.borderBottom = "none";
    document.getElementById("btnmenu2").style.borderBottom = "none";
    document.getElementById("btnmenu3").style.borderBottom = "3px solid #6f9aba";
}