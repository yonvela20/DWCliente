
window.onload = function () {
	//Div para el drag and drop 
	const contenedor = document.getElementById("contenedor");
	contenedor.addEventListener("dragover", allowDrop);
	contenedor.addEventListener("drop", drop);

	//Etiquetas para el drag and drop
	const diezK = document.getElementById("10k");
	const mediaMaraton = document.getElementById("mediaMaraton");
	const maraton = document.getElementById("maraton");

	diezK.addEventListener("dragstart", drag);
	mediaMaraton.addEventListener("dragstart", drag);
	maraton.addEventListener("dragstart", drag);

	//RadioButtons 
	rbDiv = document.getElementById("rbDiv");
	rbDiv.style.display = "none";

	const rbMasculino = document.getElementById("rbMasculino");
	const rbFemenino = document.getElementById("rbFemenino");

	//rbMasculino.addEventListener("click", clasificadosMasculino, false);
	//rbFemenino.addEventListener("click", clasificadosFemenino, false);

	//Botones para seleccionar la galeria o la clasificacion
	let bGaleria = document.getElementById("bGaleria");
	let bClasificacion = document.getElementById("bClasificacion");

	bGaleria.addEventListener("click", muestraGaleria, false);
	bClasificacion.addEventListener("click", muestraClasificacion, false);

	document.getElementById("galeria").style.display = "none";
	document.getElementById("clasif").style.display = "none";

	//Botones adelante y atras
	let bAdelante = document.getElementById("adelante");
	let bAtras = document.getElementById("atras");

	bAdelante.addEventListener("click", pasaFotoAdelante, false);
	bAtras.addEventListener("click", pasaFotoAtras, false);

	//Imagenes
	const img1 = document.getElementById("img1");
	const img2 = document.getElementById("img2");
	const img3 = document.getElementById("img3");
	const img4 = document.getElementById("img4");

	img1.style.display = "block";
	img2.style.display = "none";
	img3.style.display = "none";
	img4.style.display = "none";

	bAtras.disabled = true;
	bAdelante.disabled = false;
		
	//Array de ganadores
	const ganadores = [
		diezKFemen = ["Patricia", "Sara", "Nuria"],
		diezKMasc = ["Javi", "Juan", "Pedro"],

		mediaFemen = ["Pilar", "Julia", "Elena"],
		mediaMasc = ["Erik", "Pepe", "Antonio"],

		maratonFemen = ["Eva", "Marta", "Marisa"],
		maratonMasc = ["Sergi", "Angel", "Adri"]
	]; 


}
let contador = 1 //contador para las imagenes

function pasaFotoAdelante(){
	document.getElementById("img"+contador).style.display = "none";
	contador++;
	document.getElementById("img"+contador).style.display = "block";
	console.log(contador);

	if(contador==4){
		bAdelante.disabled = true;
	}

	if(contador > 1){
		bAtras.disabled = false;
	}
}

function pasaFotoAtras(){
	document.getElementById("img"+contador).style.display = "none";
	contador--;
	document.getElementById("img"+contador).style.display = "block";
	console.log(contador);

	if(contador == 1){
		bAtras.disabled = true;
	}

	if(contador < 4){
		bAdelante.disabled = false;
	}
} 
/**
 * Funciones Drag and Drop 
 */

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
	if((data == "10k") && (ev.target.id == "contenedor")){
		rbDiv.style.display = "block";

		ev.target.appendChild(document.getElementById(data));
		
		if(rbFemenino.isSelected()){
			console.log("he seleccionado femenino");
		}
	}

	if((data == "mediaMaraton") && (ev.target.id == "contenedor")){
		rbDiv.style.display = "block";
		ev.target.appendChild(document.getElementById(data));
	}

	if((data == "maraton") && (ev.target.id == "contenedor")){
		rbDiv.style.display = "block";
		ev.target.appendChild(document.getElementById(data));
	}
}

/* function clasificadosFemenino(){
	console.log("Estos son los clasificados Femeninos");
}

function clasificadosMasculino(){
	console.log("Estos son los clasificados Masculinos");
} */

function muestraGaleria(e) {
	document.getElementById("galeria").style.display = "block";
	document.getElementById("clasif").style.display = "none";
}

function muestraClasificacion(e) {

	document.getElementById("galeria").style.display = "none";
	document.getElementById("clasif").style.display = "block";
}

function muestraGanadoresFemen(cont){
	for(let i = 0; i < ganadores[cont][i].length; i++){
		
	}
}


function actualizaListaGanadores() {
	var ganadores = new Array(
		new Array(new Array("10K-Junior1", "10K-Junior2", "10K-Junior3"), new Array("10K-Senior1", "10K-Senior2", "10K-Senior3"), new Array("10K-Veteranos1", "10K-Veteranos2", "10K-Veteranos3")),
		new Array(new Array("M-Junior1", "M-Junior2", "M-Junior3"), new Array("M-Senior1", "M-Senior2", "M-Senior3"), new Array("M-Veteranos1", "M-Veteranos2", "M-Veteranos3"))
	);
}
	
	
