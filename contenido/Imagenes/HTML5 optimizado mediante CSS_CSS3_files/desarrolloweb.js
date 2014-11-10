var cargado = false;

window.addEvent('domready', function(){
	cargado = true;
});

function muestra_imagen(archivo,ancho,alto,pie){
 if (cargado){
	var capa_ampliacion = $('ampliacion');
	var capa_c1 = $('c1');
	var capa_cerrarampliacion = $('cerrarampliacion');
	var cargando = $('cargando');
	var cerrar_arriba = $('cerrararriba');
	var piefoto = $('imgapmpie');
	
	capa_ampliacion.setOpacity(0);
		
	mitad_top = parseInt(window.getScrollTop() + (window.getHeight()/2));
	mitad_left = parseInt(window.getScrollLeft() + (window.getWidth()/2));
	
	top_cargando = mitad_top - 21;
	left_cargando = mitad_left - 21;
	cargando.setStyle('left', left_cargando + 'px');
	cargando.setStyle('top', top_cargando + 'px');
	cargando.setStyle('opacity', 1);

	capa_ampliacion.setStyle('width', ancho + 'px');
	capa_ampliacion.setStyle('height', alto + 30 + 29 + 'px');
	capa_c1.setStyle('width', ancho + 'px');
	capa_c1.setStyle('height', alto + 'px');
	capa_cerrarampliacion.setStyle ('width', ancho + 'px');
	cerrar_arriba.setStyle ('width', ancho + 'px');
	
	pos_left = parseInt (mitad_left - (ancho/2));
	pos_top = parseInt (mitad_top - (alto/2));
	capa_ampliacion.setStyle('left', pos_left + 'px');
	capa_ampliacion.setStyle('top', pos_top + 'px');
	
	piefoto.set("html", pie);
	
	img = new Element('img',{'width': ancho, 'height': alto, 'id': 'imagenamp'});
	
	img.addEvent('load', function() {
			img.replaces($('imagenamp'));
			cargando.setOpacity(0);
			efecto = new Fx.Tween(capa_ampliacion, {duration: 1000});
			efecto.start('opacity', 0,1);
		});
	img.setProperty('src', archivo);
	
 }
}


function cerrar_ampliacion(){
	var capa_ampliacion = $('ampliacion');
	efecto = new Fx.Tween(capa_ampliacion, {duration: 1000});
	efecto.start('opacity', 1,0);
}
var CajaLoginUp = new Class({
	estado: "oculto",
	
	initialize: function(contenedorLogin,cajaLogin){
		this.contenedorLogin = $(contenedorLogin);
		this.cajaLogin  = $(cajaLogin);
		this.fxExpandir = new Fx.Tween(this.contenedorLogin, {
			property: 'height',
			onComplete: function(){
				if(this.estado=="expando"){
					this.cajaLogin.set("styles", {'display': 'block', 'opacity': 0});
					this.fxFade.start(0,1);
				}else{
					this.estado = "oculto";
				}
			}.bind(this)
		});
		this.fxFade = new Fx.Tween(this.cajaLogin, {
			property: 'opacity',
			onComplete: function(){
				if(this.estado=="expando"){
					this.estado="completo";
				}else{
					this.fxExpandir.start("0px");
				}
			}.bind(this)
		});
	},
	muestraLogin: function(){
		this.estado="expando";
		this.fxExpandir.start("215px");
	},
	ocultaLogin: function(){
		this.estado="contrae";
		this.fxFade.start(1,0);
	},
	accion: function(){
		if (this.estado=="oculto"){
			this.muestraLogin();
		}else{
			if (this.estado=="completo"){
				this.ocultaLogin();
			}
		}
	}
});

var FormLoginAjax = new Class({
	initialize: function(){
		this.f=$('formullogin');
		this.f.bEnv=$('btnlogin');
		this.f.cEnv=$('cbtnenv');
		
		this.f.addEvent('submit', function(e){
			e.stop();
			this.bEnv.set("styles", {"display": "none"});
			this.cEnv.addClass("cargandocontenido");
			this.set('send', {
				onComplete: function(response) { 
					this.cEnv.removeClass("cargandocontenido");
					var mostrarError = "";
					var respuesta = JSON.decode.attempt(response);
					if ($defined(respuesta)){
						if ($defined(respuesta.valido)) {
							if (respuesta.valido == "1") {
								var mnsg=new Element("div",{"class": "fuente8 espacioarriba","html": "Entrando en un instante..."});
								mnsg.inject(this.bEnv, "before");
								window.location = respuesta.url;
							}else{
								mostrarError = respuesta.mensaje;
							}
						}else{
							mostrarError = "json";
						}
					}else{
						mostrarError = "json";
					}
					if (mostrarError != ""){
						this.bEnv.set("styles", {"display": "inline"});
						if (mostrarError == "json"){
							mostrarError="<b>Imposible procesar:</b> Hemos recibido una respuesta mal formada del servidor.";
						}
						var mensaje = new PopupDHTML(null,{"html": mostrarError, "lanzar": true, "titulo": "Fallo de autenticación", "ancho": 350, "alto": 150});

					}
							
								
				}.bind(this)
			});
			this.send();
		});
	}
});

window.addEvent('domready', function(){
	if($defined($('enlacelogin'))){
		LoginPrincipal = new CajaLoginUp("clogin","flogin");
		$('enlacelogin').addEvent('click', function(evento){
			LoginPrincipal.accion();
		});
	}
	if($defined($('formullogin'))){
		var alogin = new FormLoginAjax();
	}
});

