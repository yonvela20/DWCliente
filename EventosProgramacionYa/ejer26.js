window.onload=function(){

    var boton = document.getElementById("validar");
    boton.onclick = verificar;

    function verificar(){
        var contra = document.getElementById("contra");
        var contraVerificada = document.getElementById("contraVerificada");

        if(contra == contraVerificada){
            alert("Contraseña correcta");
        } else{
            alert("Contraseña incorrecta");
        }
    }

}