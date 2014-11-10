var anterior = '';
var articuloAnterior = '';
var menuAnterior = '';
var disenoAnterior = '';
var vectorApis = ["hojasDeApis","tituloApis","contenidoApisObject","contenidoApis"];
var tipoFuente = [
	"AftaSansThin-Regular",
	"AftaSansThin-Italic",
	"Aller_Rg",
	"Aller_It",
	"Aller_Bd",
	"Amaranth-Regular",
	"Amaranth-Italic",
	"Amaranth-Bold",
	"AnnieUseYourTelescope",
	"Anonymous_Pro",
	"Anonymous_Pro_I",
	"Anonymous_Pro_B",
	"ArchitectsDaughter",
	"AveriaSerifLibre-Regular",
	"AveriaSerifLibre-Italic",
	"AveriaSerifLibre-Bold",
	"BaroqueScript",
	"BPreplay",
	"BPreplayItalics",
	"BPreplayBold",
	"CandelaBook",
	"CandelaItalic",
	"CandelaBold",
	"DroidSans",
	"DroidSans-Bold",
	"Gabrielle",
	"LobsterTwo-Regular",
	"LobsterTwo-Italic",
	"LobsterTwo-Bold",
	"OpenSans-Regular",
	"OpenSans-Italic",
	"OpenSans-Bold",
	"Porcelai",
	"riesling",
	"SetFireToTheRain",
	"Swagger",
	"SwaggerBold",
	"SwaggerLight",
	"SweetlyBroken",
	"RaphaelIcons"
	];

function inicio() {
	navegador = window.navigator.appName;
	if(navegador == 'Microsoft Internet Explorer') {
		compatibleIE = document.implementation.hasFeature('org.w3c.svg', '1.0');
		if(compatibleIE == false)
			alert('Para poder visualizar correctamente esta página debes activar' +
					' el "Modo del Documento" a IE9 pulsando la tecla "F12"' +
					' y a continuación la combinación de teclas "Alt+9".');
	}
}

function mostrarArticulos(articulo,menu) {
	if (articuloAnterior != '') {
		var articuloDivAnterior = document.getElementById(articuloAnterior);
		articuloDivAnterior.setAttribute('style','display:none');
	}
	var articuloDiv = document.getElementById(articulo);
	articuloDiv.setAttribute('style','display:block');
	articuloAnterior = articulo;
	if (menuAnterior != '') {
		var menuDivAnterior = document.getElementById(menuAnterior);
		menuDivAnterior.setAttribute('style','display:none');
	}
	var menuDiv = document.getElementById(menu);
	menuDiv.setAttribute('style','display:block');
	menuAnterior = menu;
}

function mostrarBloques(bloque) {
	if (anterior != '') {
		var hojaAnterior = document.getElementById(anterior);
		hojaAnterior.setAttribute('style','display:none');
	}
	var hoja = document.getElementById(bloque);
	hoja.setAttribute('style','display:block');
	anterior = bloque;
}

/**********				S E C C I O N E S 			*********************/
//var vectorApis = ["hojasDeApis","tituloApis","contenidoApisObject","contenidoApis"];

/*function mostrarFuncion(bloque,titulo,objeto,contenido,texto,dato){
	mostrarBloques(bloque);
	var titulo = document.getElementById(titulo);
	var contenidoObject = document.getElementById(contenido);
	var contenido = document.getElementById(contenido);
		titulo.textContent = texto;
		contenidoObject.data = dato;
		contenido.src = dato;
}*/
function mostrarFuncion(vector,texto,dato){
	mostrarBloques(vector[0]);
	var titulo = document.getElementById(vector[1]);
	var contenidoObject = document.getElementById(vector[2]);
	var contenido = document.getElementById(vector[3]);
		titulo.textContent = texto;
		contenidoObject.data = dato;
		contenido.src = dato;
}


function apis(seleccionApis){
	mostrarBloques('hojasDeApis');
	var titulo = document.getElementById('tituloApis');
	var contenidoObject = document.getElementById('contenidoApisObject');
	var contenido = document.getElementById('contenidoApis');
	switch (seleccionApis) {
		case 'Amazon' :
			titulo.textContent = 'API Amazon';
			contenidoObject.data = 'https://afiliados.amazon.es';
			contenido.src = 'https://afiliados.amazon.es';
			break;
		case 'Bing' :
			titulo.textContent = 'API Bing';
			contenidoObject.data = 'http://www.bing.com/toolbox/bingdeveloper/';
			contenido.src = 'http://www.bing.com/toolbox/bingdeveloper/';
			break;
		case 'Envato' :
			titulo.textContent = 'API Envato';
			contenidoObject.data = 'http://extras.envato.com/api/';
			contenido.src = 'http://extras.envato.com/api/';
			break;
		case 'LinkedIn' :
			titulo.textContent = 'API LinkedIn';
			contenidoObject.data = 'http://developer.linkedin.com/apis';
			contenido.src = 'http://developer.linkedin.com/apis';
			break;
		case 'StackExchange' :
			titulo.textContent = 'API StackExchange';
			contenidoObject.data = 'http://api.stackoverflow.com/1.0/usage';
			contenido.src = 'http://api.stackoverflow.com/1.0/usage';
			break;
		case 'YouTube' :
			titulo.textContent = 'API YouTube';
			contenidoObject.data = 'http://code.google.com/intl/es-ES/apis/youtube/overview.html';
			contenido.src = 'http://code.google.com/intl/es-ES/apis/youtube/overview.html';
			break;
		case 'Graficos' :
			titulo.textContent = 'API Graficos';
			contenidoObject.data = 'http://yuilibrary.com/yui/docs/charts/';
			contenido.src = 'http://yuilibrary.com/yui/docs/charts/';
			break;
		case 'Google' :
			titulo.textContent = 'API Google';
			contenidoObject.data = 'http://code.google.com/apis/ajax/playground/#simple_embed';
			contenido.src = 'http://code.google.com/apis/ajax/playground/#simple_embed';
			break;
		case 'Twitter' :
			titulo.textContent = 'API Twitter';
			contenidoObject.data = 'https://dev.twitter.com/console';
			contenido.src = 'https://dev.twitter.com/console';
			break;
		default :
			titulo.textContent = 'API Amazon';
			contenidoObject.data = 'https://afiliados.amazon.es';
			contenido.src = 'https://afiliados.amazon.es';
			break;
	}
}

