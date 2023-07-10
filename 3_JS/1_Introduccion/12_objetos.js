/* Objeto */
let persona = {

    /* atriiibutos */
    nombre:'Dario',
    apellido:'Basualdo',
    email:'DB@gmail.com',
    edad:22,


    /* metodos */
    nombreCompleto: function(){
       return this.nombre +' '+this.apellido
    },
    añoDeNacimiento: function(Añoactual,yacumplio){
        if (yacumplio == true){
            return Añoactual - this.edad
        }
        else
        {
            return (Añoactual - this.edad)-1
        }
    }
}


/* metodos */
console.log(persona.nombre);
console.log(persona.apellido);

/* atributos */
console.log(persona.nombreCompleto());
console.log(persona.añoDeNacimiento(2023,false));


/* otra forma de acceder alas propiedades,sirve para recorrer el objeto con un  for in */
console.log(persona['apellido']);

/* for in */

for(propiedad in persona){
    console.log(persona[propiedad]);
}





/************************************************************************************** */


/* otra forma de crear un objeto */

/* crear objeto */
let persona2 = new Object();

/* añadir atributos */
persona2.nombre = 'Luis';
persona2.apellido = 'Basualdo';

/* añadir metodos */
persona2.nombreCompleto = function(){return this.nombre +' '+this.apellido}

/* atributos */
console.log(persona2.nombre);
console.log(persona2.apellido);

/* metodos */
console.log(persona2.nombreCompleto());


