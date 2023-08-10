console.log('si');

document.write('Saludos');


function mostrar(){
    let objeto = document.getElementById('titulo');

    if(objeto.innerHTML == 'Saludos desde HTML'){
        objeto.innerHTML ='saludos desde js';
    }
    else if(objeto.innerHTML =='saludos desde js'){
        objeto.innerHTML = 'Saludos desde HTML'
    }
}