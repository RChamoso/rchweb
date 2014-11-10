/**
 * Manejador de comunicacion entre el adserver y el publisher :)
 */
window.zeti = function () {

	/**
	 * URL base dependiente del entorno
	 */
	var API_BASE_URL = 'http://apibeta.zeti.com'; //@ENV=production

	/**
	 * Nivel de log default (none, all, error, info, warning)
	 */
	var logLevel = 'all';

	/**
	 * jQuery local para no conflict
	 */
	var $;

	/**
	 * Caracter nulo para query string
	 *
	 * @var string
	 */
	var empty = '';

	/**
	 * Configuracion del cliente
	 *
	 * @var object
	 */
	var _config;


	/**
	 * Bloques de publicidad
	 *
	 * @var array
	 */
	var _blocks = [];

	/**
	 * Agrega una hovercard a un nodo si encuentra alguna de las palabras dadas
	 *
	 * @param node TextNode Nodo a analizar
	 * @param ad object Publicidad a agregar
	 * @param words array Lista de palabras
	 */
	var addHovercard = function (node, ad, words) {
		var found = false,
			regex = new RegExp('(^| |\\n|\\.|,|\\()(' + words.join('|') + 'e?s?)($| |\\n|\\.|,|\\))'),
			replace;
		replace = node.nodeValue.replace(
			regex,
			function (whole, sep1, word, sep2) {
				found = true; // marco para remplazar
				ad.word = word; // agrego la palabra a la ad para el template
				ad.click += '?k=' + word;
				ad.view += '?k=' + word;
				sep2 = sep2.replace(/ $/, '&nbsp;'); // IE removing trailing spaces
				return sep1 + template(getHovercardTemplate(), ad) + sep2;
			}
		);
		if (found) {
			// hubo un match remplazar (si se remplaza directo sobre el TextNode no se puede agregar HTML)
			$(node).replaceWith(replace);
		}
		return found;
	};

	/**
	 * Descarga jQuery si es necesario y vuelve a ejecutar el inicializador
	 *
	 * @param function retryCallback Callback a ejecutar cuando se descargue jQuery
	 * @return bool Si jQuery estaba definido o no
	 */
	var checkEnvironment = function (retryCallback) {
		if (typeof jQuery === 'undefined') {
			// jQuery es requerido
			var head = document.getElementsByTagName('head')[0],
				script = document.createElement('script');
			script.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
			script.onload = script.onreadystatechange = function () {
				if (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete') {
					jQuery.noConflict();
					$ = jQuery;
					retryCallback();
					script.onload = script.onreadystatechange = null;
					head.removeChild(script);
				}
			};
			head.appendChild(script);
			return false;
		}
		$ = jQuery;
		return true;
	};

	/**
	 * Consulta a la API de busqueda y bindea el callback
	 */
	var fetch = function () {
		var fetchUrl = getFetchUrl();
		$.getJSON(fetchUrl + '&callback=?', responseHandler);
	};

	/**
	 * Devuelve el template para un bloque por default
	 *
	 * @return string
	 */
	var getBlockTemplate = function () {
		return [
			'<div class="zeti-block-item">',
				'<h3>%title%</h3>',
				'<p>%description%</p>',
				'<a href="%click%" target="_blank">%url%</a>',
				'<img src="%view%">',
			'</div>'
		].join('');
	}

	/**
	 * Arma la URL del request usando la configuracion y los bloques
	 */
	var getFetchUrl = function () {
		var query = {};
		// basic info
		query.client = _config.client;
		query.lang = _config.lang;
		query.keywords = _config.keywords.join(',');
		// blocks
		query.blocks = _blocks.length;
		for (var index = 0; index < query.blocks; index++) {
			// no me convence usar arrays por la validacion
			query['block-' + index + '-count'] = _blocks[index].count || empty;
		}
		// visitors
		query['user-gender'] = _config.user.gender;
		query['user-age'] = _config.user.age;
		query['user-rank'] = _config.user.rank;

		return API_BASE_URL + '/fetch/?' + $.param(query);
	};

	var getHovercardTemplate = function () {
		return [
			'<div class="zeti-object zeti-hovercard">',
				'<a class="zeti-hovercard-link" href="%click%" target="_blank">%word%</a>',
				'<div class="zeti-hovercard-container">',
					'<div class="zeti-hovercard-title"></div>',
					'<div class="zeti-hovercard-box">',
						'<a href="%click%" target="_blank" class="image"><img src="%image%" /></a>',
						'<div class="zeti-hovercard-metadata">',
							'<h3><a href="%click%" target="_blank">%title%</a></h3>',
							'<p><a href="%click%" target="_blank">%description%</a></p>',
							'<a href="%click%" target="_blank" class="link">%url%</a>',
						'</div>',
					'</div>',
					'<img class="zeti-lazy" data-src="%view%">',
				'</div>',
			'</div>'
		].join('');
	};

	/**
	 * Obtiene los nodos de texto de un elemento
	 *
	 * @param object mixed Selector jQuery del objeto
	 * @return array
	 */
	var getTextNodes = function (object, result) {
		result = result || [];
		$(object).contents().each(function () {
			if (this.nodeType === 3) {
				result.push(this);
			} else if ($(this).is(':not(iframe, a, script, style, h1, h2, h3, h4, h5, h6, .zeti-object, .byGoogle)')) {
				getTextNodes(this, result);
			}
		});
		return result;
	};

	/**
	 * Shortcut para extraer las keywords de un objeto del DOM
	 *
	 * @param container mixed Selector de jQuery del objeto
	 * @param exclude array Palabras a excluir
	 */
	var getWordRank = function (container, exclude) {
		WordRank.setText($(container).text());
		WordRank.addExclude(exclude);
		return WordRank.extract();
	};

	/**
	 * Agrega el CSS necesario para imprimir las publicidades
	 */
	var injectCss = function () {
		$('body').append([
			'<style>',
			// block
			'.zeti-block-item { font-size: 90%; padding: 10px; display: block; border: 1px solid #ccc; border-radius: 4px }',
			'.zeti-block-item h3 { margin: 0; color: #666; text-transform: uppercase }',
			'.zeti-block-item p { margin: 4px 0 }',
			// intext
			'.zeti-hovercard { position: relative; display: inline; }',
			'.zeti-hovercard-title { margin-top: 2px; background-position: right center; background-repeat: no-repeat; }',
			'.zeti-hovercard-link { position: relative; color: #c30000; font-weight: bold; text-decoration: none; }',
			'.zeti-hovercard-container { top: -8px; left: -12px; text-align: left; font-family: sans-serif !important; font-size: 12px !important; color: #666 !important; line-height: 1.5em; border:solid 1px #ddd; position:absolute; border-radius: 3px; padding: 0 8px 10px; box-shadow: 5px 5px 5px #888; display: none; z-index: 100; width: 310px; background-color: white }',
			'.zeti-hovercard-box { margin-top: 5px; padding-top: 10px; border-top: 1px solid #eee }',
			'.zeti-hovercard-box a.image { float: left; margin-right: 10px }',
			'.zeti-hovercard-box a.image img { width: 50px; height: 50px; border: 1px solid #eee; }',
			'.zeti-hovercard-box a.image img:hover { border: 1px solid #c7c7c7 }',
			'.zeti-hovercard-metadata { float: right; width: 245px; } ',
			'.zeti-hovercard-metadata h3 { margin: 0; font-size: 13px; color: #000 }',
			'.zeti-hovercard-metadata h3 a:hover { text-decoration: underline }',
			'.zeti-hovercard-metadata p { margin: 0; color: #7a7a7a; font-weight: normal }',
			'.zeti-hovercard-metadata h3 a, .zeti-hovercard-metadata p a { color: inherit; text-decoration: none }',
			'.zeti-hovercard-metadata a.link { font-family: Georgia, serif; color: #00a200; font-style: italic; font-weight: normal }',
			'</style>'
		].join('\n'));
	};

	/**
	 * Logea un mensaje de acuerdo a las opciones de visibilidad
	 *
	 * @param level string Nivel de logeo
	 * @param data mixed Datos a logear
	 */
	var log = function (level, data) {
		if (logLevel !== level && logLevel !== 'all') {
			return;
		}
		console[level](data);
	};

	var renderAds = function (block, ads) {
		switch (block.type) {
			case 'intext':
				for (var index = 0; index < ads.length; index++) {
					// recorro los nodos de texto por cada publicidad y busco la palabra
					$(getTextNodes(block.container)).each(function () { // hay que obtener todos los nodos cada vez porque los voy remplazando
						// si pudo remplazar salgo del each
						return !addHovercard(this, ads[index], ads[index].words.split(','));
					});
				}
				break;
			default:
				$(block.container).html([
					'<div class="zeti-object zeti-block-container">',
						template(
							block.template + '<img src="%view%">' || getBlockTemplate(),
							ads
						),
					'</div>'
				].join(''));
				break;
		}
	};

	/**
	 * Handler de la respuesta de la API de busqueda
	 *
	 * @param response object Respuesta del servidor
	 */
	var responseHandler = function (response) {
		for (var index = 0; index < response.length; index++) {
			renderAds(_blocks[index], response[index]);
		}
	};

	/**
	 * Ejecuta los binds necesarios para mostrar las publicidades
	 */
	var setBinds = function () {
		// hovercards
		$('body').on('mouseover', '.zeti-hovercard-link', function () {
			var object = $(this),
				hovercard = object.next(),
				tracker = hovercard.find('.zeti-lazy');
			// mostrar hovercard
			object.css('zIndex', 200);
			hovercard.css({
				display: 'inline',
				left: function() {
					var offset = $.browser.webkit ? 0 : 300;
					if (object.offset().left + offset > document.body.clientWidth) {
						return (350 - object.width() + 12) * -1;
					} else {
						return -12;
					}
				}()
			});
			var marginBottom = 3;
			hovercard.find('.zeti-hovercard-title').height(object.height() + -1 * parseInt(hovercard.css('top')));
			if (tracker.length) {
				// trackear impresion
				tracker.attr('src', tracker.attr('data-src')).removeClass('zeti-lazy');
			}
		});
		$('body').on('mouseout', '.zeti-hovercard', function(event) {
			var object = $(this);
			if (!object.find(event.relatedTarget).length) {
				object.children('.zeti-hovercard-container').hide();
				object.children('.zeti-hovercard-link').css('zIndex', 50);
			}
		});
	};

	/**
	 * Setter de los bloques y chequeo de opciones minima
	 *
	 * @param array
	 */
	var setBlocks = function (blocks) {
		if (!blocks || !blocks.length) {
			throw new Error('Second paramater expects an array in zeti pipe.')
		}
		for (var index = 0; index < blocks.length; index++) {
			if (!blocks[index] || !blocks[index].container || !$(blocks[index].container).length) {
				continue;
			}
			_blocks.push(
				$.extend(
					{
						type: empty
					},
					blocks[index]
				)
			);
		}
	};

	/**
	 * Setter de la configuracion del cliente y chequeo de opciones minima
	 *
	 * @param object
	 */
	var setConfig = function (config) {
		if (!config || !config.client) {
			throw new Error('Missing mandatory field client in zeti config.');
		}
		_config = $.extend(
			true,
			{
				lang: empty,
				keywords: getWordRank(config.container || 'body', config.exclude || []),
				category: empty,
				user: {
					rank: empty,
					age: empty,
					gender: empty
				}
			},
			config
		);
	};

	/**
	 * Remplaza las %variables% en un string por las propiedades del objeto
	 *
	 * @param template string Template
	 * @param object mixed Uno (o mas en un array) objetos con las propiedades del template
	 * @return string
	 */
	template = function (template, object) {
		var response = '';
		if (object instanceof Array === false) {
			object = [ object ];
		}
		for (var index = 0; index < object.length; index++) {
			response += template.replace(/\%(.*?)\%/g, function(whole, match) {
				return object[index][match];
			});
		}
		return response;
	};

	/**
	 * Obtiene palabras claves de un texto
	 */
	var WordRank = function () {

		/**
		 * Lista de palabras excluidas separadas por coma
		 *
		 * @var string
		 */
		var _exclude = [
			'el', 'la', 'los', 'les', 'las', 'de', 'del', 'a', 'ante', 'con',
			'en', 'para', 'por', 'y', 'o', 'u', 'tu', 'te', 'ti', 'le', 'que',
			'al', 'ha', 'un', 'han', 'lo', 'su', 'una', 'estas', 'esto', 'este',
			'es', 'tras', 'suya', 'a', 'acá', 'ahí', 'ajena', 'ajenas', 'ajeno',
			'ajenos', 'al', 'algo', 'algún', 'alguna', 'algunas', 'alguno',
			'algunos', 'allá', 'alli', 'allí', 'ambos', 'ampleamos', 'ante',
			'antes', 'aquel', 'aquella', 'aquellas', 'aquello', 'aquellos',
			'aqui', 'aquí', 'arriba', '', 'asi', 'atras', 'aun', 'aunque',
			'bajo', 'bastante', 'bien', 'cabe', 'cada', 'casi', 'cierta',
			'ciertas', 'cierto', 'ciertos', 'como', 'cómo', 'con', 'conmigo',
			'conseguimos', 'conseguir', 'consigo', 'consigue', 'consiguen',
			'consigues', 'contigo', 'contra', 'cual', 'cuales', 'cualquier',
			'cualquiera', 'cualquieras', 'cuancuán', 'cuando', 'cuanta',
			'cuánta', 'cuantas', 'cuántas', 'cuanto', 'cuánto', 'cuantos',
			'cuántos', 'de', 'dejar', 'del', 'demás', 'demas', 'demasiada',
			'demasiadas', 'demasiado', 'demasiados', '', 'dentro', 'desde',
			'donde', 'dos', 'el', 'él', 'ella', 'ellas', '', 'ello', 'ellos',
			'empleais', 'emplean', 'emplear', 'empleas', 'empleo', 'en',
			'encima', 'entonces', 'entre', 'era', 'eramos', 'eran', 'eras',
			'eres', 'es', 'esa', 'esas', 'ese', 'eso', 'esos', 'esta', 'estaba',
			'estado', 'estais', 'estamos', 'estan', 'estar', 'estas', 'este',
			'esto', 'estos', 'estoy', 'etc', 'fin', 'fue', 'fueron', 'fui',
			'fuimos', 'gueno', 'ha', 'hace', 'haceis', 'hacemos', 'hacen',
			'hacer', 'haces', 'hacia', 'hago', 'hasta', 'incluso', 'intenta',
			'intentais', 'intentamos', 'intentan', 'intentar', 'intentas',
			'intento', 'ir', 'jamás', 'junto', 'juntos', 'la', 'largo', 'las',
			'lo', 'los', 'mas', 'más', 'me', 'menos', 'mi', 'mía', 'mia',
			'mias', 'mientras', 'mio', 'mío', 'mios', 'mis', 'misma', 'mismas',
			'mismo', 'mismos', 'modo', 'mucha', 'muchas', 'muchísima',
			'muchísimas', 'muchísimo', 'muchísimos', 'mucho', 'muchos', 'muy',
			'nada', 'ni', 'ningun', 'ninguna', 'ningunas', 'ninguno',
			'ningunos', 'no', 'nos', 'nosotras', 'nosotros', 'nuestra',
			'nuestras', 'nuestro', 'nuestros', 'nunca', 'os', 'otra', 'otras',
			'otro', 'otros', 'para', 'parecer', 'pero', 'poca', 'pocas', 'poco',
			'pocos', 'podeis', 'podemos', 'poder', 'podria', 'podriais',
			'podriamos', 'podrian', 'podrias', 'por', 'por', 'qué', 'porque',
			'primero', 'primero', 'desde', 'puede', 'pueden', 'puedo', 'pues',
			'que', 'qué', 'querer', 'quien', 'quién', 'quienes', 'quienes',
			'quiera', 'quienquiera', 'quiza', 'quizas', 'sabe', 'sabeis',
			'sabemos', 'saben', 'saber', 'sabes', 'se', 'segun', 'ser', 'si',
			'sí', 'siempre', 'siendo', 'sin', 'sín', 'sino', 'so', 'sobre',
			'sois', 'solamente', 'solo', 'somos', 'soy', 'sr', 'sra', 'sres',
			'esta', 'su', 'sus', 'suya', 'suyas', 'suyo', 'suyos', 'tal',
			'tales', 'también', 'tambien', 'tampoco', 'tan', 'tanta', 'tantas',
			'tanto', 'tantos', 'te', 'teneis', 'tenemos', 'tener', 'tengo',
			'ti', 'tiempo', 'tiene', 'tienen', 'toda', 'todas', 'todo', 'todos',
			'tomar', 'trabaja', 'trabajais', 'trabajamos', 'trabajan',
			'trabajar', 'trabajas', 'trabajo', 'tras', 'tú', 'tu', 'tus',
			'tuya', 'tuyo', 'tuyos', 'ultimo', 'un', 'una', 'unas', 'uno',
			'unos', 'usa', 'usais', 'usamos', 'usan', 'usar', 'usas', 'uso',
			'usted', 'ustedes', 'va', 'vais', 'valor', 'vamos', 'van', 'varias',
			'varios', 'vaya', 'verdad', 'verdadera', 'vosotras', 'vosotros',
			'voy', 'vuestra', 'vuestras', 'vuestro', 'vuestros', 'y', 'ya',
			'yo', 'como', 'cómo', 'hacer', 'se', 'tengo', 'dice', 'poner',
			'durante', 'mediante', 'tipo', 'gran', 'mejor', 'mayor', 'buen',
			'son'
		].join(',');

		/**
		 * Maximo de keywords a extraer
		 *
		 * @var int
		 */
		var _maxKeywords = 100;

		/**
		 * Longitud minima de las keywords
		 *
		 * @var int
		 */
		var _minLength = 4;

		/**
		 * Relevancia de las palabras para contar como keywords
		 *
		 * @var int
		 */
		var _relevance = 1;

		/**
		 * Texto a analizar
		 *
		 * @var string
		 */
		var _text;

		(function init() {
			// genera una hash list para buscar rapidamente las palabras excluidas
			var list = _exclude.split(','),
				newObject = {};
			for (var i = 0; i < list.length; i++) {
				newObject[list[i]] = 1;
			}
			_exclude = newObject;
		})();

		return {

			/**
			 * Agrega una (o mas palabras) a la lista de excluidos
			 *
			 * @param word mixed Una (string) o mas palabras (array) a excluir
			 * @return WordRank
			 */
			addExclude: function (word) {
				if (word instanceof Array === false) {
					word = [ word ];
				}
				for (var i = 0; i < word.length; ++i) {
					_exclude[word[i]] = 1;
				}
				return this;
			},

			/**
			 * Configura el texto a analizar
			 *
			 * @param text string Texto a analizar
			 * @return WordRank
			 */
			setText: function(text) {
				_text = text;
				return this;
			},

			/**
			 * Extrae las keywords del texto
			 *
			 * @return Array Una lista de palabras
			 */
			extract: function () {

				// minusculas
				_text = _text.toLowerCase();

				// remplazo tildes
				var replaceMap = {
					'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u'
				};
				_text = _text.replace(/[áéíóú]/g, function (match) {
					return replaceMap[match];
				});

				// obtiene el ranking de las palabras
				var words = _text.match(new RegExp('[\\wñ]{' + _minLength + ',}', 'gi')),
					wordRank = {};
				for (var i = 0; i < words.length; ++i) {
					var word = words[i];
					if (!_exclude[word]) {
						if (wordRank[word]) {
							wordRank[word]++;
						} else if (word.match(/^[^0-9]+$/)) {
							wordRank[word] = 1;
						}
					}
				}

				// elimina las irrelevantes
				if (_relevance > 1) {
					for (var word in wordRank) {
						if (wordRank[word] < _relevance) {
							delete wordRank[word];
						}
					}
				}

				// sort por rank
				var sortable = [];
				for (var word in wordRank) {
					sortable.push([ word, wordRank[word] ]);
				}
				sortable.sort(function (a, b) {
					return a[1] < b[1];
				});

				// array final y flatten al resultado
				var result = sortable.slice(0, _maxKeywords);
				for (var i = 0; i < result.length; i++) {
					result[i] = result[i][0];
				}

				return result;

			}

		};

	}();

	/**
	 * Metodos publicos
	 */
	return {

		/**
		 * Inicializador de la conexion adserver cliente
		 *
		 * @param object config Configuracion del cliente
		 * @param blocks array Bloques de publicidad
		 */
		pipe: function (config, blocks) {
			var ready = checkEnvironment(function () { zeti.pipe(config, blocks); });
			if (ready === false) {
				return false;
			}
			setConfig(config);
			setBlocks(blocks);
			injectCss();
			setBinds();
			fetch();
			return true;
		}

	};

}();
