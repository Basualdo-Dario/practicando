function dia(valor){

    let dia =''
    switch (valor) {
        case 0:
          dia = 'Dom';
          break;

        case 1:
          dia = 'Lun';
          break;

        case 2:
          dia = 'Mar';
          break;

        case 3:
          dia = 'Mie';
          break;

        case 4:
          dia = 'Jue';
          break;

        case 5:
          dia = 'Vie';
          break;

        case 6:
          dia = 'Sab';
          break;

        default:
          dia = 'Error';
          break;
      }

      return dia;
}

function mes(valor){

    let mes =''
    switch (valor) {
        case 0:
            mes = 'Enero';
            break;

        case 1:
            mes = 'Febrero';
            break;

        case 2:
            mes = 'Marzo';
            break;

        case 3:
            mes = 'Abril';
            break;

        case 4:
            mes = 'Mayo';
            break;

        case 5:
            mes = 'Junio';
            break;

        case 6:
            mes = 'Julio';
            break;
            
        case 7:
            mes = 'Agosto';
            break;

        case 8:
            mes = 'Septiembre';
            break;

        case 9:
            mes = 'Octubre';
            break;

        case 10:
            mes = 'Noviebre';
            break;

        case 11:
            mes = 'Diciembre';
            break;

        default:
            mes = 'Error';
            break;
      }

      return mes;
}



function relog(){

    let time = new Date();
    let hora = document.getElementById('hora');
    let fecha = document.getElementById('fecha');
    let borde = document.getElementById('contenedor');



    hora.innerHTML =`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
    
    fecha.innerHTML =`${dia(time.getDay())},${time.getDate()} ${mes(time.getMonth())}`
    

    //classList,llama alas clases de css
    //toggle,es un apagador, esto quiere decir que una ves va a activar la clase y la otra la va a apagar 
    borde.classList.toggle('animar');
}

setInterval(relog,1000);



