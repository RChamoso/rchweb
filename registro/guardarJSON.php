<?php
  $datos_json = $_POST["datosJSON"];
//  $nuevo_archivo = fopen("contenidoMenu.json", 'w')
  $nuevo_archivo = fopen("../json/datos_out.json", 'w')
      or die("Error al abrir archivo de salida");
  fwrite($nuevo_archivo, $datos_json);
  $archivoCerrado = fclose($nuevo_archivo);
	echo json_encode($archivoCerrado);
?>