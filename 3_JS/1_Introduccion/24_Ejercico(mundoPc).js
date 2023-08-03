/* clase padre Dispositivo de entrada */

class DispositivoEntrada{

    constructor(marca,tipoEntrada){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }
    get tipoEntrada(){return this._tipoEntrada;}
    set tipoEntrada(tipo){this._tipoEntrada = tipo;}

    get marca(){return this._marca;}
    set marca(marca){this._marca = marca}
}

class Raton extends DispositivoEntrada{

    static idRaton = 0;
    constructor(marca,tipoEntrada){
        super(marca,tipoEntrada);
        this._idRaton = ++Raton.idRaton;
    }

    get idRaton(){return this._idRaton;}
    toString(){return `ID_RATON: ${this._idRaton}, MARCA: ${super.marca}, ENTRADA: ${super.tipoEntrada}`}

}

class Teclado extends DispositivoEntrada{
    static idTeclado = 0;
    constructor(marca,tipoEntrada){
        super(marca,tipoEntrada);
        this._idTeclado = ++Teclado.idTeclado;
    }
    get(){return this._idTeclado}

    toString(){return `ID_TECLADO: ${this._idTeclado}, MARCA: ${super.marca}, ENTRADA: ${super.tipoEntrada}`}

}

class Monitor{
    static idMonitor = 0;

    constructor(marca,tamaño){
        this._marca = marca;
        this._tamaño = tamaño;
        this._idMonitor = ++Monitor.idMonitor;
    }

    get maraca(){return this._marca;}
    set marca(marca){this._marca = marca;}

    get tamaño(){return this._tamaño;}
    set tamaño(tamaño){this._tamaño = tamaño;}

    toString(){return `ID_MONITOR: ${this._idMonitor}, MARCA: ${this._marca} ,TAMAÑO: ${this._tamaño}`}

}

class Computadora{

    static idComputadora =0;
    constructor(nombre,monitor,teclado,raton){
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
        this._idComputadora = ++Computadora.idComputadora;
    }
    get idComputadora(){return this._idComputadora;}

    get nombre(){return this._nombre;}
    set nombre(nombre){this._nombre = nombre;}

    get monitor(){return this._monitor;}
    set monitor(monitor){ this._monitor = monitor;}

    get teclado(){return this._teclado;}
    set teclado(teclado){ this._teclado = teclado;}

    get raton(){return this._raton;}
    set raton(raton){this._raton = raton;}

    toString(){ return `ID_COMPUTADORA: ${this._idComputadora} ,NOMBRE: ${this._nombre}.\n${this._monitor.toString()}.\n${this._teclado.toString()}.\n${this._raton.toString()}. `}

}

monitor = new Monitor('LG',"18'");
console.log(monitor.toString()); 

teclado = new Teclado('Noga','usb');
console.log(teclado.toString());

raton = new Raton('Noga','usb');
console.log(raton.toString()); 

monitor2 = new Monitor('HP',"22'");
console.log(monitor2.toString()); 

teclado2 = new Teclado('Red Dragon','USB');
console.log(teclado2.toString());

raton2 = new Raton('HP','BLUETOOTH');
console.log(raton2.toString()); 

/*****************************************************************************************************/

computadora = new Computadora('Kit Gamer',monitor,teclado,raton)
console.log(computadora.toString());

computadora2 = new Computadora('Kit Empresa',monitor2,teclado2,raton2)
console.log(computadora2.toString());