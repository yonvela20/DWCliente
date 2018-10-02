window.onload = function(){
    
    //TODO: hacer que las celdas contiguas a las minas tengan su numero correspondiente
    //TODO: hacer que cada celda con mina tenga su propia variable booleana 

    document.getElementById("chkPrincipiante").addEventListener('click', juegoPrincipiante, false); 
    document.getElementById("chkIntermedio").addEventListener('click', juegoIntermedio, false); 
    document.getElementById("chkExperto").addEventListener('click', juegoExperto, false); 
    document.getElementById("botonReiniciar").addEventListener('click', reiniciar, false); 

    document.getElementById("botonReiniciar").style.display = "none";

    //Tabla para principiantes 8x8 
    function juegoPrincipiante(){
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
    function juegoIntermedio(){ 
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
    function juegoExperto(){   
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
    function generaTablas(fil, col){
        const divTablero = document.getElementById("divTablero");

        let tabla = document.createElement("table");
        let tblBody = document.createElement("tbody");

        for(let i = 0; i < fil; i++){
            let filas = document.createElement("tr");
        
            for(let j = 0; j < col; j++){
                let columnas = document.createElement("td"); 
                columnas.id = i+""+j; 
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

    //Funcion para general bombas 
    function generaBombas(numBombas, fil, col){
        for(let j = 0; j < numBombas; j++){
            let rndFilas = Math.floor((Math.random()*fil));
            let rndColumnas = Math.floor((Math.random()*col));
            
            let celdaMina = document.getElementById(rndFilas+""+rndColumnas);
            
            celdaMina.innerHTML = "*";
            //Intentando hacer que no se repitan las celdas donde ya hay una mina 
            
            let textoCelda = document.getElementById(rndFilas+""+rndColumnas).textContent;

            console.log(textoCelda);

/*             if (textoCelda != "*"){
                celdaMina.innerHTML = "*";
            }else{
                return false;
            }
             */
        }
        //console.log(numBombas);
    }

    //Funcion comodin para los clicks en celdas 
    function clicks(){
        console.log("Los clicks en celdas funcionan");
        /*
        if(bomba == true){
            console.log("Aqui hay una bomba");
        }else{
            console.log("Aqui no hay bomba");
        }
        */
    }

    function reparteNumeros(fil, col){
        let bombas = 0;

        for(let i = 0; i < fil; i++){
            for(let j = 0; j < col; j++){
                contadorMinas = 0;

                celda = document.getElementById(i+""+j);
                
                celdaDerecha = document.getElementById(i+""+j+1);
                celdaIzquierda = document.getElementById(i+""+j-1);
                
                celdaAbajo = document.getElementById(i-1+""+j);
                celdaArriba = document.getElementById(i+1+""+j);
                
                celdaDiagonalIzqSup = document.getElementById(i-1+""+j-1);
                celdaDiagonalIzqInf = document.getElementById(i+1+""+j-1);

                celdaDiagonalDerSup = document.getElementById(i+1+""+j+1);
                celdaDiagonalDerInf = document.getElementById(i-1+""+j+1);

                textoCelda = document.getElementById(i+""+j).textContent;
                
                if(textoCelda == "*"){ 
                    bombas ++;             
/*                  celdaDerecha.innerHTML = contadorMinas+=contadorMinas+1;
                    celdaIzquierda.innerHTML = contadorMinas+=contadorMinas+1;
                    
                    celdaAbajo.innerHTML = contadorMinas+=contadorMinas+1;
                    celdaArriba.innerHTML = contadorMinas+=contadorMinas+1;
                    
                    celdaDiagonalIzqSup.innerHTML = contadorMinas+=contadorMinas+1;
                    celdaDiagonalIzqInf.innerHTML = contadorMinas+=contadorMinas+1;

                    celdaDiagonalDerSup.innerHTML = contadorMinas+=contadorMinas+1;
                    celdaDiagonalDerInf.innerHTML = contadorMinas+=contadorMinas+1;  */
                }
            }
        }
        console.log(bombas);
    }

    //Reinicio del juego
    function reiniciar(){
        window.location.reload();
    }
}