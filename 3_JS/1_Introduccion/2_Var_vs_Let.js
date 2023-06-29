/* 
/Var vs Let

(Var) hoy en dia no se recomienda y se utiliza (Let)
*/

//En var se puede inicializar dos veces la misma variable y ponerles un valor diferente a cada una
var da = 'hola'
console.log(da)

var da ='chaio'
console.log(da)


//Las constantes se pueden crear una ves, se le  pone un valor y despues nose puede cambiar el valor
const pi = 3.14
console.log(pi)


// En Let solo se puede establecer una ves la variable pero se le puede cambiar el valor
let nom = 'luis' 
console.log(nom)

nom = 'Dario';
console.log(nom);

//cuando se utilizan mas de una palabra pera crear una variable se debe utilizar la notacion de altas y bajas
// y la primer palabra va en minuscula

let nombreCompleto = 'Dario Basualdo'
console.log(nombreCompleto)


// se puede crear dos variables ala ves

let x,y ;
x = 25,y = 25;
let z = x + y
console.log(z)






