var ordenCarrito = 0;
var posCarritoInicial;
var anchoCarritoInicial;
var anchoProductoEnCarrito = 120;

function actualizaStockProducto($item, incremento)
{
	var stock = parseInt($item.children(".stock").html().replace("Stock ", ""));
	
	if (stock+incremento >= 0)
	{

		$item.children(".stock").html("Stock " + stock).hide();
		stock += incremento;
		$item.children(".stock").html("Stock " + stock).hide();
		$item.children(".stock").html("Stock " + stock).fadeIn();
		if (stock == 0)
		{
			$item.find(".stock").addClass("agotado");
			$item.unbind("dblclick");
		}
		else
		{
			if (stock == 1 && incremento == 1)
			{
				$item.find(".stock").removeClass("agotado");
				establece_evento_dblclick_items($item);
			}
		}
	}
}

function actualizaNumeroProductosPedidos(incremento)
{
	var numProductosPedido = parseInt($("#citem").val());
	$("#citem").val(numProductosPedido).hide();
	numProductosPedido += incremento;

	$("#citem").hide();
	$("#citem").val(numProductosPedido);
	$("#citem").fadeIn(600);
}

function actualizaPrecioTotal(numItems, incremento)
{
	var precioPedido = parseInt($("#cprice").val());
	$("#cprice").val(precioPedido + " €").hide();

	var precioFinal = numItems*incremento;
	console.log(numItems);
	precioPedido += parseInt(precioFinal);
	
	$("#cprice").hide();
	$("#cprice").val(precioPedido + " €");
	$("#cprice").fadeIn(600);
}

function incrementaAnchoCarrito(incremento)
{
	$("#cart_items").width($("#cart_items").width() + incremento);
}

function anyadeProductoAlCarrito($item)
{
	var $delete = $('<a href="" class="delete"></a>');
	var $cantidad = $('<input class="cantidad" type="text" value="1" readonly="true"/>'); 
	var $minus = $('<a href="" class="minus"></a>');
	var $add = $('<a href="" class="add"></a>');

	$delete.button({
		icons: { primary: "ui-icon-circle-close" },
		text: false
	});
	$add.button({
		icons: {primary: "ui-icon-circle-plus" },
		text: false, 
		//return: false
	});
	$minus.button({
		icons: {primary: "ui-icon-circle-minus" },
		text: false
	});

	if ($("#cart_items").children().is("#c"+$item.attr("id"))){
		var cantidad = $(".cantidad").val();
		cantidad++;
		$(".cantidad").val(cantidad);
		
	}else{
		console.log("el articulo no esta añadido");
		var id = "c"+$item.attr("id");

		$copia = $item.clone().attr("id", id).addClass('icart').prepend($minus, $add, $delete, $cantidad);
	
		$copia.children(":not(a)").andSelf().css("cursor", "default").find(".stock").hide();
		
		$copia.hide();
		$("#cart_items").prepend($copia);
		
		//animacion al añadir el articulo
		$copia.animate({width:"toggle"});
	}
}

function desplazaCarritoIzquierda(desplazamiento)
{
	var pos = $("#cart_items").offset();
	
	if (pos.left + desplazamiento <= posCarritoInicial.left)
		pos.left += desplazamiento;
	else
		pos.left = posCarritoInicial.left;
		
	$("#cart_items").offset(pos);
}

function desplazaCarritoDerecha(desplazamiento)
{
	var pos = $("#cart_items").offset();
	var ancho = $("#cart_items").width();
	var der = pos.left + ancho;
	
	if (der - desplazamiento >= posCarritoInicial.left + anchoCarritoInicial)
		pos.left -= desplazamiento;
	else
		pos.left = posCarritoInicial.left + anchoCarritoInicial - ancho;

	$("#cart_items").offset(pos);
}

function establece_evento_dblclick_items($items)
{
	$items.dblclick(function()
	{
		actualizaStockProducto($(this), -1);

		actualizaNumeroProductosPedidos(1);
			
		actualizaPrecioTotal($(this), parseInt($(this).children(".price").html()));
		
		anyadeProductoAlCarrito($(this));

		var numArticulosCarrito = $("#cart_items").children().length;

		//Condicion para mostrar las flechas de navegacion 
		if(numArticulosCarrito > 4){
			incrementaAnchoCarrito(anchoProductoEnCarrito);
			$("#btn_prev").show();
			$("#btn_next").show();
		}

		if(numArticulosCarrito > 0){
			$("#btn_clear").show();
		}
	});
}

function eliminaProductoDelCarrito($item)
{
	var id = $item.attr("id");
	id = id.substring(1);
	
	actualizaStockProducto($("#"+id), 1);

	actualizaNumeroProductosPedidos(-($(".cantidad").val()));
	
	actualizaPrecioTotal(parseInt($(".cantidad").val()), -parseInt($item.children(".price").html()));
	
	var pos = $("#cart_items").offset();
	
	var numArticulosCarrito = $("#cart_items").children().length-1;
	if (numArticulosCarrito >= 4) 
	{
		incrementaAnchoCarrito(-anchoProductoEnCarrito);
		
		var anchoCarrito = $("#cart_items").width();
		var der = pos.left + anchoCarrito;
		if (der < posCarritoInicial.left + anchoCarritoInicial)
			pos.left = posCarritoInicial.left;
	}
	else{
		pos.left = posCarritoInicial.left;
	}
	
	$("#cart_items").offset(pos);
	
	//Condicion para ocultar las flechas de navegacion 
	if(numArticulosCarrito <= 4){
		$("#btn_prev").hide();
		$("#btn_next").hide();
	}
	
	$item.effect("explode");
	$item.remove();
}

$(function() 
{
	$("#citem").val(0);
	$("#cprice").val(0);

	if($("#citem").val() <= 0){
		$("#btn_comprar").hide();
		$("#btn_prev").hide();
		$("#btn_next").hide();
		$("#btn_clear").hide();	
	}
	
	anchoCarritoInicial = $("#cart_items").width();
	posCarritoInicial = $("#cart_items").offset();

	establece_evento_dblclick_items($(".item"));
	
	$(document).on("click", ".delete", function()
	{
		eliminaProductoDelCarrito($(this).parent());
		
		return false;
	});
	
	$("#btn_clear").click(function(evento) 
	{
		$(".delete").trigger("click");
	});
	
	$("#btn_prev").click(function(evento) 
	{
		desplazaCarritoIzquierda(50);
	});

	$("#btn_next").click(function(evento) 
	{
		desplazaCarritoDerecha(50);
	});

	//Ocultamos las flechas de navegacion si hay 0 articulos en el carrito
	/* if(numArticulosCarrito <= 0){
		$("#btn_prev").hide();
		$("#btn_next").hide();
	} */
});