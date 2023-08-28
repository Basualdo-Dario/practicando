
class Cuenta{
    constructor(){
        this._dinero = 0;
        this._ingresoTotales = 0;
        this._egresoTotales = 0;
    }

    get dinero(){return `$${parseFloat(this._dinero)}`;}
    get ingresoTotales(){return `$${parseFloat(this._ingresosTotales)}`;}
    get egresoTotales(){return `$${parseFloat(this._egresosTotales)}`;}

    ingreso(moneda){
        this._dinero += moneda;
        this._ingresoTotales += moneda;
    }

    egreso(moneda){
        this._dinero -= moneda;
        this._egresoTotales += moneda;
    }

    porcentaje(){
        let porcentaje = 0
        porcentaje = (this._egresoTotales * 100) / this._ingresoTotales;
        
        let cadena = porcentaje.toString();
        let primerosdigitos = cadena.slice(0,4);
        porcentaje = parseFloat(primerosdigitos);

        return `${porcentaje}%`;
        
    }
}

let cuenta = new Cuenta();

let formulario = document.forms['formulario'];
let detalle = formulario['detalle']
let monto = formulario['monto'];

let cartelingreso = document.getElementById('montoingreso');
let cartelegreso = document.getElementById('montoegreso');
let cartelporcentaje = document.getElementById('porcentajeegreso');
let id = 0;
let arreglovalores = [];

function limpiarinput(){
    detalle.value = '';
    monto.value = '';
}
function dinero(){
    let dinero = document.getElementById('dinerototal');
    dinero.innerHTML = cuenta.dinero;

}
function cartelin(){
    cartelingreso.innerHTML = cuenta._ingresoTotales;
}
function carteleg(){
    cartelporcentaje.innerHTML = cuenta.porcentaje();
    cartelegreso.innerHTML = cuenta._egresoTotales;
}
function valor(){    
    let selector = document.getElementById('selector');

    if(selector.value == '+'){ 
        selector.style.outline ='1px solid #64C9CF';
        selector.style.border ='1px solid #64C9CF';
        document.getElementById('botoncargar').style.color ='#64C9CF';
    }
    else if(selector.value =='-'){

        selector.style.outline ='1px solid #DF711B';
        selector.style.border ='1px solid #DF711B';
        document.getElementById('botoncargar').style.color ='#DF711B';
    }

    return selector.value;
}

function agregarregistroingreso(){
    let ingreso = document.getElementById('contenidoingreso');
    id++;
    arreglovalores[id] = parseFloat(monto.value);
    ingreso.innerHTML +=`
    <div class="boxregistro ubicacioningreso" id='${id}'>
    <div class="boxtexto" >${detalle.value}</div>
    <div class="boxdinero">
        <div class="coloringreso" >${monto.value}</div>
        <button class="bi bi-x-circle btni" onclick="eliminari(${id})"></button>
    </div>
</div>
    `  
}

function agregarregistroegreso(){
    let ingreso = document.getElementById('contenidoegreso');
    id++;
    arreglovalores[id] = parseFloat(monto.value);                           
    ingreso.innerHTML +=`
    <div class="boxregistro ubicacionegreso" id='${id}'>
    <div class="boxtexto" >${detalle.value}</div>
    <div class="boxdinero">
        <div class="coloregreso">${monto.value}</div>
        <div class="eporcentaje">${cuenta.porcentaje()}</div>
        <button class="bi bi-x-circle btne"  onclick="eliminare(${id})"></button>
    </div>
</div>

</div>
    `    
}

function eliminari(num){
    let divEliminar = document.getElementById(num);
    if(divEliminar){
        divEliminar.remove();
    }

    let devolver = arreglovalores[num]
    cuenta._dinero -= devolver;
    cuenta._ingresoTotales -= devolver; 
    cartelin();
    carteleg();
    dinero();
}

function eliminare(num){
    let divEliminar = document.getElementById(num);
    if(divEliminar){
        divEliminar.remove();
    }

    let devolver = arreglovalores[num]
    cuenta._dinero += devolver;
    cuenta._egresoTotales -= devolver; 
    carteleg();
    cartelin();
    dinero();
}

function cargar(){

    if(valor() == '+'){
        agregarregistroingreso();
        cuenta.ingreso(parseFloat(monto.value));
        cartelin()
        dinero();
        limpiarinput();


    }
    else if(valor()=='-'){
        cuenta.egreso(parseFloat(monto.value));
        agregarregistroegreso();  
        carteleg();
        dinero();
       limpiarinput();
    } 
}

