window.onload = function(){
    document.getElementById("chkPrincipiante").addEventListener('click', juegoPrincipiante, false);
    document.getElementById("chkIntermedio").addEventListener('click', juegoIntermedio, false);
    document.getElementById("chkExperto").addEventListener('click', juegoExperto, false);
    
    document.getElementById("botonReiniciar").addEventListener('click', reiniciar, false);

    document.getElementById("botonReiniciar").style.display = "none";
}

//Clase celda 
class Celda{
    constructor(){
        this.status = "unclicked";
        this.bomba = false;
        this.bandera = false;
        this.numeroContiguo = 0;
    }
}

//Clase tablero
class Tablero{
    constructor(fil, col, numBombas){
        this.fil = fil;
        this.col = col;
        this.numBombas = numBombas;
    }

    //Funcion para crear el tablero
    generaTablas() {
        const divTablero = document.getElementById("divTablero");

        let tabla = document.createElement("table");
        let tblBody = document.createElement("tbody");

        for (let i = 0; i < this.fil; i++) {
            let filas = document.createElement("tr");
            for (let j = 0; j < this.col; j++) {
                let celda = document.createElement("td");
                
                celda.id = i + "-" + j;

                this.celda = new Celda();
                
                filas.appendChild(celda);
                
                celda.style.backgroundImage = "url('images/blank.gif')";

                //Clicks en celdas
                celda.addEventListener('click', clicks, false);
            }
            tblBody.appendChild(filas);
        }

        tabla.appendChild(tblBody);
        divTablero.appendChild(tabla);

        tabla.setAttribute("border", 2);
    }

    //Funcion para generar bombas
    generaBombas(){
        for (let j = 0; j < this.numBombas; j++) {

            let rndFilas = Math.floor((Math.random() * this.fil));
            let rndColumnas = Math.floor((Math.random() * this.col));

            let celda = document.getElementById(rndFilas + "-" + rndColumnas);
                        
            if (!celda.bomba) {
                celda.innerHTML = "*";
                celda.bomba = true;

            } else {
                j--;
            } 
        }
    }

    //Funcion para poner los numero alrededor de las minas 
    reparteNumeros() {
        //La i son las filas y la j son las columnas
        for (let i = 0; i < this.fil; i++) {
            for (let j = 0; j < this.col; j++) {
                let numeroContiguo = 0;
                let celda = document.getElementById(i + "-" + j);

                let celdaDerecha = document.getElementById(i + "-" + (j + 1));
                let celdaIzquierda = document.getElementById(i + "-" + (j - 1));

                let celdaAbajo = document.getElementById((i + 1) + "-" + j);
                let celdaArriba = document.getElementById((i - 1) + "-" + j);

                let celdaDiagonalDerInf = document.getElementById((i + 1) + "-" + (j + 1));
                let celdaDiagonalDerSup = document.getElementById((i - 1) + "-" + (j + 1));

                let celdaDiagonalIzqInf = document.getElementById((i + 1) + "-" + (j - 1));
                let celdaDiagonalIzqSup = document.getElementById((i - 1) + "-" + (j - 1));
                
                if(!celda.bomba){
                    //Casos en los que sea nula la casilla 
                    //Lados
                    if(celdaDerecha == null){
                    
                    } else{
                        if (celdaDerecha.bomba) {
                            numeroContiguo++;
                        }                        
                    }
                    if(celdaIzquierda == null){
        
                    } else {
                        if (celdaIzquierda.bomba) {
                            numeroContiguo++;
                        } 
                    }
                    
                    //Arriba abajo
                    if(celdaAbajo == null){
                        
                    } else {
                        if (celdaAbajo.bomba) {
                            numeroContiguo++;
                        }
                    }
                    if(celdaArriba == null){
                        
                    }else {
                        if (celdaArriba.bomba) {
                            numeroContiguo++;
                        }
                    }
                    
                    //Diagonales derechas 
                    if(celdaDiagonalDerInf == null){
                        
                    } else {
                        if (celdaDiagonalDerInf.bomba) {
                            numeroContiguo++;
                        }
                    }
                    if(celdaDiagonalDerSup == null){
                        
                    } else {
                        if (celdaDiagonalDerSup.bomba) {
                            numeroContiguo++;
                        }
                    }
                    
                    //Diagonales izquierdas
                    if(celdaDiagonalIzqInf == null){
                        
                    } else {
                        if (celdaDiagonalIzqInf.bomba) {
                            numeroContiguo++;
                        }
                    }
                    if(celdaDiagonalIzqSup == null){
                        
                    } else {
                        if (celdaDiagonalIzqSup.bomba) {
                            numeroContiguo++;
                        }
                    }

                    celda.numeroContiguo = numeroContiguo;
                }   
            }
        }
    }
    
    /**
     * abreCero() llama a abreMar() cada vez que encuentra una 
     * celda con un cero alrededor de la celda clickada.
     */
    abreCero(){
        let celdaId = event.target.id;
        let celda = document.getElementById(celdaId);

        if(celda.numeroContiguo == 0){
            
            console.log("la celda esta vacia");
        }
        abreMar();
    } //cierra la funcion abreCero();
}

/**
 * Abre mar es una funcion que utiliza aberCero() que pone el fondo 
 * de la celda en blanco 
 */
function abreMar(){
    //let celda = this.celda;
    //console.log(celda.id);
    console.log("funcion abreMar() dentro de abreCero()");
    //celda.style.backgroundImage = "url('images/open0.gif')";
}

//Funciones fuera de la clase tablero 
//Tabla de nivel principiante 8x8
function juegoPrincipiante() {
    juego = new Tablero(8, 8, 10);
    juego.generaTablas();
    juego.generaBombas();
    juego.reparteNumeros();

    document.getElementById("botonReiniciar").style.display = "block";
    document.getElementById("divChecks").style.display = "none";
    //setTablaImagen(fil, col);
}

//Tabla de nivel intermedio 16x16
function juegoIntermedio() {
    juego = new Tablero(16, 16, 40);
    juego.generaTablas();
    juego.generaBombas();
    juego.reparteNumeros();

    document.getElementById("botonReiniciar").style.display = "block";
    document.getElementById("divChecks").style.display = "none";
    //reparteNumeros(fil, col);
}

//Tabla de nivel experto 30x16
function juegoExperto() {
    juego = new Tablero(16, 30, 99);
    juego.generaTablas();
    juego.generaBombas();
    juego.reparteNumeros();

    document.getElementById("botonReiniciar").style.display = "block";
    document.getElementById("divChecks").style.display = "none";
    //reparteNumeros(fil, col);
}

//Funcion de los clicks 
function clicks(){
    const celdaClick = document.getElementById(this.id);

    if(event.target.bomba){
        //console.log("Has clickado una bomba");
        celdaClick.style.backgroundImage = "url('images/bombdeath.gif')";
        //endGame();
    } else if(celdaClick.numeroContiguo == 0){
        //funcion que abra el mar
        //celdaClick.style.backgroundImage =  "url('images/open"+ celdaClick.numeroContiguo +".gif')";
        //console.log("antes de la funcion mar");
        juego.abreCero();
    } 
    else {
        celdaClick.style.backgroundImage =  "url('images/open"+ celdaClick.numeroContiguo +".gif')";
    }
}

//Funcion que acaba el juego 
function endGame(){
    alert("Has perdido :(")
    reiniciar();
}

//Reinicio del juego
function reiniciar() {
    window.location.reload();
}

/* function abreMar(){
    return false;
} */