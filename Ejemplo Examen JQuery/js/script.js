$(document).ready(function(){
    //alert("hola");

    $(".photo_slider").addClass("photo-area");
    
    $ancho = $(".photo_slider").width();
    $alto = $(".photo_slider").height();

    $imagen = $(".photo_slider").find("img");
    $imagen.css("marginLeft", "-150px").css("marginTop", "-150px");
    
    $("img").wrap("<div class='photo_slider_img'></div>");
    $(".photo_slider").append("<a class='more_info' href='#'> Mas info </a>");
    $(".info_area").append("<a class='close'>Close</a>");
    
    //console.log(ancho, alto);

    $(".more_info").click(function(){

        $anchoImg = $(this).parent().find("img").width();
        $altoImg = $(this).parent().find("img").height();

        $(this).parent().animate({
            height: $altoImg+95, 
            width: $anchoImg,
            borderWidth: 10
        }, 600);

        $(this).fadeOut();
        //$(this).parent().find(".more_info").fadeOut();

        $(this).parent().find(".photo_slider_img").css("width", $anchoImg).css("height", $altoImg);
        $(this).parent().find(".info_area").fadeIn(600);

        $(this).parent().find("img").animate({
            marginTop: "0px",
            marginLeft: "0px"
        });        
    });

    $(".close").click(function(){
        $(this).parent().parent().find(".photo_slider_img").animate({
            height: $alto-30, 
            width: $ancho,  
        }, 600);

        $(this).parent().parent().animate({
            height: $alto, 
            width: $ancho, 
            borderWidth: 2
        }, 600);

        $(this).parent().parent().find(".photo_slider_img").find("img").animate({
            marginTop: "-150px",
            marginLeft: "-150px" 
        }, 600);

        //console.log($(this).parent().parent());
        $(this).parent().parent().find(".more_info").fadeIn(600);

        $(this).parent().parent().find(".info_area").fadeOut(600);
        //$(this).parent().parent().find(".close").fadeOut(600);
    });
        


    
});
