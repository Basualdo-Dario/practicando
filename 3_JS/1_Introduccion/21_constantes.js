/* Constantes */

class Persona{

    //crear constante en una clase(se crea un metodo statico con la propiedad de get y que retorne un valor)
    static get PI(){ return 3.14;} 

constructor(nombre,apellido){
    Persona.contadorObjetos++;
    this._nombre = nombre;
    this._apellido = apellido;
}

    get nombre(){return this._nombre}
    get apellido(){return this._apellido}

    set nombre(nombre){this._nombre = nombre}
    set apellido(apellido){this._apellido = apellido}

}
per1 = new Persona('Dario','Basualdo');
console.log(Persona.PI);

/* C228 T34 */