/* Agregar y Eliminar propiedades de un objeto */

let persona = {

    /* atriiibutos */
    nombre:'Dario',
    apellido:'Basualdo',
    email:'DB@gmail.com',
    edad:22,

}

/* agregar propiedad */
persona.tel = '3513252525';
console.log(persona);


/* eliminar propiedad */
delete persona.tel;
console.log(persona);


/* C206 T31 */