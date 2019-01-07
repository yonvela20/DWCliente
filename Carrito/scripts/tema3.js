/**
 * Lo comentado en masa es el apagado y encendido del evento dobleclik pero una vez 
 * lo apagas con off() no se enciende con el on() así que por el momento habrá que 
 * dejarlo con la bandera y ya se verá luego. 
 */

 //TODO: Está inacabado
function actualizaStockProducto($item, incremento)
{
    var actualizado = false;
	var stock = parseInt($item.children(".stock").html().replace("Stock ", ""));
	
	if (stock+incremento >= 0)
	{
		stock += incremento;
		$item.children(".stock").html("Stock " + stock);
		if (stock == 0){
            $item.find(".stock").addClass("agotado");
            
            /* $item.off("dblclick");
            console.log("Apagamos el dblclick"); */
        }
		else{
            $item.find(".stock").removeClass("agotado");
            /* $item.on("dblclick");
            console.log("Encendemos el dblclick"); */
        }			
		actualizado = true;
	}
	
	return actualizado;
}

function actualizaNumeroProductosPedidos(incremento)
{
	var numProductosPedido = parseInt($("#citem").val());
	numProductosPedido += incremento;
	$("#citem").val(numProductosPedido);
}

function actualizaPrecioTotal($item, incremento)
{
	var precioPedido = parseInt($("#cprice").val());
	precioPedido += parseInt(incremento);
	$("#cprice").val(precioPedido + " €");
}

function eliminaProductoDelCarrito($item)
{
	var id = $item.attr("id");
	id = id.substring(1);
	actualizaStockProducto($("#"+id), 1);
	
	actualizaNumeroProductosPedidos(-1);
	
	actualizaPrecioTotal($item, -parseInt($item.children(".price").html()));

    $item.remove();   

    $("#"+id).on("dblclick");
}

function anyadeProductoAlCarrito($item)
{
	var $delete = $('<a href="" class="delete"></a>');

	$delete.on("click", function (evento)
	{
        eliminaProductoDelCarrito($(this).parent());
		return false;
	});
	
	var id = "c"+$item.attr("id");
	$copia = $item.clone().attr("id", id).addClass('icart').prepend($delete);
	$copia.children(":not(a)").andSelf().css("cursor", "default").find(".stock").hide();
	
    $("#cart_items").prepend($copia);
}

$(function() 
{
    $("#citem").val(0); //Ponemos el contador de items a cero cada vez que se refresque la pagina
    $("#cprice").val(0 + " €"); //Ponemos el valor del precio total a cero cada ves que se refresque la pagina 

	$(".item").on("dblclick", function()
	{
        /* actualizaStockProducto($(this), -1);

        actualizaNumeroProductosPedidos(1);

        actualizaPrecioTotal($(this), parseInt($(this).children(".price").html()));

        anyadeProductoAlCarrito($(this)); */

        if (actualizaStockProducto($(this), -1) == true)
		{
			actualizaNumeroProductosPedidos(1);
			
			actualizaPrecioTotal($(this), parseInt($(this).children(".price").html()));
			
			anyadeProductoAlCarrito($(this));
		} else{
            $(".item").off("dblclick");
        }
    });
    
    $("#btn_clear").on("click", function(){
        $(".delete").trigger("click");
    });
});