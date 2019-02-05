//Por ser campos INPUT SE USA ONFOCUS Y ONBLUR!!!! no onchange
/* ESTO NO LO PUEDE HACER PORK EL HTML NO LO A CARGADO
document.getElementById("boton").onclick=function(){
	console.log("clicaste");	
}
document.getElementById("boton").onmouseOn=function(){
	console.log("estas encima!!");	
}
*/
function bordeRojo(elemento){
	elemento.classList.remove('w3-border');
	elemento.classList.add('w3-border-red');
}
function bordeVerde(elemento){
	elemento.classList.remove('w3-border');
		elemento.classList.remove('w3-border-red');
	elemento.classList.add('w3-border-green');
}
//nombre y pellido se comprueba gual por vacion anywas
function comprobarN(el){
	if(el.value==""){
		alert("debes poner algo");
		bordeRojo(el);
		return false;
	}
}
function comprobarE(el){
	var posA=el.value.indexOf("@");//-1 si no existe
	var posP=el.value.lastIndexOf(".");//buscamos pto por e final si no 
	if(!el.value){//signifuca vacio o null
		alert("debes introducir algo");
		bordeRojo(el);
	}else if(posA==-1 || posP==-1){//no hay pto o arroba
		alert("Introduce  server(.com) o dominio( p ej @gmail)");
		bordeRojo(el);
		//aki se puede anidar para saber exactamente cual
	}else if(posA>posP){//pto antes de arroba
		alert("formato incorrecto; server(.com) va despues del dominio (pej: gmail)");
		bordeRojo(el);
	}else if(posP-posA<=1){//punto y arroba no pueden ir juntos === no hay dominio
		alert("dominio Incorrecto; debe haber algo entre @ y punto (.com)");
		bordeRojo(el);
	}else{//sera correcto sino
		alert("mail correcto");
		bordeVerde(el);
		
	}
	
	
}
function comprobarA(el){
	if(el.value==""){
		alert("debes poner algo");
		bordeRojo(el);
		return false;
	}
}
function comprobarEdad(el){
	//para comprobar null cero o vacion
	// en js se usa ! y el if=>     if(!elemento.value) y comprueba todo simple
	//no compruebo si es un nro pork hatml no t dejaria poner
	if(!el.value){
		alert("debes poner algo");
		bordeRojo(el);
		return false;
	}else if(el.value<=17){
				alert("debes Tener al menos 18!!pipa!");
		bordeRojo(el);
		return false;
	}else{
		bordeVerde(el);
	}
}
function comprobarD(el){
	    var dni= document.getElementById("dni").value;
		//verificamos long
		if(dni.length!=9){
			alert("long incorrecta!");
			return false;//pra ke pare jecucion de funcion con reultado
			bordeRojo(el);
			
		}
		dni=el;
		var numDni=document.getElementById("dni").value.substr(0,8);//(incio, cuantos_chars)
		//despues de comprobar nro digitos comprobomas ke ea unum
		if(isNaN(numDni)){//true sk no es un nro. si es false seguimos
			alert("Debe de ser un NRO!!!");
			bordeRojo(el);
		}
		//comprobamos letra
		//comprobamos letra primero k no ea num logo si es la correcta
		var letra= el.value.charAt(8);//en la pos 8
		if(isNaN(letra)==false){
			//es un nro asi k salimos y alertamos
			alert("No es una letra sikiera!!");
			bordeRojo(el);
		}
		var resto=numDni%23;
		var letras="TRWAGMYFPDXBJÇNJZSQVHLCKE";//esto podria ser array pero como al string se le puede buscar por pos empezando en 0 da =
		var letra_correcta=letras.charAt(resto);
		if(letra!=letra_correcta){
			alert("letra incorrecta");
			return false;
			bordeRojo(el);
		
		}
	   //le echo con returns(false) pero no necesita return true pork nadie escucha esta fucn
	   //aki solo para la ejecucion del programa
	   alert("dni correcto");
	   bordeVerde(el);
	   }