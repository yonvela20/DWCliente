$(function(){

    $("#citem").val(0); //Ponemos el contador de items a cero cada vez que se refresque la pagina
    $("#cprice").val(0 + " €"); //Ponemos el valor del precio total a cero cada ves que se refresque la pagina 

    var $stockLblInicial = $(".stock", $(this)).text(); //Pillamos la etiqueta del stock 
    var $cantStockInicial = parseInt($stockLblInicial.slice(6)); //Cogemos solo el numero y lo pasamos a int 
    //Hago un slice ya que el label es tal que "Stock 10" y solo quiero el numero 

    //Si hay items en stock 
    if($cantStockInicial > 0){
        $(".item").on("dblclick", dobleClickItems);
    }else{
        return false;
    }
}); 

    
/**
 * FUNCION DOBLE CLIK EN ITEMS
 */

/**
 * FIXME: El label del stock no se actualiza, siempre pilla 10 slñfjsf
 */

 /**
  * Explicacion del problema: Defino @var $stockLblInicial y @var $cantStockInicial para
  * comprobar si hay stock y si hay hacer el doble click, si no lo hay pues nada. 
  * 
  * Dentro de la funcion del dobleClick se define @var $stockLbl y @var $cantStock porque mas adelante 
  * el valor de esas variables se pisará. En la funcion en si coge esos valores para que en @function compra() 
  * se reste en uno el stock y se le asigne al texto del item clickado. El texto no cambia entonces 
  * pilla siempre como que hay 10 items. El problema no está en el contador ya que resta como toca. El problema es 
  * directamente no cambia el texto. He probado con @method text() y con @method html() y no funciona hM
  */

function dobleClickItems(){
    //Variable necesarias para clonar
    const $divCarrito = $("#cart_items"); //Pillamos el contenedor del carrito
    let $idItem = $(this).attr("id"); //Pillamos la id del item seleccionado (devuelve un string)
    let $clonedItem = $(this).clone(); //Clonamos el item 

    var $stockLbl = $(".stock", $(this)).text(); //Pillamos la etiqueta del stock 
    var $cantStock = parseInt($stockLbl.slice(6)); //Cogemos solo el numero y lo pasamos a int 

    let $precioLabel = $(".price", $(this)).text(); //Pillamos el precio del producto clickado
    let $precio = parseInt($precioLabel.slice(0, 4)); //Cogemos el numero y lo pasamos a int

    let $numItems = $("#citem").val(); //Pillamos el valor del input de la cantidad de elementos 
    parseInt($numItems); //Pasamos el valor a int para poder hacer operaciones

    //Pillamos el valor del input del precio total y lo pasamos a int tambien 
    let $precioTotal = parseInt($("#cprice").val().slice(0, 4));

    compra($cantStock, $numItems, $precioTotal, $precio);
    cloneItem($idItem, $clonedItem, $divCarrito);
    
    if($cantStock == 0){ //Si no quedan items le añadimos la clase "agotado" al item 
        $(".stock", $(this)).addClass("agotado");
    }
}

function compra($cantStock, $numItems, $precioTotal, $precio){
    $cantStock--; //Contador para decrementar el valor del stock  
    $(".stock", $(this)).html("Stock " + $cantStock); //Reducimos en uno el numero de stock

    console.log("Cantidad en stock " + $cantStock);

    $numItems++; //Incrementamos el numero de items comprados
    $("#citem").val($numItems); //Aumentamos el numero de compras

    console.log($numItems);

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
 