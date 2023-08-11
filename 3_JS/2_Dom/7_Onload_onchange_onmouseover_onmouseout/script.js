/* Evento onload se ejecuta cuando termina de carga la pagina web */


function entrar(){

    
    let texto = '';
    
    if(navigator.cookieEnabled){
        texto = 'Cookies habilitadas';
    }
    else{
        texto = 'Cookie desabilitada';
    }
    
    //alert(texto); 
    
}

/* onchange : reliza el cambio cuando se cambia el foco*/

function cambio(inputname){
   inputname.value = inputname.value.toUpperCase();

}


/* onmouseover y onmouseout:
es cuando nos posicionamos con el raton en un elemento y cuando quitamos el raton de ese elemento */

function visualizar(obj){
    obj.style.overflow = 'visible';
    obj.style.border = 'none';
}

function noVisualizar(obj){
    obj.style.overflow = 'hidden';
    obj.style.border = '1px solid red';
}
