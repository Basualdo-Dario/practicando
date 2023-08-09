
//promesas: si el codigo sale sin fallos actuara de una manera, pero si el codigo tiene fallos actuara de otra manera
//la funcion promise recibe dos parametros para actuar uno si el resultado es sin fallos y el otro es si este es con fallos


let miPromesa = new Promise((resolver,rechazar) => {

    let expresion = true;

    if(expresion)
        resolver('Resolvio correcto');
    else
        rechazar('Se produjo un error');

});


miPromesa.then( 
    valor => console.log(valor), 
    error => console.log(error)
    );


// es el mismo codigo solo que hay distintas formas de hacerlo

miPromesa
.then(valor => console.log(valor))
.catch(error => console.log(error));
