/* activamos el modo estricto,esto hace que solo podamos usar las variables si las definimos */
'use strict'



/* try or catch */
let res = 'hola';

try{

   if(isNaN(res)) throw 'No es un Numero';
   if(res === '') throw 'ES cadena vacia';

}
catch(error){
    console.log(error);

}
finally{
    console.log('termina la revision de errores');
}
console.log('continuamos');

/* throw : lanza un error probocado para poder controlar algun valor o para lo que necesitemos
  
*/



