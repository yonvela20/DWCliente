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

    //$(".item").on("dblclick", dobleClick);

    $(".item").dblclick(function(){

        let stockLbl = $(".stock", $(this)).text();
        let cantStock = parseInt(stockLbl.slice(6)); 
        //console.log(cantStock);

        if(cantStock > 0){
            console.log("Entro en el if");
            cantStock--;
            $(".stock", $(this)).text("Stock " + cantStock);
            console.log(cantStock);
        }
    });


});

/* function dobleClick(){

    if($(".stock:contains('10')")){

    }

}
 */
