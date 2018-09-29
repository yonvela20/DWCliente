window.onload = function(){
    
    document.getElementById("chkPrincipiante").addEventListener('click', juegoPrincipiante, false); 
    document.getElementById("chkIntermedio").addEventListener('click', juegoIntermedio, false); 
    document.getElementById("chkExperto").addEventListener('click', juegoExperto, false); 
    document.getElementById("botonReiniciar").addEventListener('click', reiniciar, false); 

    document.getElementById("botonReiniciar").style.display = "none";

    //TODO hacer que genere bombas y las distribuya por el tablero 

    //Tabla para principiantes 8x8 
    function juegoPrincipiante(){
        document.getElementById("divTablero").style.display = "block";

        document.getElementById("botonReiniciar").style.display = "block";
        document.getElementById("divChecks").style.display = "none";

        tablaPrincipiante();
        generarBombasPrincipiante();
    }

    //Tabla de nivel intermedio 16x16
    function juegoIntermedio(){                 
        document.getElementById("botonReiniciar").style.display = "block";
        document.getElementById("divChecks").style.display = "none";

        tablaIntermedio();
    }

    //Tabla de nivel experto 31x16
    function juegoExperto(){                
        document.getElementById("botonReiniciar").style.display = "block";
        document.getElementById("divChecks").style.display = "none";

        tablaExperto();
    }

    function tablaPrincipiante(){
        //Creamos una tabla de forma dinamica 8x8 
        const divTablero = document.getElementById("divTablero");

        let tabla = document.createElement("table");
        let tblBody = document.createElement("tbody");

        for(let i = 0; i < 8; i++){
            let filas = document.createElement("tr");
            for(let j = 0; j < 8; j++){
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
            

    function tablaIntermedio(){
        //Creamos una tabla de forma dinamica 16x16 
        const divTablero = document.getElementById("divTablero");

        let tabla = document.createElement("table");
        let tblBody = document.createElement("tbody");

        for(let i = 0; i < 16; i++){
            let filas = document.createElement("tr");
        
            for(let j = 0; j < 16; j++){
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

    function tablaExperto(){
        //Creamos una tabla de forma dinamica 16x32 
        const divTablero = document.getElementById("divTablero");

        let tabla = document.createElement("table");
        let tblBody = document.createElement("tbody");

        for(let i = 0; i < 16; i++){
            let filas = document.createElement("tr");
        
            for(let j = 0; j < 32; j++){
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

    //Funcion comodin para los clicks en celdas 
    function clicks(){
        console.log("Los clicks en celdas funcionan");
    }

    //Reinicio del juego
    function reiniciar(){
        window.location.reload();
    }
}