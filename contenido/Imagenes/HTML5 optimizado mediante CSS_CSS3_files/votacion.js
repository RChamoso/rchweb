var Estrella = new Class({
	initialize: function(valor_inicial, valor_pulsar, utilidad_votacion){
		this.valor_pulsar = valor_pulsar;
		this.utilidad_votacion = utilidad_votacion;
		this.valor_inicial = valor_inicial;
		this.etiqueta = new Element("div");
		this.colocaInicial();
		this.etiqueta.addEvent("click",function(){
			if (this.utilidad_votacion.activo){
				if (!this.utilidad_votacion.bloquear){
					this.utilidad_votacion.anulaRetardo();
					this.utilidad_votacion.ilumina(this.valor_pulsar);
					this.utilidad_votacion.bloquear=1;
					var prueboRequest = new Request({
					  method: 'get',
					  url: '/votos/votar_ajax.php?valor=' + this.valor_pulsar + '&id_' + this.utilidad_votacion.tipo + '=' + this.utilidad_votacion.id_comentario,
					  onSuccess: function(texto, xmlrespuesta){ this.utilidad_votacion.mensaje.set("html",texto);}.bind(this),
					  onFailure: function(){alert('Fallo aqui');}
					}).send(); 
				}
			}else{
				this.utilidad_votacion.mensaje.set("html", "Haz login para votar");
			}
		}.bind(this));
		this.etiqueta.addEvent("mouseenter",function(){
			this.utilidad_votacion.anulaRetardo();
			this.utilidad_votacion.ilumina(this.valor_pulsar);
		}.bind(this));
		this.etiqueta.addEvent("mouseleave",function(){
			this.utilidad_votacion.estrellasIniciarRetardo();
		}.bind(this));
	},
	colocaInicial: function(){
		if(this.valor_inicial==1){
			this.etiqueta.addClass("votouno");
			this.etiqueta.removeClass("votomedio");
			this.etiqueta.removeClass("votocero");
		}else{
			if(this.valor_inicial==0.5){
				this.etiqueta.addClass("votomedio");
				this.etiqueta.removeClass("votouno");
				this.etiqueta.removeClass("votocero");
			}else{
				this.etiqueta.addClass("votocero");
				this.etiqueta.removeClass("votouno");
				this.etiqueta.removeClass("votomedio");
			}
		}
	},
	escribete: function(){
		this.etiqueta.inject(this.utilidad_votacion.localizacion);
	},
	iluminate: function(){
		this.etiqueta.addClass("votouno");
		this.etiqueta.removeClass("votomedio");
		this.etiqueta.removeClass("votocero");
	},
	apagate: function(){
		this.etiqueta.addClass("votocero");
		this.etiqueta.removeClass("votouno");
		this.etiqueta.removeClass("votomedio");
	}
});