var OpcionPrincipal = new Class({
	initialize: function(texto, url, indice, navegadorDondeEstoy, claseEspecial){
		this.texto = texto;
		this.url = url;
		this.indice = indice;
		this.navegadorDondeEstoy = navegadorDondeEstoy;
		this.claseEspecial = claseEspecial;
		this.enlace = new Element("a", {href: this.url});
		this.enlace.set("html",this.texto); 
		this.enlace.addEvent("mouseenter",function(){
			this.navegadorDondeEstoy.ocultaSubmenus();
			this.navegadorDondeEstoy.muestraSubmenu(this.indice);
		}.bind(this));
		this.enlace.addEvent("mouseleave",function(){
			this.navegadorDondeEstoy.ocultaSubmenuRetardo(this.indice);
		}.bind(this));
	},
	
	dameCodigo: function(){
		return "<li class='" + this.claseEspecial + "'><a href='" + this.url + "'>" + this.texto + "</a></li>";
	},
	dameEnlace: function(){
		return this.enlace;
	},
	
	dameElementoLista: function(){
		var elementoLista = new Element("li",{'class': this.claseEspecial});
		this.enlace.inject(elementoLista);
		return elementoLista;
	}
});
var OpcionSecundaria = new Class({
	initialize: function(texto, url){
		this.texto = texto;
		this.url = url;
	},
	
	dameCodigo: function(){
		return "<div class='opcionessubnavegador'><a href='" + this.url + "'>" + this.texto + "</a></div>";
	}
});
var SubNavegador = new Class({
	initialize: function(arrayComponentes,indice, navegadorPresente, desplazamientoSubmenu){
		this.navegadorDondeEstoy = navegadorPresente;
		this.indice = indice;
		this.desplazamientoSubmenu = desplazamientoSubmenu;
		this.elementos = new Array();
		var i
		for (i=0; i<arrayComponentes[0].length; i++){
			this.elementos.include(new OpcionSecundaria(arrayComponentes[0][i], arrayComponentes[1][i]));
		}
		
		this.elementoGenerado  = new Element('div', {
			id: 'subnavegador' + this.indice, 'class': 'subnavegador'
		});
		var subNavmd = new Element ('div', {'class': 'subnavegadormd'});
		var subNavbl = new Element ('div', {'class': 'subnavegadorbl'});
		var subNavup = new Element ('div', {'class': 'subnavegadorup'});
		var subNavdw = new Element ('div', {'class': 'subnavegadordw'});
		subNavbl.inject(subNavmd);
		subNavup.inject(this.elementoGenerado);
		subNavmd.inject(this.elementoGenerado);
		subNavdw.inject(this.elementoGenerado);

		this.elementoGenerado.addEvent("mouseenter", function(){
			this.navegadorDondeEstoy.anulaRetardo();
		}.bind(this));
		this.elementoGenerado.addEvent("mouseleave", function(){
			this.navegadorDondeEstoy.ocultaSubmenuRetardo(this.indice);
		}.bind(this));
		
		var navegador = "";
		this.elementos.each(function (item, index){
			navegador += item.dameCodigo();
		});
		
		subNavbl.set("html",navegador);
	},
	
	ocultate: function(){
		this.elementoGenerado.setStyle("display", "none");
		this.navegadorDondeEstoy.opcionesPrincipales[this.indice].enlace.set("styles", {"color": "#000000", "background-color": "transparent", "border": "0px"});
	},
	
	muestrate: function(){
		if (this.elementos.length > 0){
			this.elementoGenerado.setStyle("display", "block");
		}
	},
	
	dameElemento: function(){
		return this.elementoGenerado;
	},
	
	recolocate: function(posicionEnlace, sizeEnlace){
		this.elementoGenerado.setStyle("top", posicionEnlace.y + sizeEnlace.y);
		this.elementoGenerado.setStyle("left", posicionEnlace.x - this.desplazamientoSubmenu);
	}
});

var Navegador = new Class({
	retardo: null,
	
	initialize: function(Principales, secundarias, desplazamientosSubmenu, estilosEspacilesPrincipales){
		this.opcionesPrincipales = new Array();
		this.opcionesSecundarias = new Array();
		var i
		for (i=0; i<Principales.length; i++){
			this.opcionesPrincipales.include(new OpcionPrincipal(Principales[i][0], Principales[i][1], i, this, estilosEspacilesPrincipales[i]));
			this.opcionesSecundarias.include(new SubNavegador(secundarias[i],i, this, desplazamientosSubmenu[i]));
		}
	},
	anulaRetardo: function(){
		$clear(this.retardo);
	},
	
	ocultaSubmenus: function(){
		this.opcionesSecundarias.each(function(item, index){
			item.ocultate();
		});
	},
	ocultaSubmenuRetardo: function(indiceOcultar){
		//alert ("oculto " + indiceOcultar)
		this.retardo = this.opcionesSecundarias[indiceOcultar].ocultate.delay(1000,this.opcionesSecundarias[indiceOcultar]);
	},
	
	muestraSubmenu: function (indiceSubmenu){
		this.anulaRetardo();
		this.opcionesSecundarias[indiceSubmenu].muestrate();
		this.opcionesPrincipales[indiceSubmenu].enlace.set("styles", {"color": "#ffffff", "background-color": "#000000", "border": "1px solid #d7d7d7"});
	},
	
	recolocaSubnavegadores: function(){
		for (i=0; i<this.opcionesPrincipales.length; i++){
			this.opcionesSecundarias[i].recolocate(this.opcionesPrincipales[i].enlace.getPosition(), this.opcionesPrincipales[i].enlace.getSize());
		}
	},
	
	escribete: function(lugar,lugarsubopciones){
		
		var lugar_impresion = $(lugar);
		var lugar_secundarias = $(lugarsubopciones);
		var listaElementos = new Element ("ul");
		
		this.opcionesPrincipales.each(function (item, index){
			item.dameElementoLista().inject(listaElementos);
		});
		listaElementos.inject(lugar_impresion);
		
		var elementoSecundario;
		this.opcionesSecundarias.each(function (item, index){
			elementoSecundario = item.dameElemento();
			elementoSecundario.inject(lugar_secundarias, 'after');
		});
		
		this.recolocaSubnavegadores.delay(100, this);
	}
}); 

