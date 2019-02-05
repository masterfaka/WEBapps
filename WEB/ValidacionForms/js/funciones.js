function cargarDni(){
	//mostrar nro random
	var texto="";
	for(i=0; i<8; i++){//son 8 cifras
		var num=Math.floor(Math.random() * 10);//esto devolveria entre 0-9;
		texto=texto+num;		
	}
	//adjuntamos al valor al input
	document.getElementById("dni").value=texto;
}
function cargarLetra(){
	var numero= document.getElementById("dni").value;
	var resto=numero%23;
	var letras="TRWAGMYFPDXBJÇNJZSQVHLCKE";
	var letra=letras.charAt(resto);
	mostrarR(letra);
	mostrarRT(numero, letra);//lo mostramos con formato separado
}
function mostrarR(dni){
	//seteamos los valores y mostramos
	document.getElementById("resultado").value=dni;
	document.getElementById("resultado").type="text";
}
function mostrarRT(num, letra){
	var texto=num+"-"+letra;
	document.getElementById("resT").value=texto;
	document.getElementById("resT").type="text";
}