function appUp(seleccionAppUp){
	mostrarBloques('hojasDeAppUp');
	var titulo = document.getElementById('tituloAppUp');
	var contenidoObject = document.getElementById('contenidoAppUpObject');
	var contenido = document.getElementById('contenidoAppUp');
	switch (seleccionAppUp) {
		case 'parte1' :
			titulo.textContent = 'Parte 1';
			contenidoObject.data = 'appUp/parte1.html';
			contenido.src = 'appUp/parte1.html';
			break;
		case 'parte2' :
			titulo.textContent = 'Parte 2';
			contenidoObject.data = 'appUp/parte2.html';
			contenido.src = 'appUp/parte2.html';
			break;
		case 'parte3' :
			titulo.textContent = 'Parte 3';
			contenidoObject.data = 'appUp/parte3.html';
			contenido.src = 'appUp/parte3.html';
			break;
		case 'parte4' :
			titulo.textContent = 'Parte 4';
			contenidoObject.data = 'appUp/parte4.html';
			contenido.src = 'appUp/parte4.html';
			break;
		case 'parte5' :
			titulo.textContent = 'Parte 5';
			contenidoObject.data = 'appUp/parte5.html';
			contenido.src = 'appUp/parte5.html';
			break;
		default :
			titulo.textContent = 'Parte 1';
			contenidoObject.data = 'appUp/parte1.htmls';
			contenido.src = 'appUp/parte1.htmls';
			break;
	}
}

function botones(seleccionBotones){
	mostrarBloques('hojasDeBotones');
	var titulo = document.getElementById('tituloBotones');
	var contenidoObject = document.getElementById('contenidoBotonesObject');
	var contenido = document.getElementById('contenidoBotones');
	switch (seleccionBotones) {
		case 'animados' :
			titulo.textContent = 'Animados';
			contenidoObject.data = 'botones/animados/index.html';
			contenido.src = 'botones/animados/index.html';
			break;
		case 'Dibujar' :
			titulo.textContent = 'Dibujar en Canvas';
			contenidoObject.data = 'botones/animados/DibujarenCanvas.html';
			contenido.src = 'botones/animados/DibujarenCanvas.html';
			break;
		default :
			titulo.textContent = 'Animados';
			contenidoObject.data = 'botones/animados/index.html';
			contenido.src = 'botones/animados/index.html';
			break;
	}
}

function canvas(seleccionCanvas){
	mostrarBloques('hojasDeCanvas');
	var titulo = document.getElementById('tituloCanvas');
	var contenidoObject = document.getElementById('contenidoCanvasObject');
	var contenido = document.getElementById('contenidoCanvas');
	switch (seleccionCanvas) {
		case 'Hipotrocoide' :
			titulo.textContent = 'Spiro Hipotrocoide';
			contenidoObject.data = 'canvas/SpiroHipotrocoide.html';
			contenido.src = 'canvas/SpiroHipotrocoide.html';
			break;
		case 'Dibujar' :
			titulo.textContent = 'Dibujar en Canvas';
			contenidoObject.data = 'canvas/DibujarenCanvas.html';
			contenido.src = 'canvas/DibujarenCanvas.html';
			break;
		default :
			titulo.textContent = 'Spiro Hipotrocoide';
			contenidoObject.data = 'canvas/SpiroHipotrocoide.html';
			contenido.src = 'canvas/SpiroHipotrocoide.html';
			break;
	}
}

function css(seleccionCss){
	mostrarBloques('hojasDeCss');
	var titulo = document.getElementById('tituloCss');
	var contenidoObject = document.getElementById('contenidoCssObject');
	var contenido = document.getElementById('contenidoCss');
	switch (seleccionCss) {
		case 'compatibilidad' :
			titulo.textContent = 'Compatibilidad con los Navegadores';
			contenidoObject.data = 'http://www.quirksmode.org/css/contents.html';
			contenido.src = 'http://www.quirksmode.org/css/contents.html';
			break;
		case 'CodigosBasicos' :
			titulo.textContent = 'Códigos Básicos';
			contenidoObject.data = 'codigosCss/codigosBasicos/CodigosCssBasicos.html';
			contenido.src = 'codigosCss/codigosBasicos/CodigosCssBasicos.html';
			break;
		case 'cortarPalabras' :
			titulo.textContent = 'Cortar Palabras Largas en un Bloque';
			contenidoObject.data = 'codigosCss/cortarPalabras.html';
			contenido.src = 'codigosCss/cortarPalabras.html';
			break;
		case 'generarCodigos' :
			titulo.textContent = 'Generar Códigos';
			contenidoObject.data = 'http://css3clickchart.com/#box-sizing';
			contenido.src = 'http://css3clickchart.com/#box-sizing';
			break;
		case 'mozillaEsp' :
			titulo.textContent = 'Mozilla Español';
			var articuloMozillaEsp = document.getElementById('hojasDeCss');
			enlaceMozillaEsp = document.createElement('a');
				enlaceMozillaEsp.setAttribute('href', 'https://developer.mozilla.org/es/docs/Referencia_CSS');
				enlaceMozillaEsp.setAttribute('target','blank');
				enlaceMozillaEsp.textContent = 'ir a Mozilla';
			articuloMozillaEsp.appendChild(enlaceMozillaEsp);
			contenidoObject.data = 'https://developer.mozilla.org/es/docs/Referencia_CSS';
			contenido.src = 'https://developer.mozilla.org/es/docs/Referencia_CSS';
			break;
		case 'mozillaComp' :
			titulo.textContent = 'Mozilla Completo';
			var articuloMozillaComp = document.getElementById('hojasDeCss');
			enlaceMozillaComp = document.createElement('a');
				enlaceMozillaComp.setAttribute('href', 'https://developer.mozilla.org/en-US/docs/CSS/CSS_Reference');
				enlaceMozillaComp.setAttribute('target','blank');
				enlaceMozillaComp.textContent = 'ir a Mozilla';
			articuloMozillaComp.appendChild(enlaceMozillaComp);
			contenidoObject.data = 'https://developer.mozilla.org/en-US/docs/CSS/CSS_Reference';
			contenido.src = 'https://developer.mozilla.org/en-US/docs/CSS/CSS_Reference';
			break;
		case 'propiedades' :
			titulo.textContent = 'Propiedades';
			contenidoObject.data = 'http://css-infos.net/';
			contenido.src = 'http://css-infos.net/';
			break;
		case 'Varios' :
			titulo.textContent = 'Varios';
			contenidoObject.data = 'codigosCss/Varios/varios.html';
			contenido.src = 'codigosCss/Varios/varios.html';
			break;
		case 'w3schools' :
			titulo.textContent = 'w3schools';
			contenidoObject.data = 'http://w3schools.com/cssref/';
			contenido.src = 'http://w3schools.com/cssref/';
			break;
		case 'webkit' :
			titulo.textContent = '-webkit';
			contenidoObject.data = 'http://css-infos.net/properties/webkit?goback=.gde_3780522_member_179659691';
			contenido.src = 'http://css-infos.net/properties/webkit?goback=.gde_3780522_member_179659691';
			break;
		default :
			titulo.textContent = 'Códigos Básicos';
			contenidoObject.data = 'codigosCss/codigosBasicos/CodigosCssBasicos.html';
			contenido.src = 'codigosCss/codigosBasicos/CodigosCssBasicos.html';
			break;
	}
}

