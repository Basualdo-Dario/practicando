// Con Static hacemos metodos de clase(solo funciona con la clase) 
//tambien si se hace herencia la otra clase la hereda 


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

    static saludar(){console.log('La clase dice: Hola.')}

    static saludar2(persona){console.log(persona.toString() +' La clase dice: Hola.')}
}

persona1 = new Persona('Dario','Basualdo');
//persona1.saludar(); no es posible llamar un metodo statico desde un objeto

Persona.saludar();

// pero si sele pude pasar un objeto como atributo
Persona.saludar2(persona1);
