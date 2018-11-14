window.onload = function () {
    ///Circulo
    const imgCirculo = document.getElementById("imgCirculo");
    const divCirculo = document.getElementById("divCirculo");

    //Cuadrado
    const imgCuadrado = document.getElementById("imgCuadrado");
    const divCuadrado = document.getElementById("divCuadrado");

    //Triangulo
    const imgTriangulo = document.getElementById("imgTriangulo");
    const divTriangulo = document.getElementById("divTriangulo");

    //Errores
    let reincio = document.getElementById("reinicio");
    reincio.style.display = "none";
    reincio.addEventListener("click", reinicio, false);

    //Divs donde se dropean las figuras
    divCirculo.addEventListener("dragover", allowDrop);
    divCirculo.addEventListener("drop", drop);
    
    divCuadrado.addEventListener("dragover", allowDrop);
    divCuadrado.addEventListener("drop", drop);
    
    divTriangulo.addEventListener("dragover", allowDrop);
    divTriangulo.addEventListener("drop", drop);

    //Divs que serán arrastrados
    imgCirculo.addEventListener("dragstart", drag);
    imgCuadrado.addEventListener("dragstart", drag);
    imgTriangulo.addEventListener("dragstart", drag);

    function allowDrop(ev) {
        ev.preventDefault();
    }

    function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
    }
    let aciertos = 0;

    function drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");

        if((data == "imgCirculo") && (ev.target.id == "divCirculo")){
            ev.target.appendChild(document.getElementById(data));
            imgCirculo.style.display = "none";

            alert("CORRECTO!");
            aciertos++;
        }
        
        if((data == "imgCuadrado") && (ev.target.id == "divCuadrado")){
            ev.target.appendChild(document.getElementById(data));
            imgCuadrado.style.display = "none";

            alert("CORRECTO!");
            aciertos++;
        }

        if((data == "imgTriangulo") && (ev.target.id == "divTriangulo")){
            ev.target.appendChild(document.getElementById(data));
            imgTriangulo.style.display = "none";

            alert("CORRECTO!");
            aciertos++;
        }

        if(aciertos == 3){
            alert("Enhorabuena has ganado!");
            reincio.style.display = "block";
        }
    }

    function reinicio(){
        window.location.reload();
    }
}