opcionesPrincipales = [
	["Portada","/"],
	["Monotemáticos", "/monotematicos/"],
	["Secciones", "/secciones/"],
	["Blogging","/blogging/"],
	["Comunidad", "/comunidad/"],
	["Wiki","/wiki/"],
	["RSS","/rss/"]
];
opcionesSecundarias = [
	[[],[]],
	[["Desde 0", "HTML", "CSS", "Javascript", "ASP", "PHP","AJAX", "Diseño web","Promoci&oacute;n de webs","Ganar dinero","Windows 8"],["/desde0/", "/html/","/css/", "/javascript/", "/asp/", "/php/","/ajax/","/diseno-web/","/promocion","/ganar-dinero/","/win-8/"]],
	[["Manuales", "Programas", "FAQS", "Directorio","Videos","La cosecha","Colabora","En directo"],["/manuales/","/programas/", "/faq/", "/directorio/","/videos/","/cosecha/","/colabora","/en-directo/"]],
	[["Actualidad","De interés","Agenda"],["/actualidad/","/de_interes/","/agenda/"]],
	[["Perfiles Públicos", "Vuestras páginas ","Boletin de novedades", "Registro", "Lista de correo","Encuestas"],["/usuarios/", "http://www.websitealbum.com/", "/boletinnovedades/", "/comunidad/registro/","/listacorreo","/encuestas"]],
	[[],[]],
	[[],[]]
];
desplazamientosSubmenu = [7,7,7,7,7,7,7];
classOpcionesPrincipales = ["navupconfondo","navupconfondo","navupconfondo","navupconfondo","navupsinfondo","navupsinfondo","navupsinfondo"]
////////////////////////////////////////////////////////////////////////

window.addEvent('domready', function(){
	miNavegador = new Navegador(opcionesPrincipales, opcionesSecundarias, desplazamientosSubmenu, classOpcionesPrincipales);
	miNavegador.escribete("navopciones", "piefin");
});
window.addEvent('resize', function(){
	window.addEvent('domready', function(){
		miNavegador.recolocaSubnavegadores();
	});
});


opcionesPieSecciones = [
	["Manuales","/manuales/","Todos los manuales","Decenas de manuales para aprender a crear páginas web en distintos entornos."],
	["FAQs", "/faq/", "FAQs sobre Desarrollo Web", "Preguntas y respuestas habituales para resolver tus dudas."],
	["Programas", "/programas/", "Programas para desarrolladores", "Software de especial interés para diseñadores y programadores de webs."],
	["Directorio", "/directorio/", "Directorio temático", "Todos los contenidos de DesarrolloWeb.com ordenados por categorías."],
	["Videos","/videos/","Todos los videos","Los videotutoriales que hemos publicado agrupados por distintos criterios."]
];
opcionesPieMonot = [
	["Desde cero", "/desde0/", "Aprende desde cero","Por dónde empezar si no sabes nada de creación de webs."],
	["HTML|CSS|Dise&ntilde;o","/html/|/css/|/diseno-web","HTML a fondo|CSS a fondo|Diseño web a fondo","Manuales y otros recursos para aprender HTML.|Todo lo necesario para aprender los pormenores de CSS.|Manuales y recursos centrados en el diseño de webs."],
	["Javascript|Ajax", "/javascript/|/ajax/","Javascript a fondo|Ajax a fondo","Diversos manuales que tratan la programación en Javascript en profundidad.|Aprende a programar páginas web que hacen uso de Ajax."],
	["ASP|PHP", "/asp/|/php/","ASP a fondo|PHP a fondo","Varios manuales y recursos esenciales para aprender programación de servidor con ASP.|Numerosos manuales para aprender PHP y aprender a crear aplicaciones web del servidor."],
	["Promocion|Ganar dinero", "/promocion/|/ganar-dinero/","Promoción de webs|Ganar dinero","Aprende cómo conseguir que tu página sea más visitada y mejor posicionada en buscadores|Las mejores técnicas para obtener ingresos para rentabilizar tu página web"],
	["Windows 8","/win-8/","Apliaciones para Windows 8","Creación de aplicaciones para Windows 8"]
];
opcionesPieBlog = [
	["Actualidad", "/actualidad/","Actualidad para desarrolladores","Noticias de actualidad seleccionadas para diseñadores y programadores de páginas web"],
	["Recursos interesantes","/de_interes/","Recursos de interés","La más variada gama de recursos que aparecen en el mercado enfocados a desarrolladores"],
	["Agenda", "/agenda/","Eventos y citas","Los eventos que más interesan a los creadores de proyectos en Internet"]
];
opcionesPieCom = [
	["Perfiles públicos", "/usuarios/","Perfiles públicos de usuarios","Los perfiles públicos de los usuarios más recientes y los que más participan"],
	["Desarrolladores", "http://www.mercadoprofesional.com/","Mercado Profesional","Un sitio donde publicar solicitudes de trabajos freelance y enviar presupuestos a los que los solicitan"],
	["Vuestras páginas","http://www.websitealbum.com/","Web Site Album","Una web donde mostrar tu trabajo en el diseño de webs a otros creadores"],
	["Registro", "/comunidad/registro/","Registro de usuario", "Regístrate como usuario de DesarrolloWeb.com"],
	["Encuestas","/encuestas/","Encuestas en DesarrolloWeb.com", "Vota en nuestras encuestas"]
];

