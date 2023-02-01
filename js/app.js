let mascotaJugador;
let mascotaEnemigo;
let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function seleccionarMascotaJugador() {
    let botonSeleccionarMascota = document.getElementById("btn-mascota");

    mascotaJugador = document.getElementById("mascota-jugador");

    if(document.getElementById("Hipopoge").checked) {
        mascotaJugador.innerHTML = "Hipopoge";
        seleccionarMascotaEnemigo();
        mostrarSectionSelectAtaque()
        botonSeleccionarMascota.disabled = true;   ;
    } else if (document.getElementById("Capipepo").checked) {
        mascotaJugador.innerHTML = "Capipepo";
        seleccionarMascotaEnemigo();
        mostrarSectionSelectAtaque();
        botonSeleccionarMascota.disabled = true;   
    } else if (document.getElementById("Ratigüeya").checked) {
        mascotaJugador.innerHTML = "Ratigüeya";
        seleccionarMascotaEnemigo();
        mostrarSectionSelectAtaque();
        botonSeleccionarMascota.disabled = true;   
    } else {
        alert("Selecciona a una mascota primero");
    }
    
 
}

function mostrarSectionSelectAtaque() {
    let sectionSelectAtaque = document.getElementById("select-ataque");
    sectionSelectAtaque.style.display = "block";
}

function seleccionarMascotaEnemigo() {
    mascotaEnemigo = document.getElementById("mascota-enemigo");
    let seleccionEnemigo = Math.floor(Math.random()*3)+1;

    if (seleccionEnemigo == 1) {
        mascotaEnemigo.innerHTML = "Hipopoge";
    } else if (seleccionEnemigo == 2) {
        mascotaEnemigo.innerHTML = "Capipepo";
    }  else if (seleccionEnemigo == 3) {
        mascotaEnemigo.innerHTML = "Ratigüeya";
    }  

}

function ataqueFuego() {
    ataqueJugador = "FUEGO 🔥";

    ataqueEnemigoF()
}

function ataqueAgua() {
    ataqueJugador = "AGUA 💧";

    ataqueEnemigoF()
}

function ataqueTierra() {
    ataqueJugador = "TIERRA 🌱";

    ataqueEnemigoF()
}

function ataqueEnemigoF() {
    let seleccionEnemigo = Math.floor(Math.random()*3)+1;

    if (seleccionEnemigo == 1) {
        ataqueEnemigo = "FUEGO 🔥";
    } else if (seleccionEnemigo == 2) {
        ataqueEnemigo = "AGUA 💧";
    }  else if (seleccionEnemigo == 3) {
        ataqueEnemigo = "TIERRA 🌱";
    }  

    calcularResultado()
}


function calcularResultado() {
    let spanVidasJugador = document.getElementById("vidas-jugador");
    let spanVidasEnemigo = document.getElementById("vidas-enemigo");


    if(ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATEEEE 😑");
    } else if((ataqueEnemigo == "AGUA 💧" && ataqueJugador == "TIERRA 🌱") || (ataqueEnemigo == "FUEGO 🔥" && ataqueJugador == "AGUA 💧") || (ataqueEnemigo == "TIERRA 🌱" && ataqueJugador == "FUEGO 🔥")) {
        crearMensaje("GANASTE EL COMBATE 🎉");
        vidasEnemigo--;
        spanVidasEnemigo.innerHTML = vidasEnemigo;
    } else {
        crearMensaje("PERDISTE EL COMBATE ☹️");
        vidasJugador--;
        spanVidasJugador.innerHTML = vidasJugador;
    }

    checkVidas()
}

function checkVidas() {
    let sectionMensajes = document.getElementById("mensajes");
    let parrafoMensaje = document.createElement('p');

    if (vidasEnemigo == 0) {
        parrafoMensaje.innerHTML = "GANASTEE WOOOOO";
        sectionMensajes.append(parrafoMensaje);
        removerBotones();
        mostrarBotonReiniciar();
    } else if (vidasJugador == 0) {
        parrafoMensaje.innerHTML = "PERDISTE AMIGOTE :P";
        sectionMensajes.append(parrafoMensaje);
        removerBotones();
        mostrarBotonReiniciar();
    }
}

function mostrarBotonReiniciar() {
    let botonReiniciar = document.getElementById("btn-reiniciar");
    botonReiniciar.style.display = "block";
}

function crearMensaje(resultado) {
    let parrafoMensaje = document.createElement('p');
    parrafoMensaje.innerHTML = "Tu " + mascotaJugador.innerHTML + " atacó con " + ataqueJugador + ", el " + mascotaEnemigo.innerHTML + " del enemigo atacó con " + ataqueEnemigo + " - " + resultado;

    let sectionMensajes = document.getElementById("mensajes");
    sectionMensajes.append(parrafoMensaje);
}

function removerBotones() {
    let botonFuego = document.getElementById("btn-fuego");
    let botonAgua = document.getElementById("btn-agua");
    let botonTierra = document.getElementById("btn-tierra");
    botonAgua.removeEventListener("click", ataqueAgua);
    botonFuego.removeEventListener("click", ataqueFuego);
    botonTierra.removeEventListener("click", ataqueTierra);

}

function reiniciarJuego() {
    location.reload()
}

function iniciarJuego() {
    let sectionSelectAtaque = document.getElementById("select-ataque");
    sectionSelectAtaque.style.display = "none";

    let botonSeleccionarMascota = document.getElementById("btn-mascota");
    botonSeleccionarMascota.addEventListener("click", seleccionarMascotaJugador);

    let botonFuego = document.getElementById("btn-fuego");
    botonFuego.addEventListener("click", ataqueFuego);

    let botonAgua = document.getElementById("btn-agua");
    botonAgua.addEventListener("click", ataqueAgua);

    let botonTierra = document.getElementById("btn-tierra");
    botonTierra.addEventListener("click", ataqueTierra);

    let botonReiniciar = document.getElementById("btn-reiniciar");
    botonReiniciar.style.display = "none";
    botonReiniciar.addEventListener("click", reiniciarJuego);

}

window.addEventListener("load", iniciarJuego);