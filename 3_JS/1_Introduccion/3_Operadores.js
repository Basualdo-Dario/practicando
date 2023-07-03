//Operadores

let a,b;
a= 7,b=2;
let z;

//suma,resta,multiplicacion,division,modulo(es el resto de la division de 2 numeros),exponente(es igual a elevado)
z = a+b
console.log(z)
z = a-b
console.log(z)
z = a*b
console.log(z)
z = a/b
console.log(z)
z = a%b
console.log(z)
z = a**b
console.log(z)


//Pre-incremento(primero se incrementa la variable 'a' y despues se le asigna el valor a la variable 'z')
a= 7;
z = ++a
console.log(a)
console.log(z)

//Post-incremento(se le asigna el valor de 'a' a la variable  'z' y despues se incrementa 'a')
a= 7;
z = a++
console.log(z)
console.log(a)





//Pre-decremento(primero se decrementa la variable 'a' y despues se le asigna el valor a la variable 'z')
a= 7;
z = --a
console.log(a)
console.log(z)

//Post-decremento(se le asigna el valor de 'a' a la variable  'z' y despues se decrementa 'a')
a= 7;
z = a--
console.log(a)
console.log(z)



/* #################################################################################################### */

// Operador de Asignacion
 let w = 2
 console.log(w)

    w += 2
     console.log(w)

    w -= 2
     console.log(w)

    w *= 2
     console.log(w)

    w /=2
      console.log(w)
      
    w **=2
    console.log(w)

    w %=3
     console.log(w)


    
/* #################################################################################################### */

    // Operador de comparacion

    let va = 1 , vb ='1';
    //el operador == revisa el valor sin importar el tipo
    console.log(va == vb);  

    //el operador === revisa los valor pero tambien los tipos 
    console.log(va === vb);



    
/* #################################################################################################### */

    //Operador distinto != 

    let da = 1 , db ='1';
    //el operador != revisa el valor sin importar el tipo
    console.log(da != db);  

    //el operador !== revisa los valor pero tambien los tipos 
    console.log(da !== db);


/* #################################################################################################### */

    //Operadores relacionales
    let za = 3 , zb = 3;

    console.log(za > zb );
    console.log(za < zb );
    console.log(za >= zb );
    console.log(za <= zb );