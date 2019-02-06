$(function () {
    //Añadimos la clase photo_area
    $(".photo_slider").addClass("photo-area");

    //Guardamos en unas variables el ancho y el alto 
    var $ancho = $(".photo_slider").width();
    var $alto = $(".photo_slider").height();

    //Obtenemos la imagen y le añadimos los margenes que nos pide el ejercicio
    var $imagen = $(".photo_slider").find("img");
    $imagen.css("marginLeft", "-150").css("marginTop", "-150");

    //Dejamos el html conforme nos dicen 
    $("img").wrap("<div class='photo_slider_img'></div>"); //Encapsulamos la imagen en el div que nos falta
    $(".photo_slider").append("<a class='more_info' href='#'></a>"); //Añadimos el enlace Mas info al div 
    $(".info_area").append("<a class='close'>Close</a>"); //Añadimos el enlace de cerrar al div

    $(".more_info").css("background-image", "url(images/moreinfo.jpg)"); //Añadimos la imagen moreinfo.jpg al div que contiene el enlace 

    //Funcion de click en Mas info 
    $(".more_info").click(function () {

        //Guardamos los valores de ancho y de alto 
        var $anchoImg = $(this).parent().find("img").width();
        var $altoImg = $(this).parent().find("img").height();

        /**
         * Como solo hay que animar la imagen que clickamos utilizamos this. El enlace está un nivel más bajo que el div que encapsula
         * la imagen así con subir un nivel con @method parent() nos basta para animarlo  
         */
        $(this).parent().animate({
            height: $altoImg + 95,
            width: $anchoImg,
            borderWidth: 10
        }, 600);

        /**
         * El elemento al que hacemos click (en este caso el enlace) desaparece con @method fadeOut() 
         */
        $(this).fadeOut();

        //Animamos el div con que encapsula la foto para que tome las medidas originales de la imagen 
        $(this).parent().find(".photo_slider_img").animate({
            height: $altoImg, 
            width: $anchoImg
        }, 600);

        /**
         * La info del area aparece con @method fadeIn()
         */
        $(this).parent().find(".info_area").fadeIn(600);

        //Hacemos para que no tenga margenes 
        $(this).parent().find("img").animate({
            marginTop: "0px",
            marginLeft: "0px"
        });
    });

    //Funcion del click en cerrar 
    $(".close").click(function(){
        /**
         * Al igual que al hacer click en más info podemos subir niveles en el dom con parent pero en este caso el div a animar 
         * está dos niveles por encima así pues tendremos que utilizar @method parent() dos veces. El alto y el ancho volverán a los valores 
         * que teniamos guardados desde el principio @param $alto @param $ancho  
         */
        $(this).parent().parent().find(".photo_slider_img").animate({
            height: $alto-30, //Tengo que quitarle manualmente 30px porque se queda demasiado larga y no me sale el enlace de Mas info 
            width: $ancho 
        }, 600);
        
        /**
         * El link de Mas info vuelve a aparecer con @method fadeIn() 
         */
        $(this).parent().parent().find(".more_info").fadeIn(600);
        
        //Animamos el div de arriba del todo 
        $(this).parent().parent().animate({
            height: $alto, 
            width: $ancho, 
            borderWidth: 2
        }, 600);

        //Animamos el quitarle margenes a la imagen
        $(this).parent().parent().find("img").animate({
            marginTop: "-150px", 
            marginLeft: "-150px"
        });

        /**
         * Quitamos con @method fadeOut() el div que nos muestra mas informacion
         */
        $(this).parent().parent().find(".info_area").fadeOut();
    });
});


