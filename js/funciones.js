var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

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
function calcularFecha(fecha) {
		var dia = fecha.getDate().toString();
		if (dia.length == 1) {
			dia = '0' + dia;
		}
		/*var mes = (fecha.getMonth() + 1).toString();
		if (mes.length == 1) {
			mes = '0' + mes;
		}*/
		var mes = meses[fecha.getMonth()];
		var hora = fecha.getHours().toString();
		if (hora.length == 1) {
			hora = '0' + hora;
		}
		var minutos = fecha.getMinutes().toString();
		if (minutos.length == 1) {
			minutos = '0' + minutos;
		}
		var anno = fecha.getFullYear();
		nuevaFecha = String.fromCharCode(8986) + ' ' + hora + ':' + minutos + ' - ' + dia + ' ' + mes + ' ' + anno;
		return nuevaFecha;
}