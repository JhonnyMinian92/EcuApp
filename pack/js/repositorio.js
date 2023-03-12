var url = "pack/js/crud/";

//ejecutador pagina inicial sin login
CrearCuerpoHTML();

if (sessionStorage.getItem('Statuslogueo') === 'true') {
    //definir cambios de logueo
    CrearCuerpoLogin();
}

//refrescar pagina
function refresh(){
    window.location.reload();
}

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
    //crear los meta para la pagina
    var metaTag = document.createElement('meta');
    // Establecer atributos
    metaTag.setAttribute('name', 'EcuApp');
    metaTag.setAttribute('viewport', 'width=device-width, initial-scale=1.0');
    metaTag.setAttribute('description', 'aplicacion web para la interconectividad de los servicios del gobierno ecuatoriano y los requerimientos ciudadanos para los mismos');
    metaTag.setAttribute('keywords', 'ecuador,ecuatoriano,ciudadano,aplicacion,appecuador,webecuador,sitiociudadano,sri,registro civil,tramite,cedula,pasaporte,licencia');
    metaTag.setAttribute('author', 'Ing. Jhonny Miñan');
    metaTag.setAttribute('copyright', '© 2023 - Jhonny Darwin Miñan Giron');
    metaTag.setAttribute('robots', 'index,nofollow');
    metaTag.setAttribute('http-equiv', 'cache-control');
    metaTag.setAttribute('content', 'no-cache');
    metaTag.setAttribute('charset', 'UTF-8');
    // Agregar etiqueta meta al head
    document.head.appendChild(metaTag);

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
    //boton servicio
    var cjmenu = document.getElementById("cjmenu");
    var div = document.createElement("div");
    div.setAttribute("id", "btnmenu1");
    div.setAttribute("onclick", "btnservicio();");
    cjmenu.appendChild(div);
    //boton informacion
    var div = document.createElement("div");
    div.setAttribute("id", "btnmenu2");
    div.setAttribute("onclick", "btninformacion();");
    cjmenu.appendChild(div);
    //boton contactenos
    var div = document.createElement("div");
    div.setAttribute("id", "btnmenu3");
    div.setAttribute("onclick", "btncontactenos();");
    cjmenu.appendChild(div);
    //boton logueo
    var div = document.createElement("div");
    div.setAttribute("id", "btnmenu4");
    div.setAttribute("onclick", "btnlogin();");
    div.setAttribute("class", "btnlogin");
    cjmenu.appendChild(div);
    //boton menu smartphone
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
    //creacion de cuadros de noticias
    var div = document.createElement("div");
    div.setAttribute("id", "flexnoticias");
    article.appendChild(div);

    //creacion de pie de pagina
    var footer = document.createElement("footer");
    footer.setAttribute("id", "idfooter");
    cuerpo.appendChild(footer);
    //creacion de article
    var article = document.createElement("article");
    article.setAttribute("id", "idarticlef");
    footer.appendChild(article);

}

//front para pagina con login
function CrearCuerpoLogin(){
    //cambios para el login
    var botonlogin = document.getElementById("btnmenu4");
    botonlogin.setAttribute("onclick", "btnveruser();");
    botonlogin.setAttribute("class", "btnuser");
}