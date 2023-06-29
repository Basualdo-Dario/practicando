//tipo de dato string
var a = 'Hola mundo';
console.log(a);


//tipo de dato int
var b = 1000;
console.log(b);


// tipo de dato object
var objeto = {
    nombre : 'Dario',
    apellido : 'Basualdo',
    edad: 23
}
console.log(objeto);


//typeof: dice de que tipo es la variable

var nombre = 'Dario';
nombre = 23;

console.log(typeof nombre,typeof a);


//Tipo de dato boolean(true,false)

var bandera = true;
console.log(bandera , typeof bandera);


// Tipo de dato Function
function miFuncion(salto,texto){
    console.log(salto)
    console.log(texto)
}

var salto = '';
var texto = '***Que onda estoy en una funcion***';
miFuncion(salto,texto);


//Tipo de dato Symbol
    var Simbolo = Symbol('mi simbolo');
    console.log(Simbolo);
    console.log(typeof Simbolo);


// tipo clase (es una funcion)

class Persona{
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

console.log(typeof Persona , Persona)

//tipo de dato y valor undefined (es el valor por defecto de las variables no instanciadas)
var x;
var y = undefined;
console.log(y, typeof y)
console.log(x, typeof x)


// valor null , significa ausencia de valor
var w = null;
console.log(w ,typeof w)

// tipo array

var autos =['Renault','Fiat','Fort','Chevrolet'];
console.log(autos,typeof autos);


// Concatenacion

var nombre = 'Luis';
console.log('Su nombre es ' + nombre + ' ?');

