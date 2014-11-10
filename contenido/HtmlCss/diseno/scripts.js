function crearTablas() {
	divTabla = document.getElementById('tabla');
	for(var i=0; i<360; i=i+15) {
		var tabla = document.createElement("table");

		var titulo1 = document.createElement("tr");
			var celdaVacia = document.createElement("th");
			titulo1.appendChild(celdaVacia);
			var matiz = document.createElement("th");
				matiz.textContent = 'Matiz ' + i;
				matiz.setAttribute('colspan', 5);
			titulo1.appendChild(matiz);
		tabla.appendChild(titulo1);

		var titulo2 = document.createElement("tr");
			var celdaVacia2 = document.createElement("th");
			titulo2.appendChild(celdaVacia2);
			var saturacion = document.createElement("th");
				saturacion.setAttribute('colspan', 6);
				saturacion.textContent = 'Saturacion';
			titulo2.appendChild(saturacion);
		tabla.appendChild(titulo2);

		var titulo3 = document.createElement("tr");
			var valorSaturacion1 = document.createElement("th");
				titulo3.appendChild(valorSaturacion1);
			var valorSaturacion2 = document.createElement("th");
				valorSaturacion2.textContent = '100%';
				titulo3.appendChild(valorSaturacion2);
			var valorSaturacion3 = document.createElement("th");
				valorSaturacion3.textContent = '75%';
				titulo3.appendChild(valorSaturacion3);
			var valorSaturacion4 = document.createElement("th");
				valorSaturacion4.textContent = '50%';
				titulo3.appendChild(valorSaturacion4);
			var valorSaturacion5 = document.createElement("th");
				valorSaturacion5.textContent = '25%';
				titulo3.appendChild(valorSaturacion5);
			var valorSaturacion6 = document.createElement("th");
				valorSaturacion6.textContent = '0%';
				titulo3.appendChild(valorSaturacion6);
			tabla.appendChild(titulo3);

		for (j=90; j>0; j=j-10) {
			var fila = document.createElement("tr");
				var celda1 = document.createElement("th");
					celda1.textContent = j + '%';
				fila.appendChild(celda1);
				var celda2 = document.createElement("th");
					color = 'hsl(' + i + ',100%,' + j + '%);';
					estilo = 'background-color:' + color;
					celda2.setAttribute('title', color);
					celda2.setAttribute('style', estilo);
				fila.appendChild(celda2);
				var celda3 = document.createElement("th");
					color = 'hsl(' + i + ',75%,' + j + '%);';
					estilo = 'background-color:' + color;
					celda3.setAttribute('title', color);
					celda3.setAttribute('style', estilo);
				fila.appendChild(celda3);
				var celda4 = document.createElement("th");
					color = 'hsl(' + i + ',50%,' + j + '%);';
					estilo = 'background-color:' + color;
					celda4.setAttribute('title', color);
					celda4.setAttribute('style', estilo);
				fila.appendChild(celda4);
				var celda5 = document.createElement("th");
					color = 'hsl(' + i + ',25%,' + j + '%);';
					estilo = 'background-color:' + color;
					celda5.setAttribute('title', color);
					celda5.setAttribute('style', estilo);
				fila.appendChild(celda5);
				var celda6 = document.createElement("th");
					color = 'hsl(' + i + ',0%,' + j + '%);';
					estilo = 'background-color:' + color;
					celda6.setAttribute('title', color);
					celda6.setAttribute('style', estilo);
				fila.appendChild(celda6);
			tabla.appendChild(fila);
		}
		divTabla.appendChild(tabla);
	}
}
