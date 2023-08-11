console.log('si');

/* addEventListener:se utiliza para agregar eventos al componente que recuperamos
*/

function cambia(evento){
    // evento.target == this
    let componente = evento.target;

    componente.style.background ='black';
    componente.style.color ='red';
}

document.getElementById('nom').addEventListener('focus',cambia);

document.getElementById('ape').addEventListener('focus',cambia);



function vol(){
    // evento.target == this
    //se puede hacer de las dos formas
    
    this.style.background ='white';
    this.style.color ='black';
}

document.getElementById('nom').addEventListener('blur',vol);



//tambien se pude hacer pasando una funcion flecha, lo malo es que nose puede reutilizar el codigo
document.getElementById('ape').addEventListener('blur',(evento)=>{
evento.target.style.background ='white';
evento.target.style.color ='black';});
