/* Agregar y Eliminar propiedades de un objeto */

let persona = {

    /* atriiibutos */
    nombre:'Dario',
    apellido:'Basualdo',
    email:'DB@gmail.com',
    edad:22,
    nombreCompleto: function(){return this.nombre+' '+this.apellido}
}

/* agregar propiedad */
persona.tel = '3513252525';
console.log(persona);


/* eliminar propiedad */
delete persona.tel;
console.log(persona);




/*********************************************************************************************/




/* Distintas formas de imprimir un objeto (cuando estamos trabajando en un navegador web) */

//Concatenar cada valor de cada propiedad
console.log(persona.nombre +' '+persona.apellido+' ,email: '+persona.email+' ,edad: '+persona.edad );


//con: for in
for(propiedades in persona){
    console.log(propiedades+':'+persona[propiedades])
}



//con object.values: devuelve una cadena
let personaArray = Object.values(persona);
console.log(personaArray);


//otra forma parecida a la anterior, por que devuelve una cadena,mas que una cadena es como un diccionario

let personastring = JSON.stringify(persona);
console.log(personastring);




/*********************************************************************************************/



/* Metodo get en objetos */
let persona2 = {

    /* atriiibutos */
    nombre:'Dario',
    apellido:'Basualdo',
    email:'DB@gmail.com',
    edad:22,

    //poniendo get y sacando la palabra fuction,al solicitarlo no hace falta los parentesis
    get nombreCompleto(){return this.nombre+' '+this.apellido}
}

console.log(persona2.nombreCompleto)





/* Metodo set en objetos */
let persona3 = {

    /* atriiibutos */
    nombre:'Dario',
    apellido:'Basualdo',
    email:'DB@gmail.com',
    edad:22,
    idioma:'español',

    get Idioma(){return this.idioma.toUpperCase();},
    set Idioma(lenguaje){this.idioma = lenguaje.toUpperCase();},
}

console.log(persona3.Idioma);

let idioma = 'es_arg'
persona3.Idioma = idioma;

console.log(persona3.Idioma);





