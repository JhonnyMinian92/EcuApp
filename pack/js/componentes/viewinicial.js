if (sessionStorage.getItem('Statuslogueo') === 'true') {
    //definir cambios de logueo
    CrearCuerpoLogin();
} else {
    //ejecutador pagina inicial sin login
    CrearCuerpoHTML();
}

function CrearMetaHead() {

    var cabecera = document.head;

    //crear el titulo de la pagina
    var title = CrearObjeto('title');
    ValorTexto(title,"EcuApp");
    SaveObjeto(cabecera,title);

    //crear icono de la pagina
    // Crear un nuevo elemento "link"
    var link = CrearObjeto("link");
    AddAtributo(link,"rel","shortcut icon");
    AddAtributo(link,"href","favicon.ico");
    SaveObjeto(cabecera,link);

    //crear los meta para charset
    var metaTag = CrearObjeto('meta');
    AddAtributo(metaTag,'charset', 'UTF-8');
    SaveObjeto(cabecera,metaTag);

    //crear los meta para nombre
    var metaTag = CrearObjeto('meta');
    AddAtributo(metaTag,'name', 'EcuApp');
    SaveObjeto(cabecera,metaTag);

    //crear los meta para description
    var metaTag = CrearObjeto('meta');
    AddAtributo(metaTag,'description', 'aplicacion web para la interconectividad de los servicios del gobierno ecuatoriano y los requerimientos ciudadanos para los mismos');
    SaveObjeto(cabecera,metaTag);

    //crear los meta para palabras
    var metaTag = CrearObjeto('meta');
    AddAtributo(metaTag,'keywords', 'ecuador,ecuatoriano,ciudadano,aplicacion,appecuador,webecuador,sitiociudadano,sri,registro civil,tramite,cedula,pasaporte,licencia');
    SaveObjeto(cabecera,metaTag);

    //crear los meta para autor
    var metaTag = CrearObjeto('meta');
    AddAtributo(metaTag,'author', 'Ing. Jhonny Miñan');
    SaveObjeto(cabecera,metaTag);

    //crear los meta para copyright
    var metaTag = CrearObjeto('meta');
    AddAtributo(metaTag,'copyright', '© 2023 - Jhonny Darwin Miñan Giron');
    SaveObjeto(cabecera,metaTag);

    //crear los meta para robots
    var metaTag = CrearObjeto('meta');
    AddAtributo(metaTag,'robots', 'index,nofollow');
    SaveObjeto(cabecera,metaTag);

    //crear los meta para cache
    var metaTag = CrearObjeto('meta');
    AddAtributo(metaTag,'http-equiv', 'cache-control');
    AddAtributo(metaTag,'content', 'no-cache');
    SaveObjeto(cabecera,metaTag);

    var metaTag = CrearObjeto('meta');
    AddAtributo(metaTag,'http-equiv', 'expires');
    AddAtributo(metaTag,'content', '0');
    SaveObjeto(cabecera,metaTag);

    var metaTag = CrearObjeto('meta');
    AddAtributo(metaTag,'http-equiv', 'pragma');
    AddAtributo(metaTag,'content', 'no-cache');
    SaveObjeto(cabecera,metaTag);
}

function CrearBody(){
        //cuerpo general de la pagina
        var body = CrearObjeto("body");
        document.documentElement.appendChild(body);
}

