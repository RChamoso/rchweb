var anguloBody = 0;
var anguloNav = 60;
var factorAnguloNav = anguloNav / 20;
var scaleNav = 0.6;
var factorScaleNav = (1 - scaleNav) / 20;
var anguloSection = 60;
var factorAnguloSection = anguloSection / 20;
var anguloAside = 80;
var factorAnguloAside = anguloAside / 20;
function inicio() {
  divBody = document.getElementById('body');
  divHeader = document.getElementById('header');
  divNav = document.getElementById('nav');
  divSection = document.getElementById('section');
  divAside = document.getElementById('aside');
  divFooter = document.getElementById('footer');
  divBoton = document.getElementById('boton');
  divCheckbox = document.getElementById('checkbox1');
  divCheckbox.checked = true;
  canvas = document.getElementById('canvas');
  divMensaje = document.getElementById('mensaje');
  divImagenLogo = document.getElementById('imagenLogo');
  calcularVentana();
  window.onresize = function(){calcularVentana();};
}
function calcularVentana() {
  estiloNav = ''; 
  var estiloHeader; var estiloSection; var estiloAside; var estiloFooter; var estiloMensaje;
  pantallaAlto = document.documentElement.clientHeight;
  pantallaAncho = document.documentElement.clientWidth;
  var estiloBody = 'height:' + pantallaAlto + 'px;';
  divBody.setAttribute('style', estiloBody);
  anguloHeader = Math.atan(pantallaAlto/pantallaAncho);
  altoHeader = pantallaAlto * 0.1;
  alturaTriangulo = pantallaAlto - altoHeader;            //  y
  if (pantallaAncho < pantallaAlto) {
    anchoHeader = alturaTriangulo/Math.sin(anguloHeader);       //  h
  } else {
    anchoHeader = pantallaAncho;
  }
  anchoTriangulo = Math.sqrt((anchoHeader*anchoHeader)-(alturaTriangulo*alturaTriangulo));  //  x
  distHeader = pantallaAncho - anchoTriangulo;
  var x1 = pantallaAncho - anchoTriangulo;
  factorAlturaTriangulo = alturaTriangulo/20; // - alturaTriangulo
  factorAnchoTriangulo = x1/20 // + anchoTriangulo
  altoNavSectionAside = pantallaAlto * 0.8;
  anchoNavAside = pantallaAncho * 0.13;
  anchoSection = pantallaAncho * 0.7;
  altoFooter = pantallaAlto * 0.09;
  anguloFooter = altoFooter;
  factorFooter = altoFooter/10;
  var irA; 
  if (pantallaAncho > 500) {
    estiloHeader = 'height:' + altoHeader + 'px; width:' + anchoHeader + 'px; transform: rotateX(0deg) rotateY(0deg) rotateZ('+ anguloHeader + 'rad);';
    estiloNav = 'height:' + altoNavSectionAside + 'px; width:'+ anchoNavAside + 'px; transform: perspective(300px) rotateX(0deg) rotateY(-' + anguloNav + 'deg) rotateZ(0deg) scale(' + scaleNav + ');';
    estiloSection = 'height:' + altoNavSectionAside + 'px; width:'+ anchoSection + 'px; transform: perspective(500px) rotateX(' + anguloSection + 'deg) rotateY(0deg) rotateZ(0deg);';
    estiloAside = 'height:' + altoNavSectionAside + 'px; width:'+ anchoNavAside + 'px; transform: perspective(600px) rotateX(0deg) rotateY(-' + anguloAside + 'deg) rotateZ(0deg);';
    estiloFooter = 'height:' + altoFooter + 'px; bottom: -' + altoFooter + 'px;';
    ira = mostrarCanvas();
  } else {
    estiloHeader = 'height:' + altoHeader + 'px; width:' + anchoHeader + 'px;';
    estiloNav = 'height:' + altoNavSectionAside + 'px; width:'+ anchoNavAside + 'px;';
    estiloSection = 'height:' + altoNavSectionAside + 'px; width:'+ anchoSection + 'px;';
    estiloAside = 'height:' + altoNavSectionAside + 'px; width:'+ anchoNavAside + 'px;';
    estiloFooter = 'height:' + altoFooter + 'px;';
    irA = cambiarColor();
  }
  estiloMensaje = 'height:' + pantallaAlto + 'px;';
  divHeader.setAttribute('style', estiloHeader);
  divNav.setAttribute('style', estiloNav);
  divSection.setAttribute('style', estiloSection);
  divAside.setAttribute('style', estiloAside);
  divFooter.setAttribute('style', estiloFooter);
  divMensaje.setAttribute('style', estiloMensaje);
  var intervalo = setTimeout(irA, 1000);
}
function moverHeader() {
  var estiloHeader;
  anchoTriangulo += factorAnchoTriangulo;
  alturaTriangulo -= factorAlturaTriangulo;
  anguloHeader = Math.atan(alturaTriangulo/anchoTriangulo);
  if (pantallaAncho < pantallaAlto) {
    anchoHeader = alturaTriangulo/Math.sin(anguloHeader);       //  h
  }
  if (anguloHeader >= 0) {
    estiloHeader = 'height:' + altoHeader + 'px; width:' + anchoHeader + 'px; transform: rotateX(0deg) rotateY(0deg) rotateZ('+ anguloHeader + 'rad);';
    divHeader.setAttribute('style', estiloHeader);
  } else {
    estiloHeader = 'height:' + altoHeader + 'px; width:' + pantallaAncho + 'px; transform: rotateX(0deg) rotateY(0deg) rotateZ(0rad);';
    divHeader.setAttribute('style', estiloHeader);
  }
}
function moverNav() {
  anguloNav -= factorAnguloNav;
  scaleNav += factorScaleNav;
  if (anguloNav >= 0) {
    estiloNav = 'height:' + altoNavSectionAside + 'px; width:'+ anchoNavAside + 'px; transform: perspective(300px) rotateX(0deg) rotateY(-' + anguloNav + 'deg) rotateZ(0deg) scale(' + scaleNav + ');';
    divNav.setAttribute('style', estiloNav);
  } else {
    estiloNav = 'height:' + altoNavSectionAside + 'px; width:'+ anchoNavAside + 'px; transform: perspective(300px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1);';
    divNav.setAttribute('style', estiloNav);
  }
}
function moverAside() {
  var estiloAside;
  anguloAside -= factorAnguloAside;
  if (anguloAside >= 0) {
    estiloAside = 'height:' + altoNavSectionAside + 'px; width:'+ anchoNavAside + 'px; transform: perspective(600px) rotateX(0deg) rotateY(-' + anguloAside + 'deg) rotateZ(0deg);';
    divAside.setAttribute('style', estiloAside);
  } else {
    estiloAside = 'height:' + altoNavSectionAside + 'px; width:'+ anchoNavAside + 'px; transform: perspective(600px) rotateX(0deg) rotateY(0deg) rotateZ(0deg);';
    divAside.setAttribute('style', estiloAside);
  }
}
function moverSection() {
  var estiloSection;
  anguloSection -= factorAnguloSection;
  if (anguloSection >= 0) {
    estiloSection = 'height:' + altoNavSectionAside + 'px; width:'+ anchoSection + 'px; transform: perspective(500px) rotateX(' + anguloSection + 'deg) rotateY(0deg) rotateZ(0deg);';
    divSection.setAttribute('style', estiloSection);
  } else {
    estiloSection = 'height:' + altoNavSectionAside + 'px; width:'+ anchoSection + 'px; transform: perspective(500px) rotateX(0deg) rotateY(0deg) rotateZ(0deg);';
    divSection.setAttribute('style', estiloSection);
  }
}
function moverBody() {
  var estiloBody;
  if (anguloBody < 70) {
    estiloBody = 'height:' + pantallaAlto + 'px; transform: perspective(500px) rotateX(' + anguloBody + 'deg); border: 1px solid hsl(270, 50%, 83%); background-color: hsl(270, 50%, 83%);';
    divBody.setAttribute('style', estiloBody);
    anguloBody += 3.5;
    var intervalo = setTimeout(moverBody, 500);
  } else {
    estiloBody = 'height:' + pantallaAlto + 'px; transform: perspective(500px) rotateX(70deg);  box-shadow: 0 0 100px #cccccc; -o-box-shadow: 0 0 100px #cccccc; -ms-box-shadow: 0 0 100px #cccccc; -moz-box-shadow: 0 0 100px #cccccc; -webkit-box-shadow: 0 0 100px #cccccc; border: 1px solid hsl(270, 50%, 83%); background-color: hsl(270, 50%, 83%);';
    divBody.setAttribute('style', estiloBody);
    divMensaje.setAttribute('style', 'display: block;');
  }
}
function moverFooter() {
  var estiloFooter;
  anguloFooter -= factorFooter;
  if (anguloFooter >= 0) {
    estiloFooter = 'height:' + altoFooter + 'px; bottom: -' + anguloFooter + 'px;';
    divFooter.setAttribute('style', estiloFooter);
  } else {
    estiloFooter = 'height:' + altoFooter + 'px; bottom: 0px;';
    divFooter.setAttribute('style', estiloFooter);
  }
}
var piernaDerecha   = { x:   0, y:    0, x1: -20, y1:  -50 };
var piernaIzquierda = { x: -40, y:    0, x1: -20, y1:  -50 };
var centro          = { x: -20, y:  -50, x1: -20, y1: -100 };
var brazoDerecho    = { x: -20, y:  -90, x1:   0, y1:  -40 };
var brazoIzquierdo  = { x: -20, y:  -90, x1: -40, y1:  -40 };
var baseCabeza      = { x:   0, y: -120, x1: -20, y1: -120 };
var baseCuerda      = { x:   0, y:  -40, x1:   0, y1:  -40 };
var cuerdaSection   = { x:   0, y:    0, x1:   0, y1:    0 };
function mostrarCanvas() {
  var estiloCanvas = 'height: ' + pantallaAlto + 'px; width: ' + pantallaAncho + 'px; display: block;';
  canvas.setAttribute('height', pantallaAlto);
  canvas.setAttribute('width', pantallaAncho);
  canvas.setAttribute('style', estiloCanvas);
  context = canvas.getContext('2d');
  context.lineWidth = 2;
  moverCanvas();
  var intervalo = setTimeout('caminar('+distHeader+',0)', 1000);
}
var activar = 0;
function moverCanvas(activar) {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.beginPath();
    cuerpo(piernaDerecha);
    cuerpo(piernaIzquierda);
    cuerpo(centro);
    cuerpo(brazoDerecho);
    cuerpo(brazoIzquierdo);
    cabeza();
    cuerda();
    if (activar == 1) {
      cuerda2();
    }
  context.closePath();
  context.stroke();
}
function cuerpo(miembro) {
  context.moveTo(pantallaAncho + miembro.x,  pantallaAlto + miembro.y);
  context.lineTo(pantallaAncho + miembro.x1, pantallaAlto + miembro.y1);
}
function cabeza() {
  context.moveTo(pantallaAncho + baseCabeza.x, pantallaAlto + baseCabeza.y);
  context.arc(pantallaAncho + baseCabeza.x1, pantallaAlto + baseCabeza.y1, 20, 0, 2 * Math.PI, false);
}
function cuerda() {
  //  cuerda 1
  context.moveTo(pantallaAncho + baseCuerda.x, pantallaAlto + baseCuerda.y);
  context.lineTo(pantallaAncho,  0);
  //  cuerda 2
  context.moveTo(pantallaAncho + baseCuerda.x1,  pantallaAlto + baseCuerda.y1);
  context.lineTo(pantallaAncho,  0);
}
function cuerda2() {
  context.moveTo(pantallaAncho + cuerdaSection.x, pantallaAlto + cuerdaSection.y);
  context.lineTo(cuerdaSection.x1, cuerdaSection.y1);
}
var pasosIzquierda = [ [-10,-5, 0,-5], [-10,-5, 0,-5], [-10,-5, 0,-5], [-10,-5, 0,-5], [ 0,-5,-10,-5], [ 0,-5,-10,-5], [ 0,-5,-10,-5], [ 0,-5,-10,-5] ];
var pasosDerecha   = [ [  0, 5,10, 5], [  0, 5,10, 5], [  0, 5,10, 5], [  0, 5,10, 5], [10, 5,  0, 5], [10, 5,  0, 5], [10, 5,  0, 5], [10, 5,  0, 5] ];
var a = 0; var b = 0; var c = 0; var d = 0;
var intervaloPasos = 0; 
var intervaloDistancia = 0;
var pasos = [];
function realizarPasos(distancia, direccion) {
  if (intervaloPasos < pasos.length) {
    a = pasos[intervaloPasos][0];
    b = pasos[intervaloPasos][1];
    c = pasos[intervaloPasos][2];
    d = pasos[intervaloPasos][3];
    piernaDerecha.x  += a;
    piernaDerecha.x1 += b;
    piernaIzquierda.x  += c;
    piernaIzquierda.x1 += d;
    centro.x  += b;
    centro.x1 += d;
    brazoDerecho.x  += b;
    brazoDerecho.x1 += a;
    brazoIzquierdo.x  += d;
    brazoIzquierdo.x1 += c;
    baseCabeza.x  += b;
    baseCabeza.x1 += d;
    switch (direccion) {
      case 0 :
        baseCuerda.x += a;
      case 1 :
        baseCuerda.x1 += a;
      break;
      default :
      break;
    }
    moverCanvas();
    intervaloPasos++;
  } else {
    intervaloPasos = 0;
  }
  intervaloDistancia += 5;
  var intervalo = setTimeout('caminar('+distancia+','+direccion+')', 20);
}
var recorrido;
function caminar(distancia, direccion) {
  if ((direccion == 0) || (direccion%2 == 0)) {
    pasos = pasosIzquierda;
    recorrido = -brazoDerecho.x1;
  } else {
    pasos = pasosDerecha;
    recorrido = intervaloDistancia-5;
  }
  if ((intervaloDistancia <= distancia+5) || (recorrido <= distancia)) {
    realizarPasos(distancia, direccion);
  } else if (((direccion == 1) || (direccion == 2)) && ((brazoIzquierdo.x1 - brazoDerecho.x1) != -40)) {
    realizarPasos(distancia, direccion);
  } else {
    intervaloDistancia = 0;
    switch (direccion) {
      case 0 :
        var intervaloCuerda = setTimeout(cuerdaHeader, 250);
      break;
      case 1 :
        brazoIzquierdo.x1 = brazoDerecho.x1;
        brazoIzquierdo.y1 = -100;
        moverCanvas();
        var intervaloMoverBrazos = setTimeout('subirBrazos('+true+')', 200);
      break;
      case 2 :
        brazoDerecho.y1 = -110;
        brazoIzquierdo.y1 = -110;
        brazoDerecho.x1 = -distanciaNavX;
        brazoIzquierdo.x1 = brazoDerecho.x1 - 10;
        moverCanvas();
        ajustarNav();
      break;
      case 5 :
        brazoDerecho.y1 = baseAside + 20;
        brazoDerecho.x1 = brazoDerecho.x1 + 20;
        brazoIzquierdo.y1 = baseAside + 10;
        brazoIzquierdo.x1 = brazoDerecho.x1 - 10;
        moverCanvas();
        distanciaAsideX = -(brazoDerecho.x + (anchoNavAside-elementoAside[0].right)/20)/20;
        ajustarAside();
      break;
      case 6 :
        cuerdaSection.x = brazoDerecho.x1;
        cuerdaSection.y = brazoDerecho.y1;
        cuerdaSection.x1 = distancia;
        cuerdaSection.y1 = elementoSection[0].top;
        brazoIzquierdo.x1 = brazoDerecho.x1 + 20;
        brazoIzquierdo.y1 -= 30;
        moverCanvas(1);
        ajustarSection(false);
      break;
      default:
      break;
    }
  }
}
function cuerdaHeader() {
  brazoDerecho.x1 = -(pantallaAncho - anchoHeader*Math.cos(anguloHeader) + 2);
  brazoDerecho.y1  += -(pantallaAlto - anchoHeader*Math.sin(anguloHeader) - 2)+40;
  baseCuerda.x = -(pantallaAncho - anchoHeader*Math.cos(anguloHeader) + 2);
  baseCuerda.x1 = -(pantallaAncho - anchoHeader*Math.cos(anguloHeader) + 2);
  baseCuerda.y  += -(pantallaAlto - anchoHeader*Math.sin(anguloHeader) - 2)+40;
  baseCuerda.y1 += -(pantallaAlto - anchoHeader*Math.sin(anguloHeader) - 2)+40;
  moverCanvas();
  var intervalo = setTimeout(bajarBrazoCuerda, 300);
}
function bajarBrazoCuerda() {
  brazoDerecho.x1 = piernaDerecha.x;
  brazoDerecho.y1  = -40;
  baseCuerda.x1 = brazoDerecho.x1;
  baseCuerda.y1 = -40;
  moverCanvas();
  caminar(recorrido-40, 1);
}
var intervaloSubirCuerda = 0;
var intervaloSubirBrazos = 0;
function subirBrazos(direccion) {
  if (intervaloSubirBrazos < 6) {
    if (direccion) {
      brazoDerecho.y1 += -10;
      brazoIzquierdo.y1 += 10;
    } else {
      brazoDerecho.y1 += 10;
      brazoIzquierdo.y1 += -10;
    }
    moverCanvas();
    intervaloSubirBrazos++;
    var intervalo = setTimeout('subirBrazos('+direccion+')', 50);
  } else {
    intervaloSubirBrazos = 0;
    subirHeader(direccion);
  }
}
function subirHeader(direccion) {
  if ((intervaloSubirCuerda < 20) && (anguloHeader > 0)) {
    moverHeader();
    baseCuerda.x = -(pantallaAncho - anchoHeader*Math.cos(anguloHeader) + 2);
    baseCuerda.y = -(pantallaAlto - anchoHeader*Math.sin(anguloHeader) - 2);
    moverCanvas();
    intervaloSubirCuerda++;
    var intervaloSubirHeader = setTimeout('subirBrazos('+!direccion+')', 50);
  } else {
    baseCuerda.x = 0;
    baseCuerda.y = 0;
    baseCuerda.x1 = 0;
    baseCuerda.y1 = 0;
    brazoDerecho.y1 = -40;
    brazoIzquierdo.y1 = -40;
    brazoIzquierdo.x1 = brazoDerecho.x1 - 40;
    moverCanvas();
    intervaloSubirCuerda = 0;
    elementoNav = divNav.getClientRects();
    distanciaNavX = (pantallaAncho - elementoNav[0].right);
    distanciaCaminarNav = (anchoNavAside-elementoNav[0].width-10)/20;
    caminar(distanciaNavX, 2);
  }
}
var intervaloAjustar = 0;
function ajustarNav() {
  if (intervaloAjustar < 20) {
    if (intervaloAjustar%2 == 0) {
      caminar(distanciaCaminarNav,3);
    }
    moverNav();
    intervaloAjustar++;
    var intervalo = setTimeout(ajustarNav,200);
  } else {
    brazoDerecho.y1 = -40;
    brazoIzquierdo.y1 = -40;
    brazoDerecho.x1 = piernaDerecha.x;
    brazoIzquierdo.x1 = piernaIzquierda.x;
    moverCanvas();
    elementoAside = divAside.getClientRects();
    baseAside = -(pantallaAlto - elementoAside[0].bottom + elementoAside[0].width*Math.tan(anguloAside*Math.PI/180)/2);
    var distancia = -(brazoDerecho.x1 - elementoNav[0].right);
    intervaloAjustar = 0;
    caminar(distancia, 5);
  }
}
function ajustarAside() {
  var distancia = 0;
  var continuar = false;
  if (intervaloAjustar < 20) {
    brazoDerecho.y1 += 3;
    brazoIzquierdo.x1 -= 1.5;
    brazoIzquierdo.y1 += 3;
    if (intervaloAjustar%2 == 0) {
      caminar(distanciaAsideX,4);
    }
    moverAside();
    intervaloAjustar++;
    var intervalo = setTimeout(ajustarAside,200);
  } else {
    brazoDerecho.y1 = -40;
    brazoIzquierdo.y1 = -40;
    brazoDerecho.x1 = piernaDerecha.x;
    brazoIzquierdo.x1 = piernaIzquierda.x;
    moverCanvas();
    distancia = pantallaAncho/2;
    elementoSection = divSection.getClientRects();
    intervaloAjustar = 0;
    caminar(distancia, 6);
  }
}
function subirBrazosSection(direccion) {
  if (intervaloAjustar < 5) {
    if (direccion) {
      brazoDerecho.x1 += 4;
      brazoDerecho.y1 += -6;
      brazoIzquierdo.x1 += -4;
      brazoIzquierdo.y1 += 6;
    } else {
      brazoDerecho.x1 += -4;
      brazoDerecho.y1 += 6;
      brazoIzquierdo.x1 += 4;
      brazoIzquierdo.y1 += -6;
    }
    moverCanvas(1);
    intervaloAjustar++;
    var intervalo = setTimeout('subirBrazosSection('+direccion+')', 50);
  } else {
    intervaloAjustar = 0;
    ajustarSection(direccion);
  }
}
var intervaloAjustarSection = 0;
function ajustarSection(direccion) {
  if (intervaloAjustarSection < 20) {
    moverSection();
    elementoSection = divSection.getClientRects();
    cuerdaSection.y1 = elementoSection[0].top;
    intervaloAjustarSection++;
    var intervaloSubirS = setTimeout('subirBrazosSection('+!direccion+')', 50);
  } else {
    brazoDerecho.x1 = brazoDerecho.x + 30
    brazoIzquierdo.x1 = brazoIzquierdo.x - 30
    brazoIzquierdo.y1 = -40;
    piernaDerecha.x = piernaDerecha.x1 + 20;
    piernaIzquierda.x = piernaIzquierda.x1 - 20;
    moverCanvas();
    intervaloAjustarSection = 0;
    var intervaloPrepararFooter = setTimeout(prepararFooter, 100);
  }
}
function prepararFooter() {
  brazoDerecho.y1 = 0;
  brazoDerecho.y = -60;
  brazoIzquierdo.y1 = 0;
  brazoIzquierdo.y = -60;
  centro.y1 = -70;
  baseCabeza.y = -90;
  baseCabeza.y1 = -90;
  moverCanvas();
  subirFooter();
}
function subirFooter() {
  if (intervaloAjustar < 10) {
    brazoDerecho.y1 -= 7;
    brazoDerecho.y -= 3;
    brazoIzquierdo.y1 -= 7;
    brazoIzquierdo.y -= 3;
    centro.y1 -= 3;
    baseCabeza.y -= 3;
    baseCabeza.y1 -= 3;
    moverCanvas();
    moverFooter();
    intervaloAjustar++;
    var intervaloSubirS = setTimeout(subirFooter, 50);
  } else {
    brazoDerecho.x1 = brazoDerecho.x + 20;
    brazoDerecho.y1 = -40;
    brazoIzquierdo.x1 = brazoIzquierdo.x - 20;
    brazoIzquierdo.y1 = -40;
    moverCanvas();
    var intervalo = setTimeout('caminar('+ -(brazoDerecho.x1-50) +','+3+')', 200);
    divBoton.setAttribute('style','display: block;');
    elementoBoton = divBoton.getClientRects();
    anchoBoton = divBoton.clientWidth + 10;
    divBoton.setAttribute('style','display: none;');
    intervaloAjustar = 0;
    moverBoton();
  }
}
function moverBoton() {
  if (brazoDerecho.x1 >= -50) {
    factorAnchoBoton = anchoBoton/10;
    divBoton.setAttribute('style','transform: translateX('+anchoBoton+'px); display: block;');
    alturaBoton = pantallaAlto - elementoBoton[0].bottom + (elementoBoton[0].bottom - elementoBoton[0].top)/2;
    brazoDerecho.y1 = -alturaBoton;
    brazoDerecho.x1 = 0;
    moverCanvas();
    var intervalo1 = setTimeout(activarBoton, 100);
  } else {
    var intervalo = setTimeout(moverBoton, 50);
  }
}
function activarBoton() {
  if (intervaloAjustar < anchoBoton) {
    brazoDerecho.x1 += -factorAnchoBoton;
    moverCanvas();
    intervaloAjustar += factorAnchoBoton;
    distanciaBoton = anchoBoton - intervaloAjustar;
    divBoton.setAttribute('style','transform: translateX('+ distanciaBoton +'px); display: block;');
    var intervalo = setTimeout(activarBoton, 100);
  } else if (intervaloAjustar == anchoBoton) {
    tercioBoton = anchoBoton/3;
    brazoDerecho.x1 += tercioBoton*2;
    moverCanvas();
    intervaloAjustar = 0;
    encender();
  }
}
function encender() {
  if (intervaloAjustar < tercioBoton) {
    brazoDerecho.x1 += -tercioBoton/5;
    moverCanvas();
    intervaloAjustar += tercioBoton/10;
    var intervalo = setTimeout(encender, 50);
  } else if (intervaloAjustar == tercioBoton) {
    botonP = document.getElementById('botonP');
    botonP.setAttribute('style','background-color: #67b04f;');
    divCheckbox.checked = false;
    brazoDerecho.x1 = brazoDerecho.x + 20;
    brazoDerecho.y1 = -40;
    moverCanvas();
    intervaloAjustar = 0;
    var intervalo1 = setTimeout(finPresentacion, 1000);
  }
}
function finPresentacion() {
  caminar(-brazoIzquierdo.x1,3);
  divBoton.setAttribute('style', 'display: none;');
  var intervalo = setTimeout(cambiarColor, 500);
}
function cambiarColor() {
  var estilo1 = 'border: 1px solid hsl(270, 50%, 83%); background-color: hsl(270, 50%, 83%);';
  var estilo2 = 'border: 1px solid hsl(270, 50%, 80%); background-color: hsl(270, 50%, 80%);';
  var estiloBody = validarEstilo(divBody);
    divBody.setAttribute('style', estiloBody + estilo1);
  var estiloNav = validarEstilo(divNav);
    divNav.setAttribute('style', estiloNav + estilo1);
  var estiloSection = validarEstilo(divSection);
    divSection.setAttribute('style', estiloSection + estilo1);
  var estiloAside = validarEstilo(divAside);
    divAside.setAttribute('style', estiloAside + estilo1);
  var estiloHeader = validarEstilo(divHeader);
    divHeader.setAttribute('style', estiloHeader + estilo2);
  var estiloFooter = validarEstilo(divFooter);
    divFooter.setAttribute('style', estiloFooter + estilo2);
  if (pantallaAncho < 240) {
    divImagenLogo.width = '30';
    divImagenLogo.height = '30';
  } else if ((pantallaAncho >= 240) && (pantallaAncho < 420)) {
    divImagenLogo.width = '50';
    divImagenLogo.height = '50';
  } else if ((pantallaAncho >= 421) && (pantallaAncho < 640)) {
    divImagenLogo.width = '70';
    divImagenLogo.height = '70';
  } else if ((pantallaAncho >= 641) && (pantallaAncho < 1024)) {
    divImagenLogo.width = '90';
    divImagenLogo.height = '90';
  }
  var intervalo = setTimeout(moverBody, 1000);
}
function validarEstilo(id) {
  var estilo = id.getAttribute('style');
  if (!estilo) {
    estilo = '';
  }
  return estilo;
}