function codigos(seleccion){
	mostrarBloques('hojasDeCodigos');
	var titulo = document.getElementById('tituloCodigos');
	var contenidoObject = document.getElementById('contenidoCodigosObject');
	var contenido = document.getElementById('contenidoCodigos');
	switch (seleccion) {
		case 'Ascii' :
			titulo.textContent = 'Códigos Ascii';
			contenidoObject.data = 'codigos/pdf/codigos_ascii.pdf';
			contenido.src = 'codigos/pdf/codigos_ascii.pdf';
			break;
		case 'AsciiGeo' :
			titulo.textContent = 'Geometría Ascii';
			contenidoObject.data = 'codigos/Geometric_Shapes.html';
			contenido.src = 'codigos/Geometric_Shapes.html';
			break;
		case 'CSS2' :
			titulo.textContent = 'Códigos CSS2';
			contenidoObject.data = 'codigos/pdf/codigo_css2.pdf';
			contenido.src = 'codigos/pdf/codigo_css2.pdf';
			break;
		case 'Coffescript' :
			titulo.textContent = 'Códigos Coffescript';
			contenidoObject.data = 'codigos/pdf/codigos_coffescript.pdf';
			contenido.src = 'codigos/pdf/codigos_coffescript.pdf';
			break;
		case 'Javascript1' :
			titulo.textContent = 'Códigos Javascript 1';
			contenidoObject.data = 'codigos/pdf/codigos_javascript.pdf';
			contenido.src = 'codigos/pdf/codigos_javascript.pdf';
			break;
		case 'Javascript2' :
			titulo.textContent = 'Códigos Javascript 2';
			contenidoObject.data = 'codigos/pdf/codigos_javascript1.pdf';
			contenido.src = 'codigos/pdf/codigos_javascript1.pdf';
			break;
		case 'Javascript3' :
			titulo.textContent = 'Códigos Javascript 3';
			contenidoObject.data = 'codigos/pdf/codigos_javascript2.pdf';
			contenido.src = 'codigos/pdf/codigos_javascript2.pdf';
			break;
		case 'Javascript4' :
			titulo.textContent = 'Códigos Javascript 4';
			contenidoObject.data = 'codigos/pdf/codigos_javascript3.pdf';
			contenido.src = 'codigos/pdf/codigos_javascript3.pdf';
			break;
		case 'Javascript5' :
			titulo.textContent = 'Códigos Javascript 5';
			contenidoObject.data = 'codigos/pdf/codigos_javascript4.pdf';
			contenido.src = 'codigos/pdf/codigos_javascript4.pdf';
			break;
		case 'Jquery1' :
			titulo.textContent = 'Códigos Jquery 1';
			contenidoObject.data = 'codigos/pdf/codigos_jquery.pdf';
			contenido.src = 'codigos/pdf/codigos_jquery.pdf';
			break;
		case 'Jquery2' :
			titulo.textContent = 'Códigos Jquery 2';
			contenidoObject.data = 'codigos/pdf/codigos_jquery1.pdf';
			contenido.src = 'codigos/pdf/codigos_jquery1.pdf';
			break;
		case 'Web' :
			titulo.textContent = 'Códigos Web';
			contenidoObject.data = 'codigos/pdf/codigo_web.pdf';
			contenido.src = 'codigos/pdf/codigo_web.pdf';
			break;
		default :
			titulo.textContent = 'Códigos Ascii';
			contenidoObject.data = 'codigos/pdf/codigos_ascii.pdf';
			contenido.src = 'codigos/pdf/codigos_ascii.pdf';
			break;
	}
}

function contenido(seleccionContenido){
	mostrarBloques('hojasDeContenido');
	var titulo = document.getElementById('tituloContenido');
	var contenidoObject = document.getElementById('contenidoContenidoObject');
	var contenido = document.getElementById('contenidoContenido');
	switch (seleccionContenido) {
		case 'Acordeon1' :
			titulo.textContent = 'Flexible Slide Acordeón';
			contenidoObject.data = 'contenido/index.html';
			contenido.src = 'contenido/index.html';
			break;
		case 'Acordeon2' :
			titulo.textContent = 'Flexible Slide Acordeón con Cierre';
			contenidoObject.data = 'contenido/index2.html';
			contenido.src = 'contenido/index2.html';
			break;
		case 'paginaCompleta' :
			titulo.textContent = 'Página Completa';
			contenidoObject.data = 'contenido/paginaCompleta/index.html';
			contenido.src = 'contenido/paginaCompleta/index.html';
			break;
		default :
			titulo.textContent = 'Flexible Slide Acordeón';
			contenidoObject.data = 'contenido/index.html';
			contenido.src = 'contenido/index.html';
			break;
	}
}