//crear todos los componentes del body
function CrearCuerpoHTML() {
    //routing a la pagina inicial
    window.history.pushState({}, "", "/EcuApp/");
    //crear el contenido del head
    CrearMetaHead();    
    //crear el body para su contenido
    CrearBody();
    //variable del cuerpo html
    var bodyhtml = document.body;
    //crear el section contenedor
    var section = CrearObjeto('section');
    AddAtributo(section,'id', 'cuerpogeneral');
    bodyhtml.appendChild(section);

    var cuerpo = Componente("cuerpogeneral");
    //creacion de cabecera
    var header = CrearObjeto("header");
    AddAtributo(header,"id", "idheader");
    SaveObjeto(cuerpo,header);
    //creacion de nav
    var nav = CrearObjeto("nav");
    AddAtributo(nav,"id", "idnav");
    SaveObjeto(header,nav);
    //creacion de nav
    var minimenu = CrearObjeto("nav");
    AddAtributo(minimenu,"id", "idminimenu");
    AddAtributo(minimenu,"Class","ocultar");
    SaveObjeto(header,minimenu);
    
    /*  Crear 4 botones de mini menu */
    //boton de login
    var li = CrearObjeto("div");
    AddAtributo(li,"Class","li-login");
    AddAtributo(li,"onclick", "btnlogin();");
    SaveObjeto(minimenu,li);
    //boton de servicio
    var li = CrearObjeto("div");
    AddAtributo(li,"Class","li-servicio")
    AddAtributo(li,"onclick", "btnservicio();");
    SaveObjeto(minimenu,li);
    //boton de informacion
    var li = CrearObjeto("div");
    AddAtributo(li,"Class","li-informacion")
    AddAtributo(li,"onclick", "btninformacion();");
    SaveObjeto(minimenu,li);
    //boton de contacto
    var li = CrearObjeto("div");
    AddAtributo(li,"Class","li-contacto");
    AddAtributo(li,"onclick", "btncontactenos();");
    SaveObjeto(minimenu,li);

    //creacion de logo
    var div = CrearObjeto("div");
    AddAtributo(div,"id", "idlogo");
    SaveObjeto(nav,div);
    //creacion de nombre web
    var div = CrearObjeto("div");
    AddAtributo(div,"id", "idlbnom");
    AddAtributo(div,"onclick", "refresh();");
    SaveObjeto(nav,div);
    //creacion de menu varia por screen
    var div = CrearObjeto("div");
    AddAtributo(div,"id", "cjmenu");
    SaveObjeto(nav,div);
    //creacion de botonera de menu
    //boton servicio
    var cjmenu = Componente("cjmenu");
    var div = CrearObjeto("div");
    AddAtributo(div,"id", "btnmenu1");
    AddAtributo(div,"onclick", "btnservicio();");
    SaveObjeto(cjmenu,div);
    //boton informacion
    var div = CrearObjeto("div");
    AddAtributo(div,"id", "btnmenu2");
    AddAtributo(div,"onclick", "btninformacion();");
    SaveObjeto(cjmenu,div);
    //boton contactenos
    var div = CrearObjeto("div");
    AddAtributo(div,"id", "btnmenu3");
    AddAtributo(div,"onclick", "btncontactenos();");
    SaveObjeto(cjmenu,div);
    //boton logueo
    var div = CrearObjeto("div");
    AddAtributo(div,"id", "btnmenu4");
    AddAtributo(div,"onclick", "btnlogin();");
    AddAtributo(div,"class", "btnlogin");
    SaveObjeto(cjmenu,div);
    //boton menu smartphone
    var div = CrearObjeto("div");
    AddAtributo(div,"id", "btnmenu5");
    AddAtributo(div,"onclick","verminimenu();");
    AddAtributo(div,"class", "btnmenu");
    SaveObjeto(cjmenu,div);

    //creacion de semicuerpo
    var section = CrearObjeto("section");
    AddAtributo(section,"id", "idsection");
    SaveObjeto(cuerpo,section);
    //creacion de article
    var article = CrearObjeto("article");
    AddAtributo(article,"id", "idarticles");
    SaveObjeto(section,article);
    //creacion de cuadros de noticias
    var div = CrearObjeto("div");
    AddAtributo(div,"id", "flexnoticias");
    SaveObjeto(article,div);
    //Ejecutar la funcion con las noticias
    ViewNoticias();

    //creacion de pie de pagina
    var footer = CrearObjeto("footer");
    AddAtributo(footer,"id", "idfooter");
    SaveObjeto(cuerpo,footer);
    //creacion de article
    var article = CrearObjeto("article");
    AddAtributo(article,"id", "idarticlef");
    SaveObjeto(footer,article);
}

function ViewNoticias(){
    //seleccionar contenedor
    var noticias = Componente("flexnoticias");
    //subcontenedor
    var div = CrearObjeto("div");
    AddAtributo(div,"Class","info-principal");
    SaveObjeto(noticias,div);
    //texto de pregunta
    var h1 = CrearObjeto("div");
    SaveObjeto(div,h1);
    //texto de subtitulo
    var h2 = CrearObjeto("div");
    SaveObjeto(div,h2);
    //boton para ir a informacion
    var boton = CrearObjeto("div");
    AddAtributo(boton,"onclick", "btninformacion();");
    SaveObjeto(div,boton);
}

function ViewFooter(){
    
}

function btnveruser() {
    var contenedor = Componente("idarticles");
    Contenido("idarticles","");
    //contenido donde se ven los datos del cliente logueado
    var div = CrearObjeto("div");
    AddAtributo(div,"id", "flexVerDatos");
    SaveObjeto(contenedor,div);
}

function verminimenu(){
    var menu = Componente("idminimenu");
    if(menu.classList.contains('ocultar')){
        AddAtributo(menu,"Class","mostrar");
    }
    else {
        AddAtributo(menu,"Class","ocultar");
    }
}