var EnlacesPie = new Class({
	initialize: function(destino, enlaces){
		if ($defined($(destino))){
			this.destino = $(destino);
			enlaces.each(function(valor, indice){
				var capa_enlace = new Element ("div", {"class": "secpielink"});
				var txtenlaces = valor[0].split("|");
				var urlenlaces = valor[1].split("|");
				if ($defined(valor[2])){
					var titulotipenlaces = valor[2].split("|");
					var txttipenlaces = valor[3].split("|");
				}
				for (i=0; i<txtenlaces.length; i++){
					var enlace = new Element ("a", {"html": txtenlaces[i], "href": urlenlaces[i], "class": "cargatippie"});
					if ($defined(valor[2])){
						enlace.store('tip:title', titulotipenlaces[i]);
						enlace.store('tip:text',  txttipenlaces[i]);
					}
					enlace.inject(capa_enlace);
					if(i != txtenlaces.length-1)
						new Element("span", {"html": ", "}).inject(capa_enlace);
				}
				capa_enlace.inject(this.destino);
			}, this);
		}
	}
});

window.addEvent("domready", function(){
	var enlacesSecciones = new EnlacesPie("secpiesecciones", opcionesPieSecciones);
	var enlacesMonot = new EnlacesPie("secpiemonot", opcionesPieMonot);
	var enlacesBlog = new EnlacesPie("secpieblog", opcionesPieBlog);
	var enlacesCom = new EnlacesPie("secpiecom", opcionesPieCom);
	var tipsPie = new Tips('.cargatippie', {"showDelay": 300, "hideDelay": 150, "offsets": {'x': 2, 'y': 0}, "className": "tipgen"});
	var tipsuser = new Tips('.cargatipusuario', {"showDelay": 300, "hideDelay": 150, "offsets": {'x': 15, 'y': 10}, "className": "tipuser"});
	var tipsGrande = new Tips('.cargatipgrande', {"showDelay": 300, "hideDelay": 150, "offsets": {'x': 15, 'y': 10}, "className": "tipgrande"});
});

var FormularioAjax = new Class({
	initialize: function(formulario, mostrarError, mostrarCorrecto, botonEnvio, cargandoformulario){
		this.formulario = $(formulario);
		this.formulario.capaError = $(mostrarError);
		this.formulario.capaCorrecto = $(mostrarCorrecto);
		$(cargandoformulario).set("styles", {"display": "none"});
		this.formulario.botonEnvio = $(botonEnvio);
		this.formulario.botonEnvio.set("styles", {"display": "block"});
		this.formulario.cajaLoading = null;
		this.formulario.mantenFormulario=false;
		this.formulario.funcionSuceso = function(){};
		this.formulario.addEvent('submit', function(e){
			
			e.stop();
			this.capaError.empty();
			if (this.mantenFormulario){
				this.capaCorrecto.empty();
			}
			this.cajaLoading = new Element("div");
			this.cajaLoading.set("html","<img src='/images/loadingcw.gif' width=100 height=68>");
			this.botonEnvio.set("styles", {"display": "none"});
			this.cajaLoading.inject(this.botonEnvio,"after");
			this.set('send', {
				onComplete: function(response) { 
					this.cajaLoading.destroy();
					var errorJSON = false;
					var respuesta = JSON.decode.attempt(response);
					if ($defined(respuesta)){
						if ($defined(respuesta.valido)) {
							if (respuesta.valido != "1") {
								this.botonEnvio.set("styles", {"display": "inline"});
								if (respuesta.valido == "0") {
									this.capaError.set("html", respuesta.mensaje);
								}else{
									if (respuesta.valido == "2") {
										window.location = respuesta.mensaje;
									}else{
										this.capaError.set("html", "La respuesta está bien formada, pero no contiene un código identificable.");
									}
								}
							}else {
								this.capaCorrecto.set("html", respuesta.mensaje);
								if (this.mantenFormulario){
									this.botonEnvio.set("styles", {"display": "inline"});
								}
								this.funcionSuceso();
		            		}
		          		}else{
							errorJSON = true;
						}
					}else{
						errorJSON = true;
					}
					if (errorJSON){
						this.botonEnvio.set("styles", {"display": "inline"});
						this.capaError.set("html", "Hemos recibido datos incorrectos. \nComprueba tu formulario, también puedes ponerte en contacto con nosotros para informar del error.");
					}
				}.bind(this)
			});
			this.send();
		});
	},
	mantenerFormulario: function(boleanoMantener){
		this.formulario.mantenFormulario=boleanoMantener;
	},
	ejecutarExito: function(nuevaFuncion){
		this.formulario.funcionSuceso=nuevaFuncion;
	}
});

