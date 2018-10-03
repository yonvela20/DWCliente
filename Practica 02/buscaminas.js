window.onload = function () {

    //TODO: hacer que las celdas contiguas a las minas tengan su numero correspondiente
    //TODO: hacer que cada celda con mina tenga su propia variable booleana 

    document.getElementById("chkPrincipiante").addEventListener('click', juegoPrincipiante, false);
    document.getElementById("chkIntermedio").addEventListener('click', juegoIntermedio, false);
    document.getElementById("chkExperto").addEventListener('click', juegoExperto, false);
    document.getElementById("botonReiniciar").addEventListener('click', reiniciar, false);

    document.getElementById("botonReiniciar").style.display = "none";

    //Tabla para principiantes 8x8 
    function juegoPrincipiante() {
        const fil = 8;
        const col = 8;
        const numBombas = 8;

        document.getElementById("botonReiniciar").style.display = "block";
        document.getElementById("divChecks").style.display = "none";

        generaTablas(fil, col);
        generaBombas(numBombas, fil, col);
        reparteNumeros(fil, col);
    }

    //Tabla de nivel intermedio 16x16
    function juegoIntermedio() {
        const fil = 16;
        const col = 16;
        const numBombas = 40;

        document.getElementById("botonReiniciar").style.display = "block";
        document.getElementById("divChecks").style.display = "none";

        generaTablas(fil, col);
        generaBombas(numBombas, fil, col);
        reparteNumeros(fil, col);
    }

    //Tabla de nivel experto 30x16
    function juegoExperto() {
        const fil = 16;
        const col = 30;
        const numBombas = 99;

        document.getElementById("botonReiniciar").style.display = "block";
        document.getElementById("divChecks").style.display = "none";

        generaTablas(fil, col);
        generaBombas(numBombas, fil, col);
        reparteNumeros(fil, col);

    }

    //Funcion para general tablas 
    function generaTablas(fil, col) {
        const divTablero = document.getElementById("divTablero");

        let tabla = document.createElement("table");
        let tblBody = document.createElement("tbody");

        for (let i = 0; i < fil; i++) {
            let filas = document.createElement("tr");

            for (let j = 0; j < col; j++) {
                let columnas = document.createElement("td");
                columnas.id = i + "" + j;
                filas.appendChild(columnas);
                //LOS CLICKS EN CELDAS FUNCIONAN AAAAAAAAAAAAAAAAAA
                //Aqui habra que poner la funcion buena pero por el momento va guay 
                columnas.addEventListener('click', clicks, false);
            }

            tblBody.appendChild(filas);
        }

        tabla.appendChild(tblBody);
        divTablero.appendChild(tabla);

        tabla.setAttribute("border", 2);
    }

    //Funcion para generar bombas 
    function generaBombas(numBombas, fil, col) {
        console.log(numBombas);
        for (let j = 0; j < numBombas; j++) {

            let rndFilas = Math.floor((Math.random() * fil));
            let rndColumnas = Math.floor((Math.random() * col));

            let celdaMina = document.getElementById(rndFilas + "" + rndColumnas);
            let textoCelda = document.getElementById(rndFilas + "" + rndColumnas).textContent;

            //console.log(textoCelda)                
            if (textoCelda != "*") {
                celdaMina.innerHTML = "*";
            } else {
                j--;
            }

        }
        //console.log(numBombas);
    }

    //Funcion comodin para los clicks en celdas 
    function clicks() {
        console.log("Los clicks en celdas funcionan");
        /*
        if(bomba == true){
            console.log("Aqui hay una bomba");
        }else{
            console.log("Aqui no hay bomba");
        }
        */
    }

    function reparteNumeros(fil, col) {
        //let bombas = 0;

        for (let i = 0; i < fil; i++) {
            for (let j = 0; j < col; j++) {
                let contadorMinas = 0;

                celda = document.getElementById(i + "" + j);

                let celdaDerecha = document.getElementById(i + "" + (j + 1));
                let celdaIzquierda = document.getElementById(i + "" + (j - 1));

                let celdaAbajo = document.getElementById((i - 1) + "" + j);
                let celdaArriba = document.getElementById((i + 1) + "" + j);

                let celdaDiagonalIzqSup = document.getElementById((i - 1) + "" + (j - 1));
                let celdaDiagonalIzqInf = document.getElementById((i + 1) + "" + (j - 1));

                let celdaDiagonalDerSup = document.getElementById((i + 1) + "" + (j + 1));
                let celdaDiagonalDerInf = document.getElementById((i - 1) + "" + (j + 1));

                //TODO: Condicion para que no pille celdas fuera de la tabla
                if(i<0 || j<0){
                    return false;
                } else {
                    if (celdaDerecha.textContent == "*") {
                        contadorMinas = contadorMinas + 1;
                    }
                    if (celdaIzquierda.textContent == "*") {
                        contadorMinas = contadorMinas + 1;
                    }
                    if (celdaAbajo.textContent == "*") {
                        contadorMinas = contadorMinas + 1;
                    }
                    if (celdaArriba.textContent == "*") {
                        contadorMinas = contadorMinas + 1;
                    }
                    if (celdaDiagonalIzqSup.textContent == "*") {
                        contadorMinas = contadorMinas + 1;
                    }
                    if (celdaDiagonalIzqInf.textContent == "*") {
                        contadorMinas = contadorMinas + 1;
                    }
                    if (celdaDiagonalDerSup.textContent == "*") {
                        contadorMinas = contadorMinas + 1;
                    }
                    if (celdaDiagonalDerInf.textContent == "*") {
                        contadorMinas = contadorMinas + 1;
                    }
                }
                celda.innerHTML = contadorMinas;
            }
        }
    }
    //console.log(bombas);
}

//Reinicio del juego
function reiniciar() {
    window.location.reload();
}
