window.onload = function () {
    document.getElementById("botonJugar").addEventListener('click', jugar, false);
    document.getElementById("botonComprobar").addEventListener('click', comprobarLetras, false);
    document.getElementById("reinicio").addEventListener('click', reinicio, false);

    //Hacemos que el input no se vea ya que teoricamente aun no hemos empezado a jugar
    document.getElementById("inputLetras").style.display = "none";
    document.getElementById("contenedorLetras").style.display = "none";
    document.getElementById("botonComprobar").style.display = "none";
    document.getElementById("reinicio").style.display = "none";


    //Funcion con enter
    const input = document.getElementById("introducirLetras");

    console.log("pichurra");

    input.addEventListener("keyup", function (event) {
        event.preventDefault();
        //13 codigo de la tecla enter
        if (event.keyCode === 13) {
            //Ejecutamos el click del boton Comprobar
            document.getElementById("botonComprobar").click();
        }
    });
}

let letrasUsadas = [""];
let palabra = "";
let arrayPalabras = ["ahorcado", "jazz", "recta", "curva", "matematicas", "pincho", "hola"];

//random con lodash
let i = _.random(0, arrayPalabras.length - 1);
//let i = Math.floor(Math.random()*arrayPalabras.length);
p = arrayPalabras[i];

palabra = p.split("");

const ahorcado = ["A", "H", "O", "R", "C", "A", "D", "O"];

let numAciertos = 0;
let numErrores = 0;

class Tabla {
    constructor(len) {
        this.len = len;
    }

    crearTabla() {
        const contenedor = document.getElementById("contenedorLetras");
        let tabla = document.createElement("table");
        let tblBody = document.createElement("tbody");
        for (let i = 0; i < 1; i++) {
            let filas = document.createElement("tr");
            for (let j = 0; j < this.len; j++) {
                let celda = document.createElement("td");
                celda.id = "celdaAcierto" + j;
                celda.innerHTML = "_ ";
                filas.appendChild(celda);
            }
            tabla.appendChild(filas);
            tblBody.appendChild(tabla);

            contenedor.appendChild(tblBody);
        }
    }

    crearTablaAhorcado() {
        const contenedor = document.getElementById("contenedorAhorcado");
        let tabla = document.createElement("table");
        let tblBody = document.createElement("tbody");

        for (let i = 0; i < 1; i++) {
            let filas = document.createElement("tr");
            for (let j = 0; j < 8; j++) {
                let celdas = document.createElement("td");
                celdas.id = "ahorcado" + j;
                //celdas.innerHTML = "*";

                filas.appendChild(celdas);
            }
            tabla.appendChild(filas);
            tblBody.appendChild(tabla);

            contenedor.appendChild(tblBody);
        }
    }
}

class Juego {
    constructor(palabra) {
        this._palabra = palabra;
    }

    set palabra(pal) {
        this.palabra = pal;
    }

    get palabra() {
        return this._palabra;
    }

    letraIntroducida() {
        let letraInput = document.getElementById("introducirLetras").value;
        let encontrada = false;

        /* if(letraInput.charAt(0) == " " || letraInput == ""){
            alert("Debes introducir una letra");
        }
        */
        for (let i = 0; i < letrasUsadas.length; i++) {
            if (letraInput.toLowerCase() == letrasUsadas[i].toLowerCase()) {
                encontrada = true;
            }
        }

        if (encontrada) {
            alert("Ya has introducido esa letra antes");
        } else {
            letrasUsadas.push(letraInput);
            encontrada = false;

            //banderita para el bucle de mas adelante
            let existe = false;

            for (let j = 0; j < palabra.length; j++) {
                if (letraInput.toLowerCase() == palabra[j].toLowerCase()) {
                    existe = true;

                    numAciertos++;

                    for (let z = 0; z < palabra.length; z++) {
                        //En el caso que el indice de la palabra escogida por el programa coincida con la letra introducida...
                        if (palabra[z] == letraInput) {
                            //Cogemos todas las rayitas 
                            let celdaAcierto = document.getElementById("celdaAcierto" + z);
                            celdaAcierto.innerHTML = palabra[z];
                        }
                    }
                }
            }

            if (!existe) {
                numErrores++;

                let errores = document.getElementById("pErrores");
                errores.innerHTML += letraInput + ", ";

                let celdaAhorcado = document.getElementById("ahorcado" + (numErrores - 1));

                celdaAhorcado.innerHTML = ahorcado[numErrores - 1];

                if (numErrores == ahorcado.length) {
                    document.getElementById("final").innerHTML = "Has perdido :(";
                    document.getElementById("reinicio").style.display = "block";
                    document.getElementById("inputLetras").style.display = "none";
                    document.getElementById("botonComprobar").style.display = "none";
                    document.getElementById("contenedorLetras").style.display = "none";

                }
            }

            if (numAciertos == palabra.length) {
                document.getElementById("final").innerHTML = "HAS GANADO!";
                document.getElementById("reinicio").style.display = "block";
                document.getElementById("inputLetras").style.display = "none";
                document.getElementById("botonComprobar").style.display = "none";

            }
        }
    }
}

function jugar() {
    //Ocultamos el boton de jugar y las regalas y mostramos todo lo demas para continuar jugando
    document.getElementById("botonJugar").style.display = "none";
    document.getElementById("reglasJuego").style.display = "none";
    document.getElementById("inputLetras").style.display = "block";
    document.getElementById("contenedorLetras").style.display = "block";
    document.getElementById("botonComprobar").style.display = "block";

    let input = document.getElementById("introducirLetras");
    input.value = "";
    input.focus();

    juego = new Juego(palabra);
    tabla = new Tabla(palabra.length);

    tabla.crearTabla();
    tabla.crearTablaAhorcado();

    console.log(palabra);
}

function comprobarLetras() {
    juego.letraIntroducida();
    let input = document.getElementById("introducirLetras");
    input.value = "";
    input.focus();
}

function reinicio(){
    window.location.reload();
}


