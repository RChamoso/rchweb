var anterior = '';
var articuloAnterior = '';
var disenoAnterior = '';
var menuAnterior = '';

function inicio() {
  navegador = window.navigator.appName;
  if(navegador == 'Microsoft Internet Explorer') {
    compatibleIE = document.implementation.hasFeature('org.w3c.svg', '1.0');
    if(compatibleIE == false)
      alert('Para poder visualizar correctamente esta página debes activar' +
            ' el "Modo del Documento" a IE9 pulsando la tecla "F12"' +
            ' y a continuación la combinación de teclas "Alt+9".');
  }
  //  Cargar el archivo JSON
  var xmlhttp = new XMLHttpRequest();
  var url = "js/contenidoMenu3.json";
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      menuJSON = JSON.parse(xmlhttp.responseText);
    }
  }
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
//  ----------------
  contenido = elementoId('articulos');
  anchoPrincipal();
  menuPrincipal();
  window.onresize = function(){ocultarScroll();};
}

function anchoPrincipal() {
  var anchoTotal = window.innerWidth - 360;
  var cuerpoPrincipal = elementoId('cuerpoPrincipal');
    cuerpoPrincipal.setAttribute('style', 'width: ' + anchoTotal + 'px;');
}

function menuPrincipal() {
  var listaMenu = menuJSON;
  var idMenuPrincipal = elementoId('opcionesMenu');
  for (var i in listaMenu) {
    itemPrincipal = listaMenu[i].principal;
    var opcionPrincipal = elementoNuevo('li');
      var mostrarArticulos = 'mostrarArticulos("' + itemPrincipal.titulo + '","' + itemPrincipal.subMenu + '");';
      opcionPrincipal.setAttribute('id',i);
      opcionPrincipal.setAttribute('onclick',mostrarArticulos);
      opcionPrincipal.textContent = itemPrincipal.titulo;
    idMenuPrincipal.appendChild(opcionPrincipal);
    var subMenu = elementoNuevo('ul');
      subMenu.setAttribute('id', itemPrincipal.subMenu);
      subMenu.setAttribute('class', 'subMenu');
      var opcionesSubMenu = itemPrincipal.contenido;
      for (var j in opcionesSubMenu) {
        itemSubMenu = opcionesSubMenu[j].item;
        var opcionSubMenuLi = elementoNuevo('li');
          var tipoFuncion = itemSubMenu.subTitulo;
          var funcionSubMenu = '';
          if (tipoFuncion !=  '') {
            var dato = [];
            funcionSubMenu = itemSubMenu.funcion + '("' + itemSubMenu.subTitulo + '", "' + itemSubMenu.enlace + '", "' + itemSubMenu.titulo + '");';
          } else if (itemSubMenu.funcion ==  'mostrarSubMenu') {
            funcionSubMenu = itemSubMenu.funcion + '("' + itemSubMenu.subTitulo + '", "' + i + '", "' + j + '", "' + itemSubMenu.titulo + '");';
          } else if (itemSubMenu.funcion ==  'fuentes()') {
            funcionSubMenu = itemSubMenu.funcion;
          } else {
            funcionSubMenu = itemSubMenu.funcion + '("' + itemSubMenu.enlace + '", false);';
          }
          if (itemSubMenu.funcion == 'nuevaVentana') {
            opcionSubMenuLi.setAttribute('class', 'nuevaVentana');
          }
          opcionSubMenuLi.setAttribute('onclick',funcionSubMenu);
          opcionSubMenuLi.textContent = itemSubMenu.titulo;
        subMenu.appendChild(opcionSubMenuLi);
      }
    idMenuPrincipal.appendChild(subMenu);
  }
  ocultarScroll();
  window.onresize = function(){ocultarScroll();};
}

function ocultarScroll() {
  var cabecera = elementoId('header');
  var menu = elementoId('menuPrincipal');
  var posicionIzquierda = menu.scrollWidth;
  var altura = menu.scrollHeight - menu.scrollTopMax;
  var posicionSuperior = cabecera.clientHeight;
  var ocultarScroll = elementoId('ocultarScroll');
    var estilo = 'left:' + posicionIzquierda + 'px; height:' + altura + 'px; top:' + posicionSuperior + 'px;';
    ocultarScroll.setAttribute('style', estilo);
}

