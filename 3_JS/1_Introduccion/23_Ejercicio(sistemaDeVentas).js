
class Productos{

    static idProductos = 0;
    constructor(nombre,precio){

        this._nombre = nombre;
        this._precio = precio;
        this._idProductos = ++Productos.idProductos;
  
    }

    get idProductos(){return this._contadorProductos;}
    get nombre(){return this._nombre;}
    get precio(){return this._precio;}

    set nombre(nombre){ this._nombre = nombre;}
    set precio(precio){ this._precio = precio;}

    toString(){return `ID: ${this._idProductos}, Nombre: ${this._nombre}, Precio: $${this._precio}`}
}




/***************************************************************************************************/




class Orden{

    static idOrden = 0;
    static get MAX_PRODUCTOS(){return 5;}
    
    constructor(){
        this._idOrden = ++Orden.idOrden;
        this._productos =[];
        this._contadorProductosAgregados = 0;
    }

    get idOrden(){return this._idOrden}

    get contadorProductosAgregados(){return this._contadorProductosAgregados;}
    set contadorProductosAgregados(productos){this._contadorProductosAgregados = productos;}




    agregarProductos(producto){

        if(this._productos.length < Orden.MAX_PRODUCTOS){
            
                this._productos.push(producto);
                ++this._contadorProductosAgregados;
        }
        else{
                console.log('No se agrego el ultimo Producto,Limite alcanzado')
        }
    }


    calcularTotal(){
       let res = 0;
       for(let producto of this._productos){
           res += producto.precio;
       }
       return `Total: $${res}.`;
    } 


    mostrarOrden(){
        let all = '';
        for(let producto of this._productos){
                all +=`\n${producto}`;
        }
        return `${all}\n${this.calcularTotal()}`;
    }

    toString(){
        return `ID_ORDEN: ${this._idOrden}.\n ${this.mostrarOrden()}\nPRODUCTOS_AGREGADO: ${this._contadorProductosAgregados}`;
    }
 
}

pro1 = new Productos('Queso',200);
pro2 = new Productos('Pan',500);
pro3= new Productos('Salame',1000);
pro4= new Productos('Coca-cola',1200);
pro5= new Productos('Fernet',3000);


orden1 = new Orden();
orden1.agregarProductos(pro1);
orden1.agregarProductos(pro2);
orden1.agregarProductos(pro3);
orden1.agregarProductos(pro4);
orden1.agregarProductos(pro5);
console.log(orden1.toString());


orden2 = new Orden();
orden2.agregarProductos(pro1);
orden2.agregarProductos(pro2);
console.log(orden2.toString());

orden3 = new Orden();
orden3.agregarProductos(pro4);
orden3.agregarProductos(pro5);
console.log(orden3.toString());
/* C238 T36 */