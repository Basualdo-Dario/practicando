console.log('si');


function cambio(){
    let flor = document.getElementById('flores');

    flor.src = '/4_Ejercicio/1_HTML_y_CSS/asset/imagenes/Logging/flores fondo.webp';    

    flor.style.width ='450px';
    flor.style.height ='450px';
    flor.style.background ='blue';

}

function volver(){

    let flor = document.getElementById('flores');

    flor.src ="/4_Ejercicio/1_HTML_y_CSS/asset/imagenes/Logging/flowers.webp";
    flor.style.background ='red';
}


/*  C273 T43*/