function borrarSubMenu() {
  var divSubMenu = elementoId("subMenu");
  var nodos = divSubMenu.children;
  totalNodos = nodos.length;
  for(var j = 0; j<totalNodos; j++){
    divSubMenu.removeChild(nodos[0]);
  }
}

function mostrarArticulos(articulo,menuActual) {
  borrarSubMenu();
  ocultarContenido();
  var articuloDiv = elementoId("seccionArticulo");
  var menuDiv = elementoId(menuActual);
  var elementoAnterior = menuDiv.previousSibling;
  if (menuActual != menuAnterior) {
    articuloDiv.setAttribute('style','display:block;');
    var articuloH1 = elementoId("tituloArticulo");
      articuloH1.textContent = articulo;
    if (menuAnterior != '') {
      var menuDivAnterior = elementoId(menuAnterior);
        menuDivAnterior.setAttribute('style','display:none;');
      var elementoMenuAnterior = menuDivAnterior.previousSibling;
        elementoMenuAnterior.setAttribute('class','');
    }
    if (anterior == 'hoja') {
      var bloqueHoja = elementoId("hoja");
        bloqueHoja.setAttribute('style','display:none;');
    }
    menuDiv.setAttribute('style','display:block;');
    elementoAnterior.setAttribute('class','menuActual');
    menuAnterior = menuActual;
  } else {
    articuloDiv.setAttribute('style','display:none;');
    menuDiv.setAttribute('style','display:none;');
    elementoAnterior.setAttribute('class','');
    menuAnterior = '';
  }
}

function mostrarContenido() {
  contenido.style.display = 'block';
}

function ocultarContenido() {
  contenido.style.display = 'none';
}

function mostrarBloques(subTitulo, bloque) {
  if (anterior != '') {
    var hojaAnterior = elementoId(anterior);
      hojaAnterior.setAttribute('style','display:none');
  }
  var hoja = elementoId(bloque);
    hoja.setAttribute('style','display:block');
  anterior = bloque;
  tituloArticulo(subTitulo);
  mostrarContenido();
}

function mostrarFuncion(texto,dato,subTitulo){
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
//  if (dato.substr(0,4) != 'http') {
    contenidoObject.data = dato;
    contenidoEmbed = elementoId("contenido");
      contenidoEmbed.src = dato;
//  } else {
//    contenidoObject.style.display = 'none';
//  }
    contenidoObject.style.display = 'block';
  titulo.textContent = texto;
  mostrarBloques(tituloSubMenu, "hoja");
  if (dato.substr(0,4) != 'http') {
    var espera = setTimeout(escribirCss,1000);
  } else {
    contenidoObject.height = window.screen.height + 5;
  }
}

function tituloArticulo(subTitulo) {
  //    textoMenu = String.fromCharCode(183);
  var articuloH1 = elementoId("tituloArticulo");
  var contenidoTitulo = articuloH1.textContent;
  var indice = contenidoTitulo.indexOf(" >>");
  if (indice != -1) {
    contenidoTitulo = contenidoTitulo.substring(indice,0);
  }
  if (subTitulo != "") {
    contenidoTitulo += " >> " + subTitulo;
  }
  articuloH1.textContent = contenidoTitulo;
}

