
class Persona{
        //atributo statico,de la clase
    static contadorObjetos = 0;

    //atributo dinamico,de los objetos
    email = 'email default';

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
per1 = new Persona('Dario','Basualdo');
console.log(per1.email);

