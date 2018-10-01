window.onload=function(){
    var botonCubo = this.document.getElementById("botonCubo");
    var botonCompara = this.document.getElementById("botonCompara");
    var botonNombreCompleto = this.document.getElementById("botonNombreCompleto");

    botonCubo.onclick = elevarAlCubo;
    botonCompara.onclick = compara;
    botonNombreCompleto.onclick = nombreCompleto;
    
    function elevarAlCubo(){
        var numero = document.getElementById("numero_cubo").value;
        var numeroCubo =  numero*numero*numero;

        alert("El resultado es: "+numeroCubo);
    }

    function compara(){
        var numero1 = document.getElementById("numero1").value;
        var numero2 = document.getElementById("numero2").value;

        if(numero1 > numero2){
            alert(numero1 + " es mayor que " + numero2);
        }else {
            alert(numero2 + " es mayor que " + numero1)
        }
    }

    function nombreCompleto(){
        var nombre = document.getElementById("nombre").value;
        var apellido = document.getElementById("apellidos").value ;
        var nombreApellido = nombre+apellido;

        var p_nombre = document.getElementById("p_nombre");
        p_nombre.innerHTML = "Tu nombre es: " + nombreApellido;
    }
}