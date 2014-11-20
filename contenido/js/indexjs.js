var anterior = '';
var articuloAnterior = '';
var disenoAnterior = '';
var menuAnterior = '';
var ruta = [];
function inicio() {                     // Elementos ID Globales
  contenido = elementoId('articulos');
  encabezadoArticulo = elementoId('encabezadoArticulo');
  botonMostrar = elementoId('abrirSubMenu');
  elementoNav = elementoId('menuPrincipal');
	divUltimosArticulos = elementoId('ultimosArticulos');
  anchoPrincipal();
  window.onresize = function(){ocultarScroll();};
  window.onresize = function(){anchoPrincipal();};
  menuPrincipal();
	buscarArticulos(menuJSON);
	ordenarFechas();
}
function anchoPrincipal() {             //  Calcular el ancho de la pantalla
  var anchoScroll = 0;
  if (window.scrollMaxY > 0) {          //  El scroll esta visible
    anchoScroll = 17;
  }
  var anchoNav = elementoNav.offsetWidth;
  var elementoAside = elementoId('aside');
    var anchoAside = elementoAside.offsetWidth;
  var cuerpoPrincipal = elementoId('cuerpoPrincipal');
    var anchoTotal = window.innerWidth - anchoScroll - anchoNav - anchoAside - 25;
    cuerpoPrincipal.style.width = anchoTotal/16 + 'rem';
  var encabezadoSubMenu = elementoId('encabezadoSubMenu');
    var anchoSubMenu = window.innerWidth - anchoScroll - anchoNav - 5;
    encabezadoSubMenu.style.width = anchoSubMenu/16 + 'rem';
  var elementoFooter = elementoId('footer');
		elementoFooter.style.width = (window.innerWidth - anchoScroll - anchoNav)/16 + 'rem';
}
function menuPrincipal() {              //  Generar el Menu Principal y Submenu
	var fechaArticulo = '';
	var fechaActual = '';
  var listaMenu = menuJSON.listaMenu;
  var idMenuPrincipal = elementoId('opcionesMenu');
  for (var i in listaMenu) {
    //  Opcion Principal
    var opcionPrincipal = elementoNuevo('li');
      var mostrarArticulos = 'mostrarArticulos("' + listaMenu[i].titulo + '","' + listaMenu[i].subMenu + '");';
      opcionPrincipal.id = i;
      opcionPrincipal.setAttribute('onclick',mostrarArticulos);
      opcionPrincipal.textContent = listaMenu[i].titulo;
    idMenuPrincipal.appendChild(opcionPrincipal);
    //  Submenu
    var subMenu = elementoNuevo('ul');
      subMenu.id = listaMenu[i].subMenu;
      subMenu.setAttribute('class', 'subMenu');
      var opcionesSubMenu = listaMenu[i].contenido;
      for (var j in opcionesSubMenu) {
				if (((opcionesSubMenu[j].fecha) && (opcionesSubMenu[j].fecha.dia !== '')) || (!opcionesSubMenu[j].fecha)) {
					if ((opcionesSubMenu[j].fecha) && (opcionesSubMenu[j].fecha.dia !== '')) {
						var fecha = opcionesSubMenu[j].fecha.dia + ' ' + opcionesSubMenu[j].fecha.hora;
						var fechaArticulo = new Date(fecha);
						fechaActual = new Date();
					}
					if ((fechaActual >= fechaArticulo) || (!opcionesSubMenu[j].fecha)) {		//	Muestra solo los articulos que tienen fecha actual
						var opcionSubMenuLi = elementoNuevo('li');
							var tipoFuncion = opcionesSubMenu[j].funcion;
							var funcionSubMenu = '';
							switch (tipoFuncion) {
								case 'mostrarFuncion' :
								case 'codigosAscii' :
								case 'mostrarBloques' :
									funcionSubMenu = tipoFuncion + '("' + opcionesSubMenu[j].subTitulo + '", "' + opcionesSubMenu[j].enlace + '", "' + opcionesSubMenu[j].titulo + '");';
								break;
								case 'nuevaVentana' :
		// revisar xq false
									funcionSubMenu = tipoFuncion + '("' + opcionesSubMenu[j].enlace + '", false);';
									opcionSubMenuLi.setAttribute('class', 'nuevaVentana');
								break;
								case 'mostrarSubMenu' :
									funcionSubMenu = tipoFuncion + '("' + opcionesSubMenu[j].titulo + '", "' + i + '", "' + j + '");';
								break;
							}
							opcionSubMenuLi.setAttribute('onclick',funcionSubMenu);
							opcionSubMenuLi.textContent = opcionesSubMenu[j].titulo;
						subMenu.appendChild(opcionSubMenuLi);
					}
				}
			}
    idMenuPrincipal.appendChild(subMenu);
  }
  ocultarScroll();
}
function ocultarScroll() {              //  Oculta el Scroll del Menu
  var cabecera = elementoId('header');
  var posicionIzquierda = elementoNav.scrollWidth;
  var altura = elementoNav.scrollHeight - elementoNav.scrollTopMax;
  var posicionSuperior = cabecera.clientHeight;
  var ocultarScroll = elementoId('ocultarScroll');
    var estilo = 'left:' + posicionIzquierda + 'px; height:' + altura + 'px; top:' + posicionSuperior + 'px;';
    ocultarScroll.style = estilo;
}
function borrarSubMenu() {              //  Borra el Submenu de la Seccion de Articulos
  var divSubMenu = elementoId("subMenu");
  var nodos = divSubMenu.children;
  totalNodos = nodos.length;
  for(var j = 0; j<totalNodos; j++){
    divSubMenu.removeChild(nodos[0]);
  }
  botonMostrar.style.display = 'none';
}
function mostrarArticulos(articulo,menuActual) {  //  Muestra el contenido de los Articulos
  borrarSubMenu();
  ocultarContenido();
	ocultarUltimosArticulos();
  var articuloDiv = elementoId("seccionArticulo");
  var menuDiv = elementoId(menuActual);
  var elementoAnterior = menuDiv.previousSibling;
  if (menuActual != menuAnterior) {
		if (menuDiv.childElementCount === 0) {
			var vacio = elementoNuevo('p');
			vacio.textContent = 'no hay artículos';
			menuDiv.appendChild(vacio);
		}
    articuloDiv.style.display = 'block';
    var articuloH1 = elementoId("tituloArticulo");
      articuloH1.textContent = articulo;
    if (menuAnterior != '') {
      var menuDivAnterior = elementoId(menuAnterior);
        menuDivAnterior.style.display = 'none';
      var elementoMenuAnterior = menuDivAnterior.previousSibling;
        elementoMenuAnterior.setAttribute('class','');
    }
    if (anterior == 'hoja') {
      var bloqueHoja = elementoId("hoja");
        bloqueHoja.style.display = 'none';
    }
    menuDiv.style.display = 'block';
    elementoAnterior.setAttribute('class','menuActual');
    menuAnterior = menuActual;
  } else {
		mostrarUltimosArticulos();
    menuDiv.style.display = 'none';
    elementoAnterior.setAttribute('class','');
    menuAnterior = '';
  }
	if (elementoNav.scrollTopMax > 0) {
		ocultarScroll();
	}
}
function mostrarContenido() {           //  Muestra el bloque de Seccion
  contenido.style.display = 'block';
}
function ocultarContenido() {           //  Oculta el bloque de Seccion
  contenido.style.display = 'none';
}
function mostrarUltimosArticulos() {           //  Muestra el bloque de Seccion
	divUltimosArticulos.style.display = 'block';
	var articuloH1 = elementoId("tituloArticulo");
	articuloH1.textContent = 'Artículos Recientes';
}
function ocultarUltimosArticulos() {           //  Oculta el bloque de Seccion
	divUltimosArticulos.style.display = 'none';
}
function mostrarBloques(subTitulo, bloque) {    //  Muestra los bloques del Html
  if (anterior != '') {
    var hojaAnterior = elementoId(anterior);
      hojaAnterior.style.display = 'none';
  }
  var hoja = elementoId(bloque);
    hoja.style.display = 'block';
  anterior = bloque;
  tituloArticulo(subTitulo);
  mostrarContenido();
}
function mostrarFuncion(texto,dato,subTitulo, fecha){  //  Muestra Enlaces externos
  ocultarContenido();
  if (subTitulo != '') {
    borrarSubMenu();
    tituloArticulo(subTitulo);
    tituloSubMenu = subTitulo;
  }
  var titulo = elementoId("titulo");
  var nuevaVentana = elementoId("nuevaVentana");
    nuevaVentana.href = dato;
  contenidoObject = elementoId("contenidoObject");
    contenidoObject.data = dato;
    contenidoObject.style.display = 'block';
  contenidoEmbed = elementoId("contenido");
    contenidoEmbed.src = dato;
  titulo.textContent = texto;
  var fechaArticulo = elementoId("fechaArticulo");
	fechaArticulo.textContent = fecha;
  mostrarBloques(tituloSubMenu, "hoja");
  if (dato.substr(0,4) != 'http') {
    var espera = setTimeout(escribirCss,1000);
  } else {
    contenidoObject.height = window.screen.height + 5;
  }
}
function tituloArticulo(subTitulo) {            //  Titulo Principal de la Seccion
  var articuloH1 = elementoId("tituloArticulo");
  var contenidoTitulo = articuloH1.textContent;
	if (contenidoTitulo === 'Artículos Recientes') {
		contenidoTitulo = '';
	}
  var indice = contenidoTitulo.indexOf(' ' + String.fromCharCode(187));
  if (indice != -1) {
    contenidoTitulo = contenidoTitulo.substring(indice,0);
  }
  if (subTitulo != "") {
    contenidoTitulo += ' ' + String.fromCharCode(187) + ' ' + subTitulo;
  }
  articuloH1.textContent = contenidoTitulo;
}
function mostrarSubMenu(subTitulo,i,j) {        //  Genera el Contenido del Submenu de la Seccion
  borrarSubMenu();
  ocultarContenido();
  tituloArticulo(subTitulo);
  tituloSubMenu = subTitulo;
  opcionesSubMenu = menuJSON.listaMenu[i].contenido[j].subMenu;
  var divSubMenu = elementoId("subMenu");
	var contador = 0;
// falta elemento <ul>
  for (var k in opcionesSubMenu) {
		if ((opcionesSubMenu[k].fecha) && (opcionesSubMenu[k].fecha.dia !== '')) {
			var fecha = opcionesSubMenu[k].fecha.dia + ' ' + opcionesSubMenu[k].fecha.hora;
			var fechaArticulo = new Date(fecha);
			var fechaActual = new Date();
			if (fechaActual >= fechaArticulo) {		//	Muestra solo los articulos que tienen fecha actual
				var nuevaFecha = calcularFecha(fechaArticulo);
				var funcionSubMenu = '';
				var tipoFuncion = opcionesSubMenu[k].funcion;
				if (tipoFuncion !=  'nuevaVentana') {
					funcionSubMenu = opcionesSubMenu[k].funcion + '("' + opcionesSubMenu[k].subTitulo + '", "' + opcionesSubMenu[k].enlace + '", "", "' + nuevaFecha +'");';
				} else {
					funcionSubMenu = opcionesSubMenu[k].funcion + '("' + opcionesSubMenu[k].enlace + '", true);';
				}
				var opcionSubMenu = elementoNuevo('li');
				if (opcionesSubMenu[k].funcion == 'nuevaVentana') {
					opcionSubMenu.setAttribute('class', 'nuevaVentana2');
				}
				opcionSubMenu.textContent = opcionesSubMenu[k].titulo;
				opcionSubMenu.setAttribute('onclick', funcionSubMenu);
				divSubMenu.appendChild(opcionSubMenu);
				contador++;
			}
		}
	}
	if (contador === 0) {
		var vacio = elementoNuevo('p');
		vacio.textContent = 'no hay artículos';
		divSubMenu.appendChild(vacio);
	}
  abrirSubMenu();
}
function ocultarSubMenu() {                     //  Oculta el Submenu de la Seccion
	var altura = 0;
	if (window.innerWidth > 1024) {
		altura = '4.65rem';
	} else {
		altura = '4.37rem';
	}
  encabezadoArticulo.style.height = altura;
  botonMostrar.style.display = 'block';
}
function abrirSubMenu() {                       //  Muestra el Submenu de la Seccion
  ocultarContenido();
  encabezadoArticulo.style.height = 'auto';
  botonMostrar.style.display = 'none';
}
function nuevaVentana(dato, subMenu) {          //  Abrir una Ventana Nueva
  window.open(dato, "nuevo");
}
function codigosAscii(tituloAscii, tipoCodigoAscii) { //  Muestra los caracteres del Codigo Ascii seleccionado
  borrarSubMenu();
  ocultarContenido();
  var listaAscii = elementoId('menuCodigosAscii');
  if (listaAscii.childElementCount > 0) {
    while (listaAscii.firstChild) {
      listaAscii.removeChild(listaAscii.firstChild);
    }
  }
  for (i in codigoAscii) {
    if (codigoAscii[i].titulo == tituloAscii) {
      var  elementoCodigoAscii = codigoAscii[i].contenido;
      for (j in elementoCodigoAscii) {
        var divAscii = elementoNuevo('div');
        var menuAscii = elementoNuevo('li');
        //  Titulo del Grupo de Codigos
        var opcionMenu = elementoNuevo('h4');
        var funcion = 'AsciiBasicoContenido("'+elementoCodigoAscii[j].tabla+'", "'+elementoCodigoAscii[j].contenido+'","'+elementoCodigoAscii[j].boton+'",'+elementoCodigoAscii[j].inicio+','+elementoCodigoAscii[j].fin+');';
          opcionMenu.setAttribute('onclick', funcion);
          opcionMenu.textContent = elementoCodigoAscii[j].titulo;
          var opcionMenuEm = elementoNuevo('em');
            opcionMenuEm.textContent = ' (' + elementoCodigoAscii[j].inicio + '-' + elementoCodigoAscii[j].fin + ')';
            opcionMenuEm.style = 'font-size:10px;color:#565656;';
          opcionMenu.appendChild(opcionMenuEm);
        menuAscii.appendChild(opcionMenu);
        //  Boton cerrar tabla de codigos
        var cerrarMenu = elementoNuevo('p');
          cerrarMenu.id = elementoCodigoAscii[j].boton;
          cerrarMenu.setAttribute('class','AsciiBotonCerrar');
          var funcionCerrar = 'cerrar("'+elementoCodigoAscii[j].tabla+'", "'+elementoCodigoAscii[j].boton+'")';
          cerrarMenu.setAttribute('onclick',funcionCerrar);
          textoMenu = String.fromCharCode(10008);
          cerrarMenu.textContent = textoMenu;
        menuAscii.appendChild(cerrarMenu);
        divAscii.appendChild(menuAscii);
        //  Tabla que contiene los codigos
        var tablaAscii = elementoNuevo('table');
          tablaAscii.id = elementoCodigoAscii[j].tabla;
          tablaAscii.setAttribute('class','tablaCodigosAscii');
          tablaAscii.style.display = 'none';
          tablaAscii.border = 2;
          tablaAscii.setAttribute('cellPadding', '4px');
          tablaAscii.setAttribute('cellSpacing', '0');
          // Contenido de la tabla
          var contenidoTablaAscii = elementoNuevo('tbody');
            contenidoTablaAscii.id = elementoCodigoAscii[j].contenido;
          tablaAscii.appendChild(contenidoTablaAscii);
        divAscii.appendChild(tablaAscii);
        listaAscii.appendChild(divAscii);
      }
    }
  }
  mostrarBloques(tituloAscii, "codigosAsciiCompleto");
}
function AsciiBasicoContenido(tabla, contenido, boton, inicio, fin) {   //  Genera las Tablas de los Codigos Ascii
  var cerrarMenu = elementoId(boton);
    cerrarMenu.style.display = 'inline-block';
  var divAscii = elementoId(tabla);
    divAscii.style.display = 'block';
  var contenidoTablaAscii = elementoId(contenido);
    contenidoTablaAscii.style.display = 'block';
  if (contenidoTablaAscii.childElementCount > 0) {
    while (contenidoTablaAscii.firstChild) {
      contenidoTablaAscii.removeChild(contenidoTablaAscii.firstChild);
    }
  }
  var j = 0;
  for (i=inicio; i<=fin; i++) {
    codigoTexto = String.fromCharCode(i);
    if  (codigoTexto != " ") {
      if  ((i <= 127) || (i >= 160)) {
        j = j + 1;
        codigo= '&#' + i + '; ';
        codigoHex = 'U+' + i.toString(16);
        if ((j == 1) || ((j-1)%7 == 0)) {
          var lineaLista1 = elementoNuevo('tr');
          var lineaLista2 = elementoNuevo('tr');
        }
//  Revisar ancho celdas
        var codigoLista1 = elementoNuevo('td');
          codigoLista1.style.width = '7%';
          codigoLista1.textContent = codigo;
        lineaLista1.appendChild(codigoLista1);
        var textoLista = elementoNuevo('td');
          textoLista.setAttribute('rowspan',2);
          textoLista.style.width = '7%';
          textoLista.setAttribute('class','textoLista');
          textoLista.textContent = codigoTexto;
        lineaLista1.appendChild(textoLista);
        var codigoLista2 = elementoNuevo('td');
          codigoLista2.textContent = codigoHex;
        lineaLista2.appendChild(codigoLista2);
        if ((j-1)%7 == 0) {
          contenidoTablaAscii.appendChild(lineaLista1);
          contenidoTablaAscii.appendChild(lineaLista2);
        }
      }
    }
  }
}
function cerrar(tabla,boton) {                  //  Cierra la Tabla del Codigo Ascii
  var cerrarTabla = elementoId(tabla);
    cerrarTabla.style.display = 'none';
  var botonCerrar = elementoId(boton);
    botonCerrar.style.display = 'none';
}
function mostrarCajaLuz() {
  elementoId('frenteCajaLuz').style.display='block';
  elementoId('fondoCajaLuz').style.display='block';
}
function ocultarCajaLuz() {
  elementoId('frenteCajaLuz').style.display='none';
  elementoId('fondoCajaLuz').style.display='none';
}
function escribirCss() {                        //  Escribir Html y Css del Articulo
  var contenido = contenidoObject.contentWindow.document;
  if (contenido != null) {
    var mostrarDatos = contenido.getElementById('ocultar');
    if (mostrarDatos != null) {
      mostrarDatos.style.display = 'block';
      var hojaEstilo = contenido.styleSheets[0];
      var totalLineasEstilo = hojaEstilo.cssRules;
      var codigoLineaEstilo = contenido.getElementById('cssCodigo');
      if (codigoLineaEstilo != null) {
        for (i in totalLineasEstilo) {
          textoCss = hojaEstilo.cssRules[i].cssText;
          var posicion = 0;
          var posicionDosPuntos = 0;
          for (m in textoCss) {
            letra = textoCss.charCodeAt(m);
            p = parseFloat(m);
            posicion++;
            if (letra != 10) {
              if (letra == 58) {
                posicionDosPuntos = posicion;
              }
              if (letra > 255) {
                codigoLineaEstilo.textContent += "\\" + letra.toString(16);
              } else if ((letra == 44) && (textoCss.charCodeAt(p-1) == 41)) {
                codigoLineaEstilo.textContent += textoCss[m];
                codigoLineaEstilo.textContent += '\n';
                for (var j=0; j<=posicionDosPuntos; j++) {
                  codigoLineaEstilo.textContent += ' ';
                }
              } else if (p+2 != textoCss.length) {
                codigoLineaEstilo.textContent += textoCss[m];
              }
              if (letra == 123) {
                codigoLineaEstilo.textContent += '\n ';
                posicion = 0;
                posicionDosPuntos = 0;
              }
              if (letra == 59) {
                if (p+2 != textoCss.length-1) {
                  codigoLineaEstilo.textContent += '\n ';
                } else {
                  codigoLineaEstilo.textContent += '\n';
                }
                posicion = 0;
                posicionDosPuntos = 0;
              }
            }
          }
          codigoLineaEstilo.textContent += '\n';
        }
      }
      var codigoHtml = contenido.getElementById('contenido').innerHTML;
      var codigoLineaHtml = contenido.getElementById('htmlCodigo');
      codigoLineaHtml.textContent += codigoHtml;
    }
    contenidoObject.height = contenido.body.clientHeight + 70;
  }
}