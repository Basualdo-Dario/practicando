
/* IF-ELSE */

let usuario ='Angelo'

let horario = 2200;
let horario_casa = [0,600,1930,2359]
let horario_clase = [700,1530];
let horario_entrenamiento = [1700,1800]

if(horario >= horario_clase[0] && horario <= horario_clase[1]){
    console.log(usuario +' Se en cuentra en clases');
}
else if(horario >= horario_entrenamiento[0] && horario <= horario_entrenamiento[1]){
    console.log(usuario +' Se en cuentra en entrenamiento');
}
else if(horario >= horario_casa[0] && horario <= horario_casa[1] ||horario >= horario_casa[2] && horario <= horario_casa[3]){
    console.log(usuario +' Se en cuentra en su casa');
}
else{
    console.log(usuario +' No se encuentra haciendo ninguna actividad');
}

/* SWITCH  */

let a = 100 ,b = 20;
let operacion = 1;

switch(operacion){
    case 1:
        console.log(a + b)
        break;
        /* Es importante poner el breck,por que sino se pone sigue realizando las otras sentencias.*/
    case 2:
        console.log(a - b)
        break;
    case 3:
        console.log(a * b)
        break;
    case 4:
        console.log(a / b)
        break;

    default:
        console.log('valor no encontrado')
        break;
}

/* Switch con  string */
let letra = 'hola'

switch(letra){
    case 'hola':
        console.log('valor correcto')
        break;
        /* Es importante poner el breck,por que sino se pone sigue realizando las otras sentencias.*/
    case 'Hola':  case'HOLA': case 'HoLa':  case'hOlA': 
        console.log('valor incorrecto')
        break;

    default:
        console.log('valor no encontrado')
        break;
}