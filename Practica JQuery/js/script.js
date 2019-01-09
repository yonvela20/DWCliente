$(document).ready(function(){
    //Aqui el script
    /**
     * Variables para llevar la cuenta de cuantos clicks se hacen en cada boton 
     * de esta forma cada widget generado tiene un id unico 
     */

    let clickInput = 1;
    let clickSelect = 1;
    let clickRb = 1; 

    //Click en el añadido de inputs
    $("#addInput").click(function(){ 
        //Pillamos el input de muestra y lo clonamos 
        var $inputClickado = $(this).parent().find("input"); 
        var $inputClonado = $inputClickado.clone();

        //Al input clonado le cambiamos la id para que sea más facil de manejar 
        $inputClonado.attr("id", $inputClickado.attr("id")+clickInput);

        //Utilizamos prompts para especificar el tamaño y el titulo que queremos en nuestro input
        var tamano = Number(prompt("Introduce el tamaño que quieres que tenga el input", "Numero entero"));

        //Comprobamos que el numero a introducir es efectivamente un entero 
        if(Number.isInteger(tamano)){
            $inputClonado.attr("size", tamano);
            var titulo = prompt("Introduce el titulo del input");
            $inputClonado.attr("title", titulo);
    
            $("#visualizador").append($inputClonado).append("<br><br>");
            clickInput++;
        } else{
            alert("Valor del tamaño incorrecto");
        }
    });

    //Click en el añadido de selects
    $("#addSelect").click(function(){
        //En este caso vamos a crear el select de cero ya que el de muestra no nos sirve de demasiado 
        var $selectNuevo = $("<select id='select"+clickSelect+"'></select>");
        var opciones = Number(prompt("Cuantas opciones quieres? Asegurate de introducir un entero", "1"));

        if(Number.isInteger(opciones)){

            for(let i = 0; i < opciones; i++){
                var textoOpcion = prompt("Texto de la opcion "+(i+1));
                $selectNuevo.append("<option id='opcion"+(i+1)+"'>"+textoOpcion+"</option><br><br>");
    
            }
    
            $("#visualizador").append($selectNuevo);
            clickSelect++;
        } else{
            alert("Numero de opciones incorrecto");
        }

    });


});