var FormularioUploadAsicrono = new Class({
	initialize: function(idForm, destino, mostrarError, botonEnvio, cargandoform, iniciandoformulario){
		this.Form = $(idForm);
		this.destinoSalida = $(destino);
		this.errorSalida = $(destino);
		this.capaError = $(mostrarError);
		this.botonEnvio = $(botonEnvio);
		this.cargandoform = $(cargandoform);
		this.botonEnvio.set("styles", {"display": "inline"});
		this.Form.addEvent("submit", function(){		
			this.cargandoform.set("html","<img src='/images/loadingcw.gif' width=100 height=68>");
			this.botonEnvio.set("styles", {"display": "none"});
			this.capaError.empty();
			
			this.frameDestino = new IFrame({
				"name": "frameUpload",
				"style": "display: none;"
			});
			this.frameDestino.inject(this.Form, "after");
			this.frameDestino.addEvent("load", function(){
				this.muestraSalida();
			}.bind(this));
			this.Form.set({
				"target": "frameUpload",
				"enctype": "multipart/form-data",
				"encoding": "multipart/form-data",
				"method": "post"
			});
		}.bind(this));
		
		$(iniciandoformulario).set("styles", {"display": "none"});
	},
	muestraSalida: function(){
		var requieroResultados = new Request({
			url: this.Form.get("action"),
			method: 'get',
			onSuccess: function(texto, xmlrespuesta){ 
					this.cargandoform.empty();
					var respuesta = JSON.decode.attempt(texto);
					this.botonEnvio.set("styles", {"display": "inline"});
					if (respuesta) {
						if (respuesta.valido != "1") {
							//error en el formulario
							this.capaError.set("html", respuesta.mensaje);
						}else {
							//formulario correcto
							this.destinoSalida.set("html", respuesta.mensaje);
	            		}
	          		}else{
						this.capaError.set("html", "Hemos recibido datos incorrectos. \nComprueba tu formulario, también puedes ponerte en contacto con nosotros para informar del error.");
						alert(texto);
					}
					
					this.frameDestino.destroy();
			}.bind(this),
			onFailure: function(){
					this.cajaLoading.empty();
					var respuesta = JSON.decode.attempt(texto);
					this.capaError.set("html", "Imposible encontrar el lugar de envío");
			}.bind(this)
		}).send();
	}
});

var FormularioEncuesta = new Class({
	initialize: function(formulario, capaformulario, cargandoformulario, botonEnvio, tituloEncuesta){
		
		this.formulario = $(formulario);
		this.formulario.capaformulario = $(capaformulario);
		$(cargandoformulario).set("styles", {"display": "none"});
		this.formulario.botonEnvio = $(botonEnvio);
		this.formulario.botonEnvio.set("styles", {"display": "block"});
		this.formulario.tituloEncuesta=tituloEncuesta;
		this.formulario.cajaLoading=null;
		this.formulario.addEvent('submit', function(e){
			e.stop();
			this.cajaLoading = new Element("div", {'id': 'loadingencuesta'});
			this.cajaLoading.set("html","<img src='/images/loadingcw.gif' width=100 height=68>");
			this.cajaLoading.replaces(this.botonEnvio);
			this.set('send', {
				onComplete: function(response) { 
					this.capaformulario.set("html","<p>Muchas gracias por votar!</p><div class=fuente8 style='line-height: 140%; font-weight: bold;'>&gt; <a href='javascript:void(0)' id='volverver'>Ver resultados de la encuesta</a><br>&gt; <a href='/encuestas'>Ver otras encuestas</a></div><p>");
					$('volverver').addEvent("click", function(){
						var popopEstadisticas = new MiPopup(this.cajaImagenResult.get("html") ,600,220, this.tituloEncuesta)
					}.bind(this));
					var imagenresultado = new Asset.image(response, {'id': 'imagenresultado', 'title': 'Resultado de la encuesta', 'onload': function(img){
							this.cajaImagenResult = new Element("div", {'id': 'capaimgresult'});
							img.inject(this.cajaImagenResult);
							var popopEstadisticas = new MiPopup(this.cajaImagenResult.get("html") ,600,220, this.tituloEncuesta)
						}.bind(this)
					});
				}.bind(this)
			});
			this.send();
		});
	}
});


