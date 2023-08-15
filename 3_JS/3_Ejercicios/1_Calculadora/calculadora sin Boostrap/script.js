


function calcular(){

    let numeros = document.forms['numeros'];

    let a = numeros['operandoa'];
    let b = numeros['operandob'];
    let resultado = 0;

    resultado = parseFloat(a.value) + parseFloat(b.value); 

    if(a.value == '' && b.value == ''){

        alert('Primero ingrese un valor');
    }
    else if(a.value == ''){
        alert('Falta el valor de A');
    }
    else if(b.value == ''){
        alert('Falta el valor de B');
    }
    else{
        document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`; 
        setTimeout(() =>{
            a.value = '';
            b.value = ';'
        },10000);
    
        setTimeout(() =>{document.getElementById('resultado').innerHTML =''},60000);
    }


   

}