function disenoArticulo(seleccionDiseno){
	mostrarBloques('hojasDeDiseno');
	var titulo = document.getElementById('tituloDiseno');
	var contenidoObject = document.getElementById('contenidoDisenoObject');
	var contenido = document.getElementById('contenidoDiseno');
	switch (seleccionDiseno) {
		case 'barrasDeProgreso2' :
			titulo.textContent = 'Barras de Progreso 2';
			contenidoObject.data = 'diseno/barrasDeProgreso2.html';
			contenido.src = 'diseno/barrasDeProgreso2.html';
			break;
		case 'boxShadow' :
			titulo.textContent = 'Box Shadow';
			contenidoObject.data = 'diseno/box-shadow.html';
			contenido.src = 'diseno/box-shadow.html';
			break;
		case 'coloresHex' :
			titulo.textContent = 'Colores Hexadecimal';
			contenidoObject.data = 'http://coding.smashingmagazine.com/2012/10/04/the-code-side-of-color/';
			contenido.src = 'http://coding.smashingmagazine.com/2012/10/04/the-code-side-of-color/';
			break;
		case 'coloresHSL' :
			titulo.textContent = 'Colores HSL';
			contenidoObject.data = 'diseno/colorHSL.html';
			contenido.src = 'diseno/colorHSL.html';
			break;
		case 'cursor' :
			titulo.textContent = 'Mostrar diferentes Cursores';
			contenidoObject.data = 'diseno/cursor.html';
			contenido.src = 'diseno/cursor.html';
			break;
		case 'efectosImagen' :
			titulo.textContent = 'Efectos con Imagen';
			contenidoObject.data = 'diseno/efectosImagen/index.html';
			contenido.src = 'diseno/efectosImagen/index.html';
			break;
		case 'generarCodigos' :
			titulo.textContent = 'Generar Códigos';
			contenidoObject.data = 'http://ie.microsoft.com/testdrive/Graphics/hands-on-css3/Default.html';
			contenido.src = 'http://ie.microsoft.com/testdrive/Graphics/hands-on-css3/Default.html';
			break;
		case 'intercambioPalabra' :
			titulo.textContent = 'Intercambio de Palabras';
			contenidoObject.data = 'diseno/intercambioPalabra/index.html';
			contenido.src = 'diseno/intercambioPalabra/index.html';
			break;
		case 'nubes' :
			titulo.textContent = 'Comentarios en Nubes';
			contenidoObject.data = 'diseno/nubes.html';
			contenido.src = 'diseno/nubes.html';
			break;
		case 'texto3D' :
			titulo.textContent = 'Generar Texto en 3D';
			contenidoObject.data = 'http://www.3dcsstext.com/';
			contenido.src = 'http://www.3dcsstext.com/';
			break;
		case 'tipografia' :
			titulo.textContent = 'Efectos Tipográficos';
			contenidoObject.data = 'diseno/tipografia/index.html';
			contenido.src = 'diseno/tipografia/index.html';
			break;
		default :
			titulo.textContent = 'Barras de Progreso 2';
			contenidoObject.data = 'diseno/barrasDeProgreso2.html';
			contenido.src = 'diseno/barrasDeProgreso2.html';
			break;
	}
}

function documentos(seleccionDocumentos){
	mostrarBloques('hojasDeDocumentos');
	var titulo = document.getElementById('tituloDocumentos');
	var contenido = document.getElementById('contenidoDocumentos');
	switch (seleccionDocumentos) {
		case 'webDesign' :
			titulo.textContent = 'Responsive Web Design';
			contenido.src = 'documentos/webDesign.pdf';
			break;
		default :
			titulo.textContent = 'Responsive Web Design';
			contenido.src = 'documentos/webDesign.pdf';
			break;
	}
}

function fuentes() {
	var contenidoFuentes = document.getElementById('fuentesBD');
		for (i in tipoFuente){
			var tituloFuentes = document.createElement('h4');
			var mayusculasFuentes = document.createElement('p');
			var minusculasFuentes = document.createElement('p');
			var numerosFuentes = document.createElement('p');
			var estiloFuentes = 'font-family:' + tipoFuente[i] + ';';
//			tituloFuentes.setAttribute('style',estiloFuentes);
			tituloFuentes.textContent = tipoFuente[i];
			mayusculasFuentes.setAttribute('style',estiloFuentes);
			mayusculasFuentes.textContent = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ - ÁÉÍÓÚ';
			minusculasFuentes.setAttribute('style',estiloFuentes);
			minusculasFuentes.textContent = 'abcdefghijklmnñopqrstuvwxyz - áéíóú';
			numerosFuentes.setAttribute('style',estiloFuentes);
			numerosFuentes.textContent = '1234567890';
			contenidoFuentes.appendChild(tituloFuentes);
			contenidoFuentes.appendChild(mayusculasFuentes);
			contenidoFuentes.appendChild(minusculasFuentes);
			contenidoFuentes.appendChild(numerosFuentes);
		}
	mostrarBloques("fuentesBD");
}

function formularios(seleccionFormularios){
	mostrarBloques('hojasDeFormularios');
	var titulo = document.getElementById('tituloFormularios');
	var contenidoObject = document.getElementById('contenidoFormulariosObject');
	var contenido = document.getElementById('contenidoFormularios');
	switch (seleccionFormularios) {
		case 'emailUrl' :
			titulo.textContent = 'Input: Email & Url.';
			contenidoObject.data = 'formularios/inputEmailUrl.html';
			contenido.src = 'formularios/inputEmailUrl.html';
			break;
		case 'placeHolder' :
			titulo.textContent = 'Input: PlaceHolder.';
			contenidoObject.data = 'formularios/inputPlaceholder.html';
			contenido.src = 'formularios/inputPlaceholder.html';
			break;
		default :
			titulo.textContent = 'Input: PlaceHolder.';
			contenidoObject.data = 'formularios/inputPlaceholder.html';
			contenido.src = 'formularios/inputPlaceholder.html';
			break;
	}
}

function fuentesArticulo(seleccionFuentes){
	mostrarBloques('hojasDeFuentes');
	var titulo = document.getElementById('tituloFuentes');
	var contenidoObject = document.getElementById('contenidoFuentesObject');
	var contenido = document.getElementById('contenidoFuentes');
	switch (seleccionFuentes) {
		case 'fuentesGenerar' :
			titulo.textContent = 'Generar Textos';
			contenidoObject.data = 'http://www.typetester.org/';
			contenido.src = 'http://www.typetester.org/';
			break;
		case 'fuentesIconos' :
			titulo.textContent = 'Fuentes Iconos';
			contenidoObject.data = 'fuentes/raphaelicons/example.html';
			contenido.src = 'fuentes/raphaelicons/example.html';
			break;
		case 'fuentesInspiration' :
			titulo.textContent = 'Fuentes Inspiration';
			contenidoObject.data = 'http://typespiration.com/';
			contenido.src = 'http://typespiration.com/';
			break;
		default :
			titulo.textContent = 'Generar Textos';
			contenidoObject.data = 'http://www.typetester.org/';
			contenido.src = 'http://www.typetester.org/';
			break;
	}
}

