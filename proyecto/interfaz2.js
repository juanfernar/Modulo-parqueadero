var objNombres = {
    nombres: "Andres Felipe",
    apellidos: "Urrutia Solarte",
    slogan1: "¡Soy Autónomo,",
    slogan2: "soy calidad!",
    semana: "LO UAO DE LA SEMANA",
    academico: "ACADEMICO",
    transporte: "TRANSPORTE",
    parqueadero: "Parqueadero",
    rutas: "Rutas MIO"
}

var objIconos = {
    arriba: "keyboard_arrow_up",
    abajo: "keyboard_arrow_down"
};

var nux;
var nuy;
var stCoordenada;




function cargarDatos(){
    document.getElementById("nombres").innerHTML = objNombres.nombres;
    document.getElementById("apellidos").innerHTML = objNombres.apellidos;
    document.getElementById("slogan1").innerHTML = objNombres.slogan1;
    document.getElementById("slogan2").innerHTML = objNombres.slogan2;
    document.getElementById("semana").innerHTML = objNombres.semana;
    document.getElementById("academico").innerHTML = objNombres.academico;
    document.getElementById("transporte").innerHTML = objNombres.transporte;
    document.getElementById("div_uao").innerHTML = objIconos.abajo;
    document.getElementById("div_acad").innerHTML = objIconos.abajo;
    document.getElementById("div_transp").innerHTML = objIconos.abajo;
    document.getElementById("parqueadero").innerHTML = objNombres.parqueadero;
    document.getElementById("rutas").innerHTML = objNombres.rutas;
}

function mostrarMenu(){
    var stMenu = document.getElementById("menu");
    var stFondo = document.getElementById("blur")
    stMenu.style.webkitTransition = "left 0.6s";
    stMenu.style.transition = "left 0.6s";
    stMenu.style.left = "0rem";
    stFondo.style.webkitTransition = "display 2s";
    stFondo.style.transition = "display 2s";
    stFondo.style.display = "flex";
}

function ocultarMenu(){
    // var stMenu = document.getElementById("menu");
    // var stFondo = document.getElementById("blur");
    // stMenu.style.webkitTransition = "left 1s";
    // stMenu.style.transition = "left 1s";
    // stMenu.style.left = "-20rem";
    // stFondo.style.webkitTransition = "opacity 5s";
    // stFondo.style.transition = "opacity 5s";
    // stFondo.style.display = "none";
    transicionMenu();
}

function esconderMenu(event) {
    nux = event.touches[0].clientX;
    nuy = event.touches[0].clientY;
    // nuy = e.clientY;
    if(nux < 305){
        transicionMenu();
    }
    console.log(nux, nuy);
}

function transicionMenu(){
    var stMenu = document.getElementById("menu");
    var stFondo = document.getElementById("blur");
    stMenu.style.webkitTransition = "left 0.6s";
    stMenu.style.transition = "left 0.6s";
    stMenu.style.left = "-60rem";
    stFondo.style.webkitTransition = "opacity 5s";
    stFondo.style.transition = "opacity 5s";
    stFondo.style.display = "none";
}

var blCont = false;

function transp(){
    var stContenido = document.getElementById("transp_desplegado");
    var stDivTransp = document.getElementById("div_transp");
    if(blCont){
        stDivTransp.innerHTML = objIconos.abajo;
        stContenido.style.display = "none"; 
        blCont = false;
    }else{
        stDivTransp.innerHTML = objIconos.arriba;
        stContenido.style.display = "flex";
        blCont = true;
    }
}

function envio(e){
    window.location = e;
}

function enviar(e){
    var stUsuario = document.getElementById("usuario");
    var stContraseña = document.getElementById("contraseña");
    var blCheck = document.getElementById("check");
    // blCheck.checked = true;
    // console.log(blCheck.value);

    if(stUsuario == "" || stContraseña == "" || blCheck.checked == false ){
        
    }else{
        window.location = e;
    }
}





