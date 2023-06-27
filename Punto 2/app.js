"use strict";
/*
Paso a paso:
1- Armar el formulario para que el usuario ingrese los datos.
2- Crear la clase persona con sus propiedades y metodos.
3- Crear una funcion y evento para cada input que el usuario tenga que ingresar, donde la info que ingresa es cada propiedad de la clase.
4- Hacer los eventos correspondientes para la accion de cada boton y relacionarlos con sus respectivos metodos.
*/

class Persona {
    constructor(nombre, edad, dni, sexo, peso, altura, anioNacimiento){
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.anioNacimiento = anioNacimiento;
    }
    set modificarNombre(valor){
        this.nombre = valor;
    }
    set modificarEdad(valor){
        this.edad = valor;
    }
    set modificarDni(valor){
        this.dni = valor;
    }
    set modificarSexo(valor){
        this.sexo = valor;
    }
    set modificarPeso(valor){
        this.peso = valor;
    }
    set modificarAltura(valor){
        this.altura = valor;
    }
    set modificarAnio(valor){
        this.anioNacimiento = valor;
    }
    mostrarGeneracion(){
        if (this.anioNacimiento >= 1994 && this.anioNacimiento < 2011) {
            alert(`Perteneces a la generacion Z y el rasgo caracteristico de esta generacion es la irreverencia :P .`);
        } else if (this.anioNacimiento >= 1981 && this.anioNacimiento < 1994){
            alert(`Perteneces a la generacion Y (millenials) y el rasgo caracteristico de esta generacion es la frustracion :( .`);
        } else if (this.anioNacimiento >= 1969 && this.anioNacimiento < 1981){
            alert(`Perteneces a la generacion X y el rasgo caracteristico de esta generacion es la obsesion por el exito ;) .`);
        } else if (this.anioNacimiento >= 1949 && this.anioNacimiento < 1969){
            alert(`Perteneces a la generacion Baby Boom el rasgo caracteristico de esta generacion es la ambicion ($_$) .`);
        } else if (this.anioNacimiento >= 1930 && this.anioNacimiento < 1949){
            alert(`Perteneces a la Silent Genereation (los ninios de la posguerra) y el rasgo caracteristico de esta generacion es la austeridad :| .`);
        }
    }
    esMayorDeEdad(){
        if (this.edad >= 18) {
            alert("Sos mayor de edad");
        }
    }
    mostrarDatos(){
        alert(`El nombre de la persona ingresada es ${this.nombre}, su edad es ${this.edad}, de DNI ${this.dni}, sexo ${this.sexo}, con un peso de ${this.peso}kg, ${this.altura}m de altura y nació en el año ${this.anioNacimiento}.`);
    }
}

let inputEntered;
let inputEnteredNumb;
const personita = new Persona();


const readName = document.getElementById('inputName');
readName.addEventListener('input', (e) => {
    personita.modificarNombre = e.target.value;
    console.log(personita.nombre);
}, false);

const readAge = document.getElementById('inputAge');
readAge.addEventListener('input', (e) => {
    personita.modificarEdad = parseInt(e.target.value);
    console.log(personita.edad);
} , false);

const readDni = document.getElementById('inputDni');
readDni.addEventListener('input', (e) => {
    personita.modificarDni = parseInt(e.target.value);
}, false);

const readCheckFem = document.getElementById('checkFem');
readCheckFem.addEventListener('change', (e) => {
    personita.modificarSexo = e.target.value;
}, false);

const readCheckMasc = document.getElementById('checkMasc');
readCheckMasc.addEventListener('change', (e) => {
    personita.modificarSexo = e.target.value;
}, false);

const readWeight = document.getElementById('inputWeight');
readWeight.addEventListener('input', (e) => {
    personita.modificarPeso = parseInt(e.target.value);
}, false);

const readHeight = document.getElementById('inputHeight');
readHeight.addEventListener('input', (e) => {
    personita.modificarAltura = parseInt(e.target.value);
}, false);

const readYear = document.getElementById('inputYearBorn');
readYear.addEventListener('input', (e) => {
    personita.modificarAnio = parseInt(e.target.value);
}, false);

const buttonData = document.getElementById('showData');
buttonData.addEventListener('click', () => {
    personita.mostrarDatos();
}, false);

const buttonGeneration = document.getElementById('showGeneration');
buttonGeneration.addEventListener('click', () => {
    personita.mostrarGeneracion();
}, false);

const buttonAge = document.getElementById('showAge');
buttonAge.addEventListener('click', () => {
    personita.esMayorDeEdad();
}, false);


