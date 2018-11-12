window.onload = function(){
    ///Circulo
    let imgCirculo = document.getElementById("imgCirculo");
    let circulo = document.getElementById("circulo");
    let divCirculo = document.getElementById("divCirculo");

    this.imgCirculo = new Figuras();
    imgCirculo.circulo = true;
    
    this.divCirculo = new Contenedores();
    divCirculo.contCirculo = true;

    //Cuadrado
    let imgCuadrado = document.getElementById("imgCuadrado");
    let cuadrado = document.getElementById("cuadrado");
    let divCuadrado = document.getElementById("divCuadrado");

    this.imgCuadrado = new Figuras();
    imgCuadrado.cuadrado = true;
    
    this.divCuadrado = new Contenedores();
    divCuadrado.contCuadrado = true;

    //Triangulo
    let imgTriangulo = document.getElementById("imgTriangulo");
    let triangulo = document.getElementById("triangulo");
    let divTriangulo = document.getElementById("divTriangulo");

    this.imgTriangulo = new Figuras();
    imgTriangulo.triangulo = true;
    
    this.divTriangulo = new Contenedores();
    divTriangulo.contTriangulo = true;

/*  //Funciones drag and drop 
    //circulo
    imgCirculo.ondragstart = drag;
    //circulo.ondrop = drop;
    //divCirculo.ondrop = drop;

    //cuadrado
    imgCuadrado.ondragstart = drag;
    //cuadrado.ondrop = drop;
    //divCuadrado.ondrop = drop;

    //Triangulo
    imgTriangulo.ondragstart = drag;
    //triangulo.ondrop = drop;
    //divTriangulo.ondrop = drop; */

    //condiciones del circulo
    if((imgCirculo.circulo) && (divCirculo.contCirculo)){
        console.log("condiciones del circulo");

        circulo.ondrop = drop;
        circulo.ondragover = allowDrop;
        imgCirculo.ondragstart = drag;

        divCirculo.ondrop = drop;
        divCirculo.ondragover = allowDrop;
    }
    
    //condiciones del cuadrado 
    if((imgCuadrado.cuadrado) && (divCuadrado.contCuadrado)){
        console.log("condiciones del cuadrado");

        cuadrado.ondrop = drop;
        cuadrado.ondragover = allowDrop;
        
        imgCuadrado.ondragstart = drag;

        divCuadrado.ondrop = drop;
        divCuadrado.ondragover = allowDrop;
    }

    //condiciones del triangulo
    if((imgTriangulo.triangulo) && (divTriangulo.contTriangulo)){
        console.log("condiciones del triangulo");

        triangulo.ondrop = drop;
        triangulo.ondragover = allowDrop;
        imgTriangulo.ondragstart = drag;
    
        divTriangulo.ondrop = drop;
        divTriangulo.ondragover = allowDrop;
    }
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

/* function dropCirculo(ev){
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    if((imgCirculo.circulo) && (divCirculo.contCirculo)){
        ev.target.appendChild(document.getElementById(data));
    }
} */

class Figuras{
    constructor(){
        this.circulo = false;
        this.cuadrado = false;
        this.triangulo = false;
    }
}

class Contenedores{
    constructor(){
        this.contCirculo = false;
        this.contCuadrado = false;
        this.contTriangulo = false;
    }
}

