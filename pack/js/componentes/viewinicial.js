if (sessionStorage.getItem('Statuslogueo') === 'true') {
    //cargar la pagina inicial
    CrearCuerpoHTML();
    //definir cambios de logueo
    CrearCuerpoLogin();
} else {
    //ejecutador pagina inicial sin login
    CrearCuerpoHTML();
}

//refrescar pagina
function refresh() {
    window.location.reload();
}

function CrearMetaHead() {
    //crear el titulo de la pagina
    var title = document.createElement('title');
    title.innerHTML = "EcuApp";
    document.head.appendChild(title);

    //crear icono de la pagina
    // Crear un nuevo elemento "link"
    var link = document.createElement("link");
    link.setAttribute("rel", "shortcut icon");
    link.setAttribute("href", "favicon.ico");
    document.head.appendChild(link);

    //crear los meta para charset
    var metaTag = document.createElement('meta');
    metaTag.setAttribute('charset', 'UTF-8');
    document.head.appendChild(metaTag);

    //crear los meta para nombre
    var metaTag = document.createElement('meta');
    metaTag.setAttribute('name', 'EcuApp');
    document.head.appendChild(metaTag);

    //crear los meta para escala
    var metaTag = document.createElement('meta');
    metaTag.setAttribute('viewport', 'width=device-width, initial-scale=1.0');
    document.head.appendChild(metaTag);

    //crear los meta para description
    var metaTag = document.createElement('meta');
    metaTag.setAttribute('description', 'aplicacion web para la interconectividad de los servicios del gobierno ecuatoriano y los requerimientos ciudadanos para los mismos');
    document.head.appendChild(metaTag);

    //crear los meta para palabras
    var metaTag = document.createElement('meta');
    metaTag.setAttribute('keywords', 'ecuador,ecuatoriano,ciudadano,aplicacion,appecuador,webecuador,sitiociudadano,sri,registro civil,tramite,cedula,pasaporte,licencia');
    document.head.appendChild(metaTag);

    //crear los meta para autor
    var metaTag = document.createElement('meta');
    metaTag.setAttribute('author', 'Ing. Jhonny Miñan');
    document.head.appendChild(metaTag);

    //crear los meta para copyright
    var metaTag = document.createElement('meta');
    metaTag.setAttribute('copyright', '© 2023 - Jhonny Darwin Miñan Giron');
    document.head.appendChild(metaTag);

    //crear los meta para robots
    var metaTag = document.createElement('meta');
    metaTag.setAttribute('robots', 'index,nofollow');
    document.head.appendChild(metaTag);

    //crear los meta para autor
    var metaTag = document.createElement('meta');
    metaTag.setAttribute('http-equiv', 'cache-control');
    metaTag.setAttribute('content', 'no-cache');
    document.head.appendChild(metaTag);
}

//crear todos los componentes del body
function CrearCuerpoHTML() {    
    CrearMetaHead();
    //cuerpo general de la pagina
    var body = document.createElement("body");
    document.documentElement.appendChild(body);

    var section = document.createElement('section');
    section.setAttribute('id', 'cuerpogeneral');
    document.body.appendChild(section);

    var cuerpo = document.getElementById("cuerpogeneral");
    //creacion de cabecera
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

function btnservicio() {
    var contenedor = document.getElementById("idarticles");
    contenedor.innerHTML = "";
    //contenido donde se ven los servicios
    var div = document.createElement("div");
    div.setAttribute("id", "flexservicio");
    contenedor.appendChild(div);
}

function btninformacion() {
    var contenedor = document.getElementById("idarticles");
    contenedor.innerHTML = "";
    //contenido donde se ven los servicios
    var div = document.createElement("div");
    div.setAttribute("id", "flexinformacion");
    contenedor.appendChild(div);
}

function btncontactenos() {
    var contenedor = document.getElementById("idarticles");
    contenedor.innerHTML = "";
    //contenido donde se ven los servicios
    var div = document.createElement("div");
    div.setAttribute("id", "flexcontacto");
    contenedor.appendChild(div);
}

function btnlogin() {
    //front para loguearse
    var cuerpo = document.getElementById("cuerpogeneral");
    cuerpo.innerHTML = "";
}

function btnveruser() {
    var contenedor = document.getElementById("idarticles");
    contenedor.innerHTML = "";
    //contenido donde se ven los servicios
    var div = document.createElement("div");
    div.setAttribute("id", "flexcontacto");
    contenedor.appendChild(div);
}