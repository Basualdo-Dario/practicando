class Persona{
    static id = 0;
    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        this._id = ++Persona.id;
    }

    get nombre(){return this._nombre;}
    set nombre(nombre){this._nombre = nombre}

    get apellido(){return this._apellido;}
    set apellido(apellido){this._apellido = apellido}

    tostring(){
        return `Nombre:${this._nombre} _ Apellido:${this._apellido} _ ID:${this._id}`;
    }
}


class Personas{
        constructor(){
            this._personas = [];
        }
        
        get personas(){return this._personas;}

        agregar(persona){
            this._personas.push(persona);
        }

        recorrer(){
            let lista = '';
            for (let persona of this._personas){
                lista += `<li>\n${persona.tostring()}</li>`
            }
            return lista ;
        }



}



let lista = new Personas();
function cargar(){
    
    let formulario = document.forms['persona'];
    let nombre = formulario['nombre'];
    let apellido = formulario['apellido'];
    
    if(nombre.value ==''|| apellido.value == ''){
        alert('Primero ingrese un valor,no sea salame');
    }
    else{    
        lista.agregar(new Persona(nombre.value,apellido.value));
        let ver = document.getElementById('lista');
        ver.innerHTML = lista.recorrer();

    }


}