function html(seleccionHtml){
	mostrarBloques('hojasDeHtml');
	var titulo = document.getElementById('tituloHtml');
	var contenidoObject = document.getElementById('contenidoHtmlObject');
	var contenido = document.getElementById('contenidoHtml');
	switch (seleccionHtml) {
		case 'asyncDefer' :
			titulo.textContent = 'Script: Async & Defer';
			contenidoObject.data = 'html/scriptAsyncDefer.html';
			contenido.src = 'html/scriptAsyncDefer.html';
			break;
		case 'download' :
			titulo.textContent = 'Download - Descargar un archivo.';
			contenidoObject.data = 'html/download.html';
			contenido.src = 'html/download.html';
			break;
		case 'prefetch' :
			titulo.textContent = 'Link rel=Prefetch';
			contenidoObject.data = 'html/Link Prefetch.html';
			contenido.src = 'html/Link Prefetch.html';
			break;
		default :
			titulo.textContent = 'Aplicar Filtros';
			contenidoObject.data = 'html/download.html';
			contenido.src = 'html/download.html';
			break;
	}
}

function imagenes(seleccionImagenes){
	mostrarBloques('hojasDeImagenes');
	var titulo = document.getElementById('tituloImagenes');
	var contenidoObject = document.getElementById('contenidoImagenesObject');
	var contenido = document.getElementById('contenidoImagenes');
	switch (seleccionImagenes) {
		case 'filtros' :
			titulo.textContent = 'Aplicar Filtros';
			contenidoObject.data = 'imagenes/css-filters.html';
			contenido.src = 'imagenes/css-filters.html';
			break;
		default :
			titulo.textContent = 'Aplicar Filtros';
			contenidoObject.data = 'imagenes/css-filters.html';
			contenido.src = 'imagenes/css-filters.html';
			break;
	}
}

function javascript(seleccionJavascript){
	mostrarBloques('hojasDeJavascript');
	var titulo = document.getElementById('tituloJavascript');
	var contenidoObject = document.getElementById('contenidoJavascriptObject');
	var contenido = document.getElementById('contenidoJavascript');
	switch (seleccionJavascript) {
		case 'AvanzaRetrocedeNavegador' :
			titulo.textContent = 'Avanza Retrocede Navegador';
			contenidoObject.data = 'js/AvanzaRetrocedeNavegador.html';
			contenido.src = 'js/AvanzaRetrocedeNavegador.html';
			break;
		case 'camera' :
			titulo.textContent = 'user’s camera and microphone '+"'.getUserMedia'";
			contenidoObject.data = 'js/camera.html';
			contenido.src = 'js/camera.html';
			break;
		case 'className' :
			titulo.textContent = 'Aplicar '+"'.className'"+' a Elementos';
			contenidoObject.data = 'js/aplicarClassName.html';
			contenido.src = 'js/aplicarClassName.html';
			break;
		case 'comunicacion' :
			titulo.textContent = 'Metodos de comunicación : XHR & XHR2, Web Messaging, Web Sockets, Server Sent Events y Web Workers';
			contenidoObject.data = 'js/comunicacion.html';
			contenido.src = 'js/comunicacion.html';
			break;
		case 'crearTablas' :
			titulo.textContent = 'Crear Tablas';
			contenidoObject.data = 'js/crearTablas.html';
			contenido.src = 'js/crearTablas.html';
			break;
		case 'dataAtributes' :
			titulo.textContent = 'Aplicar atributos '+"'data-'"+' a Elementos';
			contenidoObject.data = 'js/dataAtributes.html';
			contenido.src = 'js/dataAtributes.html';
			break;
		case 'DragAndDrop' :
			titulo.textContent = 'Drag And Drop';
			contenidoObject.data = 'js/DragAndDrop/index.html';
			contenido.src = 'js/DragAndDrop/index.html';
			break;
		case 'eMail1' :
			titulo.textContent = 'eMail 1';
			contenidoObject.data = 'http://htmlemailboilerplate.com/';
			contenido.src = 'http://htmlemailboilerplate.com/';
			break;
		case 'eMail2' :
			titulo.textContent = 'eMail 2';
			contenidoObject.data = 'https://www.getfractal.com/';
			contenido.src = 'https://www.getfractal.com/';
			break;
		case 'efectoLetras' :
			titulo.textContent = 'Efectos sobre letras';
			contenidoObject.data = 'js/efectoLetras.html';
			contenido.src = 'js/efectoLetras.html';
			break;
		case 'efectoImagen' :
			titulo.textContent = 'Efecto sobre Imagenes';
			contenidoObject.data = 'js/efectoImagen/index.html';
			contenido.src = 'js/efectoImagen/index.html';
			break;
		case 'ejercicios' :
			titulo.textContent = 'Ejercicios (revisar archivo)';
			contenidoObject.data = 'js/ejercicios.html';
			contenido.src = 'js/ejercicios.html';
			break;
		case 'fecha' :
			titulo.textContent = 'Mostrar Fecha';
			contenidoObject.data = 'js/fecha.html';
			contenido.src = 'js/fecha.html';
			break;
		case 'fechaSelect' :
			titulo.textContent = 'Seleccionar Fecha';
			contenidoObject.data = 'js/fechasFunciones.html';
			contenido.src = 'js/fechasFunciones.html';
			break;
		case 'formulario' :
			titulo.textContent = 'Formulario (revisar)';
			contenidoObject.data = 'js/formulario.html';
			contenido.src = 'js/formulario.html';
			break;
		case 'geolocation' :
			titulo.textContent = 'Geolocation';
			contenidoObject.data = 'js/geolocation.html';
			contenido.src = 'js/geolocation.html';
			break;
		case 'geolocation2' :
			titulo.textContent = 'Direccion IP y Geolocation';
			contenidoObject.data = 'js/direccionIP.html';
			contenido.src = 'js/direccionIP.html';
			break;
		case 'history' :
			titulo.textContent = "Historial - 'history'";
			contenidoObject.data = 'js/history.html';
			contenido.src = 'js/history.html';
			break;
		case 'history' :
			titulo.textContent = "Historial - 'history'";
			contenidoObject.data = 'js/history.html';
			contenido.src = 'js/history.html';
			break;
		case 'html5' :
			titulo.textContent = "Html5 Apis";
			contenidoObject.data = 'js/html5 Apis.html';
			contenido.src = 'js/html5 Apis.html';
			break;
		case 'lightbox' :
			titulo.textContent = 'lightbox';
			contenidoObject.data = 'js/lightbox/CajadeLuz.html';
			contenido.src = 'js/lightbox/CajadeLuz.html';
			break;
		case 'lightbox2' :
			titulo.textContent = 'lightbox 2';
			contenidoObject.data = 'js/lightbox2/index.html';
			contenido.src = 'js/lightbox2/index.html';
			break;
		case 'location' :
			titulo.textContent = 'Localización de la Página';
			contenidoObject.data = 'js/location.html';
			contenido.src = 'js/location.html';
			break;
		case 'mouse' :
			titulo.textContent = 'Comentario siguiendo el Mouse';
			contenidoObject.data = 'js/mouse.html';
			contenido.src = 'js/mouse.html';
			break;
		case 'navigator' :
			titulo.textContent = 'Información del Navegador';
			contenidoObject.data = 'js/navigator.html';
			contenido.src = 'js/navigator.html';
			break;
		case 'nuevaVentana' :
			titulo.textContent = 'Abrir nueva ventana';
			contenidoObject.data = 'js/nuevaVentana.html';
			contenido.src = 'js/nuevaVentana.html';
			break;
		case 'POO' :
			titulo.textContent = 'POO - ' + "'class' y 'object'";
			contenidoObject.data = 'js/POO.html';
			contenido.src = 'js/POO.html';
			break;
		case 'server' :
			titulo.textContent = 'Server-Sent Events';
			contenidoObject.data = 'js/server.html';
			contenido.src = 'js/server.html';
			break;
		case 'slider' :
			titulo.textContent = 'Slider Valor';
			contenidoObject.data = 'js/slider.html';
			contenido.src = 'js/slider.html';
			break;
		case 'webStorage' :
			titulo.textContent = 'Web Storage - '+"'localStorage'";
			contenidoObject.data = 'js/webStorage.html';
			contenido.src = 'js/webStorage.html';
			break;
		case 'zip' :
			titulo.textContent = 'Create .zip files';
			contenidoObject.data = 'js/ArchivoZip/index.html';
			contenido.src = 'js/ArchivoZip/index.html';
			break;
		default :
			titulo.textContent = 'Aplicar '+'.className'+' a Elementos';
			contenidoObject.data = 'javaScript/aplicarClassName.html';
			contenido.src = 'javaScript/aplicarClassName.html';
			break;
	}
}