function mostrarSubMenu(texto,i,j,subTitulo) {
  borrarSubMenu();
  ocultarContenido();
  tituloArticulo(subTitulo);
  tituloSubMenu = subTitulo;
  var subMenu = listaMenu[i].contenido;
  opcionesSubMenu = subMenu[j].enlace;
  var divSubMenu = elementoId("subMenu");
  for (var k in opcionesSubMenu) {
    var funcionSubMenu = '';
    var tipoFuncion = opcionesSubMenu[k].subTitulo;
    if (tipoFuncion !=  '') {
      funcionSubMenu = opcionesSubMenu[k].funcion + '("' + opcionesSubMenu[k].subTitulo + '", "' + opcionesSubMenu[k].enlace + '", "");';
    } else {
      funcionSubMenu = opcionesSubMenu[k].funcion + '("' + opcionesSubMenu[k].enlace + '", true);';
    }
    var opcionSubMenu = elementoNuevo('li');
    if (opcionesSubMenu[k].funcion == 'nuevaVentana') {
      opcionSubMenu.setAttribute('class', 'nuevaVentana2');
    }
    opcionSubMenu.textContent = opcionesSubMenu[k].titulo;
    opcionSubMenu.setAttribute('onclick',funcionSubMenu);
    divSubMenu.appendChild(opcionSubMenu);
  }
  encabezadoArticulo = elementoId('encabezadoArticulo');
  botonMostrar = elementoId('abrirSubMenu');
}

function ocultarSubMenu() {
  encabezadoArticulo.setAttribute('style', 'height: 62px;');
  botonMostrar.setAttribute('style', 'display: block;');
}

function abrirSubMenu() {
  ocultarContenido();
  encabezadoArticulo.setAttribute('style', 'height: auto;');
  botonMostrar.setAttribute('style', 'display: none;');
}

function nuevaVentana(dato, subMenu) {
  if (!subMenu) {
    tituloArticulo("");
    borrarSubMenu();
    ocultarContenido();
  }
  window.open(dato, "nuevo");
}

function codigosAscii(tituloAscii, tipoCodigoAscii) {
  borrarSubMenu();
  ocultarContenido();
/*  var tituloAsciiH = elementoId('tituloAscii');
    tituloAsciiH.textContent = tituloAscii;*/
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
        var opcionMenu = elementoNuevo('h4');
        var funcion = 'AsciiBasicoContenido("'+elementoCodigoAscii[j].tabla+'", "'+elementoCodigoAscii[j].contenido+'","'+elementoCodigoAscii[j].boton+'",'+elementoCodigoAscii[j].inicio+','+elementoCodigoAscii[j].fin+');';
          opcionMenu.setAttribute('onclick',funcion);
          opcionMenu.textContent = elementoCodigoAscii[j].titulo;
          var opcionMenuEm = elementoNuevo('em');
            opcionMenuEm.textContent = ' (' + elementoCodigoAscii[j].inicio + '-' + elementoCodigoAscii[j].fin + ')';
            opcionMenuEm.setAttribute('style','font-size:10px;color:#565656;');
          opcionMenu.appendChild(opcionMenuEm);
        menuAscii.appendChild(opcionMenu);
        var cerrarMenu = elementoNuevo('p');	//boton
          cerrarMenu.setAttribute('id',elementoCodigoAscii[j].boton);
          cerrarMenu.setAttribute('class','AsciiBotonCerrar');
          var funcionCerrar = 'cerrar("'+elementoCodigoAscii[j].tabla+'","'+elementoCodigoAscii[j].boton+'")';
          cerrarMenu.setAttribute('onclick',funcionCerrar);
          textoMenu = String.fromCharCode(10008);
          cerrarMenu.textContent = textoMenu;
        menuAscii.appendChild(cerrarMenu);
        divAscii.appendChild(menuAscii);
        var tablaAscii = elementoNuevo('table');	//tabla
          tablaAscii.setAttribute('id',elementoCodigoAscii[j].tabla);
          tablaAscii.setAttribute('class','tablaCodigosAscii');
          tablaAscii.setAttribute('style','display:none');
          tablaAscii.setAttribute('border',1);
          tablaAscii.setAttribute('cellpadding','2px');
          var contenidoTablaAscii = elementoNuevo('tbody');//contenido
            contenidoTablaAscii.setAttribute('id',elementoCodigoAscii[j].contenido);
          tablaAscii.appendChild(contenidoTablaAscii);
        divAscii.appendChild(tablaAscii);
        listaAscii.appendChild(divAscii);
      }
    }
  }
  mostrarBloques(tituloAscii, "codigosAsciiCompleto");
}

