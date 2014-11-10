var valor = '';
var m = 0;
var n = 0;
var numero = -5;
var ruta = [];
var ruta2 = [];
var fechaJSON = [];
var articulos = [];
var contenidoArray;
function iniciarJSON() {
	resultado = elementoId('resultado');
	botonGuardar = elementoId('validar');
	ulPrincipal = elementoNuevo('ul');
	cargarJSON();
}
function cargarJSON() {
	//  Cargar el archivo JSON
	xmlhttp = new XMLHttpRequest();
	//    var url = "contenidoMenu.json";
	var url = "../json/datos_out.json";
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	xmlhttp.onreadystatechange = function() {
		if ((xmlhttp.readyState == 4) && (xmlhttp.status == 200)) {
			menuJSON = JSON.parse(xmlhttp.responseText);
			principal(menuJSON, ulPrincipal);
		}
	}
}
function principal(menuJSON, ulPrincipal) {
	recorrerObjeto(menuJSON, ulPrincipal);
	buscarArticulos(menuJSON);
	ordenarFechas();
}
function recorrerObjeto(objeto, ulContenido) {
	for (j in objeto) {
		var tipoElemento = typeof(objeto[j]);
		if (tipoElemento !== 'function') {								//	Con prototype.js incluye las funciones del objeto 
			var tipo = elementoNuevo('em');  			//	muestra el tipo de elemento (object o string)
			tipo.textContent = ' (' + tipoElemento + ')';
			tipo.style = 'color: hsl(105, 75%, 30%);';
			ruta.push(j);																		//	agrega el identificador del elemento del objeto
			if (tipoElemento !== 'object') {
				var linea = elementoNuevo('li');
				linea.textContent = j + ': ';									//	nombre de la propiedad o posicion array
				linea.style = 'margin-left: 40px; list-style-image: none;';
				var valor = elementoNuevo('input'); 	//	muestra el valor del elemento del objeto
				var contenido = objeto[j];
				valor.setAttribute('data-posicion', ruta);		//	ruta del elemento dentro del JSON
				valor.setAttribute('onclick', 'modificaValor(this);');
				valor.name = j;
				if (contenido != '') {
					var buscar = contenido.search('%26');				//	busca '%26' para sustituirlo por '&'
					if (buscar > 0) {														//	porque PHP se detiene al leer '&'
						contenido = contenido.replace('%26', '&');
					}
					//	solo para incluir el nuevo campo fecha						//*if (j === 'enlace') {	incluirCampo(ruta, margen); }*/
					valor.size = contenido.length;
					valor.value = contenido;
					valor.style = 'color: hsl(0, 100%, 0%);';
				} else {
					//	solo para eliminar el campo subMenu Vacio					//*if (j === 'subMenu') { eliminarCampo(ruta); }*/
					valor.size = 10;
					valor.style = 'border: 1px inset; color: hsl(0, 100%, 0%);';
				}
				if (j === 'dia') {
					valor.type = 'date';
					valor.placeholder = 'aaaa/mm/dd';
				} else if (j === 'hora') {
					valor.type = 'time';
					valor.placeholder = 'hh:mm';
				} else {
					valor.type = 'text';
				}
				linea.appendChild(valor);
				linea.appendChild(tipo);	
				ulContenido.appendChild(linea);
			}
			if (tipoElemento === 'object') {																					
				var lineaObjeto = elementoNuevo('li');
				var imagenObjeto = elementoNuevo('img');
				imagenObjeto.id = 'img' + n;
				imagenObjeto.setAttribute('src', '../img/cerrar.gif');
				imagenObjeto.setAttribute('onclick', 'cerrarLista("' + n + '");');
				lineaObjeto.appendChild(imagenObjeto);	
				var textoObjeto = elementoNuevo('p');
				textoObjeto.textContent = j + ': ';						//	nombre de la propiedad o posicion array
				textoObjeto.style = 'color:hsl(0, 100%, 40%);'; 
				lineaObjeto.appendChild(textoObjeto);	
				lineaObjeto.style = 'margin-left: 20px;'; 
				lineaObjeto.id = n;
				lineaObjeto.setAttribute('class', 'objeto');
				lineaObjeto.appendChild(tipo);	
				if ((isNaN(j)) && (j !== 'fecha')) {
					var a;
					var tipoObjeto;
					if (j === 'contenido') {
						var masObjeto = elementoNuevo('span');
						masObjeto.textContent = String.fromCharCode(9398);
						masObjeto.id = 'obj1-' + n;
						masObjeto.style = 'color: hsl(120, 100%, 20%);';
						masObjeto.setAttribute('data-posicion', ruta);		//	ruta del elemento dentro del JSON
						masObjeto.setAttribute('onclick', 'agregarObjeto("articulo", "obj1-' + n + '");');
						lineaObjeto.appendChild(masObjeto);
						tipoObjeto = 'submenu';
						a = 9416;
					} else {
						a = 9745;
						if (j === 'listaMenu') {
							tipoObjeto = 'principal';
						} else {
							tipoObjeto = 'articulo';
						}
					}
					var masObjeto = elementoNuevo('span');
					masObjeto.textContent = String.fromCharCode(a);
					masObjeto.id = 'obj2-' + n;
					masObjeto.style = 'color: hsl(120, 100%, 20%);';
					masObjeto.setAttribute('data-posicion', ruta);		//	ruta del elemento dentro del JSON
					masObjeto.setAttribute('onclick', 'agregarObjeto("' + tipoObjeto + '", "obj2-' + n + '");');
					lineaObjeto.appendChild(masObjeto);
				} else if (!isNaN(j)) {
					var menosObjeto = elementoNuevo('span');
					menosObjeto.textContent = String.fromCharCode(9746);
					menosObjeto.id = 'elim-' + n;
					menosObjeto.style = 'color: hsl(0, 100%, 40%);';
					menosObjeto.setAttribute('data-posicion', ruta);		//	ruta del elemento dentro del JSON
					menosObjeto.setAttribute('onclick', 'eliminarObjeto("elim-' + n + '");');
					lineaObjeto.appendChild(menosObjeto);	
				}
				var ulObjeto = elementoNuevo('ul');
				n++;
				recorrerObjeto(objeto[j], ulObjeto);					//	vuelve a llamar esta función
				lineaObjeto.appendChild(ulObjeto);	
				ulContenido.appendChild(lineaObjeto);
			}
			ruta.pop();																			//	elimina el identificador del objeto para el siguiente
		}
	}
	resultado.appendChild(ulContenido);
}
function modificaValor(elemento) {										//	habilita la edición del elemento
	var estilo = 'background-color: hsl(270, 20%, 90%); color: hsl(0, 100%, 0%); padding: 0.1em 0.2em;';
	elemento.setAttribute('style', estilo);
	elemento.contentEditable = true;
	elemento.setAttribute('onblur', 'guardarCambio(this);');
}
function guardarCambio(elemento) {										//	modifica el elemento en el JSON local
	var nuevoValor = elemento.value;
	var posicionJSON = elemento.getAttribute('data-posicion');
	posicionJSON = posicionJSON.split(',');
	var longitud = posicionJSON.length;
	var tipoCampo;
	switch (longitud) {
		case 1:
			menuJSON[posicionJSON[0]] = nuevoValor;
			break;
		case 2:
			menuJSON[posicionJSON[0]][posicionJSON[1]] = nuevoValor;
			break;
		case 3:
			menuJSON[posicionJSON[0]][posicionJSON[1]][posicionJSON[2]] = nuevoValor;
			break;
		case 4:
			menuJSON[posicionJSON[0]][posicionJSON[1]][posicionJSON[2]][posicionJSON[3]] = nuevoValor;
			break;
		case 5:
			menuJSON[posicionJSON[0]][posicionJSON[1]][posicionJSON[2]][posicionJSON[3]][posicionJSON[4]] = nuevoValor;
			break;
		case 6:
			menuJSON[posicionJSON[0]][posicionJSON[1]][posicionJSON[2]][posicionJSON[3]][posicionJSON[4]][posicionJSON[5]] = nuevoValor;
			if (menuJSON[posicionJSON[0]][posicionJSON[1]][posicionJSON[2]][posicionJSON[3]][posicionJSON[4]].hora === '') {
				menuJSON[posicionJSON[0]][posicionJSON[1]][posicionJSON[2]][posicionJSON[3]][posicionJSON[4]].hora = '09:00';
			}
			break;
		case 7:
			menuJSON[posicionJSON[0]][posicionJSON[1]][posicionJSON[2]][posicionJSON[3]][posicionJSON[4]][posicionJSON[5]][posicionJSON[6]] = nuevoValor;
			break;
		case 8:
			menuJSON[posicionJSON[0]][posicionJSON[1]][posicionJSON[2]][posicionJSON[3]][posicionJSON[4]][posicionJSON[5]][posicionJSON[6]][posicionJSON[7]] = nuevoValor;
			if (menuJSON[posicionJSON[0]][posicionJSON[1]][posicionJSON[2]][posicionJSON[3]][posicionJSON[4]][posicionJSON[5]][posicionJSON[6]].hora === '') {
				menuJSON[posicionJSON[0]][posicionJSON[1]][posicionJSON[2]][posicionJSON[3]][posicionJSON[4]][posicionJSON[5]][posicionJSON[6]].hora = '09:00';
			}
			//	Si no funciona cuando posicionJSON[X] es igual a un numero literal
			/* tipoCampo1 = tipoNumerico(posicionJSON[1]);
			tipoCampo3 = tipoNumerico(posicionJSON[3]);
			tipoCampo5 = tipoNumerico(posicionJSON[5]);
			tipoCampo7 = tipoNumerico(posicionJSON[7]);
			menuJSON[posicionJSON[0]][tipoCampo1][posicionJSON[2]][tipoCampo3][posicionJSON[4]][tipoCampo5][posicionJSON[6]][tipoCampo7] = nuevoValor;*/
			break;
	}
	elemento.setAttribute('style', 'color: hsl(270, 80%, 40%);');
	elemento.setAttribute('onclick', 'modificaValor(this);');
	elemento.contentEditable = false;
	botonGuardar.setAttribute('style', 'background-color: hsl(5, 100%, 60%); color: hsl(0, 100%, 0%);');
}
function tipoNumerico(campo) {
	if (!isNaN(campo)) {
		campo = parseInt(campo);
	}
	return campo;
}
function guardarJSON() {															//	envia la solicitud PHP para guardar el JSON
	datos = JSON.stringify(menuJSON);
	var buscar;
	do {
		buscar = datos.search('&');												//	busca '&' para sustituirlo por '%26'
		if (buscar > 0) {																	//	porque PHP se detiene al leer '&'
			datos = datos.replace('&', '%26');
		}
	} while (buscar != -1);
	var enviar = new Ajax.Request('guardarJSON.php', {
							method:'post',
							parameters: 'datosJSON='+datos,
							onSuccess: guardado,
							onFailure: error
							});
}
function guardado(transport) {												//	comprueba que se guardaron los cambios del
	var resultado = transport.responseText.evalJSON();	//	archivo JSON y recarga la página
	if (resultado) {
		location.reload();
	} else {
		alert("Error al guardar los datos");
	}
}
function error() {
	alert("Error al guardar los datos");
}
function incluirCampo(posicion, margen) {							//	Funcion para incluir un nuevo campo en el
	var fecha = elementoNuevo('p');											//	archivo JSON, en este caso 'fecha'
		fecha.textContent = 'fecha' + ': ';
		fecha.style = 'margin-left:' + margen + 'px;';
	var valorFecha = elementoNuevo('input');
		valorFecha.type = 'date';
		valorFecha.placeholder = 'aaaa/mm/dd';
		valorFecha.style = 'color: hsl(0, 100%, 0%);';
	fecha.appendChild(valorFecha);
	var valorHora = elementoNuevo('input');
		valorHora.type = 'time';
		valorHora.placeholder = 'hh:mm';
		valorHora.style = 'color: hsl(0, 100%, 0%);';
	fecha.appendChild(valorHora);
	var tipoFecha = elementoNuevo('em');
		tipoFecha.textContent = ' (' + 'date' + ')';
		tipoFecha.style = 'color: hsl(105, 75%, 30%);';
	fecha.appendChild(tipoFecha);
	resultado.appendChild(fecha);
	var longitud = posicion.length;
	switch (longitud) {
/*				case 1:
			menuJSON[posicion[0]].fecha = '';
			break;
		case 2:
			menuJSON[posicion[0]][parseInt(posicion[1])].fecha = '';
			break;*/
		case 3:
			menuJSON[posicion[0]][parseInt(posicion[1])].fecha = '';
			break;
/*				case 4:
			menuJSON[posicion[0]][parseInt(posicion[1])][posicion[2]][parseInt(posicion[3])].fecha = '';
			break;*/
		case 5:
			menuJSON[posicion[0]][parseInt(posicion[1])][posicion[2]][parseInt(posicion[3])].fecha = '';
			break;
/*				case 6:
			menuJSON[posicion[0]][parseInt(posicion[1])][posicion[2]][parseInt(posicion[3])][posicion[4]][parseInt(posicion[5])].fecha = '';
			break;*/
		case 7:
			menuJSON[posicion[0]][parseInt(posicion[1])][posicion[2]][parseInt(posicion[3])][posicion[4]][parseInt(posicion[5])].fecha = '';
			break;
	}
}
function incluirObjeto(posicion, margen) {						//	Funcion para incluir un nuevo objeto en el
	margen = margen + 20;																//	archivo JSON, en este caso 'Dia' y 'Hora'
	var longitud = posicion.length;
	var objeto = {'dia':'','hora':''};
	switch (longitud) {
		case 3:
			menuJSON[posicion[0]][parseInt(posicion[1])].fecha = objeto;
			break;
		case 5:
			menuJSON[posicion[0]][parseInt(posicion[1])][posicion[2]][parseInt(posicion[3])].fecha = objeto;
			break;
		case 7:
			menuJSON[posicion[0]][parseInt(posicion[1])][posicion[2]][parseInt(posicion[3])][posicion[4]][parseInt(posicion[5])].fecha = objeto;
			break;
	}
	var dia = elementoNuevo('p');
		dia.textContent = 'dia' + ': ';
		dia.style = 'margin-left:' + margen + 'px;';
	var valorDia = elementoNuevo('input');
		valorDia.type = 'date';
		valorDia.placeholder = 'aaaa/mm/dd';
		valorDia.style = 'color: hsl(0, 100%, 0%);';
	dia.appendChild(valorDia);
	var tipoDia = elementoNuevo('em');
		tipoDia.textContent = ' (' + 'date' + ')';
		tipoDia.style = 'color: hsl(105, 75%, 30%);';
	dia.appendChild(tipoDia);
	resultado.appendChild(dia);
	var hora = elementoNuevo('p');
		hora.textContent = 'hora' + ': ';
		hora.style = 'margin-left:' + margen + 'px;';
	var valorHora = elementoNuevo('input');
		valorHora.type = 'time';
		valorHora.placeholder = 'hh:mm';
		valorHora.style = 'color: hsl(0, 100%, 0%);';
	hora.appendChild(valorHora);
	var tipoFecha = elementoNuevo('em');
		tipoFecha.textContent = ' (' + 'date' + ')';
		tipoFecha.style = 'color: hsl(105, 75%, 30%);';
	hora.appendChild(tipoFecha);
	resultado.appendChild(hora);
}
function eliminarCampo(posicion) {										//	Funcion para eliminar un campo
	var longitud = posicion.length;
	switch (longitud) {
		case 3:
			delete menuJSON[posicion[0]][parseInt(posicion[1])][posicion[2]];
			break;
		case 5:
			delete menuJSON[posicion[0]][parseInt(posicion[1])][posicion[2]][parseInt(posicion[3])][posicion[4]];
			break;
		case 7:
			delete menuJSON[posicion[0]][parseInt(posicion[1])][posicion[2]][parseInt(posicion[3])][posicion[4]][parseInt(posicion[5])][posicion[6]];
			break;
	}
}
function buscarArticulos(objeto) {										//	Busca todos los articulos que tienen fecha
	for (i in objeto) {
		var tipoElemento = typeof(objeto[i]);
		ruta2.push(i);																		//	agrega el identificador del elemento del objeto
		if (i === 'fecha') {
			if (objeto[i].dia !== '') {
				var direccion = ruta2;
				var fechas = new crearFechas(objeto[i].dia + ' ' + objeto[i].hora, ruta2);
			}
			ruta2.pop();																		//	elimina el identificador del objeto para el siguiente
		} else if (tipoElemento === 'object') {
			buscarArticulos(objeto[i]);											//	vuelve a llamar esta función
			ruta2.pop();																		//	elimina el identificador del objeto para el siguiente
		} else {
			ruta2.pop();																		//	elimina el identificador del objeto para el siguiente
		}
	}
}
function crearFechas(a, b) {													//	Crea el nuevo objeto articulos con fecha
	var c = JSON.stringify(b);
	a = Date.parse(a);
	fechaJSON[m] = {};
	fechaJSON[m].fecha = a;
	fechaJSON[m].direccion = c;
	m++;
}
function ordenarFechas() {														//	Ordena todas las fechas de mayor a menor y selecciona las 11 primeras.
	var longitud = fechaJSON.length;
	for (var j=0; j<longitud-1; j++) {
		for (var k=j+1; k<longitud; k++) {
			if (fechaJSON[j].fecha < fechaJSON[k].fecha) {
				var fechaMayor = fechaJSON[j];
				fechaJSON[j] = fechaJSON[k];
				fechaJSON[k] = fechaMayor;
			}
		}
	}
	fechaJSON.splice(11, fechaJSON.length);							//	selecciona los primeros 11 articulos
	mostrarUltimosArticulos(fechaJSON);
}
function mostrarUltimosArticulos(fecha) {							//	Muestra la fecha de los últi,os 11 artículos
	var ultimosArticulos = elementoId('ultimosArticulos');
	for (var i=0; i<fecha.length; i++) {
		var linea = elementoNuevo('p');
		var nuevaFecha = new Date(fecha[i].fecha);
		var dia = nuevaFecha.getDate().toString();
		if (dia.length == 1) {
			dia = '0' + dia;
		}
		var mes = (nuevaFecha.getMonth() + 1).toString();
		if (mes.length == 1) {
			mes = '0' + mes;
		}
		var hora = nuevaFecha.getHours().toString();
		if (hora.length == 1) {
			hora = '0' + hora;
		}
		var minutos = nuevaFecha.getMinutes().toString();
		if (minutos.length == 1) {
			minutos = '0' + minutos;
		}
		var anno = nuevaFecha.getFullYear();
//		var hora = nuevaFecha.toLocaleTimeString(); 	//	esto muestra hh:mm:ss
		nuevaFecha = anno + '-' + mes + '-' + dia + ' ' + hora + ':' + minutos;
		linea.textContent = nuevaFecha;
//		linea.textContent = nuevaFecha.getFullYear() + '/' + nuevaFecha.getMonth() + '/' + nuevaFecha.getDate() + ' ' + nuevaFecha.getHours() + ':' + nuevaFecha.getMinutes();
		ultimosArticulos.appendChild(linea);
	}
}
function cerrarLista(idNumero) {
	var lista = elementoId(idNumero);
	for (var i=0; i<lista.children.length; i++) {
		if (lista.children[i].tagName === 'UL') {
			lista.children[i].setAttribute('style','display: none;');
		}
	}
	var imgLista = elementoId('img' + idNumero);
	imgLista.setAttribute('src', '../img/abrir.gif');
	imgLista.setAttribute('onclick', 'abrirLista("' + idNumero + '");');
}
function abrirLista(idNumero) {
	var lista = elementoId(idNumero);
	for (var i=0; i<lista.children.length; i++) {
		if (lista.children[i].tagName === 'UL') {
			lista.children[i].setAttribute('style','display: block;');
		}
	}
	var imgLista = elementoId('img' + idNumero);
	imgLista.setAttribute('src', '../img/cerrar.gif');
	imgLista.setAttribute('onclick', 'cerrarLista("' + idNumero + '");');
}
function agregarObjeto(tipo, idNumero) {
	var objeto = {};
	var elemento = elementoId(idNumero);
	var posicion = elemento.getAttribute('data-posicion');
	posicion = posicion.split(',');
	var longitud = posicion.length;
	switch (tipo) {
		case 'principal':
			objeto = {'titulo':'','subMenu':'','contenido':[]};
		break;
		case 'articulo':
			objeto = {'titulo':'','funcion':'','subTitulo':'','enlace':'','fecha':{'dia':'','hora':''}};
		break;
		case 'submenu':
			objeto = {'titulo':'','funcion':'','subTitulo':'','enlace':'','subMenu':[]};
		break;
	}
	switch (longitud) {
		case 1:
			menuJSON[posicion[0]].push(objeto);
			break;
		case 3:
			menuJSON[posicion[0]][parseInt(posicion[1])][posicion[2]].push(objeto);
			break;
		case 5:
			menuJSON[posicion[0]][parseInt(posicion[1])][posicion[2]][parseInt(posicion[3])][posicion[4]].push(objeto);
			break;
	}
/*	var dia = elementoNuevo('p');
		dia.textContent = 'dia' + ': ';
		dia.style = 'margin-left:' + margen + 'px;';
	var valorDia = elementoNuevo('input');
		valorDia.type = 'date';
		valorDia.placeholder = 'aaaa/mm/dd';
		valorDia.style = 'color: hsl(0, 100%, 0%);';
	dia.appendChild(valorDia);
	var tipoDia = elementoNuevo('em');
		tipoDia.textContent = ' (' + 'date' + ')';
		tipoDia.style = 'color: hsl(105, 75%, 30%);';
	dia.appendChild(tipoDia);
	resultado.appendChild(dia);
	var hora = elementoNuevo('p');
		hora.textContent = 'hora' + ': ';
		hora.style = 'margin-left:' + margen + 'px;';
	var valorHora = elementoNuevo('input');
		valorHora.type = 'time';
		valorHora.placeholder = 'hh:mm';
		valorHora.style = 'color: hsl(0, 100%, 0%);';
	hora.appendChild(valorHora);
	var tipoFecha = elementoNuevo('em');
		tipoFecha.textContent = ' (' + 'date' + ')';
		tipoFecha.style = 'color: hsl(105, 75%, 30%);';
	hora.appendChild(tipoFecha);
	resultado.appendChild(hora);*/
}
function eliminarObjeto(idNumero) {
	var elemento = elementoId(idNumero);
	var posicion = elemento.getAttribute('data-posicion');
	posicion = posicion.split(',');
	var longitud = posicion.length;
	switch (longitud) {
		case 2:
			delete menuJSON[posicion[0]][parseInt(posicion[1])];
			break;
		case 4:
			delete menuJSON[posicion[0]][parseInt(posicion[1])][posicion[2]][parseInt(posicion[3])];
			break;
		case 6:
			delete menuJSON[posicion[0]][parseInt(posicion[1])][posicion[2]][parseInt(posicion[3])][posicion[4]][parseInt(posicion[5])];
			break;
	}
}