function javaScriptManual(seleccion){
	mostrarBloques('hojasDeJavascriptManual');
	var titulo = document.getElementById('tituloJavascriptManual');
	var contenido = document.getElementById('contenidoJavascriptManual');
	switch (seleccion) {
		case 'algunosCodigos' :
			titulo.textContent = 'Algunos codigos javaScript';
			contenido.src = 'js/Manuales/Algunos codigos javascript.pdf';
			break;
		case 'ejemplos' :
			titulo.textContent = 'Ejemplos javaScript';
			contenido.src = 'js/Manuales/Ejemplos javascript.pdf';
			break;
		case 'introduccion' :
			titulo.textContent = 'Introducción javaScript';
			contenido.src = 'js/Manuales/introduccion javascript.pdf';
			break;
		case 'introduccion2' :
			titulo.textContent = 'Introducción javaScript 2';
			contenido.src = 'js/Manuales/introduccion javascript 2.pdf';
			break;
		default :
			titulo.textContent = 'Algunos codigos javaScript';
			contenido.src = 'js/Manuales/Algunos codigos javascript.pdf';
			break;
	}
}

function jquery(seleccionJquery){
	mostrarBloques('hojasDeJquery');
	var titulo = document.getElementById('tituloJquery');
	var contenidoObject = document.getElementById('contenidoJqueryObject');
	var contenido = document.getElementById('contenidoJquery');
	switch (seleccionJquery) {
		case 'Audio' :
			titulo.textContent = 'Audio (jQuery/audiojs/audiojs.zip)';
			contenidoObject.data = 'jQuery/audio.html';
			contenido.src = 'jQuery/audio.html';
			break;
		case 'Social' :
			titulo.textContent = 'Social Plug-In';
			contenidoObject.data = 'jQuery/SocialPlug-In/index.html';
			contenido.src = 'jQuery/SocialPlug-In/index.html';
			break;
		case 'efectosTexto' :
			titulo.textContent = 'Efectos de Texto';
			contenidoObject.data = 'http://www.gloobs.com/blog/alucinantes-efectos-en-texto-con-jquery/';
			contenido.src = 'http://www.gloobs.com/blog/alucinantes-efectos-en-texto-con-jquery/';
			break;
		case 'GoogleMaps' :
			titulo.textContent = 'Google Maps';
			contenidoObject.data = 'jQuery/mapas/GoogleMaps.htm';
			contenido.src = 'jQuery/mapas/GoogleMaps.htm';
			break;
		case 'mouseApuntador' :
			titulo.textContent = 'Mouse Apuntador';
			contenidoObject.data = 'jQuery/mouseApuntador/index.html';
			contenido.src = 'jQuery/mouseApuntador/index.html';
			break;
		case 'componentes' :
			titulo.textContent = 'Componentes';
			contenidoObject.data = 'jQuery/componentes/index.html';
			contenido.src = 'jQuery/componentes/index.html';
			break;
		case 'tabla' :
			titulo.textContent = 'Tabla Editable';
			contenidoObject.data = 'jQuery/editablegrid-1.0.11/examples/demo_attach.html';
			contenido.src = 'jQuery/editablegrid-1.0.11/examples/demo_attach.html';
			break;
		default :
			titulo.textContent = 'audio';
			contenidoObject.data = 'jQuery/audio.html';
			contenido.src = 'jQuery/audio.html';
			break;
	}
}

function listas(seleccionListas){
	mostrarBloques('hojasDeListas');
	var titulo = document.getElementById('tituloListas');
	var contenidoObject = document.getElementById('contenidoListasObject');
	var contenido = document.getElementById('contenidoListas');
	switch (seleccionListas) {
		case 'animadas' :
			titulo.textContent = 'Numeracion De Listas Animadas';
			contenidoObject.data = 'listas/animadas.html';
			contenido.src = 'listas/animadas.html';
			break;
		case 'Numeracion' :
			titulo.textContent = 'Numeracion De Listas (auto)';
			contenidoObject.data = 'listas/NumeracionDeListas.html';
			contenido.src = 'listas/NumeracionDeListas.html';
			break;
		default :
			titulo.textContent = 'Numeracion De Listas (auto)';
			contenidoObject.data = 'listas/NumeracionDeListas.html';
			contenido.src = 'listas/NumeracionDeListas.html';
			break;
	}
}

