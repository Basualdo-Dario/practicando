

function calcular(){
    let valores = document.forms['forma'];

    let op1 = valores['operando1'];
    let op2 = valores['operando2'];
    let resultado = 0
    resultado = parseFloat(op1.value) + parseFloat(op2.value)

    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
 
   console.log(resultado)
}