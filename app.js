"use strict";

/* 1- Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese momento se crea un número aleatorio que el usuario deberá adivinar, la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.

*/

let inputNum = document.getElementById('escribirNum');
inputNum.addEventListener('input', leerNum, false);

let botonEnviar = document.getElementById('enviarNum');
botonEnviar.addEventListener('click', aleatorio, false);


let numeroAleatorio;
let numeroIngresado;

function leerNum(evt){
    numeroIngresado = parseInt(evt.target.value);
}

function aleatorio() {
    let i = true;

    while (i) {
        numeroAleatorio = Math.floor(Math.random()*100);
        if (numeroAleatorio > 0 && numeroAleatorio < 11) {
            i = false ;
        }
    }
    adivinanza();
}

function adivinanza () {
    if (numeroIngresado === numeroAleatorio) {
        alert("Adivinaste!");
    } else if (numeroIngresado > numeroAleatorio){
        alert("Tu numero es mayor al numerito magico.");
    } else{
        alert("Tu numero esta chiquito.")
    }
}