var url = "pack/js/componentes/";

//ventana con cambios de logueado
document.write('<script src="'+url+'viewlogueado.js"></script>');
//ventana registro de usuarios
document.write('<script src="'+url+'viewregistro.js"></script>');
//ventana de link de servicio
document.write('<script src="'+url+'viewservicio.js"></script>');
//ventana de link de informacion
document.write('<script src="'+url+'viewinformacion.js"></script>');
//ventana de link de contactenos
document.write('<script src="'+url+'viewcontactenos.js"></script>');
//ventana inicial 
document.write('<script src="'+url+'viewinicial.js"></script>');


//Funciones para seleccionar objeto
function refresh() {
    window.location.reload();
}

//seleccionar objeto
function Componente(id){
    return document.getElementById(id);
}

//seleccionar para dar estilo
function Estilo(id){
    return documento.getElementById(id).style;
}

//agregar o eliminar contenido
function Contenido(id, contenido){
    document.getElementById(id).innerHTML = contenido;
}

//agregar texto a un componente recien creado
function ValorTexto(objeto, contenido){
    objeto.innerHTML = contenido;
}

//codigo para crear objetos
function CrearObjeto(tipo){
    return document.createElement(tipo);
}

//Agregar atributos al objeto creado
function AddAtributo(objeto, tipo, atributo){
    objeto.setAttribute(tipo,atributo); 
}

//Guardar el objeto creado dentro de la pagina
function SaveObjeto(contenedor, objeto){
    contenedor.appendChild(objeto);
}

//eliminar un objeto seleccionado
function DelObjeto(id){
    document.getElementById(id).remove();
}