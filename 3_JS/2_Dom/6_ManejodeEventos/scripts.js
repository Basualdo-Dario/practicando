console.log('si');


function cambiarTexto(cambio){

    cambio.innerHTML = 'Texto Secundario ';
}

function cambiar(){

    this.innerHTML = 'Texto Secundario ';
}

document.getElementById('titulo').onclick = cambiar;