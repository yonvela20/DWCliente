class Alumno{
    constructor(nombre, edad, dni){
        this._nombre = nombre;
        this._edad = edad;
        this._dni = dni;
    }

    get nombre(){
        return this._nombre;
    }

    get edad(){
        return this._edad;
    }

    get dni(){
        return this._dni;
    }

    set nombre(nom){
        this._nombre = nom;
    }

    set edad(e){
        this._edad = e;
    }

    set dni(dni){
        this._dni = dni;
    }

    mostrarDatos(){
        document.write("El nombre es: " + this.nombre + "\n Tiene: " + this.edad + "\n Con DNI: " + this.dni);
    }
}

class Asignatura extends Alumno{
    constructor(alumno = new Alumno(this.nombre, this.edad, this.dni), nombreAsignatura, isbn){
        this._alumno = alumno;
        this._nombreAsignatura = nombreAsignatura;
        this._isbn = isbn;
    }

    get alumno(){
        return this._alumno;
    }

    get nombreAsignatura(){
        return this._nombreAsignatura;
    }

    get isbn(){
        return this._isbn;
    }

    set alumno(alumno){
        this._alumno = alumno;
    }

    set nombreAsignatura(nomAsig){
        this._nombreAsignatura = nomAsig;
    }

    set isbn(isbn){
        this._isbn = isbn;
    }

    datosAsig(){
        document.write("El alumno cursando es: " + this.alumno + " Su asig. es: " + this.nombreAsignatura + " Con isbn: " + this.isbn);
    }
}

alumno = new Alumno("Yon", 21, "73592070M");

console.log("ye que pasa");
//asignatura = new Asignatura(alumno, "cono", "45713M");

console.log("ye que pasa");
alumno.mostrarDatos();
document.write("<br>");
//asignatura.datosAsig(alumno);