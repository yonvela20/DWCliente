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
        this._coorX;
        this._coorY;
    }

     get coorX(){
        return this._coorX;
    }

    get coorY(){
        return this._coorY;
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
                
                celda.coorX = i;
                celda.coorY = j;

                filas.appendChild(celda);
                
                celda.style.backgroundImage = "url('images/blank.gif')";

                //Clicks en celdas
                celda.addEventListener('click', clicks, false);
                
                //console.log(celda.coorX, celda.coorY);
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

            //Aleatorios creados con metodos de lodash
            let rndFilas = _.random(0, (this.fil-1));
            let rndColumnas = _.random(0, (this.col-1));

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
    abreCero(celda){
        let celdaId = event.target.id;
        celda = document.getElementById(celdaId);

        //console.log(celda.coorX, celda.coorY);

        let celdaDerecha = document.getElementById(celda.coorX + "-" + (celda.coorY + 1));
        let celdaIzquierda = document.getElementById(celda.coorX + "-" + (celda.coorY - 1));

        let celdaAbajo = document.getElementById((celda.coorX + 1) + "-" + celda.coorY);
        let celdaArriba = document.getElementById((celda.coorX - 1) + "-" + celda.coorY);

        let celdaDiagonalDerInf = document.getElementById((celda.coorX + 1) + "-" + (celda.coorY + 1));
        let celdaDiagonalDerSup = document.getElementById((celda.coorX - 1) + "-" + (celda.coorY + 1));

        let celdaDiagonalIzqInf = document.getElementById((celda.coorX + 1) + "-" + (celda.coorY - 1));
        let celdaDiagonalIzqSup = document.getElementById((celda.coorX - 1) + "-" + (celda.coorY - 1));

        //console.log(celdaDerecha.coorX, celdaDerecha.coorY);

        if(!celda.bomba && celda.numeroContiguo == 0){
            if(celda.numeroContiguo == 0){
                
                celda.style.backgroundImage = "url('images/open"+ celda.numeroContiguo +".gif')";
            }

            if(celdaDerecha == null){
                    
            } else{
                if (!celdaDerecha.bomba) {
                    //celdaDerecha.style.backgroundImage = "url('blank.gif')";
                    celdaDerecha.style.backgroundImage =  "url('images/open"+ celdaDerecha.numeroContiguo +".gif')";
                    this.abreCero(celdaDerecha);
                }                        
            }
            if(celdaIzquierda == null){

            } else {
                if (!celdaIzquierda.bomba) {
                    celdaIzquierda.style.backgroundImage =  "url('images/open"+ celdaIzquierda.numeroContiguo +".gif')";                    
                    //this.abreCero(celdaIzquierda);   
                } 
            }
            
            //Arriba abajo
            if(celdaAbajo == null){
                
            } else {
                if (!celdaAbajo.bomba) {
                    celdaAbajo.style.backgroundImage =  "url('images/open"+ celdaAbajo.numeroContiguo +".gif')";
                }
            }
            if(celdaArriba == null){
                
            }else {
                if (!celdaArriba.bomba) {
                    celdaArriba.style.backgroundImage =  "url('images/open"+ celdaArriba.numeroContiguo +".gif')";
                }
            }
            
            //Diagonales derechas 
            if(celdaDiagonalDerInf == null){
                
            } else {
                if (!celdaDiagonalDerInf.bomba) {
                    celdaDiagonalDerInf.style.backgroundImage =  "url('images/open"+ celdaDiagonalDerInf.numeroContiguo +".gif')";
                }
            }
            if(celdaDiagonalDerSup == null){
                
            } else {
                if (!celdaDiagonalDerSup.bomba) {
                    celdaDiagonalDerSup.style.backgroundImage =  "url('images/open"+ celdaDiagonalDerSup.numeroContiguo +".gif')";
                }
            }
            
            //Diagonales izquierdas
            if(celdaDiagonalIzqInf == null){
                
            } else {
                if (!celdaDiagonalIzqInf.bomba) {
                    celdaDiagonalIzqInf.style.backgroundImage =  "url('images/open"+ celdaDiagonalIzqInf.numeroContiguo +".gif')";
                }
            }
            if(celdaDiagonalIzqSup == null){
                
            } else {
                if (!celdaDiagonalIzqSup.bomba) {
                    celdaDiagonalIzqSup.style.backgroundImage =  "url('images/open"+ celdaDiagonalIzqSup.numeroContiguo +".gif')";
                }
            }

            
        }
    } //cierra la funcion abreCero();
}

/**
 * Abre mar es una funcion que utiliza aberCero() que pone el fondo 
 * de la celda en blanco 
 */


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
        endGame();
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