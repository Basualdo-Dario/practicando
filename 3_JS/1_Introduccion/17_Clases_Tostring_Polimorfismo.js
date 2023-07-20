
class Persona{
    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre(){return this._nombre}
    get apellido(){return this._apellido}

    set nombre(nombre){this._nombre = nombre}
    set apellido(apellido){this._apellido = apellido}

    informacion(){return this._nombre +' '+ this._apellido}
    toString(){return this.informacion()}
}


class Empleado extends Persona{
    constructor(nombre,apellido,sector){
        super(nombre,apellido);
        this._sector = sector;
    }
    get sector(){return this._sector;}
    set sector(sector){ this._sector = sector;}

    informacion(){return super.informacion() +' '+ this._sector}
   
}

per = new Persona('Dario','Basualdo')
console.log(per.informacion())
console.log(empleado1.toString())


//El Metodo toString llama a el metodo informacion y como los 2 tienen ese metodo,en este caso llama al metodo de la clase hijo.
empleado1 = new Empleado('Dario','Basualdo','Software')
console.log(empleado1.informacion())
console.log(empleado1.toString())


