class Persona {
    constructor(){
        this._nombre="";
        this._edad = 0;
    }

    get nombre(){
        return this._nombre;
    }

    get edad(){
        return this._edad;
    }
    
    set nombre(nom){
        this._nombre=nom;
    }

    set edad(e){
        if(e>0 && e%1===0){
            this._edad=e;
        }else{
            throw "Error en la asignacion de la edad";
        }
    }

    datos(){
        console.log(this.edad, this.nombre);
    }
}

const persona = new Persona();
persona.edad = 21;
persona.nombre = "Yon"; 
persona.datos();