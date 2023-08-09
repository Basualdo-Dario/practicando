

let miPromesa = new Promise((resolver,rechazar) =>{
    let expresion = true;

    if(expresion)
        setTimeout(()=> resolver('correcto'),3000);
    else
        setTimeout(()=> rechazar('fallo'),3000);

});

miPromesa
.then(valor => console.log(valor))
.catch(valor => console.log(valor));


/********************************************************************************/

// Async: indica que una funcion devuelve una promesa

async function miFuncionConPromesa(){
    return 'Saludos con Promesa y async';

}

miFuncionConPromesa().then(valor => console.log(valor));

//Await:

async function miFuncionConAsyncYAwait(){   
    let promesa = new Promise((resolver) => {resolver('Promesa con Await')});

    
    console.log(await promesa);

}

miFuncionConAsyncYAwait();


//ejercicio


async function ejercicio() {
    let promesa = new Promise((resolver) => {setTimeout(resolver('Ya pasaron 3 segundos'),300)});

    console.log(await promesa)
}

ejercicio();