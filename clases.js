class persona{
    static  contadorpersonas = 0;

    constructor(nombre,apellido,edad){
        this._idpersona = ++persona.contadorpersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }
    get idpersona(){
        this._idpersona;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido
    }
    get edad(){
        return this._edad;
    }
    set edad(edad){
        this._edad = edad
    }

    toString(){
        return ` ${this._idpersona} ${this._nombre} ${this._apellido} ${this._edad}`;
    }

}


class empleado extends persona{
    static contadorEmpleado=0;
    constructor(nombre,apellido,edad,sueldo){
        super(nombre,apellido,edad);
        this._idempleado = ++empleado.contadorEmpleado;
        this._sueldo = sueldo;
    }

    get idempleado (){
        return this._idempleado;
    }
    get sueldo(){
        return  this._sueldo;
    }
    set sueldo (sueldo ){
        this._sueldo = sueldo;
    }
    toString()    {
        return `${super.toString()} ${this._idempleado} ${this._sueldo}`;
    }
   

}

class cliente extends persona{
    static contadorcliente=0;
    constructor(nombre,apellido,edad,fecha){
        super(nombre,apellido,edad);
        this._idcleinte = ++cliente.contadorcliente;
        this._fecha = fecha;
    }
    get id(){
        return this._idcleinte;
    }
    get fecha(){
        return this._fecha;
    }
    set fecha(fehca){
        this._fecha = fehca;
    }
    mostrardatos(){
        return `${super.toString()} ${this._idcleinte} ${this._fecha}`;
    }
}

let persona1 = new persona('bryan','hed','27');
console.log(persona1.toString());

let persona2 = new persona('lucero','sanchez','26');
console.log(persona2.toString());


let empleado1 = new empleado('empleado1','hdz','27',3);
console.log(empleado1.toString());

let empleado2 = new empleado('empleado2','apellido','25',3400);
console.log(empleado2.toString());


let cliente1 = new cliente('cliente1','apellido','30', new Date());
console.log(cliente1.mostrardatos());

let cliente2= new cliente('cliente2','apellido',35, new Date());
console.log(cliente2.mostrardatos());
