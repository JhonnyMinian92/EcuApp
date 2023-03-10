//funciones y animaciones
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