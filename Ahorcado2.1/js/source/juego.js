//export * from "js/source/juego";

export default class Juego {
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
