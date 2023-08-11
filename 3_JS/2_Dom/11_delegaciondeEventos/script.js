

let formula = document.getElementById('formulario');



formula.addEventListener('focus',(evento)=>{
    let obj = evento.target;
    obj.style.background ='black';
    obj.style.color ='red';
},true);

formula.addEventListener('blur',(evento)=>{
    let obj = evento.target;
    obj.style.background ='';
    obj.style.color ='black';
},true);


/* C284 T45 */