
class Empleado{

    constructor(nombre,sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;
    }
    get nombre(){return this._nombre;}
    set nombre(nombre){this._nombre = nombre;}    

    get sueldo(){return this._sueldo;}
    set sueldo(sueldo){this._sueldo = sueldo;}

    obtenerDetalles(){return `NOMBRE: ${this._nombre} , SUELDO: ${this._sueldo}`}
}


class Gerente extends Empleado{
    constructor(nombre,sueldo,departamento){
        super(nombre,sueldo);
        this._departamento = departamento;
    }
    
    obtenerDetalles(){return `${super.obtenerDetalles()}, Departamento: ${this._departamento}`}
}

function determinarTipo(objeto){
    console.log(objeto.obtenerDetalles());
    if(objeto instanceof Gerente){
        console.log('\nEs un objeto de Gerente');
    }
    else if(objeto instanceof Empleado){
        console.log('\n Es un objeto de Empleado');
    }
}

empleado1 = new Empleado('Dario',30000);
gerente1 = new Gerente('Luis',1200000,'Sistemas');

determinarTipo(empleado1);
determinarTipo(gerente1);