var PopupDHTML = new Class({
	Implements: Options,
	options: {
		funcionSuceso: function(){},
		opcionCerrar: true,
		html: "",
		ancho: 600,
		alto: 300,
		urlAjax: null,
		dataAjax: "",
		calculaDataAjax: null,
		titulo: "miPopup",
		funcionCargaContenido: null,
		claseCuerpoTexto: "cuerpotextopopup",
		lanzar: false
	},
	initialize: function(enlace, opciones){
		this.setOptions(opciones);
		if (this.options.lanzar){
			this.abrirPopup();
		}else{
			this.enlace = $(enlace);
			this.enlace.addEvent("click", function(e){
				e.stop();
				this.abrirPopup();
			}.bind(this));
		}
	},
	abrirPopup: function(){
		this.tamanoBody = window.getScrollSize();
		this.posScroll = window.getScroll();
		this.espacioDisponibleVentana = window.getSize();
		this.capaSombra = new Element("div", {'id': 'capasombra', 'style': 'width: ' + this.tamanoBody.x + 'px; height: ' + this.tamanoBody.y + 'px; ' });
		this.capaSombra.inject(document.body);
		var myFx = new Fx.Tween(this.capaSombra,{'duration': 300});
		myFx.start('opacity',0,0.8);
		this.HTMLMostrar = this.options.html;
		if($defined(this.options.funcionCargaContenido)){
			this.HTMLMostrar = this.options.html + this.options.funcionCargaContenido();
			this.operativaPopup();
		}else{
			if($defined(this.options.urlAjax)){
				var datosParaAjax = this.options.dataAjax;
				if($defined(this.options.calculaDataAjax)){
					datosParaAjax = this.options.calculaDataAjax();
				}
				var conexion_ajax = new Request({
					url: this.options.urlAjax,
					data: datosParaAjax,
					onComplete: function(respuesta){
						this.HTMLMostrar = this.options.html + respuesta;
						this.operativaPopup();
					}.bind(this)
				});
				conexion_ajax.send();
			}else{
				this.operativaPopup();
			}
		}
	},
	operativaPopup: function(){
		this.contenido = new Element("div", {'id': 'contenidopopup'});
		this.contenido.set('html', "<div class='" + this.options.claseCuerpoTexto + "' style='height: " + (this.options.alto - 30) + "px;'>" + this.HTMLMostrar + "</div>");
		var titulo = new Element("div", {'id': 'titulopopup'});
		titulo.set('html', this.options.titulo);
		if (this.options.opcionCerrar){
			var cerrar = new Element("div", {'id': 'cerrarpopup'});
			cerrar.addEvent('click', function(){
				this.cerrar();
			}.bind(this));
			cerrar.inject(titulo,'top');
		}
		titulo.inject(this.contenido,'top');
				
		this.capaPopup = new Element("div", {'id': 'capapopup', 'style': 'margin-left:-' + this.options.ancho/2 +'px; top:' + (this.posScroll.y + (this.espacioDisponibleVentana.y/2) - (this.options.alto/2)-15) +'px'});
		this.capaPopup.inject(this.capaSombra,'after');
		
		var myFx2 = new Fx.Tween(this.capaPopup,{'duration': 700});
		myFx2.start('width',4,this.options.ancho);
		myFx2.addEvent('complete', function(){
			var myFx3 = new Fx.Tween(this.capaPopup,{'duration': 700});
			myFx3.start('height',4,this.options.alto+30);
			myFx3.addEvent('complete', function(){
				this.contenido.inject(this.capaPopup);
				this.contenido.setStyle('opacity', 0);
				this.contenido.setStyle('display', 'block');
				var myFx4 = new Fx.Tween(this.contenido,{'duration': 600});
				myFx4.start('opacity',0,1);
			}.bind(this));
		}.bind(this));
		
		this.capaSombra.addEvent('click', function(){
				this.cerrar();
			}.bind(this)
		);
	},
	
	cerrar: function(){
		var myFx = new Fx.Tween(this.capaPopup,{'duration': 500});
		myFx.start('opacity',1,0);
		myFx.addEvent('complete', function(){
			var myFx2 = new Fx.Tween(this.capaSombra,{'duration': 500});
			myFx2.start('opacity',0.8,0);
			myFx2.addEvent('complete', function(){
				this.capaSombra.destroy();
				this.capaPopup.destroy();
			}.bind(this));
		}.bind(this));
	}
});

var MiPopup = new Class({
	initialize: function(miHtml,ancho,alto,titulo){
		this.titulo=titulo;
		this.tamanoBody = window.getScrollSize();
		this.posScroll = window.getScroll();
		this.espacioDisponibleVentana = window.getSize();
		this.capaSombra = new Element("div", {'id': 'capasombra', 'style': 'width: ' + this.tamanoBody.x + 'px; height: ' + this.tamanoBody.y + 'px; ' });
		this.capaSombra.inject(document.body);
		var myFx = new Fx.Tween(this.capaSombra,{'duration': 300});
		myFx.start('opacity',0,0.8);
		
		this.contenido = new Element("div", {'id': 'contenidopopup'});
		this.contenido.set('html', "<div class=cuerpotextopopup>" + miHtml + "</div>");
		var titulo = new Element("div", {'id': 'titulopopup'});
		titulo.set('html', this.titulo);
		var cerrar = new Element("div", {'id': 'cerrarpopup'});
		cerrar.addEvent('click', function(){
			this.cerrar();
		}.bind(this));
		cerrar.inject(titulo,'top');
		titulo.inject(this.contenido,'top');
				
		this.capaPopup = new Element("div", {'id': 'capapopup', 'style': 'margin-left:-' + ancho/2 +'px; top:' + (this.posScroll.y + (this.espacioDisponibleVentana.y/2) - (alto/2)-15) +'px'});
		this.capaPopup.inject(this.capaSombra,'after');
		
		var myFx2 = new Fx.Tween(this.capaPopup,{'duration': 700});
		myFx2.start('width',4,ancho);
		myFx2.addEvent('complete', function(){
			var myFx3 = new Fx.Tween(this.capaPopup,{'duration': 700});
			myFx3.start('height',4,alto+30);
			myFx3.addEvent('complete', function(){
				this.contenido.inject(this.capaPopup);
				this.contenido.setStyle('opacity', 0);
				this.contenido.setStyle('display', 'block');
				var myFx4 = new Fx.Tween(this.contenido,{'duration': 600});
				myFx4.start('opacity',0,1);
			}.bind(this));
		}.bind(this));
		
		this.capaSombra.addEvent('click', function(){
				this.cerrar();
			}.bind(this)
		);
	},
	
	cerrar: function(){
		var myFx = new Fx.Tween(this.capaPopup,{'duration': 500});
		myFx.start('opacity',1,0);
		myFx.addEvent('complete', function(){
			var myFx2 = new Fx.Tween(this.capaSombra,{'duration': 500});
			myFx2.start('opacity',0.8,0);
			myFx2.addEvent('complete', function(){
				this.capaSombra.destroy();
				this.capaPopup.destroy();
			}.bind(this));
		}.bind(this));
	}
});

