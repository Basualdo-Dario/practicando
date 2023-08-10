
function enviarValores(){

    let formulario = document.forms['formPersona'];

    let texto = '';

    //con este for se ingresa a todo el formulario y luego mostrando una cadena
    for(let elemento of formulario){
        texto += `${elemento.name}:${elemento.value} <br/>`;
    }

    document.getElementById('valores').innerHTML = texto; 


    // aca se accedera a cada valor individualmente.

    let nombre = formulario['nombre'];

    let apellido = formulario['apellido'];
    
    let edad = formulario['edad'];


    let todo = `${nombre.name}:${nombre.value},<br/>
    ${apellido.name}:${apellido.value},<br/>
    ${edad.name}:${edad.value}.`
    document.getElementById('individual').innerHTML = todo;





}



