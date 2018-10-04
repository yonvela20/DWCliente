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
        //setTablaImagen(fil, col);
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
            filas.id = i;
            for (let j = 0; j < col; j++) {
                let columnas = document.createElement("td");
                columnas.id = i + "" + j;

                //columnas.setAttribute("id", [i][j]);
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
            //let celdaMina = document.getElementById([rndFilas][rndColumnas]);

            let textoCelda = document.getElementById(rndFilas + "" + rndColumnas).textContent;
            //let textoCelda = document.getElementById([rndFilas][rndColumnas]).textContent;

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
        if(event.target.innerHTML == "*"){
            console.log("Has clickado una bomba");
            endGame();
        } else{
            console.log("Has clickado agua");
        }
        

    }

    function reparteNumeros(fil, col) {
        //let bombas = 0;

        //La i son las filas y la j son las columnas
        for (let i = 0; i < fil; i++) {
            for (let j = 0; j < col; j++) {
                let contadorMinas = 0;
                
                filas = document.getElementById(i);
                celda = document.getElementById(i + "" + j);

                if(filas.id == 0){
                    console.log(i);
                    console.log(j);
                    if(celda.id == 0+""+0){
                        
                        let celdaDerecha = document.getElementById(i + "" + (j + 1));
                        let celdaAbajo = document.getElementById((i + 1) + "" + j);
                        let celdaDiagonalDerInf = document.getElementById((i + 1) + "" + (j + 1));
    
                        if (celdaDerecha.textContent == "*") {
                            contadorMinas = contadorMinas + 1;
                            console.log("Tengo una mina a la derecha");
                        }                    
                        if (celdaAbajo.textContent == "*") {
                            contadorMinas = contadorMinas + 1;
                            console.log("Tengo una mina abajo");
                        }
                        if (celdaDiagonalDerInf.textContent == "*") {
                            contadorMinas = contadorMinas + 1;
                            console.log("TEngo una mina en la diagonal izquierda");
                        }
                        celda.innerHTML = contadorMinas; 
    
                        console.log("Esquina superior izquierda");
                    } 

                    if(celda.id == 0+""+col){
                        let celdaIzquierda = document.getElementById(i + "" + (j - 1));
                        let celdaAbajo = document.getElementById((i + 1) + "" + j);
                        let celdaDiagonalIzqInf = document.getElementById((i + 1) + "" + (j - 1));
    
                        if (celdaIzquierda.textContent == "*") {
                            contadorMinas = contadorMinas + 1;
                        }
                        if (celdaAbajo.textContent == "*") {
                            contadorMinas = contadorMinas + 1;
                        }
                        if (celdaDiagonalIzqInf.textContent == "*") {
                            contadorMinas = contadorMinas + 1;
                        }
                        celda.innerHTML = contadorMinas; 
    
                        console.log("Esquina superior derecha");  
                    } 
                }

                if(filas.id == fil){
                    //Esquina inferior izquierda
                    if(celda.id == fil+""+0){

                        let celdaArriba = document.getElementById((i - 1) + "" + j);
                        let celdaDerecha = document.getElementById(i + "" + (j + 1));
                        let celdaDiagonalDerSup = document.getElementById((i - 1) + "" + (j + 1));

                        if (celdaArriba.textContent == "*") {
                            contadorMinas = contadorMinas + 1;
                        }
                        if (celdaDerecha.textContent == "*") {
                            contadorMinas = contadorMinas + 1;
                        }
                        if (celdaDiagonalDerSup.textContent == "*") {
                            contadorMinas = contadorMinas + 1;
                        }
                        celda.innerHTML = contadorMinas; 

                        console.log("Esquina inferior izquierda");
                    } 
                    //Esquina inferior derecha 
                    if(celda.id == fil+""+col){
                        let celdaArriba = document.getElementById((i - 1) + "" + j);
                        let celdaIzquierda = document.getElementById(i + "" + (j - 1));
                        let celdaDiagonalIzqSup = document.getElementById((i - 1) + "" + (j - 1));

                        if (celdaArriba.textContent == "*") {
                            contadorMinas = contadorMinas + 1;
                        }
                        if (celdaIzquierda.textContent == "*") {
                            contadorMinas = contadorMinas + 1;
                        }
                        if (celdaDiagonalIzqSup.textContent == "*") {
                            contadorMinas = contadorMinas + 1;
                        }
                        celda.innerHTML = contadorMinas; 

                        console.log("Esquina inferior derecha");
                    }
                }            

                //celda.innerHTML = contadorMinas; 

            }


        }

    }
    //console.log(bombas);
    
    //Poner las imagenes base
/*     //No churula ufo
    function setTablaImagen(fil, col){
        const imageObj = new Image();
        imageObj.src = "blank.gif";

        for (let i = 0; i < fil; i++) {
            for (let j = 0; j < col; j++) {
                celda = document.getElementById(i+""+j);
    
                celda.drawImage(imageObj, 0, 0);
            }
        }
    } */

    //Reinicio del juego
    function reiniciar() {
        window.location.reload();
    }

    //Se acabo el juego 
    function endGame(){
        alert("Has perdido :(")
        reiniciar();
    }
}


