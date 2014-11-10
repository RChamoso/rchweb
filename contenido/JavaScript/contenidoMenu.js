var listaMenu = [
    accesibilidad = {
        titulo    : 'Accesibilidad',
        subMenu   : 'menuAccesibilidad',
        contenido : [
            aenor = {
                titulo  : 'AENOR',
                funcion : 'mostrarFuncion',
                subTitulo : 'Requisitos de accesibilidad para contenidos en la Web',
                enlace  : 'http://www.aenor.es/aenor/normas/normas/fichanorma.asp?tipo=N&codigo=N0049614#.UZe-HMoeWsh'
            },
            checkMyColours = {
                titulo  : 'CheckMyColours',
                funcion : 'mostrarFuncion',
                subTitulo : 'Análisis de los colores utilizados en el diseño de nuestra web',
                enlace  : 'http://www.checkmycolours.com/'
            },
            colorFilter = {
                titulo  : 'Color Filter',
                funcion : 'mostrarFuncion',
                subTitulo : 'Análisis de los colores utilizados en el diseño de nuestra web',
                enlace  : 'http://colorfilter.wickline.org/'
            },
            w3cWai = {
                titulo  : 'W3C WAI',
                funcion : 'mostrarFuncion',
                subTitulo : 'Web Accessibility Initiative (WAI)',
                enlace  : 'http://www.w3.org/WAI/'
            }
        ]
    },
    apis = {
        titulo    : 'APIs',
        subMenu   : 'menuApis',
        contenido : [
            amazon = {
                titulo  : 'Amazon',
                funcion : 'nuevaVentana',
                subTitulo : '',
                enlace  : 'https://afiliados.amazon.es'
            },
            bing = {
                titulo  : 'Bing',
                funcion : 'mostrarFuncion',
                subTitulo : 'API Bing',
                enlace  : 'http://www.bing.com/toolbox/bingdeveloper'
            },
            envato = {
                titulo  : 'Envato',
                funcion : 'mostrarFuncion',
                subTitulo : 'API Envato',
                enlace  : 'http://extras.envato.com/api'
            },
            google = {
                titulo  : 'Google',
                funcion : 'mostrarFuncion',
                subTitulo : 'API Google',
                enlace  : 'http://code.google.com/apis/ajax/playground/#simple_embed'
            },
            graficos = {
                titulo  : 'Gráficos',
                funcion : 'nuevaVentana',
                subTitulo : '',
                enlace  : 'http://yuilibrary.com/yui/docs/charts'
            },
            linkedIn = {
                titulo  : 'LinkedIn',
                funcion : 'nuevaVentana',
                subTitulo : '',
                enlace  : 'http://developer.linkedin.com/apis'
            },
            stackExchange = {
                titulo  : 'StackExchange (con JSON)',
                funcion : 'mostrarFuncion',
                subTitulo : 'API StackExchange',
                enlace  : 'http://api.stackoverflow.com/1.0/usage'
            },
            twitter = {
                titulo  : 'Twitter',
                funcion : 'nuevaVentana',
                subTitulo : '',
                enlace  : 'https://dev.twitter.com/console'
            }
        ]
    },
    css = {
        titulo    : 'Css',
        subMenu   : 'menuCss',
        contenido : [
            basicos = {
                titulo  : 'Básicos',
                funcion : 'mostrarFuncion',
                subTitulo : 'Hojas de estilo por defecto del navegador',
                enlace  : 'http://www.iecss.com/'
            },
            compatibilidad = {
                titulo  : 'Compatibilidad',
                funcion : 'nuevaVentana',
                subTitulo : '',
                enlace  : 'http://www.quirksmode.org/css/contents.html'
            },
            generarBox = {
                titulo  : 'Generar Box',
                funcion : 'mostrarFuncion',
                subTitulo : 'Generar Box',
                enlace  : 'http://css3.me/'
            },
            generarCodigos = {
                titulo  : 'Generar Códigos',
                funcion : 'mostrarFuncion',
                subTitulo : 'Generar Códigos',
                enlace  : 'http://css3clickchart.com/#box-sizing'
            },
            generarCodigos2 = {
                titulo  : 'Generar Códigos 2',
                funcion : 'mostrarFuncion',
                subTitulo : 'Generar Códigos 2',
                enlace  : 'http://css3generator.com/'
            },
            generarGradientes = {
                titulo  : 'Generar Gradientes',
                funcion : 'mostrarFuncion',
                subTitulo : 'Generar Gradientes',
                enlace  : 'http://www.css3factory.com/linear-gradients/'
            },
            mozillaEspanol = {
                titulo  : 'Mozilla Español',
                funcion : 'nuevaVentana',
                subTitulo : '',
                enlace  : 'https://developer.mozilla.org/es/docs/Referencia_CSS'
            },
            mozillaCompleto = {
                titulo  : 'Mozilla Completo',
                funcion : 'nuevaVentana',
                subTitulo : '',
                enlace  : 'https://developer.mozilla.org/en-US/docs/CSS/CSS_Reference'
            },
            propiedades = {
                titulo  : 'Propiedades',
                funcion : 'mostrarFuncion',
                subTitulo : 'Propiedades',
                enlace  : 'http://css-infos.net'
            },
            referencias = {
                titulo  : 'Referencias',
                funcion : 'mostrarFuncion',
                subTitulo : 'Referencias',
                enlace  : 'http://www.cssportal.com/'
            },
            referencias2 = {
                titulo  : 'Referencias 2',
                funcion : 'mostrarFuncion',
                subTitulo : 'Referencias 2',
                enlace  : 'http://www.htmllion.com/index.html'
            },
            w3schools = {
                titulo  : 'w3schools',
                funcion : 'mostrarFuncion',
                subTitulo : 'W3schools',
                enlace  : 'http://w3schools.com/cssref'
            }
        ]
    },
    codigos = {
        titulo    : 'Códigos',
        subMenu   : 'menuCodigos',
        contenido : [
            unicode = {
                titulo  : 'Unicode',
                funcion : 'mostrarFuncion',
                subTitulo : '@font-face unicode',
                enlace  : 'http://www.w3.org/TR/css3-fonts/#unicode-range-desc'
            },
            codigoAsciiN = {
                titulo  : 'Ascii Normal',
                funcion : 'codigosAscii',
                subTitulo : 'Ascii Normal',
                enlace  : 'codigoAsciiN'
            },
            codigoAsciiAntiguo = {
                titulo  : 'Ascii Antiguo',
                funcion : 'codigosAscii',
                subTitulo : 'Ascii Antiguo',
                enlace  : 'codigoAsciiAntiguo'
            },
            codigoAsciiArabe = {
                titulo  : 'Ascii Arabe',
                funcion : 'codigosAscii',
                subTitulo : 'Ascii Arabe',
                enlace  : 'codigoAsciiArabe'
            },
            codigoAsciiChino = {
                titulo  : 'Ascii Chino',
                funcion : 'codigosAscii',
                subTitulo : 'Ascii Chino',
                enlace  : 'codigoAsciiChino'
            },
            codigoAsciiCJK = {
                titulo  : 'Ascii CJK',
                funcion : 'codigosAscii',
                subTitulo : 'Ascii CJK',
                enlace  : 'codigoAsciiCJK'
            },
            codigoAsciiOtrosIdiomas = {
                titulo  : 'Ascii Otros',
                funcion : 'codigosAscii',
                subTitulo : 'Ascii Otros',
                enlace  : 'codigoAsciiOtrosIdiomas'
            },
            codigoAsciiSC = {
                titulo  : 'Ascii Sin Clasificar',
                funcion : 'codigosAscii',
                subTitulo : 'Ascii Sin Clasificar',
                enlace  : 'codigoAsciiSC'
            },
            asciiVarios = {
                titulo  : 'Ascii Varios',
                funcion : 'mostrarBloques',
                subTitulo : 'Ascii Varios',
                enlace  : 'codigosAsciiVarios'
            },
            css2 = {
                titulo  : 'CSS2',
                funcion : 'mostrarFuncion',
                subTitulo : 'Códigos CSS2',
                enlace  : 'codigos/pdf/codigo_css2.pdf'
            },
            coffescript = {
                titulo  : 'Coffescript',
                funcion : 'mostrarFuncion',
                subTitulo : 'Códigos Coffescript',
                enlace  : 'codigos/pdf/codigos_coffescript.pdf'
            },
            javascript1 = {
                titulo  : 'Javascript 1',
                funcion : 'mostrarFuncion',
                subTitulo : 'Códigos Javascript 1',
                enlace  : 'codigos/pdf/codigos_javascript.pdf'
            },
            javascript2 = {
                titulo  : 'Javascript 2',
                funcion : 'mostrarFuncion',
                subTitulo : 'Códigos Javascript 2',
                enlace  : 'codigos/pdf/codigos_javascript1.pdf'
            },
            javascript3 = {
                titulo  : 'Javascript 3',
                funcion : 'mostrarFuncion',
                subTitulo : 'Códigos Javascript 3',
                enlace  : 'codigos/pdf/codigos_javascript2.pdf'
            },
            javascript4 = {
                titulo  : 'Javascript 4',
                funcion : 'mostrarFuncion',
                subTitulo : 'Códigos Javascript 4',
                enlace  : 'codigos/pdf/codigos_javascript3.pdf'
            },
            javascript5 = {
                titulo  : 'Javascript 5',
                funcion : 'mostrarFuncion',
                subTitulo : 'Códigos Javascript 5',
                enlace  : 'codigos/pdf/codigos_javascript4.pdf'
            },
            jquery1 = {
                titulo  : 'Jquery 1',
                funcion : 'mostrarFuncion',
                subTitulo : 'Códigos Jquery 1',
                enlace  : 'codigos/pdf/codigos_jquery.pdf'
            },
            jquery2 = {
                titulo  : 'Jquery 2',
                funcion : 'mostrarFuncion',
                subTitulo : 'Códigos Jquery 2',
                enlace  : 'codigos/pdf/codigos_jquery1.pdf'
            },
            web = {
                titulo  : 'Web',
                funcion : 'mostrarFuncion',
                subTitulo : 'Códigos Web',
                enlace  : 'codigos/pdf/codigo_web.pdf'
            }
        ]
    },
    appUp = {
        titulo    : 'Desarrollo AppUp',
        subMenu   : 'menuAppUp',
        contenido : [
            parte1 = {
                titulo  : 'Parte 1',
                funcion : 'mostrarFuncion',
                subTitulo : 'Parte 1',
                enlace  : 'appUp/parte1.html'
            },
            parte2 = {
                titulo  : 'Parte 2',
                funcion : 'mostrarFuncion',
                subTitulo : 'Parte 2',
                enlace  : 'appUp/parte2.html'
            },
            parte3 = {
                titulo  : 'Parte 3',
                funcion : 'mostrarFuncion',
                subTitulo : 'Parte 3',
                enlace  : 'appUp/parte3.html'
            },
            parte4 = {
                titulo  : 'Parte 4',
                funcion : 'mostrarFuncion',
                subTitulo : 'Parte 4',
                enlace  : 'appUp/parte4.html'
            },
            parte5 = {
                titulo  : 'Parte 5',
                funcion : 'mostrarFuncion',
                subTitulo : 'Parte 5',
                enlace  : 'appUp/parte5.html'
            }
        ]
    },
    fuentes = {
        titulo    : 'Fuentes',
        subMenu   : 'menuFuentes',
        contenido : [
            fuentes = {
                titulo  : 'Fuentes',
                funcion : 'mostrarFuncion',
                subTitulo : 'Fuentes',
                enlace  : 'fuentes/fuentes.html'
            },
            fuentesGenerar = {
                titulo  : 'Fuentes Generar',
                funcion : 'nuevaVentana',
                subTitulo : '',
                enlace  : 'http://www.typetester.org'
            },
            fuentesIconos = {
                titulo  : 'Fuentes Iconos',
                funcion : 'mostrarFuncion',
                subTitulo : 'Fuentes Iconos',
                enlace  : 'fuentes/raphaelicons/example.html'
            },
            fuentesInspiration = {
                titulo  : 'Fuentes Inspiration',
                funcion : 'mostrarFuncion',
                subTitulo : 'Fuentes Inspiration',
                enlace  : 'http://typespiration.com'
            },
            fuentesGoogle = {
                titulo  : 'Fuentes Google',
                funcion : 'mostrarFuncion',
                subTitulo : '',
                enlace  : 'http://www.google.com/webfonts'
            },
            generadorFuentes = {
                titulo  : 'Generador de Fuentes',
                funcion : 'mostrarFuncion',
                subTitulo : 'Generador de Fuentes',
                enlace  : 'http://www.fontsquirrel.com/tools/webfont-generator'
            },
            tamanoEm = {
                titulo  : 'Tamaño em',
                funcion : 'mostrarFuncion',
                subTitulo : 'Tamaño em',
                enlace  : 'fuentes/Fuentes em.pdf'
            }
        ]
    },
    geolocalizacion = {
        titulo    : 'Geolocalización',
        subMenu   : 'menuGeolocalizacion',
        contenido : [
            googleMapsAPI = {
                titulo  : 'Google Maps API',
                funcion : 'nuevaVentana',
                subTitulo : '',
                enlace  : 'https://developers.google.com/maps/?csw=1'
            },
            libreriaGmaps = {
                titulo  : 'Librería gmaps.js',
                funcion : 'mostrarFuncion',
                subTitulo : 'Librería gmaps.js',
                enlace  : 'http://hpneo.github.io/gmaps/'
            },
            referenciaW3C = {
                titulo  : 'Referencia W3C',
                funcion : 'mostrarFuncion',
                subTitulo : 'Referencia W3C',
                enlace  : 'http://dev.w3.org/geo/api/spec-source.html'
            },
            referenciaOpera = {
                titulo  : 'Referencia Opera',
                funcion : 'nuevaVentana',
                subTitulo : '',
                enlace  : 'http://dev.opera.com/articles/view/how-to-use-the-w3c-geolocation-api/'
            }
        ]
    },
    google = {
        titulo    : 'Google',
        subMenu   : 'menuGoogle',
        contenido : [
            datosEstructurados = {
                titulo  : 'Datos Estructurados',
                funcion : 'nuevaVentana',
                subTitulo : '',
                enlace  : 'http://www.google.com/webmasters/tools/richsnippets?q=http%3A%2F%2Fallrecipes.com%2Frecipe%2Fbanana-banana-bread%2F&html='
            }
        ]
    },
    herramientas = {
        titulo    : 'Herramientas',
        subMenu   : 'menuHerramientas',
        contenido : [
            codepen = {
                titulo  : 'Codepen',
                funcion : 'nuevaVentana',
                subTitulo : '',
                enlace  : 'http://codepen.io/'
            },
            codigoOnline = {
                titulo  : 'Código Online',
                funcion : 'mostrarBloques',
                subTitulo : 'Código Online',
                enlace  : 'codigoOnline'
            },
            entredesarrolladores = {
                titulo  : 'entreDesarrolladores',
                funcion : 'mostrarFuncion',
                subTitulo : 'entreDesarrolladores',
                enlace  : 'http://entredesarrolladores.com/'
            },
            github = {
                titulo  : 'GitHub',
                funcion : 'nuevaVentana',
                subTitulo : '',
                enlace  : 'https://github.com/'
            },
            googleCode = {
                titulo  : 'Google Code',
                funcion : 'mostrarFuncion',
                subTitulo : 'Google Code',
                enlace  : 'https://code.google.com/'
            },
            guiaEstilosGoogle = {
                titulo  : 'Guía de Estilos Google',
                funcion : 'mostrarFuncion',
                subTitulo : 'Guia de Estilos - Google',
                enlace  : 'http://google-styleguide.googlecode.com/svn/trunk/htmlcssguide.xml'
            },
            navegador = {
                titulo  : 'Navegador',
                funcion : 'mostrarFuncion',
                subTitulo : 'Validación del Navegador',
                enlace  : 'http://html5test.com/'
            },
            optimizacion = {
                titulo  : 'Optimización',
                funcion : 'mostrarSubMenu',
                subTitulo : '',
                enlace  : [
                    google = {
                        titulo  : 'Google',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Google Page Speed',
                        enlace  : 'http://developers.google.com/speed/pagespeed/insights/'
                    },
                    gtmetrix = {
                        titulo  : 'GT metrix',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'GT metrix',
                        enlace  : 'http://gtmetrix.com/'
                    },
                    majesticseo = {
                        titulo  : 'Majestic SEO',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Majestic SEO',
                        enlace  : 'https://es.majesticseo.com/'
                    },
                    mobiReady = {
                        titulo  : 'mobiReady',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'mobiReady',
                        enlace  : 'http://ready.mobi/launch.jsp?locale=en_EN'
                    },
                    pingdom = {
                        titulo  : 'PingDom',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'PingDom',
                        enlace  : 'http://tools.pingdom.com/fpt/'
                    },
                    quickSprout = {
                        titulo  : 'Quick Sprout',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Quick Sprout',
                        enlace  : 'http://www.quicksprout.com/'
                    },
                    websiteOptimizacion = {
                        titulo  : 'Website Optimización',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Website Optimización',
                        enlace  : 'http://www.websiteoptimization.com/'
                    },
                    whichloadsfaster = {
                        titulo  : 'Whichloadsfaster',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Which Loads Faster',
                        enlace  : 'http://whichloadsfaster.com/'
                    },
                    wooRank = {
                        titulo  : 'WooRank',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'WooRank - Optimizar un sitio web',
                        enlace  : 'http://www.woorank.com/es/'
                    }
                ]
            },
            stackOverflow = {
                titulo  : 'StackOverflow',
                funcion : 'nuevaVentana',
                subTitulo : '',
                enlace  : 'http://stackoverflow.com/'
            },
            varios1 = {
                titulo  : 'Varios 1',
                funcion : 'mostrarFuncion',
                subTitulo : 'Varios 1',
                enlace  : 'http://patterns.alistapart.com/'
            },
            varios2 = {
                titulo  : 'Varios 2',
                funcion : 'mostrarFuncion',
                subTitulo : 'Varios 2',
                enlace  : 'https://ux.mailchimp.com/patterns/'
            },
            varios3 = {
                titulo  : 'Varios 3',
                funcion : 'mostrarFuncion',
                subTitulo : 'Varios 3',
                enlace  : 'http://www.starbucks.com/static/reference/styleguide/'
            },
            varios4 = {
                titulo  : 'Varios 4',
                funcion : 'mostrarFuncion',
                subTitulo : 'Varios 4',
                enlace  : 'http://www.welie.com/patterns/'
            },
            varios5 = {
                titulo  : 'Varios 5',
                funcion : 'mostrarFuncion',
                subTitulo : 'Varios 5',
                enlace  : 'http://bradfrost.github.io/this-is-responsive/patterns.html#nav-complex'
            }
        ]
    },
    htmlcss = {
        titulo    : 'Html & Css',
        subMenu   : 'menuHtmlCss',
        contenido : [
            botones = {
                titulo  : 'Botones',
                funcion : 'mostrarSubMenu',
                subTitulo : '',
                enlace  : [
                    boton3d = {
                        titulo  : '3D',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Botones 3D',
                        enlace  : 'HtmlCss/botones/botones3D.html'
                    },
                    animados = {
                        titulo  : 'Animados',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Botones Animados',
                        enlace  : 'HtmlCss/botones/animados/index.html'
                    },
                    circulares = {
                        titulo  : 'Circulares',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Botones Circulares',
                        enlace  : 'HtmlCss/botones/botonesCirculares.html'
                    },
                    simbolos = {
                        titulo  : 'con Símbolos',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Botones con Símbolos',
                        enlace  : 'HtmlCss/botones/botonesSimbolos.html'
                    }
                ]
            },
            canvas = {
                titulo    : 'Canvas',
                funcion : 'mostrarSubMenu',
                subTitulo : '',
                enlace : [
                    dibujar = {
                        titulo  : 'Dibujar en Canvas',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Dibujar en Canvas',
                        enlace  : 'HtmlCss/canvas/DibujarenCanvas.html'
                    },
                    ejemplos = {
                        titulo  : 'Ejemplos',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Ejemplos',
                        enlace  : 'HtmlCss/canvas/canvas.html'
                    },
                    spiro = {
                        titulo  : 'Spiro Hipotrocoide',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Spiro Hipotrocoide',
                        enlace  : 'HtmlCss/canvas/SpiroHipotrocoide.html'
                    },
                    tutorial = {
                        titulo  : 'Tutorial HTML5',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Tutorial HTML5 Canvas',
                        enlace  : 'http://www.html5canvastutorials.com/'
                    },
                    tutorialMozilla = {
                        titulo  : 'Tutorial Mozilla',
                        funcion : 'nuevaVentana',
                        subTitulo : '',
                        enlace  : 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Canvas_tutorial'
                    }
                ]
            },
            contenido = {
                titulo    : 'Contenido',
                funcion : 'mostrarSubMenu',
                subTitulo : '',
                enlace : [
                    acordeon = {
                        titulo  : 'Acordeón',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Flexible Slide Acordeón',
                        enlace  : 'HtmlCss/contenido/index.html'
                    },
                    acordeonCierre = {
                        titulo  : 'Acordeon con Cierre',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Flexible Slide Acordeon con Cierre',
                        enlace  : 'HtmlCss/contenido/index2.html'
                    },
                    paginaCompleta = {
                        titulo  : 'Página Completa',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Página Completa',
                        enlace  : 'HtmlCss/contenido/paginaCompleta/index.html'
                    }
                ]
            },
            codigosCss = {
                titulo    : 'Css',
                funcion : 'mostrarSubMenu',
                subTitulo : '',
                enlace : [
                    codigosBasicos = {
                        titulo  : 'Códigos Básicos',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Códigos Básicos',
                        enlace  : 'HtmlCss/codigosCss/codigosBasicos/CodigosCssBasicos.html'
                    },
                    cortarPalabras = {
                        titulo  : 'Cortar Palabras',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Cortar Palabras Largas en un Bloque',
                        enlace  : 'HtmlCss/codigosCss/cortarPalabras.html'
                    },
                    mediaQueries = {
                        titulo  : 'Media Queries',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Media Queries',
                        enlace  : 'HtmlCss/codigosCss/How To Use CSS3 Media Queries To Create a Mobile Version of Your Website _ Smashing Mobile.html'
                    },
                    nthChild = {
                        titulo  : ':nth-child() ',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'nth-child ',
                        enlace  : 'http://xitrus.es/blog/120/Pseudo-clase_Nth-child#!'
                    },
                    selectores = {
                        titulo  : 'Selectores',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Selectores',
                        enlace  : 'HtmlCss/codigosCss/nuevos-selectores-de-css3.html'
                    },
                    varios = {
                        titulo  : 'Varios',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Varios',
                        enlace  : 'HtmlCss/codigosCss/Varios/varios.html'
                    }
                ]
            },
            diseno = {
                titulo    : 'Diseño',
                funcion : 'mostrarSubMenu',
                subTitulo : '',
                enlace : [
                    barrasProgreso = {
                        titulo  : 'Barras de Progreso',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Barra de Progreso',
                        enlace  : 'HtmlCss/diseno/barrasDeProgreso.html'
                    },
                    barrasProgreso2 = {
                        titulo  : 'Barras de Progreso 2',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Barras de Progreso 2',
                        enlace  : 'HtmlCss/diseno/barrasDeProgreso2.html'
                    },
                    bloqueFlotante = {
                        titulo  : 'Bloque Flotante Centrado',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Bloque Flotante Centrado',
                        enlace  : 'HtmlCss/diseno/bloqueFlotante.html'
                    },
                    borderRadius = {
                        titulo  : 'Border Radius',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Border Radius Asimétricos',
                        enlace  : 'HtmlCss/diseno/borderRadiusAsimetricos.html'
                    },
                    boxShadow = {
                        titulo  : 'Box Shadow',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Box Shadow',
                        enlace  : 'HtmlCss/diseno/box-shadow.html'
                    },
                    caraOculta = {
                        titulo  : 'Cara Oculta',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Mostrar la Cara Oculta',
                        enlace  : 'HtmlCss/diseno/caraOculta.html'
                    },
                    cajaBuscar = {
                        titulo  : 'Caja Buscar',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Caja Buscar',
                        enlace  : 'HtmlCss/diseno/cajaBuscar.html'
                    },
                    centrarBloque = {
                        titulo  : 'Centrar Bloque',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Centrar Bloque',
                        enlace  : 'http://codepen.io/shshaw/full/gEiDt'
                    },
                    colores = {
                        titulo  : 'Colores del Sistema',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Colores del Sistema',
                        enlace  : 'HtmlCss/diseno/coloresSistema.html'
                    },
                    coloresGenerar = {
                        titulo  : 'Colores Generar',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Generar Colores',
                        enlace  : 'http://www.colorexplorer.com/'
                    },
                    coloresHex = {
                        titulo  : 'Colores Hexadecimal',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Colores Hexadecimal',
                        enlace  : 'http://coding.smashingmagazine.com/2012/10/04/the-code-side-of-color'
                    },
                    coloresHSL = {
                        titulo  : 'Colores HSL',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Colores HSL',
                        enlace  : 'HtmlCss/diseno/colorHSL.html'
                    },
                    colorPsicologia = {
                        titulo  : 'Color Psicología',
                        funcion : 'mostrarBloques',
                        subTitulo : 'Color Psicología',
                        enlace  : 'colorPsicologia'
                    },
                    cursor = {
                        titulo  : 'Cursor',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Mostrar diferentes Cursores',
                        enlace  : 'HtmlCss/diseno/cursor.html'
                    },
                    dropShadow = {
                        titulo  : 'Drop-Shadow',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Sombra completa (drop-shadow) [webkit]',
                        enlace  : 'HtmlCss/diseno/dropShadow.html'
                    },
                    efectosImagen = {
                        titulo  : 'Efectos con Imagen',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Efectos con Imagen',
                        enlace  : 'HtmlCss/diseno/efectosImagen/index.html'
                    },
                    escalarElementos = {
                        titulo  : 'Escalar Elementos',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Escalar Elementos',
                        enlace  : 'HtmlCss/diseno/escalarElementos.html'
                    },
                    figurasGeometricas = {
                        titulo  : 'Figuras Geométricas',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Figuras Geométricas',
                        enlace  : 'HtmlCss/diseno/figurasGeometricas.html'
                    },
                    fondoTexto = {
                        titulo  : 'Fondo Texto',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Fondo del Texto con Imagenes',
                        enlace  : 'HtmlCss/diseno/fondoTexto.html'
                    },
                    generarCodigos = {
                        titulo  : 'Generar Códigos',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Generar Códigos',
                        enlace  : 'http://ie.microsoft.com/testdrive/Graphics/hands-on-css3/Default.html'
                    },
                    gradientes = {
                        titulo  : 'Gradientes',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Gradientes',
                        enlace  : 'HtmlCss/diseno/gradientes.html'
                    },
                    iconos = {
                        titulo  : 'Generar iconos',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Generar iconos',
                        enlace  : 'http://glyphter.com/'
                    },
                    intercambioPalabras = {
                        titulo  : 'Intercambio de Palabras',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Intercambio de Palabras',
                        enlace  : 'HtmlCss/diseno/intercambioPalabra/index.html'
                    },
                    mapa3D = {
                        titulo  : 'Mapa 3D',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Mapa con Efecto 3D',
                        enlace  : 'HtmlCss/diseno/mapa3D.html'
                    },
                    maquinaEscribir = {
                        titulo  : 'Máquina Escribir',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Mostrar Texto como Máquina de Escribir',
                        enlace  : 'HtmlCss/diseno/maquinaEscribir.html'
                    },
                    nubes = {
                        titulo  : 'Nubes',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Comentarios en Nubes',
                        enlace  : 'HtmlCss/diseno/nubes.html'
                    },
                    objetosEquidistantes = {
                        titulo  : 'Objetos Equidistantes',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Objetos Equidistantes',
                        enlace  : 'HtmlCss/diseno/objetosEquidistantes.html'
                    },
                    papel = {
                        titulo  : 'Papel',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Hojas de Papel',
                        enlace  : 'HtmlCss/diseno/hojasPapel.html'
                    },
                    presentacionEnlaces = {
                        titulo  : 'Presentación enlaces',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Presentación enlaces',
                        enlace  : 'HtmlCss/diseno/presentacionEnlaces.html'
                    },
                    ribbons = {
                        titulo  : 'Ribbons',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Ribbons',
                        enlace  : 'HtmlCss/diseno/ribbons.html'
                    },
                    rotarElementos = {
                        titulo  : 'Rotar Elementos',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Rotar Elementos',
                        enlace  : 'HtmlCss/diseno/rotarElementos.html'
                    },
                    sombras = {
                        titulo  : 'Sombras',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Sombras',
                        enlace  : 'HtmlCss/diseno/sombras.html'
                    },
                    sombrasTexto = {
                        titulo  : 'Sombras Texto',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Sombras Texto',
                        enlace  : 'HtmlCss/diseno/sombrasTexto.html'
                    },
                    texto3D = {
                        titulo  : 'Texto 3D',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Generar Texto en 3D',
                        enlace  : 'http://www.3dcsstext.com/'
                    },
                    titulosExtendidos = {
                        titulo  : 'Títulos Extendidos',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Títulos Extendidos',
                        enlace  : 'HtmlCss/diseno/titulosExtendidos.html'
                    },
                    tipografia = {
                        titulo  : 'Tipografía',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Efectos Tipográficos',
                        enlace  : 'HtmlCss/diseno/tipografia/index.html'
                    },
                    wordWrap = {
                        titulo  : 'Word Wrap',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Recortar Palabras Largas Word-Wrap',
                        enlace  : 'HtmlCss/diseno/wordWrap.html'
                    }
                ]
            },
            formularios = {
                titulo    : 'Formularios',
                funcion : 'mostrarSubMenu',
                subTitulo : '',
                enlace : [
                    checkbox = {
                        titulo  : 'Checkbox',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Checkbox Estilo Interruptor',
                        enlace  : 'HtmlCss/formularios/checkbox.html'
                    },
                    inputEmailUrl = {
                        titulo  : 'Input: email-Url',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Input: Email & Url',
                        enlace  : 'HtmlCss/formularios/inputEmailUrl.html'
                    },
                    inputPlaceHolder = {
                        titulo  : 'Input: placeHolder',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Input: PlaceHolder',
                        enlace  : 'HtmlCss/formularios/inputPlaceholder.html'
                    }
                ]
            },
            html = {
                titulo    : 'Html',
                funcion : 'mostrarSubMenu',
                subTitulo : '',
                enlace : [
                    download = {
                        titulo  : 'Download',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Download - Descargar un archivo',
                        enlace  : 'HtmlCss/html/download.html'
                    },
                    elementos = {
                        titulo  : 'Elementos',
                        funcion : 'nuevaVentana',
                        subTitulo : '',
                        enlace  : 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element'
                    },
                    elementosBloque = {
                        titulo  : 'Elementos de Bloque',
                        funcion : 'nuevaVentana',
                        subTitulo : '',
                        enlace  : 'https://developer.mozilla.org/es/docs/HTML/Block-level_elements'
                    },
                    elementosLinea = {
                        titulo  : 'Elementos en Línea',
                        funcion : 'nuevaVentana',
                        subTitulo : '',
                        enlace  : 'https://developer.mozilla.org/en-US/docs/HTML/Inline_elements'
                    },
                    googleKeyword = {
                        titulo  : 'Google Keyword',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Google Keyword',
                        enlace  : 'http://www.googlekeywordtool.com/'
                    },
                    linkPrefetch = {
                        titulo  : 'Link Prefetch',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Link rel=Prefetch',
                        enlace  : 'HtmlCss/html/Link Prefetch.html'
                    },
                    scriptAsyncDefer = {
                        titulo  : 'Script: Async-Defer',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Script: Async & Defer',
                        enlace  : 'HtmlCss/html/scriptAsyncDefer.html'
                    }
                ]
            },
            listas = {
                titulo    : 'Listas',
                funcion : 'mostrarSubMenu',
                subTitulo : '',
                enlace : [
                    animadas = {
                        titulo  : 'Animadas',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Numeracion De Listas Animadas',
                        enlace  : 'HtmlCss/listas/animadas.html'
                    },
                    numeracionListas = {
                        titulo  : 'Numeracion De Listas',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Numeracion De Listas (auto)',
                        enlace  : 'HtmlCss/listas/NumeracionDeListas.html'
                    }
                ]
            },
            login = {
                titulo    : 'Login',
                funcion : 'mostrarSubMenu',
                subTitulo : '',
                enlace : [
                    papelFondo = {
                        titulo  : 'Papel de Fondo',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Papel de Fondo',
                        enlace  : 'HtmlCss/login/papel/index.html'
                    },
                    login1 = {
                        titulo  : 'Login 1',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Login 1',
                        enlace  : 'HtmlCss/login/login1.html'
                    },
                    login2 = {
                        titulo  : 'Login 2',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Login 2',
                        enlace  : 'HtmlCss/login/login2.html'
                    },
                    login3 = {
                        titulo  : 'Login 3',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Login 3',
                        enlace  : 'HtmlCss/login/login3.html'
                    },
                    login4 = {
                        titulo  : 'Login 4',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Login 4',
                        enlace  : 'HtmlCss/login/login4.html'
                    }
                ]
            },
            menus = {
                titulo    : 'Menús',
                funcion : 'mostrarSubMenu',
                subTitulo : '',
                enlace : [
                    animation = {
                        titulo  : 'Animation',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Menu Animado',
                        enlace  : 'HtmlCss/menus/Animation Menus.html'
                    },
                    blurMenu = {
                        titulo  : 'Blur Menu',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Blur Menu (con otros estilos Css)',
                        enlace  : 'HtmlCss/menus/BlurMenu.html'
                    },
                    blurMenu1 = {
                        titulo  : 'Blur Menu 1',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Blur Menu (revisar)',
                        enlace  : 'HtmlCss/menus/blur_1/index.html'
                    },
                    flipping = {
                        titulo  : 'Flipping',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Animated 3D Flipping',
                        enlace  : 'HtmlCss/menus/3d-menu.html'
                    },
                    menuVariosDisenos = {
                        titulo  : 'Menu Varios Diseños',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Menu Varios Diseños (carpeta styles)  (modificar página)',
                        enlace  : 'HtmlCss/menus/MenuVariosDisenos.html'
                    },
                    menuDesplegar = {
                        titulo  : 'Menu y Desplegar',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Menu y Desplegar',
                        enlace  : 'HtmlCss/menus/MenuyDesplegar.html'
                    }
                ]
            },
            pantalla = {
                titulo    : 'Pantalla',
                funcion : 'mostrarSubMenu',
                subTitulo : '',
                enlace : [
                    fullScreen = {
                        titulo  : 'Full Screen',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Full Screen',
                        enlace  : 'HtmlCss/pantalla/FullScreen.html'
                    },
                    lightboxCSS = {
                        titulo  : 'Lightbox con CSS',
                        funcion : 'mostrarBloques',
                        subTitulo : 'Lightbox con CSS',
                        enlace  : 'lightbox'
                    },
                    resolPantalla1 = {
                        titulo  : 'Resol. de Pantalla 1',
                        funcion : 'nuevaVentana',
                        subTitulo : '',
                        enlace  : 'http://responsivepx.com/'
                    },
                    resolPantalla2 = {
                        titulo  : 'Resol. de Pantalla 2',
                        funcion : 'nuevaVentana',
                        subTitulo : '',
                        enlace  : 'http://quirktools.com/screenfly/'
                    },
                    retinaImages = {
                        titulo  : 'Retina Images',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Retina Images',
                        enlace  : 'http://retina-images.complexcompulsions.com/'
                    },
                    tamanoPantalla = {
                        titulo  : 'Tamaño Pantalla',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Tamaño Pantalla',
                        enlace  : 'http://screensiz.es/'
                    }
                ]
            },
            scroll = {
                titulo    : 'Scroll',
                funcion : 'mostrarSubMenu',
                subTitulo : '',
                enlace : [
                    backgroundScroll = {
                        titulo  : 'Background Scroll',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Background Scroll con Imagenes',
                        enlace  : 'HtmlCss/scroll/backgroundScroll/indeX.html'
                    },
                    paginacion = {
                        titulo  : 'Paginación',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Paginación',
                        enlace  : 'http://www.webdesigndev.com/web-development/10-great-jquery-pagination-plugins-and-tutorials'
                    },
                    scrollBar = {
                        titulo  : 'Scroll Bar',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Scroll Bar',
                        enlace  : 'HtmlCss/scroll/ScrollBar.html'
                    },
                    sidebarFija = {
                        titulo  : 'Sidebar Fija',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Sidebar Fija',
                        enlace  : 'HtmlCss/scroll/sidebar.html'
                    },
                    sidebarFlotante = {
                        titulo  : 'Sidebar Flotante',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Sidebar Flotante',
                        enlace  : 'HtmlCss/scroll/sidebar2.html'
                    },
                    varios = {
                        titulo  : 'Varios',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Varios',
                        enlace  : 'http://blogs.lavanguardia.com/elcuartobit/el-efecto-scroll-en-la-informacion-27126'
                    }
                ]
            },
            slideShow = {
                titulo    : 'SlideShow',
                funcion : 'mostrarSubMenu',
                subTitulo : '',
                enlace : [
                    infinito = {
                        titulo  : 'Infinito',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'SlideShow Infinito con una sola imagen',
                        enlace  : 'HtmlCss/slideshow/slideShowInfinito.html'
                    },
                    pantallaCompleta = {
                        titulo  : 'Pantalla Completa',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Pantalla Completa',
                        enlace  : 'HtmlCss/slideshow/pantallaCompleta/index.html'
                    },
                    varios = {
                        titulo  : 'Varios',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Varios (chrome)',
                        enlace  : 'HtmlCss/slideshow/varios/index.html'
                    }
                ]
            },
        ]
    },
    idiomas = {
        titulo    : 'Idiomas',
        subMenu   : 'menuIdiomas',
        contenido : [
            diccionario2 = {
                titulo  : 'Diccionario Dirae',
                funcion : 'mostrarFuncion',
                subTitulo : 'Diccionario Dirae',
                enlace  : 'http://dirae.es/'
            },
            diccionario1 = {
                titulo  : 'Diccionario Forvo',
                funcion : 'mostrarFuncion',
                subTitulo : 'Diccionario Forvo',
                enlace  : 'http://es.forvo.com/languages/'
            }
        ]
    },
    imagenes = {
        titulo    : 'Imagenes',
        subMenu   : 'menuImagenes',
        contenido : [
            aplicarFiltros = {
                titulo  : 'Aplicar Filtros',
                funcion : 'mostrarFuncion',
                subTitulo : 'Aplicar Filtros',
                enlace  : 'imagenes/css-filters.html'
            },
            comprimirPng = {
                titulo  : 'Comprimir PNG',
                funcion : 'mostrarFuncion',
                subTitulo : 'Comprimir Archivos PNG',
                enlace  : 'https://tinypng.com/'
            },
            efectosFilter = {
                titulo  : 'Efectos Filter',
                funcion : 'mostrarFuncion',
                subTitulo : 'Efectos sobre Imagenes {filter} (solo webkit)',
                enlace  : 'imagenes/efectosFilter.html'
            },
            efectosHover = {
                titulo  : 'Efectos Hover',
                funcion : 'mostrarFuncion',
                subTitulo : 'Efectos sobre Imagenes :hover',
                enlace  : 'imagenes/efectosHover.html'
            },
            editorOnline = {
                titulo  : 'Editor Online',
                funcion : 'mostrarFuncion',
                subTitulo : 'Editor Online',
                enlace  : 'http://www.picmonkey.com/'
            },
            sprites = {
                titulo  : 'Sprites',
                funcion : 'mostrarFuncion',
                subTitulo : 'Sprites',
                enlace  : 'imagenes/HTML5 optimizado mediante CSS_CSS3.html'
            }
        ]
    },
    javaScript = {   /**  revisar   **/
        titulo    : 'JavaScript',
        subMenu   : 'menuJavascript',
        contenido : [
            apis = {
                titulo    : 'APIs',
                funcion : 'mostrarSubMenu',
                subTitulo : '',
                enlace : [
                    webSocket = {
                        titulo  : 'WebSocket',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'WebSocket',
                        enlace  : 'js/apis/WebSocket and Socket.IO.html'
                    }
                ]
            },
            codigos = {   /**  revisar   **/
                titulo    : 'Codigos',
                funcion : 'mostrarSubMenu',
                subTitulo : '',
                enlace : [
                    arrays = {
                        titulo  : 'Arrays',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Arrays',
                        enlace  : 'http://josemato.name/arrays-y-metodos-en-javascript-ecmascript-3?goback=.gde_3780522_member_5803148282758705156#!'
                    },
                    avanzaRetrocedeNavegador = {
                        titulo  : 'Avanza Retrocede Navegador',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Avanza Retrocede Navegador',
                        enlace  : 'js/AvanzaRetrocedeNavegador.html'
                    },
                    camara = {
                        titulo  : 'Camera',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'usery camera and microphone .getUserMedia',
                        enlace  : 'js/camera.html'
                    },
                    className1 = {
                        titulo  : 'Class Name',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Aplicar .className a Elementos',
                        enlace  : 'js/aplicarClassName.html'
                    },
                    comunicacion = {
                        titulo  : 'Comunicación',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Metodos de Comunicación XHR & XHR2, Web Messaging, Web Sockets, Server Sent Events y Web Workers',
                        enlace  : 'js/comunicacion.html'
                    },
                    crearTablas = {
                        titulo  : 'Crear Tablas',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Crear Tablas',
                        enlace  : 'js/crearTablas.html'
                    },
                    dataAtributes1 = {
                        titulo  : 'Data Atributes',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Aplicar atributos data- a Elementos',
                        enlace  : 'js/dataAtributes.html'
                    },
                    dragAndDrop = {
                        titulo  : 'Drag And Drop',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Drag And Drop',
                        enlace  : 'js/DragAndDrop/index.html'
                    },
                    ejercicios = {
                        titulo  : 'Ejercicios',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Ejercicios (revisar archivo)',
                        enlace  : 'js/ejercicios.html'
                    },
                    eMail1 = {
                        titulo  : 'eMail 1',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'eMail 1',
                        enlace  : 'http://htmlemailboilerplate.com'
                    },
                    eMail2 = {
                        titulo  : 'eMail 2',
                        funcion : 'nuevaVentana',
                        subTitulo : '',
                        enlace  : 'http://www.getfractal.com'
                    },
                    efectoImagenes = {
                        titulo  : 'Efecto sobre Imagenes',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Efecto sobre Imagenes',
                        enlace  : 'js/efectoImagen/index.html'
                    },
                    efectosLetras = {
                        titulo  : 'Efectos sobre Letras',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Efectos sobre Letras',
                        enlace  : 'js/efectoLetras.html'
                    },
                    escape = {
                        titulo  : 'Escape',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Secuencias Escape(\\)',
                        enlace  : 'http://www.javascriptkit.com/jsref/escapesequence.shtml'
                    },
                    fecha = {
                        titulo  : 'Fecha',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Mostrar Fecha',
                        enlace  : 'js/fecha.html'
                    },
                    fechaSelect = {
                        titulo  : 'Fecha Select',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Seleccionar Fecha',
                        enlace  : 'js/fechasFunciones.html'
                    },
                    formulario = {
                        titulo  : 'Formulario',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Formulario (revisar)',
                        enlace  : 'js/formulario.html'
                    },
                    geolocation1 = {
                        titulo  : 'Geolocation',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Geolocation',
                        enlace  : 'js/geolocation.html'
                    },
                    geolocation2 = {
                        titulo  : 'Geolocation 2',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Direccion IP y Geolocation',
                        enlace  : 'js/direccionIP.html'
                    },
                    history1 = {
                        titulo  : 'History',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Historial - history',
                        enlace  : 'js/history.html'
                    },
                    html5Apis = {
                        titulo  : 'Html5 Apis',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Html5 Apis',
                        enlace  : 'js/html5 Apis.html'
                    },
                    identificarElementos = {
                        titulo  : 'Identificar Elementos',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'IdentificarElementos',
                        enlace  : 'js/identificarElementos.html'
                    },
                    json = {
                        titulo  : 'JSON',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'JSON',
                        enlace  : 'http://json.org/json-es.html'
                    },
                    leerArchivos = {
                        titulo  : 'Leer Archivos',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Leer Archivos Locales',
                        enlace  : 'js/Reading local files in JavaScript - HTML5 Rocks.html'
                    },
                    lightbox = {
                        titulo  : 'Lightbox',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Lightbox',
                        enlace  : 'js/lightbox/CajadeLuz.html'
                    },
                    lightbox2 = {
                        titulo  : 'Lightbox 2',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Lightbox 2',
                        enlace  : 'js/lightbox2/index.html'
                    },
                    location1 = {
                        titulo  : 'Location',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Localización de la Página',
                        enlace  : 'js/location.html'
                    },
                    mouse1 = {
                        titulo  : 'Mouse',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Comentario siguiendo el Mouse',
                        enlace  : 'js/mouse.html'
                    },
                    navigator1 = {
                        titulo  : 'Navigator',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Información del Navegador',
                        enlace  : 'js/navigator.html'
                    },
                    nuevaVentana = {
                        titulo  : 'Nueva Ventana',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Abrir nueva ventana',
                        enlace  : 'js/nuevaVentana.html'
                    },
                    poo = {
                        titulo  : 'POO',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'POO - class y object',
                        enlace  : 'js/POO.html'
                    },
                    prefijos = {
                        titulo  : 'Prefijos',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Prefijos -moz -webkit -ms',
                        enlace  : 'js/prefijos.html'
                    },
                    rss = {
                        titulo  : 'RSS',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Lector RSS Javascript',
                        enlace  : 'http://www.desarrolloweb.com/articulos/lector-rss-con-javascript.html'
                    },
                    server1 = {
                        titulo  : 'Server',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Server-Sent Events',
                        enlace  : 'js/server.html'
                    },
                    slider1 = {
                        titulo  : 'Slider',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Slider Valor',
                        enlace  : 'js/slider.html'
                    },
                    string = {
                        titulo  : 'String',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Referencias para String',
                        enlace  : 'http://www.impressivewebs.com/javascript-string-methods-reference/'
                    },
                    varios1 = {
                        titulo  : 'Varios 1',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Códigos HTML y Java Script',
                        enlace  : 'js/Códigos HTML y JavaScript.html'
                    },
                    varios2 = {
                        titulo  : 'Varios 2',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Códigos HTML y Java Script',
                        enlace  : 'js/Códigos HTML y JavaScript 2.html'
                    },
                    webCam = {
                        titulo  : 'WebCam',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'WebCam',
                        enlace  : 'js/camara.html'
                    },
                    webStorage1 = {
                        titulo  : 'Web Storage',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Web Storage - localStorage',
                        enlace  : 'js/webStorage.html'
                    },
                    zip1 = {
                        titulo  : 'Zip',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Create .zip files',
                        enlace  : 'js/ArchivoZip/index.html'
                    }
                ]
            },
            javaScriptManual = {
                titulo    : 'Manuales',
                funcion : 'mostrarSubMenu',
                subTitulo : '',
                enlace : [
                    algunosCodigosJavaScript = {
                        titulo  : 'Algunos códigos javaScript',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Algunos códigos javaScript',
                        enlace  : 'js/Manuales/Algunos codigos javascript.pdf'
                    },
                    eloquent = {
                        titulo  : 'Eloquent',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Eloquent javaScript',
                        enlace  : 'js/Manuales/Eloquent JavaScript/contents.html'
                    },
                    ejemplosJavaScript = {
                        titulo  : 'Ejemplos javaScript',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Ejemplos javaScript',
                        enlace  : 'js/Manuales/Ejemplos javascript.pdf'
                    },
                    introduccionJavaScript1 = {
                        titulo  : 'Introducción JavaScript 1',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Introducción JavaScript 1',
                        enlace  : 'js/Manuales/introduccion javascript.pdf'
                    },
                    introduccionJavaScript2 = {
                        titulo  : 'Introducción JavaScript 2',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Introducción JavaScript 2',
                        enlace  : 'js/Manuales/introduccion javascript 2.pdf'
                    }
                ]
            },
            javaScriptMovil = {
                titulo    : 'Movil',
                funcion : 'mostrarSubMenu',
                subTitulo : '',
                enlace : [
                    problemasAndroid = {
                        titulo  : 'Problemas Android',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Solución de Problemas en Android',
                        enlace  : 'http://thedroidguy.com/2013/07/solutions-for-android-javascript-problems/'
                    }
                ]
            },
            jQuery = {
                titulo    : 'jQuery',
                funcion : 'mostrarSubMenu',
                subTitulo : '',
                enlace : [
                    audio = {
                        titulo  : 'Audio',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Audio (jQuery/audiojs/audiojs.zip)',
                        enlace  : 'jQuery/audio.html'
                    },
                    componentes = {
                        titulo  : 'Componentes',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Componentes',
                        enlace  : 'jQuery/componentes/index.html'
                    },
                    efectosTexto = {
                        titulo  : 'Efectos Texto',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Efectos de Texto',
                        enlace  : 'http://www.gloobs.com/blog/alucinantes-efectos-en-texto-con-jquery'
                    },
                    googleMaps = {
                        titulo  : 'Google Maps',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Google Maps',
                        enlace  : 'jQuery/mapas/GoogleMaps.htm'
                    },
                    mouseApuntador = {
                        titulo  : 'Mouse Apuntador',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Mouse Apuntador',
                        enlace  : 'jQuery/mouseApuntador/index.html'
                    },
                    socialPlugIn = {
                        titulo  : 'Social Plug-In',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Social Plug-In',
                        enlace  : 'jQuery/SocialPlug-In/index.html'
                    },
                    tablaEditable = {
                        titulo  : 'Tabla Editable',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Tabla Editable',
                        enlace  : 'jQuery/editablegrid-1.0.11/examples/demo_attach.html'
                    }
                ]
            },
            utilidades = {
                titulo    : 'Utilidades',
                funcion : 'mostrarSubMenu',
                subTitulo : '',
                enlace : [
                    validadorJsLint = {
                        titulo  : 'Validador JsLint',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Validador de Codigo JsLint',
                        enlace  : 'http://www.jslint.com/'
                    },
                    validadorJsHint = {
                        titulo  : 'Validador JsHint',
                        funcion : 'nuevaVentana',
                        subTitulo : '',
                        enlace  : 'http://jshint.com//'
                    }
                ]
            },
        ]
    },
    movil = {
        titulo    : 'Movil',
        subMenu   : 'menuMovil',
        contenido : [
            analizador = {
                titulo  : 'Analizador',
                funcion : 'mostrarFuncion',
                subTitulo : 'Analizador de Compatibilidad de Códigos (http://rng.io)',
                enlace  : 'http://rng.io/'
            },
            compatibilidadHtml5 = {
                titulo  : 'Compatibilidad Html5',
                funcion : 'mostrarFuncion',
                subTitulo : 'Compatibilidad Html5 y Css3',
                enlace  : 'http://mobilehtml5.org/'
            },
            firefoxOs = {
                titulo  : 'Firefox Os',
                funcion : 'mostrarSubMenu',
                subTitulo : '',
                enlace : [
                    firefoxOs = {
                        titulo  : 'Principal',
                        funcion : 'nuevaVentana',
                        subTitulo : '',
                        enlace  : 'http://www.mozilla.org/en-US/styleguide/products/firefox-os/'
                    },
                    firefoxApi = {
                        titulo  : 'API Firefox OS',
                        funcion : 'nuevaVentana',
                        subTitulo : '',
                        enlace  : 'https://developer.mozilla.org/en-US/Apps/Reference'
                    },
                    firefoxGuia = {
                        titulo  : 'Aplicaciones Firefox OS',
                        funcion : 'nuevaVentana',
                        subTitulo : '',
                        enlace  : 'https://developer.mozilla.org/es/docs/Web/Apps/Quickstart/Build/tu_primera_aplicacion'
                    },
                    firefoxGuia2 = {
                        titulo  : 'Aplicaciones Firefox OS 2',
                        funcion : 'nuevaVentana',
                        subTitulo : '',
                        enlace  : 'https://developer.mozilla.org/es/docs/Aplicaciones/Comenzando_aplicaciones'
                    },
                    gaia = {
                        titulo  : 'Gaia',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Gaia',
                        enlace  : 'movil/Firefox Os/Gaia Technical Walkthrough.pdf'
                    }
                ]
            },
            frameworkMovil = {
                titulo  : 'Framework Movil',
                funcion : 'mostrarFuncion',
                subTitulo : 'Framework para Movil',
                enlace  : 'http://foundation.zurb.com/'
            },
            google = {
                titulo  : 'Google',
                funcion : 'mostrarFuncion',
                subTitulo : 'Google',
                enlace  : 'http://www.google.com/think/collections/make-website-work-across-multiple-devices.html#build-your-site'
            },
            iphoneOffline = {
                titulo  : 'IPhone Offline',
                funcion : 'mostrarFuncion',
                subTitulo : 'IPhone Offline',
                enlace  : 'http://www.thecssninja.com/javascript/how-to-create-offline-webapps-on-the-iphone'
            },
            iphoneOrientacion = {
                titulo  : 'IPhone Orientación',
                funcion : 'mostrarFuncion',
                subTitulo : 'IPhone Orientación',
                enlace  : 'http://www.thecssninja.com/css/iphone-orientation-css'
            },
            libreriaZepto = {
                titulo  : 'Librería Zepto',
                funcion : 'mostrarFuncion',
                subTitulo : 'Librería Zepto',
                enlace  : 'http://zeptojs.com/'
            },
            mozillaTouchEvents = {
                titulo  : 'Mozilla Touch Events',
                funcion : 'nuevaVentana',
                subTitulo : '',
                enlace  : 'https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Touch_events'
            },
            mediaQuery = {
                titulo  : 'Media Query',
                funcion : 'mostrarFuncion',
                subTitulo : 'Media Query - Responsive Design',
                enlace  : 'http://line25.com/tutorials/create-a-responsive-web-design-with-media-queries'
            },
            mediaAtributo = {
                titulo  : 'Media Atributo',
                funcion : 'mostrarFuncion',
                subTitulo : 'Media Atributo - HTML <link>',
                enlace  : 'http://www.w3schools.com/tags/att_link_media.asp'
            },
            nokia = {
                titulo  : 'Nokia',
                funcion : 'nuevaVentana',
                subTitulo : '',
                enlace  : 'http://www.developer.nokia.com/Community/Wiki/JavaScript_Performance_Best_Practices'
            },
            phonegap = {
                titulo  : 'PhoneGap',
                funcion : 'mostrarFuncion',
                subTitulo : 'PhoneGap',
                enlace  : 'http://phonegap.com/'
            },
            plantillas = {
                titulo  : 'Plantillas',
                funcion : 'mostrarFuncion',
                subTitulo : 'Plantillas',
                enlace  : 'http://www.creativasfera.com/plantillas-gratis-para-diseno-web-responsive'
            },
            resolucion = {
                titulo  : 'Resolución',
                funcion : 'mostrarFuncion',
                subTitulo : 'Aplicaciones adaptables a la Resolución',
                enlace  : 'http://software.intel.com/es-es/blogs/2011/12/20/aplicaciones-adaptables-a-la-resoluci-n'
            },
            tutorial = {
                titulo  : 'Tutorial',
                funcion : 'mostrarFuncion',
                subTitulo : 'Tutorial',
                enlace  : 'http://www.codeschool.com/courses/journey-into-mobile'
            }
        ]
    },
    navegadores = {
        titulo    : 'Navegadores',
        subMenu   : 'menuNavegador',
        contenido : [
            ieTestDrive = {
                titulo  : 'IE Test Drive',
                funcion : 'mostrarFuncion',
                subTitulo : 'IE Test Drive',
                enlace  : 'http://ie.microsoft.com/testdrive/Default.html'
            },
            devOpera = {
                titulo  : 'Dev. Opera',
                funcion : 'nuevaVentana',
                subTitulo : '',
                enlace  : 'http://dev.opera.com'
            },
            webkit = {
                titulo  : 'Webkit',
                funcion : 'mostrarFuncion',
                subTitulo : 'Webkit',
                enlace  : 'https://www.webkit.org/'
            },
            webmatrix = {
                titulo  : 'Webmatrix',
                funcion : 'mostrarFuncion',
                subTitulo : 'Webmatrix',
                enlace  : 'http://www.microsoft.com/web/webmatrix/'
            }
        ]
    },
    plantillas = {
        titulo    : 'Plantillas',
        subMenu   : 'menuPlantillas',
        contenido : [
            gridSystem1 = {
                titulo  : '960 Grid System 1',
                funcion : 'mostrarFuncion',
                subTitulo : '960 Grid System 1',
                enlace  : 'plantillas/960GridSystem/960GridSystem1.html'
            },
            gridSystem2 = {
                titulo  : '960 Grid System 2',
                funcion : 'mostrarFuncion',
                subTitulo : '960 Grid System 2',
                enlace  : 'plantillas/960GridSystem/960GridSystem2.html'
            },
            ejemplosHtml5Up = {
                titulo  : 'Ejemplos Html5 Up',
                funcion : 'mostrarFuncion',
                subTitulo : 'Ejemplos Html5 Up',
                enlace  : 'http://html5up.net/'
            },
            ejemplosSquarespace = {
                titulo  : 'Ejemplos squarespace',
                funcion : 'mostrarFuncion',
                subTitulo : 'Ejemplos squarespace',
                enlace  : 'http://www.squarespace.com/'
            },
            frontEndFramework = {
                titulo  : 'Front-end Framework',
                funcion : 'mostrarFuncion',
                subTitulo : 'Bootstrap front-end framework',
                enlace  : 'http://twitter.github.io/bootstrap/index.html'
            }
        ]
    },
    redesSociales = {
        titulo    : 'Redes Sociales',
        subMenu   : 'menuRedesS',
        contenido : [
            circleCount = {
                titulo  : 'CircleCount',
                funcion : 'mostrarFuncion',
                subTitulo : 'CircleCount',
                enlace  : 'http://es.circlecount.com/'
            },
            facebook = {
                titulo  : 'Facebook',
                funcion : 'mostrarFuncion',
                subTitulo : 'Facebook',
                enlace  : 'redesSociales/facebook.html'
            },
            twitter = {
                titulo  : 'Twitter',
                funcion : 'mostrarFuncion',
                subTitulo : 'Twitter',
                enlace  : 'redesSociales/twitter.html'
            }
        ]
    },
    referencias = {
        titulo    : 'Referencias',
        subMenu   : 'menuReferencias',
        contenido : [
            cssFontsW3C = {
                titulo  : 'CSS Fonts W3C',
                funcion : 'mostrarFuncion',
                subTitulo : 'W3C CSS Fonts',
                enlace  : 'http://www.w3.org/TR/css3-fonts/'
            },
            javaScriptMicrosoft = {
                titulo  : 'JavaScript Microsoft',
                funcion : 'nuevaVentana',
                subTitulo : '',
                enlace  : 'http://msdn.microsoft.com/en-us/library/bb188743.aspx'
            },
            htmlW3C = {   /**  revisar   http://dev.w3.org/html5    **/
                titulo  : 'HTML W3C',
                funcion : 'mostrarFuncion',
                subTitulo : 'W3C HTML elements',
                enlace  : 'http://dev.w3.org/html5/markup/elements.html'
            },
            movilW3C = {
                titulo  : 'Movil W3C',
                funcion : 'mostrarFuncion',
                subTitulo : 'W3C Movil',
                enlace  : 'http://www.w3.org/Mobile/'
            },
            webGrafico = {
                titulo  : 'Web del Gráfico',
                funcion : 'mostrarFuncion',
                subTitulo : 'La Web del Gráfico',
                enlace  : 'http://www.lawebdelgrafico.com.ar/index.php'
            },
            htmlGoodies = {
                titulo  : 'HTML Goodies',
                funcion : 'mostrarFuncion',
                subTitulo : 'HTML Goodies',
                enlace  : 'http://www.htmlgoodies.com/'
            },
            sitepoint = {
                titulo  : 'Sitepoint',
                funcion : 'mostrarFuncion',
                subTitulo : 'Sitepoint',
                enlace  : 'http://www.sitepoint.com/'
            },
            inspireTrends = {
                titulo  : 'Inspire Trends',
                funcion : 'mostrarFuncion',
                subTitulo : 'Inspire Trends',
                enlace  : 'http://inspiretrends.com/'
            },
            wwwhatsNew = {
                titulo  : 'WWWhats New',
                funcion : 'mostrarFuncion',
                subTitulo : 'WWWhats New',
                enlace  : 'http://wwwhatsnew.com/'
            },
            modernIE = {
                titulo  : 'Modern IE',
                funcion : 'mostrarFuncion',
                subTitulo : 'Modern IE',
                enlace  : 'http://www.modern.ie/es'
            },
            scriptTutorials = {
                titulo  : 'Script Tutorials',
                funcion : 'mostrarFuncion',
                subTitulo : 'Script Tutorials',
                enlace  : 'http://www.script-tutorials.com/'
            },
            tutsPlus = {
                titulo  : 'Tuts Plus',
                funcion : 'nuevaVentana',
                subTitulo : '',
                enlace  : 'http://net.tutsplus.com/'
            },
            completo = {   /**  revisar    **/
                titulo  : 'Completo',
                funcion : 'mostrarFuncion',
                subTitulo : 'Referencias Completas',
                enlace  : 'http://devcheatsheet.com/'
            },
            webPlatform = {
                titulo  : 'WebPlatform',
                funcion : 'mostrarFuncion',
                subTitulo : 'WebPlatform',
                enlace  : 'http://www.webplatform.org/'
            },
            yahooYUI = {
                titulo  : 'Yahoo YUI',
                funcion : 'nuevaVentana',
                subTitulo : '',
                enlace  : 'http://developer.yahoo.com/ypatterns/about/start.html'
            }
        ]
    },
    responsive = {
        titulo    : 'Responsive W.D.',
        subMenu   : 'menuDocumentos',
        contenido : [
            webDesign_1 = {
                titulo  : 'Guia 1',
                funcion : 'mostrarFuncion',
                subTitulo : 'Responsive Web Design',
                enlace  : 'responsive/webDesign.pdf'
            },
            webDesign_2 = {
                titulo  : 'Guia 2',
                funcion : 'mostrarFuncion',
                subTitulo : 'Web Performance',
                enlace  : 'responsive/designers-guide-to-web-performance_New_2014.pdf'
            },
            leyCookies = {
                titulo  : 'Ley de Cookies',
                funcion : 'mostrarFuncion',
                subTitulo : 'Ley de Cookies',
                enlace  : 'http://www.infoautonomos.com/blog/como-adaptar-tu-web-la-nueva-ley-de-cookies/'
            },
            resolucionPantalla = {
                titulo  : 'Resolución Pantalla',
                funcion : 'mostrarSubMenu',
                subTitulo : '',
                enlace  : [
                    compuware = {
                        titulo  : 'CompuWare',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'CompuWare',
                        enlace  : 'http://www.compuware.com/en_us/application-performance-management/performance-test-center.html'
                    },
                    google = {
                        titulo  : 'Google',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Google Multi-Screen Resources',
                        enlace  : 'http://www.google.com/think/multiscreen/#gomo-meter'
                    },
                    iPadPeek = {
                        titulo  : 'iPad Peek',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'iPad Peek',
                        enlace  : 'http://ipadpeek.com/'
                    },
                    mattkersley = {
                        titulo  : 'Matt Kersley',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Matt Kersley',
                        enlace  : 'http://mattkersley.com/responsive/'
                    },
                    mobilePhoneEmulator = {
                        titulo  : 'Mobile Phone Emulator',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Mobile Phone Emulator',
                        enlace  : 'http://www.mobilephoneemulator.com/'
                    },
                    opera = {
                        titulo  : 'Opera',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Opera para desarrolladores',
                        enlace  : 'http://www.opera.com/es/developer'
                    },
                    quirkTools = {
                        titulo  : 'Quirk Tools',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Quirk Tools - Archivo Site Maps, Wireframes y Tamaño de Pantalla',
                        enlace  : 'http://quirktools.com/'
                    },
                    responsinator = {
                        titulo  : 'Responsinator',
                        funcion : 'nuevaVentana',
                        subTitulo : '',
                        enlace  : 'http://www.responsinator.com/'
                    },
                    responsivepx = {
                        titulo  : 'Responsive PX',
                        funcion : 'nuevaVentana',
                        subTitulo : '',
                        enlace  : 'http://responsivepx.com/'
                    },
                    screenqueri = {
                        titulo  : 'Screen Queries',
                        funcion : 'mostrarFuncion',
                        subTitulo : 'Screen Queries',
                        enlace  : 'http://screenqueri.es/'
                    }
                ]
            }
        ]
    },
    svg = {
        titulo    : 'SVG',
        subMenu   : 'menuSvg',
        contenido : [
            inkscape = {
                titulo  : 'Inkscape',
                funcion : 'mostrarFuncion',
                subTitulo : 'Inkscape',
                enlace  : 'http://tavmjong.free.fr/INKSCAPE/MANUAL/html/Web.html'
            },
            svgPrincipal = {
                titulo  : 'SVG Principal',
                funcion : 'mostrarFuncion',
                subTitulo : 'SVG Principal',
                enlace  : 'svg/svg.html'
            }
        ]
    },
    tutoriales = {
        titulo    : 'Tutoriales',
        subMenu   : 'menuTutoriales',
        contenido : [
            librosWeb = {
                titulo  : 'Libros Web',
                funcion : 'mostrarFuncion',
                subTitulo : 'Libros Web',
                enlace  : 'http://librosweb.es/libros/'
            },
            linux = {
                titulo  : 'Linux',
                funcion : 'mostrarFuncion',
                subTitulo : 'Linux',
                enlace  : 'http://www.guru99.com/unix-linux-tutorial.html'
            },
            varios = {
                titulo  : 'Varios',
                funcion : 'mostrarFuncion',
                subTitulo : 'Varios',
                enlace  : 'http://www.guides.co/'
            }
        ]
    },
    validacion = {
        titulo    : 'Validación',
        subMenu   : 'menuValidacion',
        contenido : [
            w3cCss = {
                titulo  : 'W3C Css',
                funcion : 'nuevaVentana',
                subTitulo : '',
                enlace  : 'http://jigsaw.w3.org/css-validator'
            },
            w3cLinkChecker = {
                titulo  : 'W3C Link Checker',
                funcion : 'mostrarFuncion',
                subTitulo : 'W3C Link Checker - Comprobar enlaces rotos y errores 404',
                enlace  : 'http://validator.w3.org/checklink'
            },
            w3cMovil = {
                titulo  : 'W3C Movil',
                funcion : 'mostrarFuncion',
                subTitulo : 'W3C Movil',
                enlace  : 'http://validator.w3.org/mobile/'
            }
        ]
    },
    video = {
        titulo    : 'Video',
        subMenu   : 'menuVideo',
        contenido : [
            varios1 = {
                titulo  : 'Varios 1',
                funcion : 'mostrarFuncion',
                subTitulo : 'Varios 1',
                enlace  : 'video/fryplayer_v02/index.html'
            },
            varios2 = {
                titulo  : 'Varios 2',
                funcion : 'mostrarFuncion',
                subTitulo : 'Varios 2',
                enlace  : 'video/johndyer-mediaelement-fe15d98/demo/index.html'
            }
        ]
    },
    w3c = {
        titulo    : 'W3C',
        subMenu   : 'menuW3C',
        contenido : [
            principal = {
                titulo  : 'Principal',
                funcion : 'mostrarFuncion',
                subTitulo : 'Principal',
                enlace  : 'http://www.w3.org'
            },
            canvas = {
                titulo  : 'Canvas',
                funcion : 'mostrarFuncion',
                subTitulo : 'Canvas',
                enlace  : 'http://www.w3.org/html/wg/drafts/'
            },
            controlVersiones = {
                titulo  : 'Control de Versiones',
                funcion : 'mostrarFuncion',
                subTitulo : 'Control de Versiones',
                enlace  : 'http://dev.w3.org/html5/'
            },
            cssComandos = {
                titulo  : 'CSS Comandos',
                funcion : 'mostrarFuncion',
                subTitulo : 'CSS Comandos',
                enlace  : 'http://www.w3.org/TR/CSS'
            },
            cssContentCounterList = {
                titulo  : 'CSS Content, Counter, List',
                funcion : 'mostrarFuncion',
                subTitulo : 'CSS Content, Counter, List',
                enlace  : 'http://www.w3.org/TR/CSS21/generate.html'
            },
            cssMediaQueries = {
                titulo  : 'CSS Media Queries',
                funcion : 'mostrarFuncion',
                subTitulo : 'CSS Media Queries',
                enlace  : 'http://www.w3.org/TR/css3-mediaqueries'
            },
            htmlNightly = {
                titulo  : 'HTML 5.1 Nightly',
                funcion : 'mostrarFuncion',
                subTitulo : 'HTML 5.1 Nightly',
                enlace  : 'http://www.w3.org/html/wg/drafts/html/master/Overview.html#contents'
            },
            mobileOkChecker = {
                titulo  : 'mobileOK Checker',
                funcion : 'mostrarFuncion',
                subTitulo : 'mobileOK Checker',
                enlace  : 'http://validator.w3.org/mobile/'
            }
        ]
    },
    otros = {
        titulo    : 'Otros',
        subMenu   : 'menuOtros',
        contenido : [
            cemei = {
                titulo  : 'Cemei',
                funcion : 'mostrarFuncion',
                subTitulo : 'Cemei',
                enlace  : 'http://www.fomentosansebastian.org/index2.php?option=com_content&do_pdf=1&id=101'
            },
            fitbakZarautz = {
                titulo  : 'Fitbak Zarautz',
                funcion : 'mostrarFuncion',
                subTitulo : 'Fitbak Zarautz',
                enlace  : 'http://www.fitbak.com/'
            },
            donostik = {
                titulo  : 'Donostik',
                funcion : 'mostrarFuncion',
                subTitulo : 'Donostik',
                enlace  : 'http://www.donostik.com/'
            },
            matematicas = {
                titulo  : 'Matemáticas',
                funcion : 'mostrarFuncion',
                subTitulo : 'Matemáticas',
                enlace  : 'http://www.studygeek.org/'
            },
            remoteDesktop = {
                titulo  : 'Remote Desktop',
                funcion : 'mostrarFuncion',
                subTitulo : 'Remote Desktop',
                enlace  : 'http://www.cybelesoft.com/thinvnc//'
            }
        ]
    },
    tendencias = {
        titulo    : 'Tendencias',
        subMenu   : 'menuTendencias',
        contenido : [
            tendencias2014 = {
                titulo  : 'Tendencias 2014',
                funcion : 'mostrarBloques',
                subTitulo : 'Tendencias 2014',
                enlace  : 'tendencias2014'
            },
            tendencias2014_1 = {
                titulo  : 'Tendencias 2014',
                funcion : 'mostrarFuncion',
                subTitulo : 'Tendencias 2014',
                enlace  : 'http://www.redexperts.net/blog/expected-web-design-trends-for-2014#.U479zCgkJW5'
            },
            tendencias2014_2 = {
                titulo  : 'Tendencias 2014',
                funcion : 'nuevaVentana',
                subTitulo : '',
                enlace  : 'http://blog.hostalia.com/tendencias-diseno-web-2014/'
            },
            tendencias2014_3 = {
                titulo  : 'Tendencias 2014',
                funcion : 'mostrarFuncion',
                subTitulo : 'Tendencias 2014',
                enlace  : 'http://www.idearium30.com/22-tendencias-de-diseno-web-para-2014-i106'
            }
        ]
    }
]