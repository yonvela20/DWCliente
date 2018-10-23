window.onload = function(){
    //Buttons and events 
    document.getElementById("accept").addEventListener('click', accept, false);
    
    document.getElementById("add").addEventListener('click', add, false);
    document.getElementById("sort").addEventListener('click', sort, false);
    document.getElementById("shuffle").addEventListener('click', shuffle, false);
    document.getElementById("raft").addEventListener('click', raft, false);
    
    //Not displaying some buttons
    document.getElementById("divButtons").style.display = "none";
    document.getElementById("add").style.display = "none";
}

const a = [];

function accept(){
    const value = document.getElementById("inputSize").value;

    document.getElementById("accept").style.display = "none";
    document.getElementById("form").style.display = "none";
    document.getElementById("add").style.display = "block";

    const divInputs = document.getElementById("divInputs");

    for(let i = 0; i < value; i++){
        const input = document.createElement("input");
        input.id = "input"+i;
        
        const salto = document.createElement("br");
        divInputs.appendChild(salto);
        divInputs.appendChild(input);
    }
}

function add(){
    console.log("click en add");
    const value = document.getElementById("inputSize").value;
    const divResults = document.getElementById("results");
    console.log(value);

     for(let i = 0; i < value; i++){
        let input = document.getElementById("input"+i).value;
        
        const valor = document.createElement("input");
        valor.id = "result"+i;

        valor.readOnly = true;
        valor.setAttribute("value", input);
        
        const salto = document.createElement("br");
        divResults.appendChild(salto);
        divResults.appendChild(valor);

        //toString de Lodash
        _.toString(input);
        a.push(input);
    }
    console.log(a);

    document.getElementById("add").style.display = "none";
    document.getElementById("divInputs").style.display = "none";
    document.getElementById("divButtons").style.display = "block";
}

function sort(){
    console.log(a.sort);
}

function shuffle(){
    const shuffled = _.shuffle(a);
    console.log(shuffled);
}

function raft(){

}
