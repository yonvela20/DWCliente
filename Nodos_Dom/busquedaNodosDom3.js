function anade() {

    var createElemento = document.createElement("li");
    var createText = document.createTextNode("Elemento de prueba");

    createElemento.appendChild(createText);

    var lista = document.getElementById("lista");
    lista.appendChild(createElemento);

    var nuevoElemento = "<li>Texto de prueba</li>"
    lista.innerHTML = lista.innerHTML + nuevoElemento;

}