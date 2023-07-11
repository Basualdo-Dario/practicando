
/* Methodo call */

let persona1 ={
    nombre:'Dario',
    apellido:'Basualdo',
    nombreCompleto: function(){return this.nombre+' '+this.apellido},

    apellidoN: function(palabra,color){return 'El '+palabra+' de '+this.nombre+' '+this.apellido+' es de color '+color;}
}

let persona2={
    nombre:'Luis',
    apellido:'Basualdo'

}

//Call funciona para usar metodos de un objeto con valores de otro objeto
console.log(persona1.nombreCompleto.call(persona2));

console.log(persona1.apellidoN.call(persona2,'Autaso','Negro.'))

console.log(persona1.apellidoN('Autaso','Blanco.'))

/*********************************************************************************************/
/* Methodo apply */

let user1 ={
    nombre:'Dario',
    apellido:'Basualdo',
    nombreCompleto: function(){return this.nombre+' '+this.apellido},
    apellidoN: function(palabra,color){return 'El '+palabra+' de '+this.nombre+' '+this.apellido+' es de color '+color;}
}

let user2={
    nombre:'Luis',
    apellido:'Basualdo'

}

//apply funciona igual que el metodo call ,exepto cuando el metodo solicita argumentos

console.log(user1.nombreCompleto());
console.log(user1.nombreCompleto.apply(user2));


console.log(user1.apellidoN('Super Auto','Blanco.'));

//se crea un arreglo y se lo manda como argumento
let arreglo =['Super Auto','Negro.'];
console.log(user1.apellidoN.apply(user2,arreglo));


/* C216 T32 */