function login(seleccionLogin){
	mostrarBloques('hojasDeLogin');
	var titulo = document.getElementById('tituloLogin');
	var contenidoObject = document.getElementById('contenidoLoginObject');
	var contenido = document.getElementById('contenidoLogin');
	switch (seleccionLogin) {
		case 'papel' :
			titulo.textContent = 'Papel de Fondo';
			contenidoObject.data = 'login/papel/index.html';
			contenido.src = 'login/papel/index.html';
			break;
		case 'login1' :
			titulo.textContent = 'Login 1';
			contenidoObject.data = 'login/login1.html';
			contenido.src = 'login/login1.html';
			break;
		case 'login2' :
			titulo.textContent = 'Login 2';
			contenidoObject.data = 'login/login2.html';
			contenido.src = 'login/login2.html';
			break;
		case 'login3' :
			titulo.textContent = 'Login 3';
			contenidoObject.data = 'login/login3.html';
			contenido.src = 'login/login3.html';
			break;
		case 'login4' :
			titulo.textContent = 'Login 4';
			contenidoObject.data = 'login/login4.html';
			contenido.src = 'login/login4.html';
			break;
		default :
			titulo.textContent = 'Papel de Fondo';
			contenidoObject.data = 'login/papel/index.html';
			contenido.src = 'login/papel/index.html';
			break;
	}
}

function menus(seleccionMenus){
	mostrarBloques('hojasDeMenus');
	var titulo = document.getElementById('tituloMenus');
	var contenidoObject = document.getElementById('contenidoMenusObject');
	var contenido = document.getElementById('contenidoMenus');
	switch (seleccionMenus) {
		case 'animation' :
			titulo.textContent = 'Menu Animado';
			contenidoObject.data = 'menus/Animation Menus.html';
			contenido.src = 'menus/Animation Menus.html';
			break;
		case 'Desplegar' :
			titulo.textContent = 'Menu y Desplegar';
			contenidoObject.data = 'menus/MenuyDesplegar.html';
			contenido.src = 'menus/MenuyDesplegar.html';
			break;
		case 'Varios' :
			titulo.textContent = 'Menu Varios Diseños (carpeta styles)  (modificar página)';
			contenidoObject.data = 'menus/MenuVariosDisenos.html';
			contenido.src = 'menus/MenuVariosDisenos.html';
			break;
		case 'Blur' :
			titulo.textContent = 'Blur Menu  (con otros estilos "css")';
			contenidoObject.data = 'menus/BlurMenu.html';
			contenido.src = 'menus/BlurMenu.html';
			break;
		case 'Blur1' :
			titulo.textContent = 'Blur Menu  (revisar)';
			contenidoObject.data = 'menus/blur_1/index.html';
			contenido.src = 'menus/blur_1/index.html';
			break;
		case 'Flipping' :
			titulo.textContent = 'Animated 3D Flipping';
			contenidoObject.data = 'menus/3d-menu.html';
			contenido.src = 'menus/3d-menu.html';
			break;
		default :
			titulo.textContent = 'Menu y Desplegar';
			contenidoObject.data = 'menus/MenuyDesplegar.html';
			contenido.src = 'menus/MenuyDesplegar.html';
			break;
	}
}

function navegadores(seleccionNavegador){
	mostrarBloques('hojasDeNavegador');
	var titulo = document.getElementById('tituloNavegador');
	var contenidoObject = document.getElementById('contenidoNavegadorObject');
	var contenido = document.getElementById('contenidoNavegador');
	switch (seleccionNavegador) {
		case 'ieTestDrive' :
			titulo.textContent = 'IE Test Drive';
			contenidoObject.data = 'http://ie.microsoft.com/testdrive/Default.html';
			contenido.src = 'http://ie.microsoft.com/testdrive/Default.html';
			break;
		default :
			titulo.textContent = 'IE Test Drive';
			contenidoObject.data = 'http://ie.microsoft.com/testdrive/Default.html';
			contenido.src = 'http://ie.microsoft.com/testdrive/Default.html';
			break;
	}
}

function pantalla(seleccionPantalla){
	mostrarBloques('hojasDePantalla');
	var titulo = document.getElementById('tituloPantalla');
	var contenidoObject = document.getElementById('contenidoPantallaObject');
	var contenido = document.getElementById('contenidoPantalla');
	switch (seleccionPantalla) {
		case 'FullScreen' :
			titulo.textContent = 'Full Screen';
			contenidoObject.data = 'pantalla/FullScreen.html';
			contenido.src = 'pantalla/FullScreen.html';
			break;
		default :
			titulo.textContent = 'Full Screen';
			contenidoObject.data = 'pantalla/FullScreen.html';
			contenido.src = 'pantalla/FullScreen.html';
			break;
	}
}

function plantillas(seleccionPlantillas){
	mostrarBloques('hojasDePlantillas');
	var titulo = document.getElementById('tituloPlantillas');
	var contenidoObject = document.getElementById('contenidoPlantillasObject');
	var contenido = document.getElementById('contenidoPlantillas');
	switch (seleccionPlantillas) {
		case '960GridSystem1' :
			titulo.textContent = '960 Grid System 1';
			contenidoObject.data = 'plantillas/960GridSystem/960GridSystem1.html';
			contenido.src = 'plantillas/960GridSystem/960GridSystem1.html';
			break;
		case '960GridSystem2' :
			titulo.textContent = '960 Grid System 2';
			contenidoObject.data = 'plantillas/960GridSystem/960GridSystem2.html';
			contenido.src = 'plantillas/960GridSystem/960GridSystem2.html';
			break;
		default :
			titulo.textContent = '960 Grid System 1';
			contenidoObject.data = 'plantillas/960GridSystem/960GridSystem1.html';
			contenido.src = 'plantillas/960GridSystem/960GridSystem1.html';
			break;
	}
}