var ComentarioVoto = new Class({
	retardo: null,
	bloquear: 0,
	initialize: function(id_comentario, puntos_inicio, num_votos, tipo, activo){
		this.localizacion = $("voto" + tipo + id_comentario);
		this.id_comentario=id_comentario;
		this.activo = activo;
		this.tipo=tipo;
		this.puntos_inicio = puntos_inicio.round(1).limit(0,5);
		this.estrellas = new Array();
		var puntos_entera = this.puntos_inicio.toInt();
		var puntos_decimal = this.puntos_inicio - puntos_entera;
		var cont = 0;
		for (i=0; i<puntos_entera; i++){
			this.estrellas[i] = new Estrella(1, i+1, this);
			cont ++;
		}
		if (puntos_decimal >= 0.5){
			this.estrellas[cont] = new Estrella(0.5, cont+1, this);
			cont ++;
		}
		for (i=cont; i<5; i++){
			this.estrellas[i] = new Estrella(0, i+1, this);
		}
		for (i=0; i<this.estrellas.length; i++){
			this.estrellas[i].escribete();
		}
		var txt_votos="";
		if (num_votos==1){
			txt_votos=" voto";
		}else{
			txt_votos=" votos";
		}
		this.mensaje = new Element("span", {"class": "mensajeutilvoto"});
		this.mensaje.set("html", " " + num_votos + txt_votos);
		this.mensaje.inject(this.localizacion);
	},
	anulaRetardo: function(){
		$clear(this.retardo);
	},
	ilumina: function(cantidad){
		if(!this.bloquear){
			for (i=0; i<cantidad; i++){
				this.estrellas[i].iluminate();
			}
			for (i=cantidad; i<this.estrellas.length; i++){
				this.estrellas[i].apagate();
			}
		}
	},
	estrellasIniciarRetardo: function(){
		if(!this.bloquear){
			this.retardo = this.estrellasIniciar.delay(500, this);
		}
	},
	estrellasIniciar: function(){
		for (i=0; i<this.estrellas.length; i++){
			//this.estrellas[i].colocaInicial.delay(1000, this.estrellas[i]);
			this.estrellas[i].colocaInicial();
		}
	}
	
});

var MarcarSpam = new Class({
	initialize: function(id_item, tipo_item){
		this.id_item = id_item;
		this.tipo_item = tipo_item;
		this.localizacion = $("spam" + tipo_item + id_item);
		this.enlace_spam = new Element("a" , {"title": "Marcar como spam", "href": "javascript:void(0)", "style": "color: #6666ff;"});
		this.enlace_spam.set("html", " comentario es spam");
		
		this.enlace_spam.addEvent("click",function(){

			var prueboRequest = new Request({
				method: 'get',
				url: '/comentarios/marcar_como_spam.php?tipo=' + this.tipo_item + '&id_item=' + this.id_item,
				onSuccess: function(texto, xmlrespuesta){ this.localizacion.set("html",texto);}.bind(this),
				onFailure: function(){alert('Fallo');}
			}).send(); 
		}.bind(this));
		var explica_spam = new Element("span", {"style": "color: #777777;"});
		explica_spam.set("html", "Pincha si este ");
		explica_spam.inject(this.localizacion);
		this.enlace_spam.inject(this.localizacion);
	}
});

var VentanaRedesSociales = new Class({
	initialize: function(enlace,url_compartir,url_larga,titulo){
		this.url_compartir = url_compartir;
		this.url_larga = url_larga;
		this.titulo= titulo;
		this.enlace = $(enlace);
		this.enlace.set("html", "Compartir en redes sociales");
		this.ventana=null;
		this.enlace.addEvent("click", function(e){
			e.stop();
			if(!$defined(this.ventana)){
				var ventana = new Element("div",{'class': 'ventcomp'});
				var ventanaup = new Element("div",{'class': 'ventcompup'});
				var ecerrar = new Element("a", {"html": '<span>Cerrar</span>', 'href': '#'});
				ecerrar.addEvent("click", function(e){
					e.stop();
					this.ventana.destroy();
					this.ventana=null;
				}.bind(this));
				ecerrar.inject(ventanaup);
				ventanaup.inject(ventana);
				var ventanamd = new Element("div",{'class': 'ventcompmd', 'html': '<span><iframe src="/muestra/iconoscompartir.php?url=' + this.url_compartir + '&url_larga=' + this.url_larga + '&titulo=' + this.titulo + '" border=0 frameborder=0 width=240 height=44 scrolling="No"></iframe></span>'});
				ventanamd.inject(ventana);
				var ventanadw = new Element("div",{'class': 'ventcompdw'});
				ventanadw.inject(ventana);
				
				ventana.setStyles({
					'left': e.page.x - 31,
					'top': e.page.y - 100
				});
				ventana.inject(document.body);
				this.ventana = ventana;
			}else{
				this.ventana.highlight('#fff', '#fec');
			}
		}.bind(this));
	}
});