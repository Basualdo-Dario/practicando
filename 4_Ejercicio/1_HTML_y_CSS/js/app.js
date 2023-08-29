
function relog(){
    let divhora = document.getElementById('relog');
    let datos = new Date();
    let hora = datos.getHours();
    let minuto = datos.getMinutes();
    let segundos = datos.getSeconds();

    divhora.innerHTML = ` ${hora}:${minuto}:${segundos}`;
}

setInterval(relog,1000);


   

function registro(){
     const user = document.getElementById('user').innerHTML;
    const password = document.getElementById('password').innerHTML;
    document.getElementById('user').value = '';
    document.getElementById('password').value = ''; 
    
    document.getElementById('usuario').innerHTML =`<div>Bienvenido:${user}.</div>`;
}


