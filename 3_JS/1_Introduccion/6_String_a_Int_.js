//Convertir String a int

let minum = '17';
console.log(typeof minum);

let edad = Number(minum);
console.log(typeof edad);

let operacion =(edad >= 18) ?'Puede Votar':'No Puede Votar';

console.log(operacion)





// Funcion isNaN

let num = '17x';
console.log(typeof num);

let eda = Number(num);
console.log(eda);
//el valor NaN significa:Not a Number


//la funcion isNaN: pregunta si la variable eda no es un numero,y si no es un numero su resultado es true
if(isNaN(eda)){
    console.log('No es un numero')
}
else{ 
    console.log('Es un numero')
    let op = (eda >= 18) ?'Puede Votar':'No Puede Votar';
    console.log(op)
}