var TickerDW = new Class({
	indice: 0,
	contenedoresLlenos: 0,
	contenedorActual: 0,
	identificadorRetardo: null,
	
	initialize: function(elementos, destino, opciones){
		this.ticker = $(destino);
		this.arrayElementos = elementos;
		if ($defined(opciones.classElemento)){
			this.classElemento = opciones.classElemento;
		}else{
			this.classElemento = "elementoticker";
		}
		if ($defined(opciones.classContenedorElemento)){
			this.classContenedorElemento = opciones.classContenedorElemento;
		}else{
			this.classContenedorElemento = "contelementoticker";
		}
		if ($defined(opciones.retardo)){
			this.retardo = opciones.retardo;
		}else{
			this.retardo = 3000;
		}
		if ($defined(opciones.numElementos)){
			this.numElementos = opciones.numElementos;
		}else{
			this.numElementos = 3;
		}
		this.contenedores = new Array();
		for (i=0; i < this.numElementos; i++){
			this.contenedores.include(new Element ("div", {
				"class": this.classContenedorElemento
			}));
			this.contenedores[i].inject(this.ticker);
		}
		
		if (this.arrayElementos.length > 0){
			//comienzo la animación
			this.rotaTextos();
		}
		
	},
	crearElemento: function(){
		var nuevoTitulo = new Element ("A", {
			"href": this.arrayElementos[this.indice].url,
			"html": this.arrayElementos[this.indice].titulo
		});
		var nuevoElemento = new Element ("div", {
			"class": this.classElemento
		});
		var nuevoTexto = new Element ("span", {
			"html": this.arrayElementos[this.indice].intro
		});
		nuevoTitulo.inject(nuevoElemento);
		nuevoTexto.inject(nuevoElemento);
		nuevoElemento.addEvent("mouseover", function(){
			$clear(this.identificadorRetardo);
		}.bind(this));
		nuevoElemento.addEvent("mouseout", function(){
			this.identificadorRetardo = this.rotaTextos.delay((this.retardo / 3).toInt(), this);
		}.bind(this));
		nuevoElemento.set("opacity", 0);
		return nuevoElemento;
	},
	
	muestraNoticia: function(){
		if (this.contenedoresLlenos < this.numElementos){
			var nuevoElemento = this.crearElemento();
			nuevoElemento.inject(this.contenedores[this.indice]);
			nuevoElemento.fade("in")
			this.contenedoresLlenos++;
			this.indice = (this.indice + 1) % this.arrayElementos.length;
		}else{
			var myFx1 = new Fx.Tween(this.contenedores[this.contenedorActual]);
			myFx1.start("height", 0);
			this.contenedores[this.contenedorActual].tween("margin-top", 0);
			this.contenedorEnCola.delay(800, this);
		}
	},
	
	contenedorEnCola: function(){
		this.contenedores[this.contenedorActual].destroy();
		this.contenedores[this.contenedorActual] = new Element ("div", {
			"class": this.classContenedorElemento
		});
		var nuevoElemento = this.crearElemento();
		nuevoElemento.inject(this.contenedores[this.contenedorActual]);
		this.contenedores[this.contenedorActual].inject(this.ticker);
		nuevoElemento.fade("in")
		this.contenedorActual = (this.contenedorActual + 1) % this.contenedores.length;
		this.indice = (this.indice + 1) % this.arrayElementos.length;
	},
	
	rotaTextos: function(){
		this.muestraNoticia();
		var actRetardo;
		if (this.contenedoresLlenos < this.numElementos){	
			actRetardo = (this.retardo/10).toInt();
		}else{
			actRetardo = this.retardo;
		}
		this.identificadorRetardo = this.rotaTextos.delay(actRetardo, this);
	}
});

miZindex = 2;
var contenidoAjaxOptions = new Class({
	Implements: Options,
	options: {
		funcionSuceso: function(){},
		opcionCerrar: true,
		flotante: false,
		ancho: 300,
		alto: null,
		destino: null,
		claseCSS: "formulariocontenidoajax",
		anclarEnlace: true,
		top: 0,
		left: 0,
		desplazamiento: true,
		borrarContenidoSolicitud: false,
		confirmar: false
	},
	initialize: function(enlace, archivo, opciones){
		this.setOptions(opciones);
		this.url = archivo;
		if ($defined(this.options.destino)){
			this.destino = $(this.options.destino);
		}else{
			this.destino = new Element("div",{"class": this.options.claseCSS});
			this.destino.inject(document.body);
		}
		this.enlace = $(enlace);
		this.mostrando = false;
		this.enlace.addEvent("click", function(eventoe){
			eventoe.stop();
			this.abreContenido();
		}.bind(this));
		if (this.options.anclarEnlace){
			this.options.top += this.enlace.getPosition().y;
			this.options.left += this.enlace.getPosition().x;
		}
	},
	abreContenido: function(){
		if (this.options.confirmar){
			if (!confirm("De verdad deseas hacer esto?")){
				return 1;
			}
		}
		if (!this.mostrando){
			if (this.options.flotante){
				miZindex++;
				this.destino.setStyles({
					"position": "absolute",
					"z-index": miZindex,
					"top": this.options.top,
					"left": this.options.left,
					"width": this.options.ancho,
					"overflow": "auto"
				});
				if ($defined(this.options.alto))
					setStyle("height", this.options.alto)
			}
			this.destino.set("styles",{"display": "block"});
			if (this.options.borrarContenidoSolicitud)
				this.destino.set("html","&nbsp;");
			this.destino.addClass("cargandocontenido");
			this.mover();
			this.contenidoRequerido = new Request.HTML({
				"url": this.url,
				"update": this.destino,
				onSuccess: function(){
					this.options.funcionSuceso();
					this.destino.removeClass("cargandocontenido");
					if(this.options.opcionCerrar){
						iconoCerrar = new Element("A",{
							"class": "cerrarajax", 
							"html": "Cerrar <img align='absmiddle' src='/images/iconos/cross.png' width=16 height=16 border=0 />",
							"href": "#"
						});
						iconoCerrar.addEvent("click", function(evento){
							evento.stop();
							this.destino.empty();
							this.destino.set("styles",{"display": "none"});
							this.mostrando=false;
						}.bind(this));
						capaCerrar = new Element("div",{
							"class": "ccerrarajax"
						});
						iconoCerrar.inject(capaCerrar);
						capaCerrar.inject(this.destino, "top");
					}
					this.mostrando = true;
				}.bind(this)
			}).send();
		}else{
			if (this.options.flotante){
				miZindex++;
				this.destino.setStyle("z-index", miZindex);
			}
			this.mover();
			this.destino.highlight('#bbb');
		}
	},
	noResaltando: function(){
		this.resaltando = false;
	},
	mover: function(){
		if(this.options.desplazamiento){
			var posAsoc = this.destino.getPosition();
			var myElement = $(document.body);
			var myFx = new Fx.Scroll(myElement).start(posAsoc.x, posAsoc.y);
		}
	}
});

