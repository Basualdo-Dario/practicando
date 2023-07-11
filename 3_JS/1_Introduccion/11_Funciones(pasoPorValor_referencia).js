/* Ejercicio sumar todos los argumentos Posibles soluciones*/
//1
let res = sumarTodo(5,4,13,19,9);
console.log(res)

function sumarTodo(a,b,c,d,e){
    let all = a+b+c+d+e;
    return all
}



//2
let res2 = sumarTodo2(10,6,5,39,0);
console.log(res2)

function sumarTodo2(){
    let all = arguments[0] + arguments[1] + arguments[2] + arguments[3] + arguments[4];
    return all
}


//3
let res3 = sumarTodo3(10,6,5,39,0);
console.log(res3)

function sumarTodo3(){
    let all = 0;
    for(let i = 0; i < arguments.length;i++){
        all += arguments[i]
    }

    return all
}





/* Paso por valor :nose puede modificar el valor de una variable*/

// Tipos primitivos(por que no tiene valores ni metodos)
let x = 10;

function cambiarValor(a){
    a = 20;
}
//el valor es undefined por que la variable 'x' solo le paso el valor
console.log(cambiarValor(x));
console.log(x);





/* Paso por referencia */

const persona ={
    nombre:'Dario',
    apellido:'Basualdo'
}
function cambiarValorObjeto(p1){
    p1.nombre = 'Luis';
}

console.log(persona)

//paso por referencia
cambiarValorObjeto(persona);

console.log(persona);


/* C201 T31 */