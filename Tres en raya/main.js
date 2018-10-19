window.onload = function () {
    /**
     * Clase celda con atributos ficha, oponente y sus cordenadas
     * Realmente no se utilizan ni los seters ni mas de la mitad de 
     * atributos per weno 
     */
    class Celda {
        constructor(ficha, opponent ,coorX, coorY) {
            this.ficha = ficha;
            this.opponent = opponent;
            this._coorX = coorX;
            this._coorY = coorY;
        }

        get coorX() {
            return this._coorX;
        }

        get coorY() {
            return this._coorY;
        }

        set coorX(x) {
            this._coorX = x;
        }

        set coorY(y) {
            this._coorY = y;
        }
    }
    /**
     * Clase tablero con atributos de fila y columna. Mas de lo mismo, los geters y los seters no se 
     * utilizan en ningun momento. Quizas mas adelante cuando quiera que mi tablero sea de mas casillas 
     * se utilizan en otros metodos. Se queda por si las moscas. 
     */
    class Tablero {
        constructor(fil, col) {
            this._fil = fil;
            this._col = col;
        }

        get fil() {
            return this._fil;
        }

        get col() {
            return this._col;
        }

        set fil(fil) {
            this._fil = fil;
        }

        set col(col) {
            this._col = col;
        }

        /**
         * Funcion para crear el tablero con dos for anidados y se le añade 
         * un objeto Celda en cada celda (xd) con parametros inicializados
         */
        crearTablero() {
            const divTablero = document.getElementById("contenedorTablero");

            let tabla = document.createElement("table");
            let tblBody = document.createElement("tbody");
            
            for (let i = 0; i < this.fil; i++) {
                let filas = document.createElement("tr");
                for (let j = 0; j < this.col; j++) {
                    let celda = document.createElement("td");

                    celda.id = i + "-" + j;
                    this.celda = new Celda(false, i, j);
                    celda.coorX = i;
                    celda.coorY = j;
                    celda.ficha = false;
                    celda.opponent = false;

                    filas.appendChild(celda);
                    //console.log(celda.coorX, celda.coorY, celda.ficha);

                    celda.addEventListener('click', click, false);
                    //celda.addEventListener('click', clickCounter, false);
                }
                tblBody.appendChild(filas);
            }
            tabla.appendChild(tblBody);
            divTablero.appendChild(tabla);

            tabla.setAttribute("border", 2);
        }
    }

    tablero = new Tablero(3, 3);
    tablero.crearTablero();
}

let contador = 1;

urlCross = "url('img/cross.png')";
urlCircle = "url('img/circle.png')";
/**
 * Funcion con los clicks, pone una cruz o un circulo dependiendo del turno (par o impar). 
 */
//TODO: Hacer que no te deje clickar en celdas donde ya hay algo hasta que no se llene todo el tablero 
//TODO: Que el tablero tenga memoria y que donde haya un circulo sea el oponente celda.opponent = true y donde no pues no xd
//TODO: Si hay 3 en raya que te diga que has ganado que pa algo tiene que estar el juego 
function click() {
    const celdaClick = document.getElementById(event.target.id);
    const celdaClickId = document.getElementById(this.id);

    //console.log(celdaClickId.opponent);

    //console.log(event.target.opponent);
    console.log(contador);
    if(contador%2 == 0){
        celdaClick.style.backgroundImage = urlCross;
        contador++;
    }else{
        celdaClick.style.backgroundImage = urlCircle;
        contador++;
    }

    /* if(!celdaClickId.opponent){
        celdaClickId.opponent = true;
    }else{
        celdaClickId.opponent = false;
    } */
}
