window.onload=function(){

    document.getElementById("seleccionPizza").onchange = seleccionPizza;
    document.getElementById("botonCalculo").onclick = calculoOrdenador;
        
    function seleccionPizza(){
        var pizzaSeleccionada = this.options[document.getElementById("seleccionPizza").selectedIndex].text;
        
        var indicePizza = document.getElementById("seleccionPizza").selectedIndex;

        var p_seleccion = document.getElementById("p_seleccion");
        var p_precio = document.getElementById("p_precio");

        p_seleccion.innerHTML = "Has escogido " + pizzaSeleccionada;

        if(indicePizza == 0){
            p_precio.innerHTML = "5€";
        } else if(indicePizza == 1){
            p_precio.innerHTML = "5'50€";
        } else if(indicePizza == 2){
            p_precio.innerHTML = "7€";
        } else if(indicePizza == 3) {
            p_precio.innerHTML = "6€";
        }
    }

    function calculoOrdenador(){       
        console.log("sdflkasjd");
        //Cojo la seleccion en los desplegables 
        var procesadorSeleccionado = document.getElementById("seleccionProcesador").options[document.getElementById("seleccionProcesador").selectedIndex].text;
        var monitorSeleccionado = document.getElementById("seleccionMonitor").options[document.getElementById("seleccionMonitor").selectedIndex].text;
        var discoSeleccionado = document.getElementById("seleccionDisco").options[document.getElementById("seleccionDisco").selectedIndex].text;

        //Cojo los text donde mostraré los detalles del pedido 
        var muestraProcesador = document.getElementById("p_procesador");
        var muestraMonitor = document.getElementById("p_monitor");
        var muestraDisco = document.getElementById("p_disco");
        
        //Esto es el precio pero por el momento no hay nada de precios 
        //var precioPresupuesto = document.getElementById("p_precioOrdenador");

        //Cambio los text por la opcion seleccionada en los desplegables
        muestraProcesador.innerHTML = procesadorSeleccionado;
        muestraMonitor.innerHTML = monitorSeleccionado;
        muestraDisco.innerHTML = discoSeleccionado;
    }    
}