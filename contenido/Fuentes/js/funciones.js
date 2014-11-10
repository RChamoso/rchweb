function elementoId(id) {
	return document.getElementById(id);
}
function elementoIdValor(id) {
	var elemento = elementoId(id);
	return elemento.value;
}
function elementoIdContenido(id) {
	var elemento = elementoId(id);
	return elemento.textContent;
}
function elementoIdChild(id) {
	var elemento = elementoId(id);
	return elemento.children;
}

function elementoName(nombre) {
	return document.getElementsByName(nombre);
}

function elementoTN(tag) {
	return document.getElementsByTagName(tag);
}

function elementoClase(clase) {
	return document.getElementsByClassName(clase);
}

function elementoNuevo(tag) {
	return document.createElement(tag);
}

function abrirAyuda() {
    var ventanaAyuda = window.open("./manual/DinyPARK - User Manual.pdf","Help",'menubar=no,navigationtoolbar=no,status=no,width=550,height=400');
}
