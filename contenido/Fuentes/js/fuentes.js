var tipoFuente = [
	"AftaSansThin-Regular",
	"AftaSansThin-Italic",
  "AlphaWood",
	"Aller_Lt",
	"Aller_LtIt",
	"Aller_Rg",
	"Aller_It",
	"Aller_Bd",
	"Aller_BdIt",
	"AllerDisplay",
	"Amaranth-Regular",
	"Amaranth-Italic",
	"Amaranth-Bold",
	"Amaranth-BoldItalic",
	"AnnieUseYourTelescope",
	"Anonymous_Pro",
	"Anonymous_Pro_I",
	"Anonymous_Pro_B",
	"Anonymous_Pro_BI",
	"ArchitectsDaughter",
	"AveriaSerifLibre-Light",
	"AveriaSerifLibre-LightItalic",
	"AveriaSerifLibre-Regular",
	"AveriaSerifLibre-Italic",
	"AveriaSerifLibre-Bold",
	"AveriaSerifLibre-BoldItalic",
	"BaroqueScript",
	"BPreplay",
	"BPreplayItalics",
	"BPreplayBold",
	"BPreplayBoldItalics",
	"Brie",
	"CandelaBook",
	"CandelaItalic",
	"CandelaBold",
	"CandelaBoldItalic",
	"Chango-Regular",
  "DaysOne-Regular",
  "Diamond",
	"Dreamorphans",
	"Dreamorphans-i",
	"Dreamorphans-b",
	"Dreamorphans-bi",
	"DroidSans",
	"DroidSans-Bold",
	"EddieRounded",
	"Elfar",
  "FredokaOne-Regular",
	"Gabrielle",
	"LobsterTwo-Regular",
	"LobsterTwo-Italic",
	"LobsterTwo-Bold",
	"LobsterTwo-BoldItalic",
  "Mexcelle",
  "Mexcelle3D",
	"OpenSans-Light",
	"OpenSans-Regular",
	"OpenSans-Italic",
	"OpenSans-Semibold",
	"OpenSans-Bold",
	"OpenSans-BoldItalic",
	"OpenSans-ExtraBold",
	"Porcelai",
  "PostOffice",
	"Riesling",
	"SetFireToTheRain",
  "Sniglet-Regular",
	"SwaggerLight",
	"Swagger",
	"SwaggerBold",
	"SweetlyBroken",
	"Unifont",
	"Virgo",
  "Wedgie",
  "Xtrusion"
	];

function fuentes() {
	var contenidoFuentes = elementoId('fuentesBD');
		for (i in tipoFuente){
			var tituloFuentes = elementoNuevo('h4');
			var mayusculasFuentes = elementoNuevo('p');
			var minusculasFuentes = elementoNuevo('p');
			var numerosFuentes = elementoNuevo('p');
			var estiloFuentes = 'font-family:' + tipoFuente[i] + ';';
			tituloFuentes.textContent = tipoFuente[i];
			mayusculasFuentes.setAttribute('style',estiloFuentes);
			mayusculasFuentes.textContent = 'ABCDEFGHIJKLMNÑPQRSTUVWXYZ - ÁÉÍÓÚ';
			minusculasFuentes.setAttribute('style',estiloFuentes);
			minusculasFuentes.textContent = 'abcdefghijklmnñopqrstuvwxyz - áéíóú';
			numerosFuentes.setAttribute('style',estiloFuentes);
			numerosFuentes.textContent = '1234567890';
			contenidoFuentes.appendChild(tituloFuentes);
			contenidoFuentes.appendChild(mayusculasFuentes);
			contenidoFuentes.appendChild(minusculasFuentes);
			contenidoFuentes.appendChild(numerosFuentes);
		}
}