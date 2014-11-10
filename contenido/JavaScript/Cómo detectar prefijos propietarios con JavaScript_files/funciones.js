// oculta-muestra elementos
function toggleId(tallerId){
  if(document.getElementById(tallerId).style.display == 'block'){
    document.getElementById(tallerId).style.display = 'none';
  }else{
    document.getElementById(tallerId).style.display = 'block';
  }
}
// para ocultar elementos en la impresion
function funcImprimir(){
	
	tgt=document.getElementById('incluirComentarios').checked;
	
	if (tgt == false){
		
		document.getElementById('imprimoOno').className='noprint';
	}
	
	window.print();
	document.getElementById('menuImprimir').style.display = 'none';
}