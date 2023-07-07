/* Funciones */

function sumaDosNumeros(num1,num2){
    let res = num1 + num2
    return res
}

let num = sumaDosNumeros(10,20)
console.log(num)


/* Funcione de tipo expresion */
let sumar = function(a,b){return a+b};

let resultado = sumar(20,20);
console.log(resultado);



/* Funciones flecha */

const restar = (a,b) => a - b;

console.log(restar(10,3));




/* Funciones de tipo self invoking (recursiva) se llama asi misma */
(function(a,b){
    console.log('ejecutando la funcion: '+(a+b));
})(5,7);






/*Funciones como objeto:
 por que tiene propiedades(argumentos) y tiene metodos*/

 function miFuncion(a,b){
    //arguments:esta propiedad solo se puede utilizar dentro del cuerpo de la funcion
    console.log(arguments.length);
    return a+b;
}

console.log(typeof miFuncion);

console.log(miFuncion(1,22));


/* Parametros y argumentos */

/* parametros es lo que necesita la funcion para funcionar (a,b)*/
/* un parametro con valor se convierte en un argumento */
let fun = function(a = 0,b = 0){

    console.log(arguments[0]);
    console.log(arguments[1]);
    return a+b;
}

/* argumento son los valores que se le agregan ala funcion */
fun(10,20)

