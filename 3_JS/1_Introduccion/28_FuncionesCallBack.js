// Funciones de tipo callback

function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(op1,op2,fun){

    let res = op1 + op2;
    fun(res);
}

sumar(9,9, imprimir);

/****************************************************************************************************************/

// funcion settimeout
// llamadas asincronas con settimeout


function miFuncionCallback(){
    console.log('Saludo asincrono despues de 3 segundos');
} 

// recibe como parametro una funcion y el tiempo en el cual se va a ejecutar
setTimeout(miFuncionCallback,3000)


// tambien podemos crear la funcion en el mismo
setTimeout(function saludo(){console.log('hola')},4000)

setTimeout(() => console.log('hola desde la funcion flecha'),5000)


/****************************************************************************************************************/

// funcion setinterval 
//  es parecida a settimeout

let relog = () => {
    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}


setInterval(relog,1000)


