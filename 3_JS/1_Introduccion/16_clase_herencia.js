//************************ Clases **************************************** */


class Persona{
    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido;

    }

    get nombre(){return this._nombre;}
    get apellido(){return this._apellido;}

    set nombre(nombre){this._nombre = nombre;}
    set apellido(apellido){this._apellido = apellido;}

    nombreCompleto(){return this._nombre +' '+this._apellido}
}

let persona1 = new Persona('Dario','Basualdo');

console.log(persona1.nombre);
console.log(persona1.apellido);

persona1.nombre = 'Luis';
console.log(persona1.nombreCompleto());



//************************ Herencia **************************************** */


class  Empleado extends Persona{
    constructor(nombre,apellido,departamento){
        super(nombre,apellido);
        this._departamento = departamento;
    }

    get departamento(){return this._departamento;}
    set departamento(departamento){this._departamento = departamento;}


    // sobre escritura
    nombreCompleto(){return super.nombreCompleto() +' '+this._departamento}
}


empleado = new Empleado('Dario','Basualdo','Software');

console.log(empleado);
console.log(empleado.nombreCompleto());