function redes(seleccionRedes){
	mostrarBloques('hojasDeRedes');
	var titulo = document.getElementById('tituloRedes');
	var contenidoObject = document.getElementById('contenidoRedesObject');
	var contenido = document.getElementById('contenidoRedes');
	switch (seleccionRedes) {
		case 'Facebook' :
			titulo.textContent = 'Facebook';
			contenidoObject.data = 'redesSociales/facebook.html';
			contenido.src = 'redesSociales/facebook.html';
			break;
		case 'Twitter' :
			titulo.textContent = 'Twitter';
			contenidoObject.data = 'redesSociales/twitter.html';
			contenido.src = 'redesSociales/twitter.html';
			break;
		default :
			titulo.textContent = 'Facebook';
			contenidoObject.data = 'redesSociales/facebook.html';
			contenido.src = 'redesSociales/facebook.html';
			break;
	}
}

function slides(seleccionSlides){
	mostrarBloques('hojasDeSlides');
	var titulo = document.getElementById('tituloSlides');
	var contenidoObject = document.getElementById('contenidoSlidesObject');
	var contenido = document.getElementById('contenidoSlides');
	switch (seleccionSlides) {
		case 'pantallaCompleta' :
			titulo.textContent = 'Pantalla Completa';
			contenidoObject.data = 'slideshow/pantallaCompleta/index.html';
			contenido.src = 'slideshow/pantallaCompleta/index.html';
			break;
		case 'varios' :
			titulo.textContent = 'Varios (chrome)';
			contenidoObject.data = 'slideshow/varios/index.html';
			contenido.src = 'slideshow/varios/index.html';
			break;
		default :
			titulo.textContent = 'Pantalla Completa';
			contenidoObject.data = 'slideshow/pantallaCompleta/index.html';
			contenido.src = 'slideshow/pantallaCompleta/index.html';
			break;
	}
}

function scroll(seleccionScroll){
	mostrarBloques('hojasDeScroll');
	var titulo = document.getElementById('tituloScroll');
	var contenidoObject = document.getElementById('contenidoScrollObject');
	var contenido = document.getElementById('contenidoScroll');
	switch (seleccionScroll) {
		case 'BackgroundScroll' :
			titulo.textContent = 'Background Scroll con Imagenes';
			contenidoObject.data = 'scroll/backgroundScroll/index.html';
			contenido.src = 'scroll/backgroundScroll/indes.html';
			break;
		case 'SidebarFija' :
			titulo.textContent = 'Sidebar Fija';
			contenidoObject.data = 'scroll/sidebar.html';
			contenido.src = 'scroll/sidebar.html';
			break;
		case 'SidebarFlotante' :
			titulo.textContent = 'Sidebar Flotante';
			contenidoObject.data = 'scroll/sidebar2.html';
			contenido.src = 'scroll/sidebar2.html';
			break;
		default :
			titulo.textContent = 'Flexible Slide Acordeón';
			contenidoObject.data = 'scroll/sidebar.html';
			contenido.src = 'scroll/sidebar.html';
			break;
	}
}

function svg(seleccionSvg){
	mostrarBloques('hojasDeSvg');
	var titulo = document.getElementById('tituloSvg');
	var contenidoObject = document.getElementById('contenidoSvgObject');
	var contenido = document.getElementById('contenidoSvg');
	switch (seleccionSvg) {
		case 'Principal' :
			titulo.textContent = 'SVG Principal';
			contenidoObject.data = 'svg/svg.html';
			contenido.src = 'svg/svg.html';
			break;
		default :
			titulo.textContent = 'SVG Principal';
			contenidoObject.data = 'svg/svg.html';
			contenido.src = 'svg/svg.html';
			break;
	}
}

function validacion(seleccionValidacion){
	mostrarBloques('hojasDeValidacion');
	var titulo = document.getElementById('tituloValidacion');
	var contenidoObject = document.getElementById('contenidoValidacionObject');
	var contenido = document.getElementById('contenidoValidacion');
	switch (seleccionValidacion) {
		case 'w3cCss' :
			titulo.textContent = 'W3C Css Validación';
			contenidoObject.data = 'http://jigsaw.w3.org/css-validator/';
			contenido.src = 'http://jigsaw.w3.org/css-validator/';
			break;
		default :
			titulo.textContent = 'W3C Css Validación';
			contenidoObject.data = 'http://jigsaw.w3.org/css-validator/';
			contenido.src = 'http://jigsaw.w3.org/css-validator/';
			break;
	}
}

function varios(seleccionVarios){
	mostrarBloques('hojasDeVarios');
	var titulo = document.getElementById('tituloVarios');
	var contenidoObject = document.getElementById('contenidoVariosObject');
	var contenido = document.getElementById('contenidoVarios');
	switch (seleccionVarios) {
		case 'camara' :
			titulo.textContent = 'WebCam';
			contenidoObject.data = 'varios/camara.html';
			contenido.src = 'varios/camara.html';
			break;
		default :
			titulo.textContent = 'WebCam';
			contenidoObject.data = 'varios/camara.html';
			contenido.src = 'varios/camara.html';
			break;
	}
}

function w3c(seleccionW3C){
	mostrarBloques('hojasDeW3C');
	var titulo = document.getElementById('tituloW3C');
	var contenidoObject = document.getElementById('contenidoW3CObject');
	var contenido = document.getElementById('contenidoW3C');
	switch (seleccionW3C) {
		case 'principal' :
			titulo.textContent = 'Principal';
			contenidoObject.data = 'http://www.w3.org/';
			contenido.src = 'http://www.w3.org/';
			break;
		case 'cssComandos' :
			titulo.textContent = 'CSS Comandos';
			contenidoObject.data = 'http://www.w3.org/TR/CSS/';
			contenido.src = 'http://www.w3.org/TR/CSS/';
			break;
		case 'cssContent' :
			titulo.textContent = 'CSS Content, Counter, List';
			contenidoObject.data = 'http://www.w3.org/TR/CSS21/generate.html';
			contenido.src = 'http://www.w3.org/TR/CSS21/generate.html/';
			break;
		case 'cssMediaQ' :
			titulo.textContent = 'CSS Media Queries';
			contenidoObject.data = 'http://www.w3.org/TR/css3-mediaqueries/';
			contenido.src = 'http://www.w3.org/TR/css3-mediaqueries/';
			break;
		default :
			titulo.textContent = 'Principal';
			contenidoObject.data = 'http://www.w3.org/';
			contenido.src = 'http://www.w3.org/';
			break;
	}
}
