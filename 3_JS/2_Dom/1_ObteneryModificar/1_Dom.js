/* Titulo y parrafo/body */

/* Prueba conecxion */
console.log('saludos 21 22');



/* Obtener objetos  y mostrar texto*/
// esta linea de codigo nos regresa todo el objeto 

let titulo = document.getElementById('titulo');
let parrafos = document.getElementById('parrafo');
let parrafo = document.getElementById('parrafo').innerHTML;

console.log(`${titulo.textContent}\n${parrafo}`);





/* Modificar objetos*/

titulo.innerText = 'Hola desde el documento js,jiji jiji ji';
parrafos.innerHTML = 'que ondera';

// si traemos solo el texto no se puede modificar,si traemos el objeto si






