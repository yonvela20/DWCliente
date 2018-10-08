window.onload = function () {

    /**
     * FIXME: Hacer que me obtenga el valor de la función reparteNumeros en la funcion del click 
     * para así poder ponerle la imagen correspondiente a su numero 
     */

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

    //Funcion para generar tablas 
    function generaTablas(fil, col) {
        const divTablero = document.getElementById("divTablero");

        let tabla = document.createElement("table");
        let tblBody = document.createElement("tbody");

        for (let i = 0; i < fil; i++) {
            let filas = document.createElement("tr");
            filas.id = i;
            for (let j = 0; j < col; j++) {
                let columnas = document.createElement("td");
                
                columnas.id = i + "-" + j;
                
                filas.appendChild(columnas);
                
                columnas.style.backgroundImage = "url('images/blank.gif')";

                //Clicks en celdas
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
        //console.log(numBombas);
        for (let j = 0; j < numBombas; j++) {

            let rndFilas = Math.floor((Math.random() * fil));
            let rndColumnas = Math.floor((Math.random() * col));

            let celdaMina = document.getElementById(rndFilas + "-" + rndColumnas);

            let textoCelda = document.getElementById(rndFilas + "-" + rndColumnas).style.backgroundImage;

            if (textoCelda != "*") {
                celdaMina.innerHTML = "*";
            } else {
                j--;
            } 
        }
    }

    function reparteNumeros(fil, col) {
        //La i son las filas y la j son las columnas
        for (let i = 0; i < fil; i++) {
            for (let j = 0; j < col; j++) {
                let contadorMinas = 0;
                
                //filas = document.getElementById(i);
                let celda = document.getElementById(i + "-" + j);

                let celdaDerecha = document.getElementById(i + "-" + (j + 1));
                let celdaIzquierda = document.getElementById(i + "-" + (j - 1));

                let celdaAbajo = document.getElementById((i + 1) + "-" + j);
                let celdaArriba = document.getElementById((i - 1) + "-" + j);

                let celdaDiagonalDerInf = document.getElementById((i + 1) + "-" + (j + 1));
                let celdaDiagonalDerSup = document.getElementById((i - 1) + "-" + (j + 1));

                let celdaDiagonalIzqInf = document.getElementById((i + 1) + "-" + (j - 1));
                let celdaDiagonalIzqSup = document.getElementById((i - 1) + "-" + (j - 1));
                
                if(celda.textContent != "*"){
                    //Casos en los que sea nula la casilla 
                    //Lados
                    if(celdaDerecha == null){
                    
                    } else{
                        if (celdaDerecha.textContent == "*") {
                            contadorMinas = contadorMinas + 1;
                        }                        
                    }
                    if(celdaIzquierda == null){
        
                    } else {
                        if (celdaIzquierda.textContent == "*") {
                            contadorMinas = contadorMinas + 1;
                        } 
                    }
                    
                    //Arriba abajo
                    if(celdaAbajo == null){
                        
                    } else {
                        if (celdaAbajo.textContent == "*") {
                            contadorMinas = contadorMinas + 1;
                        }
                    }
                    if(celdaArriba == null){
                        
                    }else {
                        if (celdaArriba.textContent == "*") {
                            contadorMinas = contadorMinas + 1;
                        }
                    }
                    
                    //Diagonales derechas 
                    if(celdaDiagonalDerInf == null){
                        
                    } else {
                        if (celdaDiagonalDerInf.textContent == "*") {
                            contadorMinas = contadorMinas + 1;
                        }
                    }
                    if(celdaDiagonalDerSup == null){
                        
                    } else {
                        if (celdaDiagonalDerSup.textContent == "*") {
                            contadorMinas = contadorMinas + 1;
                        }
                    }
                    
                    //Diagonales izquierdas
                    if(celdaDiagonalIzqInf == null){
                        
                    } else {
                        if (celdaDiagonalIzqInf.textContent == "*") {
                            contadorMinas = contadorMinas + 1;
                        }
                    }
                    if(celdaDiagonalIzqSup == null){
                        
                    } else {
                        if (celdaDiagonalIzqSup.textContent == "*") {
                            contadorMinas = contadorMinas + 1;
                        }
                    }

/*                     function obtenMinas(){
                        return contadorMinas;
                    } */
                    //celda.style.backgroundImage = "url('images/open"+contadorMinas+".gif')";
                }   
            }
        }
    }

    //Funcion comodin para los clicks en celdas 
    function clicks() {
        const celdaClick = document.getElementById(this.id);

        if(event.target.innerHTML == "*"){
            //console.log("Has clickado una bomba");
            celdaClick.style.backgroundImage = "url('images/bombrevealed.gif')";
            //endGame();
        } else {
            //let num = reparteNumeros.contadorMinas;
            let numMinas = obtenMinas;
            
            console.log(numMinas);

            //celdaClick.style.backgroundImage =  "url('images/open"+ reparteNumeros.contadorMinas +".gif')";
        }
    }


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



/*---------------------FUNCION DE LOS NUMERO REFACTORIZADA?????--------------------*/
/*
    function reparteNumeros(fil, col) {
        //La i son las filas y la j son las columnas
        for (let i = 0; i < fil; i++) {
            for (let j = 0; j < col; j++) {
                let contadorMinas = 0;
                
                //filas = document.getElementById(i);
                let celda = document.getElementById(i + "-" + j);

                let celdaDerecha = document.getElementById(i + "-" + (j + 1));
                let celdaIzquierda = document.getElementById(i + "-" + (j - 1));

                let celdaAbajo = document.getElementById((i + 1) + "-" + j);
                let celdaArriba = document.getElementById((i - 1) + "-" + j);

                let celdaDiagonalDerInf = document.getElementById((i + 1) + "-" + (j + 1));
                let celdaDiagonalDerSup = document.getElementById((i - 1) + "-" + (j + 1));

                let celdaDiagonalIzqInf = document.getElementById((i + 1) + "-" + (j - 1));
                let celdaDiagonalIzqSup = document.getElementById((i - 1) + "-" + (j - 1));
                
                contarNumeros(contadorMinas, celda, celdaAbajo, celdaArriba, celdaDerecha, 
                    celdaIzquierda, celdaDiagonalDerInf, celdaDiagonalDerSup, celdaDiagonalIzqInf, celdaDiagonalIzqSup);
            }
        }
    }

    function contarNumeros(contadorMinas, celda, celdaAbajo, celdaArriba, celdaDerecha, 
        celdaIzquierda, celdaDiagonalDerInf, celdaDiagonalDerSup, celdaDiagonalIzqInf, celdaDiagonalIzqSup){

        if(celda.textContent != "*"){
            //Casos en los que sea nula la casilla 
            //Lados
            if(celdaDerecha == null){
            
            } else{
                if (celdaDerecha.textContent == "*") {
                    contadorMinas = contadorMinas + 1;
                }                        
            }
            if(celdaIzquierda == null){

            } else {
                if (celdaIzquierda.textContent == "*") {
                    contadorMinas = contadorMinas + 1;
                } 
            }
            
            //Arriba abajo
            if(celdaAbajo == null){
                
            } else {
                if (celdaAbajo.textContent == "*") {
                    contadorMinas = contadorMinas + 1;
                }
            }
            if(celdaArriba == null){
                
            }else {
                if (celdaArriba.textContent == "*") {
                    contadorMinas = contadorMinas + 1;
                }
            }
            
            //Diagonales derechas 
            if(celdaDiagonalDerInf == null){
                
            } else {
                if (celdaDiagonalDerInf.textContent == "*") {
                    contadorMinas = contadorMinas + 1;
                }
            }
            if(celdaDiagonalDerSup == null){
                
            } else {
                if (celdaDiagonalDerSup.textContent == "*") {
                    contadorMinas = contadorMinas + 1;
                }
            }
            
            //Diagonales izquierdas
            if(celdaDiagonalIzqInf == null){
                
            } else {
                if (celdaDiagonalIzqInf.textContent == "*") {
                    contadorMinas = contadorMinas + 1;
                }
            }
            if(celdaDiagonalIzqSup == null){
                
            } else {
                if (celdaDiagonalIzqSup.textContent == "*") {
                    contadorMinas = contadorMinas + 1;
                }
            }
            //celda.style.backgroundImage = "url('images/open"+contadorMinas+".gif')";
        }   
    }
*/