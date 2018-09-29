window.onload = function(){

    document.getElementById("botonJugar").addEventListener('click', jugarAhorcado, false);
    document.getElementById("botonComprobar").addEventListener('click', comprobarLetra, false);

    //Creamos una variable donde meteremos la palabra del array
    let palabra = "";

    //Array donde guardaremos todas las letras introducidas en el input
    let letraUsada = [""];

    //Creamos un array con la palabra ahorcado
    const ahorcado =  ["A", "H", "O", "R", "C", "A", "D", "O"];

    //El numero de errores maximo es hasta hacer ahorcado
    let numErrores = 0;

    //Inicializamos el numero de aciertos a 0   
    let numAciertos = 0;

    //Lista de palabras guardadas en un array 
    const listaPalabras = ["ahorcado","jazz","recta","curva","matematicas","pincho","hola"];

    //Hacemos que el input no se vea ya que teoricamente aun no hemos empezado a jugar
    document.getElementById("inputLetras").style.display = "none";
    document.getElementById("sitioLetras").style.display = "none";
    document.getElementById("contenedorLetras").style.display = "none";
    document.getElementById("botonComprobar").style.display = "none";


    function jugarAhorcado(){
        
        //Generamos un numero aleatorio que será el index de nuestro array de palabras para asi tener una
        let palabraAleatoria = Math.floor(Math.random()*listaPalabras.length);
        palabra = listaPalabras[palabraAleatoria];

        //Llamamos a la funcion que nos creara la rayas de la palabra que se ha seleccionado 
        crearRayas();

        //Ocultamos el boton de jugar y las regalas y mostramos todo lo demas para continuar jugando
        document.getElementById("botonJugar").style.display = "none";
        document.getElementById("reglasJuego").style.display = "none";
        document.getElementById("inputLetras").style.display = "block";
        document.getElementById("sitioLetras").style.display = "block";
        document.getElementById("contenedorLetras").style.display = "block";
        document.getElementById("botonComprobar").style.display = "block";

        //Mostramos el numero de letras que tiene la palabra por si no quedara claro con las rayas 
        const stringPalabra = palabra.split("");
        document.getElementById("numLetras").innerHTML = stringPalabra.length;
    }

    function comprobarLetra(){

        //Recogemos el valor introducido en el input en una variable
        let letraIntroducida = document.getElementById("introducirLetras").value;
        //Cogemos la palabra que se cogió del array y la dividimos en letras
        const stringPalabra = palabra.split("");
            
        //Banderita para el bucle de mas adelante
        let encontrada = false;
        
        //Bucle que recorre el array donde almacenamos las letras introducidas (letraUsada[]). 
        //En el caso de que la letra introducida este tambien en letraUsada[] pondremos la bandera en true
        for(let i = 0; i < letraUsada.length; i++){
            if(letraIntroducida.toLowerCase() == letraUsada[i].toLowerCase()){
                encontrada = true;                
            } 
        }

        //Si la bandera es true nos muestra un alert advirtiendonos de que la letra ya se ha introducido previamente
        //en caso contrario se almacenara en el array letraUsada[] para proximas comprobaciones
        if(encontrada){
            alert("Ya has introducido esa letra antes!")
        }else{
            letraUsada.push(letraIntroducida);
            encontrada = false;

            //banderita para el bucle de mas adelante
            let existe = false;

            //Ademas al no estar en el array almacenada implica que no se ha comprobado por lo tanto 
            //miramos si coincide con alguna letra del array stringPalabra[] y se hace una logica con bandera 
            //similar a la anterior
            for(let i = 0; i < stringPalabra.length; i++){
                if(letraIntroducida.toLowerCase() == stringPalabra[i].toLowerCase()){

                    existe = true;
                    numAciertos++;

                    //Creamos un bucle que nos posicionará la letra adivinada en su posicion correspondiente
                    //en las rayitas generadas
                    for(let z = 0; z < stringPalabra.length; z++){
                        //En el caso que el indice de la palabra escogida por el programa coincida con la letra introducida...
                        if(stringPalabra[z] == letraIntroducida){
                            //Cogemos todas las rayitas 
                            let arrayRayas = document.getElementById("sitioLetras").value; 
                            //Hacemos un split de todas esas rayitas y asi tener un array de rayitas 
                            let rayasSeparadas = arrayRayas.split("");
                            //asignamos el valor del indice de la letra al indice del array de rayitas 
                            rayasSeparadas[z] = stringPalabra[z];
                            //Unimos otra vez todo. Rayitas y la letra en su lugar corresponiende 
                            let posicionRayas = rayasSeparadas.join('');
                            //lo mostramos en el input que es el contenedor de esto 
                            document.getElementById("sitioLetras").value = posicionRayas;
                        }
                    }
                    
                    //Si acertamos tantas veces como letras tenga la palabra significa que hemos ganado 
                    if(numAciertos == stringPalabra.length){
                        alert("Enhorabuena has acertado la palabra!!");
                        window.location.reload();
                    }
                } 
            }
            //En el caso de existir
            if(!existe){
                //Se incrementa el numero de errores
                numErrores++;
                
                //Creamos un span donde se escribirá la palabra ahorcado
                const pAhorcado = document.createElement("span");
                const idAhorcado = document.createAttribute("id");

                //Le ponemos un id para poder editarlo facilmente en el main.css
                idAhorcado.value = "idAhorcado";
                pAhorcado.setAttributeNode(idAhorcado);

                let palabraAhorcado = document.createTextNode(ahorcado[numErrores - 1] + " ");

                pAhorcado.appendChild(palabraAhorcado);

                let divInput = document.getElementById("inputLetras");
                document.body.insertBefore(pAhorcado, divInput);

            }
        }

        //Si los errores suman 8 (que son las letras del ahorcado) pues has perdido
        if(numErrores == 8){
            alert("Lo siento has fallado, la palabra era " + palabra);
            window.location.reload();
        }
    }

    function crearRayas(){
        //Creamos un bucle para que nos genere las rayitas que tiene nuestra palabra
        let lineas="";
        
        //Creamos tantas rayitas como letras tenga nuestra palabra y lo guardamos en una variable
        for(let i = 0; i < palabra.length; i++){
            lineas=lineas+"-";
        }

        //Le metemos las rayitas a nuestro contenedor
        document.getElementById("sitioLetras").value = lineas;
    }
}