var contenidoAjax = new Class({
	Extends: contenidoAjaxOptions,
	initialize: function(enlace, archivo, destino, funcionDeSuceso, cerrar){
		this.parent(enlace, archivo, {
			funcionSuceso: funcionDeSuceso,
			opcionCerrar: cerrar,
			"destino": destino
		});
	}
});

var ContenidoAjaxAsociado = new Class({
	initialize: function(enlace, ajaxAsoc){
		this.ajaxAsoc = ajaxAsoc;
		this.enlace = $(enlace);
		this.enlace.addEvent("click", function(ev){
			ev.stop();
			this.ajaxAsoc.abreContenido();
		}.bind(this));
	}
});

var CampoNick = new Class({
	initialize: function(campo){
		this.campo = $(campo);
		this.enlace = new Element("a",{
			'html': "Comprobar disponibilidad del nick",
			'href': '#'
		});
		this.capaDisponibilidad = new Element("div",{
			'style': 'padding: 5px 0px;height: 35px;'
		});
		this.mensaje = new Element("div",{
			'style': "margin-top: 5px"
		});
		this.enlace.inject(this.capaDisponibilidad);
		this.mensaje.inject(this.capaDisponibilidad);
		this.capaDisponibilidad.inject(this.campo, "after");
		this.enlace.addEvent("click",function(e){
			e.stop();
			var ajaxNick = new Request.JSON({
				'url': 'nick_validar.php',
				'data': 'nick=' + this.campo.get("value"),
				'noCache': true,
				'onSuccess': function(respuesta,x){
					if(respuesta.valido == 1){
						this.mensaje.setStyle("color", "#009900");
					}else{
						this.mensaje.setStyle("color", "#cc0000");
					}
					this.mensaje.set("html", respuesta.mensaje)
				}.bind(this)
			});
			ajaxNick.send();
		}.bind(this));
	}
});

var RadioOpcion = new Class({
	oculto: true,
	initialize: function(radio,capa,seleccionado,grupo,indice){
		this.radio = $(radio);
		this.capa = $(capa);
		this.grupo = grupo;
		this.indice = indice;
		if(seleccionado){
			this.capa.setStyle("display", "block");
			this.oculto = false;
		}else{
			this.capa.setStyle("opacity", "0");
		}
		this.radio.addEvent("click", function(){
			if(this.oculto){
				this.oculto=false;
				this.capa.setStyle("display", "block");
				this.capa.fade(1);
				this.grupo.ocultarTodosMenos(this.indice)
			}
		}.bind(this));
	},
	ocultate: function(){
		this.capa.fade(0);
		this.capa.setStyle.delay(500,this,"display", "none");
		this.oculto=true;
	}
});

var ConjuntoRadios = new Class({
	initialize: function(Datos){
		this.elementos = new Array();
		for (i=0;i<Datos.length;i++){
			this.elementos[i] = new RadioOpcion(Datos[i][0],Datos[i][1],Datos[i][2],this,i)
		}
	},
	ocultarTodosMenos: function(indice){
		this.elementos.each(function(elemento, clave){
			if(clave!=indice){
				elemento.ocultate();
			}
		},this)
	}
});

var ContenidoIframe = new Class({
	Implements: Options,
	options: {
		ancho: 695,
		alto: 300,
		enlace: null,
		lanzarDirectamente: false,
		estilos: 'border: 0',
		eliminarContenidoDestino: true
	},
	initialize: function(destino, url, opciones){
		this.setOptions(opciones);
		this.destino = $(destino);
		this.url = url;
		this.cargado = false
		if ($defined(this.options.enlace)){
			this.enlace = $(this.options.enlace);
			this.enlace.addEvent("click", function(e){
				e.stop()
				this.cargaIframe();
			}.bind(this));
		}
		if(this.options.lanzarDirectamente){
			this.cargaIframe();
		}
	},
	cargaIframe: function(){
		if(!this.cargado){
			if(this.options.eliminarContenidoDestino)
				this.destino.empty();
			fxTam = new Fx.Morph(this.destino,{
				duration: 'long',
				transition: Fx.Transitions.Sine.easeOut,
				onComplete: function(){
					this.iFrame = new Element("iframe", {
						'src': this.url,
						'width': this.options.ancho,
						'height': this.options.alto,
						'style': this.options.estilos
					});
					this.iFrame.inject(this.destino);
				}.bind(this)
			});
			fxTam.start({
				'height': this.options.alto,
				'width': this.options.ancho
			});
			
			this.cargado = true;
		}
	}
});

window.addEvent('domready', function(){
	var enlacesrsoc = ['https://www.facebook.com/desarrollowebcom','http://twitter.com/deswebcom','http://www.youtube.com/user/desarrollowebcom'];
	$$(".enrs").each(function(v,c){
		v.set("href",enlacesrsoc[c]);
	});
	
});