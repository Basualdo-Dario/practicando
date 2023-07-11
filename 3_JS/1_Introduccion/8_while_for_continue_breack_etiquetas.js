/* while */
let condicion = 10;

while(condicion < 100 ){
    condicion++
    console.log(condicion)
}
console.log(condicion);

/* do while */

let condicion2 = 1;

do{
    condicion2++
    console.log(condicion2)
}
while(condicion2 < 10);


/* for */

for(let i= 0; i <= 10 ; i++){
    console.log(i)
}


/* Breack */
for(let i= 0; i <= 10 ; i++){
    if(i % 2 == 0){
        console.log(i)
        // colocando breack termina todo,el if y el for.
        break;
    }
}

/* continue */
for(let contador = 0 ;contador <= 10;contador++ ){
    if(contador % 2 !== 0){
        //el continue hace que el for pase ala siguente iteracion.
        continue;
    }
    else{
        console.log(contador)
    }
}


/* label */
/* etiquetas:
*No es muy recomendable .
*las etiquetas nos permiten ir a una parte del programa que desiemos*/


inicio1:
for(let contador = 0 ;contador <= 10;contador++ ){
    if(contador % 2 !== 0){
        break inicio1;
    }
        console.log(contador)
}

inicio:
for(let contador = 0 ;contador <= 10;contador++ ){
    if(contador % 2 !== 0){
        continue inicio;
    }
        console.log(contador)
}
