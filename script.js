import { barcelona, roma, paris, londres } from './ciudades.js'

//obtener los elementos del DOM

let enlaces = document.querySelectorAll('a')
let tituloElemneto = document.getElementById('titulo')
let subTituloElemneto = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')
let precioElemento = document.getElementById('precio')

//agregar un evento CLIC a cada enlace

enlaces.forEach(function (enlace) {
    enlace.addEventListener('click', function () {
        //remover ACTIVO
        enlaces.forEach (function (enlace) {
        enlace.classList.remove('active');
        });
    
        // Agregar la clase "active" al enlace actual
        this.classList.add('active')

        // Obtener el contenido correspondiente según el enlace
        let contenido = obtenerContenido(this.textContent)

        //MOSTRAR EL CONTENIDO EN EL DOM
        tituloElemneto.innerHTML = contenido.titulo
        subTituloElemneto.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo
        precioElemento.innerHTML = contenido.precio
    });
});

//Función para traer la información correcta desde ciudades.js

function obtenerContenido(enlace) {
  let contenido = {
    'Barcelona' : barcelona,
    'Roma': roma,
    'París': paris,
    'Londres': londres
  };
  return contenido[enlace];
}
