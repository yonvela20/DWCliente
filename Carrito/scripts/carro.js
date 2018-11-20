 /**
  * TODO: Que cuando haya elementos repetidos en el carrito no me quite todos los mismos items. 
  * Esto pasa porque el id del clonado es el mismo pero en el enunciado pone que eso más adelante 
  * se solucionará. 
  */
 
 $(function(){
    $("#citem").val(0); //Ponemos el contador de items a cero cada vez que se refresque la pagina
    $("#cprice").val(0 + " €"); //Ponemos el valor del precio total a cero cada ves que se refresque la pagina 
    
    $(".item").on("dblclick", dobleClickItems);

}); 

/**
 * FUNCION DOBLE CLIK EN ITEMS
 */
function dobleClickItems(){
    var $stockLbl = $(".stock", $(this)).text(); //Pillamos la etiqueta del stock 
    var $cantStock = parseInt($stockLbl.substring(6)); //Cogemos solo el numero y lo pasamos a int 

    //Solo si hay stock...
    if($cantStock > 0){
        //Variable necesarias para clonar
        const $divCarrito = $("#cart_items"); //Pillamos el contenedor del carrito
        let $idItem = $(this).attr("id"); //Pillamos la id del item seleccionado (devuelve un string)
        let $clonedItem = $(this).clone(); //Clonamos el item 

        var $stockLbl = $(".stock", $(this)).text(); //Pillamos la etiqueta del stock 
        var $cantStock = parseInt($stockLbl.substring(6)); //Cogemos solo el numero y lo pasamos a int 
        //console.log("Cantidad en stock precompra: " + $cantStock); //Pruebas: Te muestra la cantidad en stock

        let $precioLabel = $(".price", $(this)).text(); //Pillamos el precio del producto clickado
        let $precio = parseInt($precioLabel.substring(0, 4)); //Cogemos el numero y lo pasamos a int

        let $numItems = $("#citem").val(); //Pillamos el valor del input de la cantidad de elementos 
        parseInt($numItems); //Pasamos el valor a int para poder hacer operaciones

        //Pillamos el valor del input del precio total y lo pasamos a int tambien 
        let $precioTotal = parseInt($("#cprice").val().substring(0, 4));

        compra($(this), $cantStock, $numItems, $precioTotal, $precio);
        cloneItem($idItem, $clonedItem, $divCarrito);
    }
}

function compra($this, $cantStock, $numItems, $precioTotal, $precio){
    $cantStock--; //Contador para decrementar el valor del stock  
    $this.children('.stock').html("Stock " + $cantStock);

    //console.log("Cantidad en stock postcompra: " + $cantStock); //Pruebas: Te muestra la cantidad en stock

    $numItems++; //Incrementamos el numero de items comprados
    $("#citem").val($numItems); //Aumentamos el numero de compras

    $precioTotal += $precio; //Al precio del input le vamos sumando el precio de todas la compras 
    $("#cprice").val($precioTotal + " €");

    if($cantStock == 0){
        $(".stock", $this).addClass("agotado");
    }
}

function cloneItem($idItem, $clonedItem, $divCarrito){
    $clonedItem.attr("id", "c"+$idItem); //Le asignamos una nueva id al item clonado a partir de la original

    $clonedItem.addClass("icart"); //Le añadimos la clase icart al item clonado 

    $clonedItem.find(".stock").hide(); //Le ocultamos la clase stock al elemento     

    $clonedItem.css("cursor", "default"); //Le ponemos el cursor a default

    var $delete = $("<a href='' class='delete'></a>"); //Le añadimos el enlace para borrar
    
    $clonedItem.prepend($delete); //insertamos el enlace al item clonado 
    $divCarrito.prepend($clonedItem); //insertamos el item clonado al div del carrito

    $delete.on("click", borrado);

    //Id del item clonado 
    console.log("ID del producto clonado: " + $clonedItem.attr("id"))  //Pruebas
}
 
function borrado(){
    const $divCarrito = $("#cart_items"); //Pillamos el contenedor del carrito
    //Pillamos los elementos para restablecer el stock
    let idClonado = $(this).parent().attr("id");
    let idItem = idClonado.substring(1);
    
    //Pillamos elementos para restablecer el numero de compras
    let $numItems = $("#citem").val(); //Pillamos el valor del input de la cantidad de elementos 
    parseInt($numItems); //Pasamos el valor a int para poder hacer operaciones
    
    //Pillamos los elementos para restablecer el precio total
    let $precioLabel = $("#" + idItem + " > .price").html(); //Pillamos el precio del producto clickado
    let $precio = parseInt($precioLabel.substring(0, 4)); //Cogemos el numero y lo pasamos a int
    
    let $precioTotal = parseInt($("#cprice").val().substring(0, 4));

    //Actualizar el stock
    let lblStock = $("#" + idItem + " > .stock").html();    
    let stock = parseInt(lblStock.substring(6));

    cancelar($(this), $divCarrito, idClonado, idItem, $numItems, $precio,
            $precioTotal, lblStock, stock);
       
    return false;
}

function cancelar($this, $divCarrito, idClonado, idItem, 
            $numItems, $precio, $precioTotal, lblStock, stock){
                stock++;
                lblStock = stock;
                $("#" + idItem + " > .stock").html("Stock "+lblStock);
            
                //Actualizar el numero de items comprados 
                $numItems--; //Decrementamos el numero de items comprados
                $("#citem").val($numItems); //Decrementamos el numero de compras
            
                //Actualizar el precio 
                $precioTotal -= $precio; //Al precio del input le vamos sumando el precio de todas la compras 
                $("#cprice").val($precioTotal + " €");
            
                //Quitamos el item del carrito 
                $divCarrito.children("#"+idClonado).remove();

                //Si el stock ahora es mayor que 0 se le quita la clase agotado
                if(stock > 0){
                    $(".stock", $this).removeClass("agotado");
                }

}