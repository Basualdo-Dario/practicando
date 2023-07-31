
class Persona{

    static contadorPersona = 0;
    constructor(nombre,apellido,edad){
        this._idPersona = ++Persona.contadorPersona;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
     
    }
    get idPersona(){return this._idPersona;}

    get nombre(){return this._nombre;}
    set nombre(nombre){this._nombre = nombre;}

    get apellido(){return this._apellido;}
    set apellido(apellido){this._apellido = apellido;}

    get edad(){return this._edad;}
    set edad(edad){this.edad = edad;}

    toString(){return `ID_PERSONA: ${this._idPersona}, NOMBRE: ${this._nombre}, APELLIDO: ${this._apellido}, EDAD: ${this._edad}`}
}

per1 = new Persona('Luis Dario','Basualdo',22);
console.log(per1.toString());

per2 = new Persona('Luis Dario','Basualdo',22);
console.log(per2.toString());




/*******************************************************************************************************************/

class Empleado extends Persona{

    static contadorEmpleados = 0;
    constructor(nombre,apellido,edad,sueldo){
        super(nombre,apellido,edad);
        this._idEmpleado = ++Empleado.contadorEmpleados;
        this._sueldo = sueldo;
    }
    get idEmpleado(){return this._idEmpleado}

    get sueldo(){return this._sueldo}
    set sueldo(sueldo){this._sueldo = sueldo}

    toString(){return `${super.toString()}, ID_EMPLEADO: ${this._idEmpleado}, SUELDO: ${this.sueldo}`}
}

emp1 = new Empleado('Dario','Basualdo',22,300000);
console.log(emp1.toString());

/*******************************************************************************************************************/

class Cliente extends Persona{
    constructor(nombre,apellido,edad){
        super(nombre,apellido,edad);
        this._idCliente = Cliente.contadorPersona++;
        this._fechaRegistro = new Date();
    }
    get idCliente(){return this._idCliente}

    get fechaRegistro(){return this._fechaRegistro;}
    set fechaRegistro(fecha){this._fechaRegistro = fecha;}

    toString(){return `${super.toString()}, ID_CLIENTE: ${this._idCliente}, FECHAD_REGISTRO: ${this._fechaRegistro}`}
}

cliente = new Cliente('Dario','Basualdo',22); 

console.log(cliente.toString() );

