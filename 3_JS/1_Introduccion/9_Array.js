/* arreglos */

/* esta forma ya no se recomienda */
let autos =new Array('Renault','Fiat','Chevrolet');

/* es mejor esta forma */
let numeros = [1,2,3,4,5,6,7,8,9];
console.log(numeros);

/* recorrer un array */
for(let i = 0 ; i < numeros.length; i++){

    console.log(numeros[i]);
}

/* Modificar un valor */
autos[2]='volsvawen'
console.log(autos);


/* para agregar elementos a un arreglo se utiliza el metodo push */
numeros.push(10,11,12,13)
console.log(numeros);


/* Esta es otra forma de agregar un elemento pero sin dejar indices vacios */
console.log(numeros.length);
numeros[numeros.length] = 14;
console.log(numeros +' - (length: '+numeros.length+')');


/*Averiguar si es un arreglo  */
console.log(typeof numeros);
console.log(Array.isArray(numeros));