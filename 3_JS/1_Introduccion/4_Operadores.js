// Operador AND (&&)
let a = 12;

let valorminimo = 10 , valormaximo = 20;

if(a >= valorminimo && a<= valormaximo){
    console.log('El valor se encuntra en el rango');
}
else{
    console.log('El valor no se encuntra en el rango');
}

//operado OR (||)

let valor = 10

let parametro1 = 10 ,parametro2 =30;

if(valor == parametro1 || valor == parametro2){
    console.log('hay Coincidencia '+ valor);
}
else{
    console.log('No hay Coincidencia '+ valor);
}



//Operador Ternario
let resultado = (3>2) ? 'Este resultado es Verdadero' : 'Este resultado es Falso';

console.log(resultado);


let numero = 12;
let operacion =(numero % 2 == 0) ?'PAR':'IMPAR';

console.log(operacion);