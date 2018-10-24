window.onload = function(){
    document.getElementById("botonJugar").addEventListener('click', jugar, false);
    document.getElementById("botonComprobar").addEventListener('click', comprobarLetra, false);
}

class Tabla{
    constructor(len){
        this.len = len;
    }

    crearTabla(){
        const contenedor = document.getElementById("contenedorLetras");
        let tabla = document.createElement("table");
        let tblBody = document.createElement("tbody");
        for(let i = 0; i < 1; i++){
            let filas = document.createElement("tr");
            for(let j = 0; j < this.len; j++){
                let celda = document.createElement("td");
                celda.id = j;
                celda.innerHTML = "_ ";
                filas.appendChild(celda);
            }
            tabla.appendChild(filas);
            tblBody.appendChild(tabla);

            contenedor.appendChild(tblBody);
        }
    }
}

let palabra = "";
let arrayPalabras = ["ahorcado","jazz","recta","curva","matematicas","pincho","hola"];

let i = _.random(0, arrayPalabras.length-1);
p = arrayPalabras[i];

palabra = p.split("");

class Juego{
    constructor(palabra){
        this._palabra = palabra;
    }

    set palabra(pal){
        this.palabra = pal;
    }

    get palabra(){
        return this._palabra;
    }
}

function jugar(){
    juego = new Juego(palabra);
    tabla = new Tabla(palabra.length);
    
    tabla.crearTabla();
}

function comprobarLetra(){
    
}