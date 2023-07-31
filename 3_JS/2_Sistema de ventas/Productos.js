

class Productos{

    static idProductos = 0;
    constructor(nombre,precio){

        this._nombre = nombre;
        this._precio = precio;
        this.idProductos = ++Productos.idProductos;
        this._contadorProductos;
    }

    get idProductos(){return this._contadorProductos;}
    get nombre(){return this._nombre;}
    get precio(){return this._precio;}
    get contadorProductos(){return this.contadorProductos;}

    set nombre(nombre){ this._nombre = nombre;}
    set precio(precio){ this._precio = precio;}
    set contadorProductos(contadorProductos){ this.contadorProductos = contadorProductos;}

    toString(){return `ID: ${this.idProductos},Nombre: ${this._nombre},Precio: ${this._precio}`}
}