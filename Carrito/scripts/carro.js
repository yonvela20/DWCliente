$(function(){
    //alert("Todo ready");
    /* $(".item").css("background-color", "#cecece");
    $("#cart_items").css("border", "4px solid black");
    $("img").css("border", "1px solid blue");
    $(".item > label").css("text-decoration", "underline");
    $("#cart_container button").css("color", "red");
    $(".item > label+label").css("color", "white");
    $("*:contains('€'), input").css("color", "green");
    $("div:empty").css("background-color", "yellow");
    $(".item:first").css("background-color", "red");
    $(".item:last").css("background-color", "red");
    $("img[src*='camiseta']").css("border", "1px solid green"); */

    $("#citem").val(0); //Ponemos el contador de items a cero cada vez que se refresque la pagina
    $("#cprice").val(0 + " €"); //Ponemos el valor del precio total a cero cada ves que se refresque la pagina 

    $(".item").on("dblclick", dobleClickItems);
}); 

    
/**
 * FUNCION DOBLE CLIK EN ITEMS
 */

 /**
  * TODO: - Preguntar sobre el @method hide() a ver como funciona 
  *       - Cambiar la @property cursor a default del elemento clonado 
  *       - Añadir el elemento clonado al carrito @param divCarrito
  */

  /**
   * FIXME: - Unable to get property 'hide' of undefined or null reference (74, 4)
   */

function dobleClickItems(){
    //Pillamos el contenedor del carrito
    let divCarrito = $("cart_items");

    //Pillamos la etiqueta del stock 
    let stockLbl = $(".stock", $(this)).text();
    let cantStock = parseInt(stockLbl.slice(6)); //Cogemos solo el numero y lo pasamos a int 

    //Pillamos el precio del producto clickado
    let precioLabel = $(".price", $(this)).text();
    let precio = parseInt(precioLabel.slice(0, 4)); //Cogemos el numero y lo pasamos a int

    console.log("Precio del label: " + precio);

    //Pilamos el valor del input de la cantidad de elementos 
    let numItems = $("#citem").val();
    parseInt(numItems); //Pasamos el valor a int para poder hacer operaciones

    //Pillamos el valor del input del precio total y lo pasamos a int tambien 
    let precioTotal = parseInt($("#cprice").val().slice(0, 4));
    
    console.log("Precio del input: " + precioTotal);

    /**
     * Todo lo de aqui abajo debe ir en el if ya que solo se debe de 
     * hacer en el caso de que haya items en stock. 
     */

    //Id del item seleccionado
    console.log("ID del producto: " +  $(this).attr("id"));

    idItem = $(this).attr("id"); //Pillamos la id del item seleccionado (devuelve un string)
    clonedItem = $(this).clone(); //Clonamos el item 
    clonedItem.attr("id", "c"+idItem); //Le asignamos una nueva id al item clonado a partir de la original

    clonedItem.addClass("icart"); //Le añadimos la clase icart al item clonado 

    /* FIXME:
    clonedItem.css(".stock").hide(); //Le ocultamos la clase stock al elemento
    $(this).css(".stock").hide();    //Igual esto es así??? no entiendo 
     */
    //Id del item clonado 
    console.log("ID del producto clonado: " + clonedItem.attr("id")) 

    if(cantStock > 0){
        cantStock--; //Contador para decrementar el valor del stock  
        $(".stock", $(this)).text("Stock " + cantStock); //Reducimos en uno el numero de stock

        numItems++; //Incrementamos el numero de items comprados
        $("#citem").val(numItems); //Aumentamos el numero de compras

        precioTotal += precio; //Al precio del input le vamos sumando el precio de todas la compras 
        $("#cprice").val(precioTotal + " €");

        if(cantStock == 0){ //Si no quedan items le añadimos la clase "agotado" al item 
            $(".stock", $(this)).addClass("agotado");
        }
    }

}


//Si se hace sin añadir eventos es asi 
//$(".item").dblclick(function(){}); //Dentro de las llaves va la funcion que se ejecuta 