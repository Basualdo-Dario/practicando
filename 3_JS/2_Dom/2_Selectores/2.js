/* getElementByTagname = obtener elemento mediante nombre del tag */
//obtiene todo los valores de la etiqueta seleccionada
 
let itali = document.getElementsByTagName('i');

console.log(`${itali.length}`);

for(let i =0 ;i < itali.length;i++){

    console.log(`${i}:${itali[i].innerHTML}`);
}


/* getElementsByClassName */
//obtiene todo los valores de la clase seleccionada

let clase = document.getElementsByClassName('etiqueta');

console.log(clase.length);

for(let i = 0 ; i < clase.length;i++){
    clase[i].innerHTML = 'Hola';
}


/* querySelectorAll */
//obtiene todo los elementos especificamente seleccionados
let seleccion = document.querySelectorAll('p.all');

for(let i = 0; i < seleccion.length;i++){
    seleccion[i].innerHTML = 'Chiaoo';
}
