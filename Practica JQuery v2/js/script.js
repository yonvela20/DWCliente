$(document).ready(function(){    
    var $formularioInput = $("#formularioInput");
    $formularioInput.hide();

    var $formularioSelect = $("#formularioSelect");
    $formularioSelect.hide();

    var $formularioRButton = $("#formularioRButton");
    $formularioRButton.hide();
    
    /**
     * Muestra los formularios para añadir los widgets
     */
    $("#selectInput").click(function(){
        $formularioInput.show()
        $("#selectInput").hide();
    });
    $("#selectSelect").click(function(){
        $formularioSelect.show();
        $("selectSelect").hide();
    });
    $("#selectRButton").click(function(){
        $formularioRButton.show();
        $("#selectRButton").hide();
    });

    /**
     * Funciones que crean el widget como tal 
     */
    $("#addInput").click(function(){
        var id = $("#inputId").val();
        var size = $("#inputSize").val();
        var title = $("#inputTitle").val();
       
        var $divInput = $("<div id='div"+id+"'></div>");
        $("#visualizador").append($divInput);

        var nuevoInput = $("<input id='"+id+"' size="+size+" title='"+title+"'>");
        $($divInput).append(nuevoInput).append("<br><br>");

        $formularioInput.hide();
        $formularioInput.find("input").val("");
        $("#selectInput").show();
    });

    $("#confirmaCantidadSelect").click(function(){
        var cantidad = $("#selectCantidad").val();
        var $divOpciones = $("<div id='cantOpciones'></div>");
        $divOpciones.insertBefore("#confirmaCantidadSelect");

        for(let i = 0; i < cantidad; i++){
            var $label = $("<input id='label"+(i+1)+"'>");

            $divOpciones.append("<p>Texto opcion " + (i+1)+ "</p>");
            $divOpciones.append($label);
        }

        $("#confirmaCantidadSelect").hide();

        $("#addSelect").click(function(){
            var id = $("#selectId").val();
            var $selectNuevo = $("<select id = '" + id + "'> </select>");

            var $divSelect = $("<div id='div"+id+"'></div>");
            $("#visualizador").append($divSelect)

            for(let j = 0; j < cantidad; j++){
                $selectNuevo.append("<option id='opcion"+ (j+1) +"'>"+ $("#label"+(j+1)).val() +"</option>")
            }

            $($divSelect).append($selectNuevo).append("<br><br>");
            $("#selectSelect").show();
            
            $formularioSelect.find("input").val("");
            $formularioSelect.hide();
            $divOpciones.remove();
        });
    });


    $("#confirmaCantidadRButton").click(function(){
        var cantidad = $("#RButtonCantidad").val();
        var $divOpciones = $("<div id='cantOpciones'></div>");
        $divOpciones.insertBefore("#confirmaCantidadRButton")
        
        for(let i = 0; i < cantidad; i++){
            var $label = $("<input id='label"+(i+1)+"'>");

            $divOpciones.append("<p>Texto opcion " + (i+1)+ "</p>");
            $divOpciones.append($label);
            //$($label).insertBefore("#confirmaCantidadRButton");
        }

        $("#confirmaCantidadRButton").hide();

        $("#addRButton").click(function(){
            var $form = $("<form action=''>"); 
            var id = $("#idRButton").val();
            var nombre = $("#RButtonNombre").val();

            var $divRButton = $("<div id=div'"+id+"'></div>");
            $("#visualizador").append($divRButton);

            for(let j = 0; j < cantidad; j++){
                var $rbNuevo = $("<input id='" + id + "_"+ (j +1) +"' type='radio' name='"+nombre+"'>" + $("#label"+(j+1)).val() +"<br>");                
                
                $form.append($rbNuevo);
            }

            $($divRButton).append($form).append("<br><br>");
            $("#selectRButton").show();

            $formularioRButton.find("input").val("");
            $formularioRButton.hide();
            $divOpciones.remove();
        });
    });

    $("#generaCodigo").click(function(){

        var codigo = $("#visualizador");

        var codigoStr = codigo.prop('outerHTML');

        $("#codigo").text(codigoStr);
    });

    $("#CancelarInput").click(function(){
        $formularioInput.hide();
        $("#selectInput").show();
        $formularioInput.find("input").val("");
    });

    $("#CancelarSelect").click(function(){
        $formularioSelect.hide();
        $("#selectSelect").show()
        $formularioSelect.find("input").val("");
    });

    $("#CancelarRButton").click(function(){
        $formularioRButton.hide();
        $("#selectRButton").show()
        $formularioRButton.find("input").val("");
    });


    $("#borradoTotal").click(function(){
        $("#visualizador").empty();
        $("#codigo").empty();
    });
});
