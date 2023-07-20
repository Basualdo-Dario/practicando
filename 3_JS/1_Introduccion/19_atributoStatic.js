
class Persona{
    
    static contadorObjetos = 0;
    constructor(nombre,apellido){
        Persona.contadorObjetos++;
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre(){return this._nombre}
    get apellido(){return this._apellido}

    set nombre(nombre){this._nombre = nombre}
    set apellido(apellido){this._apellido = apellido}

    static incremento(){contadorObjetos++;}

    
}
console.log(Persona.contadorObjetos);
per1 = new Persona('Dario','Basualdo');

console.log(Persona.contadorObjetos);
per1 = new Persona('Luis','Basualdo');

console.log(Persona.contadorObjetos);
per1 = new Persona('Ema','Basualdo');

console.log(Persona.contadorObjetos);
