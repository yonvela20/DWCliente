window.onload=function(){

    //Buscamos los enlaces para que al clickar se realice la funcio deseada
    var enlace = document.getElementsByTagName('a');
    for(i in enlace){
        enlace[i].onclick = presionBoton;
    }

    function presionBoton(){
        //Cogemos el id del boton
        idBoton = this.id;
        
        //separamos el id para saber el numero del boton que se pulsa
        var separador = idBoton.split('_');
        var numero = separador[1];

        //Cogemos nuestro parrafo en base al id puesto en el documento HTML
        var idParrafo = document.getElementById("parrafo");
        
        //Cambiamos lo que hay escrito en el parrafo por el mensaje deseado mas 
        //el numero que hemos aislado antes
        idParrafo.innerHTML = "se ha presionado el enlace numero "+numero;
    }    
}