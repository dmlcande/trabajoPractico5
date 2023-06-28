"use strict";

function currentDate() {
    const todayDate = new Date();
    const month = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
    const days = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
    const date = days[todayDate.getDay()] + " " + todayDate.getDate() + " de " + month[todayDate.getMonth()] + " del " + todayDate.getFullYear();

    document.getElementById('fecha').innerHTML = date;
}

function clock() {

    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let reloj = ('00' + hours).slice(-2) + " : " + ('00' + minutes).slice(-2) + " : " + ('00' + seconds).slice(-2);

    document.getElementById('reloj').innerHTML = reloj;
}

setInterval(currentDate);
setInterval(clock);