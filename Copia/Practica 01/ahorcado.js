window.onload = function(){

    document.getElementById("botonJugar").addEventListener('click', jugarAhorcado, false);
    document.getElementById("botonComprobar").addEventListener('click', comprobarLetra, false);

    //Creamos una variable donde meteremos la palabra del array
    var palabra = "";

    //Array donde guardaremos todas las letras introducidas en el input
    var letraUsada = [""];

    //Lista de palabras guardadas en un array 
    var listaPalabras = ["ahorcado","jazz","recta","curva","matematicas","pincho","hola"];

    //Hacemos que el input no se vea ya que teoricamente aun no hemos empezado a jugar
    document.getElementById("inputLetras").style.display = 'none';

    function jugarAhorcado(){
        
        //Generamos un numero aleatorio que será el index de nuestro array de palabras para asi tener una
        var palabraAleatoria = Math.floor(Math.random()*listaPalabras.length);
        palabra = listaPalabras[palabraAleatoria];

        //Creamos un bucle para que nos genere las rayitas que tiene nuestra palabra
        for(var i = 0; i < palabra.length; i++){
            var pRayas = document.createElement("p");
            var rayas = document.createTextNode("_ ");

            pRayas.appendChild(rayas);

            var divInput = document.getElementById("inputLetras");
            
            document.body.insertBefore(pRayas, divInput);
        }

        //Ocultamos el boton de jugar y mostramos el input previamente ocultado
        document.getElementById("botonJugar").style.display = "none";
        document.getElementById("inputLetras").style.display = "block";

        //En pruebas
        console.log(palabra);
    }

    function comprobarLetra(){

        //Recogemos el valor introducido en el input en una variable
        var letraIntroducida = document.getElementById("introducirLetras").value;
        //Cogemos la palabra que se cogió del array y la dividimos en letras
        var stringPalabra = palabra.split("");
        
        //Bucle que recorre el array donde almacenamos las letras introducidas 
        //en el caso de que la letra este en el array letraUsada[] nos muestra un alert advirtiendonos.
        //En caso contrario se almacena la letra introducida
        
        //Banderita para el bucle de mas adelante
        var encontrada = false;

        //Bucle que recorre el array donde almacenamos las letras introducidas (letraUsada[]). 
        //En el caso de que la letra introducida este tambien en letraUsada[] pondremos la bandera en true
        //en caso contrario en false
        for(var i = 0; i < letraUsada.length; i++){
            if(letraIntroducida.toLowerCase() == letraUsada[i].toLowerCase()){
                encontrada = true;                
            } else{
               encontrada = false;            
            }
        }

        //Si la bandera es true nos muestra un alert advirtiendonos de que la letra ya se ha introducido previamente
        //en caso contrario se almacenara en el array letraUsada[] para proximas comprobaciones
        if(encontrada){
            alert("Ya has introducido esa letra antes!")
        }else{
            letraUsada.push(letraIntroducida);
        }
        
        //banderita que nos servira para el bucle de mas adelante
        var existe = false;
        //Este bucle nos dice si la letra introducida existe en el array generado a 
        //partir de la palabra seleccionada por el programa
        for(var i = 0; i < stringPalabra.length; i++){
            if(letraIntroducida.toLowerCase() == stringPalabra[i].toLowerCase()){
                existe = true;
            } else{
                existe = false;
            }
        }

        if(existe){
            console.log("existe");
            console.log(letraUsada);
        }else{
            console.log("no existe");
            console.log(letraUsada);
        }
    }
}