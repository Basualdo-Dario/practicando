

const miFuncionFlecha = (a,b) => a-b;

console.log(miFuncionFlecha(12,12));


/* regresar un objeto desde la funcion flecha */

const regresaObjeto = () => ({nombre: 'juan'});
console.log(regresaObjeto())

const funcionConParametros = (mensaje) => console.log(mensaje);

funcionConParametros('Holis,jajajaja.');