window.onload = function() {

    var info = document.getElementById("informacion");
    
    // Numero de enlaces de la pagina
    var enlaces = document.getElementsByTagName("a");
    info.innerHTML = "Numero de enlaces: " + enlaces.length;


    /*
    var info = document.getElementById("informacion");
 
    // Numero de enlaces de la pagina
    var enlaces = document.getElementsByTagName("a");
    info.innerHTML = "Numero de enlaces = "+enlaces.length;
    */

    // Direccion del penultimo enlace
    var penultimoEnlace  = enlaces[enlaces.length - 2].href;
    info.innerHTML = info.innerHTML + "<br>" + "El penultimo enlace es: " + penultimoEnlace;

    // Numero de enlaces que apuntan a http://prueba
    var contador = 0;

    for(i = 0; enlaces.length < i; i++){
        if(enlaces[i].href == "http://prueba"){
            contador ++;
        }
    }
    info.innerHTML = info.innerHTML + "<br>" + "El numero de enlaces iguales a 'http://prueba son: '" + contador;

    // Numero de enlaces del tercer p�rrafo
    var numeroParrafos = document.getElementsByTagName("p");
    var enlacesParrafo = numeroParrafos[2].getElementsByTagName("a");

    info.innerHTML = info.innerHTML + "<br>" + "El numero de enlaces en el tercer parrafo son: " + enlacesParrafo.length;
}