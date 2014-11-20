var fechaJSON = [];
var m = 0;
var ruta = [];
function buscarArticulos(objeto) {										//	Busca todos los articulos que tienen fecha
	for (i in objeto) {
		var tipoElemento = typeof(objeto[i]);
		ruta.push(i);																			//	agrega el identificador del elemento del objeto
		if (i === 'fecha') {
			if (objeto[i].dia !== '') {
				var direccion = ruta.toString();
				crearFechas(objeto[i].dia + ' ' + objeto[i].hora, direccion);
			}
			ruta.pop();																			//	elimina el identificador del objeto para el siguiente
		} else if (tipoElemento === 'object') {
			buscarArticulos(objeto[i]);											//	vuelve a llamar esta función
			ruta.pop();																			//	elimina el identificador del objeto para el siguiente
		} else {
			ruta.pop();																			//	elimina el identificador del objeto para el siguiente
		}
	}
}
function crearFechas(a, b) {													//	Crea el nuevo objeto articulos con fecha
	a = Date.parse(a);
	fechaJSON[m] = {};
	fechaJSON[m].fecha = a;
	fechaJSON[m].direccion = b;
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
	ultimosArticulos();
}
function ultimosArticulos() {													//	Muestra la fecha de los últi,os 11 artículos
	var ruta2 = '';
	var titulo = '';
	var tituloPpal = '';
	var subTitulo = '';
	var menu = '';
	var subMenu = '';
	var subMenuPpal = '';
	var pos1 = '';
	var pos2 = '';
	var funcion = '';
	var articuloH1 = elementoId("tituloArticulo");
	articuloH1.textContent = 'Artículos Recientes';
	for (var i=0; i<fechaJSON.length; i++) {
		var nuevaFecha = new Date(fechaJSON[i].fecha);
		var fechaActual = new Date();
		if (fechaActual >= nuevaFecha) {									//	Muestra solo los articulos que tienen fecha actual
			var articulo = elementoNuevo('article');
			articulo.setAttribute('class', 'ultimosArticulos');
			nuevaFecha = calcularFecha(nuevaFecha);
			var posicion = fechaJSON[i].direccion;
			posicion = posicion.split(',');
			var longitud = posicion.length;
			switch (longitud) {
				case 5:
					ruta2 = menuJSON[posicion[0]][parseInt(posicion[1])][posicion[2]][parseInt(posicion[3])].enlace;
					titulo = menuJSON[posicion[0]][parseInt(posicion[1])][posicion[2]][parseInt(posicion[3])].titulo;
					funcion = menuJSON[posicion[0]][parseInt(posicion[1])][posicion[2]][parseInt(posicion[3])].funcion;
					subTitulo = menuJSON[posicion[0]][parseInt(posicion[1])][posicion[2]][parseInt(posicion[3])].subTitulo;
					subMenu = menuJSON[posicion[0]][parseInt(posicion[1])].subMenu;
					tituloPpal = menuJSON[posicion[0]][parseInt(posicion[1])].titulo;
					pos1 = posicion[1];
					pos2 = posicion[3];
					menu = tituloPpal;
					break;
				case 7:
					ruta2 = menuJSON[posicion[0]][parseInt(posicion[1])][posicion[2]][parseInt(posicion[3])][posicion[4]][parseInt(posicion[5])].enlace;
					titulo = menuJSON[posicion[0]][parseInt(posicion[1])][posicion[2]][parseInt(posicion[3])][posicion[4]][parseInt(posicion[5])].titulo;
					funcion = menuJSON[posicion[0]][parseInt(posicion[1])][posicion[2]][parseInt(posicion[3])][posicion[4]][parseInt(posicion[5])].funcion;
					subTitulo = menuJSON[posicion[0]][parseInt(posicion[1])][posicion[2]][parseInt(posicion[3])][posicion[4]][parseInt(posicion[5])].subTitulo;
					subMenu = menuJSON[posicion[0]][parseInt(posicion[1])].subMenu;
					tituloPpal = menuJSON[posicion[0]][parseInt(posicion[1])].titulo;
					subMenuPpal = menuJSON[posicion[0]][parseInt(posicion[1])][posicion[2]][parseInt(posicion[3])].titulo;
					pos1 = posicion[1];
					pos2 = posicion[3];
					menu = tituloPpal + ' ' + String.fromCharCode(187) + ' ' + subMenuPpal;
					break;
			}
			var funcionClick = '';
			if (funcion !== 'nuevaVentana') {
				funcionClick = 'mostrarUltimoArt("' + tituloPpal + '", "' + subMenuPpal + '", "' + titulo + '", "' + subTitulo + '", "' + subMenu + '", "' + pos1 + '", "' + pos2 + '", "' + ruta2 + '", "' + nuevaFecha + '");';
				articulo.setAttribute('onclick',funcionClick);
				var objeto = elementoNuevo('object');
				var objetoEmb = elementoNuevo('embed');
				objeto.setAttribute('data', ruta2);
				objetoEmb.setAttribute('src', ruta2);
				objetoEmb.setAttribute('type', 'text/html');
				objeto.appendChild(objetoEmb);
			} else {
				funcionClick = funcion + '("' + ruta2 + '", false);';
				articulo.setAttribute('class', 'nuevaVentana ultimosArticulos');
				articulo.setAttribute('onclick',funcionClick);
				var objeto = elementoNuevo('div');
				var objetoH = elementoNuevo('h3');
				objetoH.textContent = titulo;
				objeto.appendChild(objetoH);
				var objetoP = elementoNuevo('p');
				objetoP.textContent = 'Se visualiza en otra ventana';
				objeto.appendChild(objetoP);
			}
			articulo.appendChild(objeto);
			var campoSubTitulo = elementoNuevo('h4');
			var tipoNavegador = window.navigator.vendor;
			if (tipoNavegador === 'Apple Computer, Inc.') {
				campoSubTitulo.setAttribute('style', 'font-size: 12px; font-size: 0.8rem;');
			}
			campoSubTitulo.textContent = subTitulo;
			articulo.appendChild(campoSubTitulo);
			var ubicacion = elementoNuevo('p');
			ubicacion.textContent = menu;
			articulo.appendChild(ubicacion);
			var campoFecha = elementoNuevo('p');
			campoFecha.setAttribute('class', 'fecha');
			campoFecha.textContent = nuevaFecha;
			articulo.appendChild(campoFecha);
			divUltimosArticulos.appendChild(articulo);
		}
	}
}
function mostrarUltimoArt(tituloPpal, subMenuPpal, titulo, subTitulo, subMenu, pos1, pos2, ruta2, fecha) {
	mostrarArticulos(tituloPpal, subMenu);
	mostrarSubMenu(subMenuPpal, pos1, pos2);
	ocultarSubMenu();
	mostrarFuncion(subTitulo, ruta2, '', fecha);
}