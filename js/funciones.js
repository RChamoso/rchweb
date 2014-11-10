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

function validarEstilo(id) {
  var estilo = id.getAttribute('style');
  if (!estilo) {
    estilo = '';
  }
  return estilo;
}