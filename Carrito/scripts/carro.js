 $(function(){
    $("#citem").val(0); //Ponemos el contador de items a cero cada vez que se refresque la pagina
    $("#cprice").val(0 + " €"); //Ponemos el valor del precio total a cero cada ves que se refresque la pagina 
    $(".stock").find("input").val(10); //Ponemos el valor del stock a 10 para que todo sea igual al refrescar   

    //var $stockLbl = $(this).find("input"); //Pillamos el input donde esta el stock
    //var $stock = parseInt($stockLbl.val(), 10); //Lo pasamos a int ya que es un objeto así de primeras
    var $stockLbl = $(this).find('input'); 
    var $stock = parseInt($stockLbl.val(), 10);

    $(".item").each(function() {        
        if($stock > 0) {
           $(this).on("dblclick", dobleClickItems);
        }
    });
    
    $(".item").on("dblclick", dobleClickItems);
}); 

    
/**
 * FUNCION DOBLE CLIK EN ITEMS
 */

/**
 * FIXME: Que solo se ejecute si hay stock 
 */
function dobleClickItems(){
    //Variable necesarias para clonar
    const $divCarrito = $("#cart_items"); //Pillamos el contenedor del carrito
    let $idItem = $(this).attr("id"); //Pillamos la id del item seleccionado (devuelve un string)
    let $clonedItem = $(this).clone(); //Clonamos el item 

    var $stockLbl = $(this).find("input"); //Pillamos el input donde esta el stock
    var $stock = parseInt($stockLbl.val(), 10); //Lo pasamos a int ya que es un objeto así de primeras
    console.log("Cantidad en stock precompra: " + $stock); //Pruebas: Te muestra la cantidad en stock

    let $precioLabel = $(".price", $(this)).text(); //Pillamos el precio del producto clickado
    let $precio = parseInt($precioLabel.slice(0, 4)); //Cogemos el numero y lo pasamos a int

    let $numItems = $("#citem").val(); //Pillamos el valor del input de la cantidad de elementos 
    parseInt($numItems); //Pasamos el valor a int para poder hacer operaciones

    //Pillamos el valor del input del precio total y lo pasamos a int tambien 
    let $precioTotal = parseInt($("#cprice").val().slice(0, 4));

    compra($stockLbl, $stock, $numItems, $precioTotal, $precio);
    cloneItem($idItem, $clonedItem, $divCarrito);
    
    if($stock == 0 || $stock < 0){
        $(".stock", $(this)).addClass("agotado");
    }
}

function compra($stockLbl, $stock, $numItems, $precioTotal, $precio){
    $stock--; //Contador para decrementar el valor del stock  
    $stockLbl.val($stock); //Reducimos en uno el numero de stock

    console.log("Cantidad en stock postcompra: " + $stock); //Pruebas: Te muestra la cantidad en stock

    $numItems++; //Incrementamos el numero de items comprados
    $("#citem").val($numItems); //Aumentamos el numero de compras

    $precioTotal += $precio; //Al precio del input le vamos sumando el precio de todas la compras 
    $("#cprice").val($precioTotal + " €");
}

function cloneItem($idItem, $clonedItem, $divCarrito){
    $clonedItem.attr("id", "c"+$idItem); //Le asignamos una nueva id al item clonado a partir de la original

    $clonedItem.addClass("icart"); //Le añadimos la clase icart al item clonado 

    $clonedItem.find(".stock").hide(); //Le ocultamos la clase stock al elemento     

    $clonedItem.css("cursor", "default"); //Le ponemos el cursor a default

    var $delete = $("<a href='' class='delete'></a>"); //Le añadimos el enlace para borrar
    
    $clonedItem.prepend($delete); //insertamos el enlace al item clonado 
    $divCarrito.prepend($clonedItem); //insertamos el item clonado al div del carrito

    //Id del item clonado 
    console.log("ID del producto clonado: " + $clonedItem.attr("id"))  //Pruebas
}
 