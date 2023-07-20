/*funcion Constructora  (practicamente son clases pero no son clases)*/

function Persona(nombre = '',apellido = '',email =''){

    this.id = null;
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;

    this.nombreCompleto = function(){return this.nombre +' '+this.apellido};
}

let padre = new Persona('Ricardo','Armando','RA@gmail.com');
console.log(padre);

let hijo = new Persona;
hijo.nombre ='Ludobico';
hijo.apellido = padre.apellido;
hijo.email = 'LA@gmail.com'
console.log(hijo.nombreCompleto());

let madre = new Persona('Marta','Lirica','ML@gmail.com');




/*********************************************************************************************/
/* PROTOTYPE */

/* para agregar una propiedad a un solo objeto */
madre.trabaja = true; 
console.log(madre.trabaja);
//cuando mostramos todo el objeto seve la propiedad agregada
console.log(madre);

console.log(padre.trabaja);
console.log(padre);


/* para agregar una propiedad a todo los objetos */
Persona.prototype.tel = '0351';


console.log(hijo.tel);
console.log(padre.tel);

//cuando mostramos todo el objeto no seve la propiedad agregada
console.log(hijo);
console.log(padre);

