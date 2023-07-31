
class Productos{

    static idProductos = 0;
    constructor(nombre,precio){

        this._nombre = nombre;
        this._precio = precio;
        this._idProductos = ++Productos.idProductos;
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


class Orden{
    static idOrden = 0
    constructor(){
        this._idOrden = ++Orden.idOrden;
        this._productos = [];
        this._maxProductos = 5;
        this._contadorProductosAgregados;
        this._contadorOrdenes = this.idOrden;
    }

    agregarProductos(producto){
        if(this._productos.length < this._maxProductos){

            this._productos.push(producto);
        }
        else{
                console.log('No se agrego el ultimo Producto,Limite alcanzado')
        }
    }

    calcularTotal(orden){
        let total;
        for(let i; i < orden._Productos.length;i++){
            
            let producto = orden[i];
            total = total + producto.precio;
        }
        return total;
    }
}

pro1 = new Productos('Queso',200);
pro2 = new Productos('Pan',500);
pro3= new Productos('Salame',1000);

console.log(pro1);
console.log(pro2);
console.log(pro3);


orden1 = new Orden();
orden1.agregarProductos(pro1);
orden1.agregarProductos(pro2);
orden1.agregarProductos(pro3);
orden1.agregarProductos(pro2);
orden1.agregarProductos(pro3);


let to = orden1.calcularTotal(orden1);
console.log(to)


/* C234 T35 */