function AsciiBasicoContenido(tabla, contenido, boton, inicio, fin) {
  var cerrarMenu = elementoId(boton);
  cerrarMenu.setAttribute('style','display:inline-block');
  var divAscii = elementoId(tabla);
  divAscii.setAttribute('style','display:block');
  var contenidoTablaAscii = elementoId(contenido);
  contenidoTablaAscii.setAttribute('style','display:block');
  if (contenidoTablaAscii.childElementCount > 0) {
    while (contenidoTablaAscii.firstChild) {
      contenidoTablaAscii.removeChild(contenidoTablaAscii.firstChild);
    }
  }
  var j = 0;
  for (i=inicio; i<=fin; i++){
    codigoTexto = String.fromCharCode(i);
    if  (codigoTexto != " ") {
      if  (i <= 127 || i >= 160){
        j = j + 1;
        codigo= '&#' + i + '; ';
        codigoHex = 'U+' + i.toString(16);
        if (j == 1 || (j-1)%10 == 0) {
          var lineaLista1 = elementoNuevo('tr');
          var lineaLista2 = elementoNuevo('tr');
        }
        var codigoLista1 = elementoNuevo('td');
          codigoLista1.setAttribute('style','width:3%');
          codigoLista1.textContent = codigo;
        lineaLista1.appendChild(codigoLista1);
        var textoLista = elementoNuevo('td');
          textoLista.setAttribute('rowspan',2);
          textoLista.setAttribute('style','width:7%');
          textoLista.setAttribute('class','textoLista');
          textoLista.textContent = codigoTexto;
        lineaLista1.appendChild(textoLista);
        var codigoLista2 = elementoNuevo('td');
          codigoLista2.textContent = codigoHex;
        lineaLista2.appendChild(codigoLista2);
        if ((j-1)%10 == 0) {
          contenidoTablaAscii.appendChild(lineaLista1);
          contenidoTablaAscii.appendChild(lineaLista2);
        }
      }
    }
  }
}

function cerrar(tabla,boton) {
  var cerrarTabla = elementoId(tabla);
    cerrarTabla.setAttribute('style','display:none');
  var botonCerrar = elementoId(boton);
    botonCerrar.setAttribute('style','display:none');
}

function showLightbox() {
  elementoId('over').style.display='block';
  elementoId('fade').style.display='block';
}

function hideLightbox() {
  elementoId('over').style.display='none';
  elementoId('fade').style.display='none';
}

function escribirCss() {
  //  var contenido = elementoId('contenidoObject').contentDocument;
  var contenido = contenidoObject.contentWindow.document;
  if (contenido != null) {
    var mostrarDatos = contenido.getElementById('ocultar');
    if (mostrarDatos != null) {
      mostrarDatos.setAttribute('style', 'display:block;');
      var hojaEstilo = contenido.styleSheets[0];
      var totalLineasEstilo = hojaEstilo.cssRules;
      var codigoLineaEstilo = contenido.getElementById('cssCodigo');
      if (codigoLineaEstilo != null) {
        //	var numeroLineaEstilo = contenido.getElementById('cssLinea');
        //	var l = 1;
        //	numeroLineaEstilo.textContent += l + '\n';
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
                //					codigoLineaEstilo.textContent += '\n             ';
              } else if (p+2 != textoCss.length) {
                  codigoLineaEstilo.textContent += textoCss[m];
              }
              if (letra == 123) {
                //					l++;
                //					numeroLineaEstilo.textContent += l + '\n';
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
          //		l++;
          codigoLineaEstilo.textContent += '\n';
          //		numeroLineaEstilo.textContent += l + '\n';
        }
      }
      var codigoHtml = contenido.getElementById('contenido').innerHTML;
      var codigoLineaHtml = contenido.getElementById('htmlCodigo');
      //	var numeroLineaHtml = contenido.getElementById('htmlLinea');
      codigoLineaHtml.textContent += codigoHtml;
    }
    contenidoObject.height = contenido.body.clientHeight + 50;
  }
}