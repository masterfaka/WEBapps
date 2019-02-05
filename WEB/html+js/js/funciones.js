//crear select JS
//CreateElement+getElementsByTagName()[]+ var ParentNode+ var removeChild();+ body.appendChild(O_select);
//onclick="console.log('pulsaste')";
/*
document.getElementsByTagName("body")[0].addEventListener("load", crearSelect);
document.body.onload=function(){
	crearSelect()
	};
*/
function crearSelect(){//tal cual se llamaria en el onload del body pero se puede invocar desde aki tmbn mirar abajo
/** https://www.w3schools.com/jsref/event_onload.asp/ */
	var objeto_Select=document.createElement("select");
	//declaramos ids para poder usarlo later
	//seria bueno setear el name para luego cojerlo en form
	objeto_Select.id="periodico";
	//array de otipo objeto JS
	var objeto_optionS=[
	{texto: "El Pais", valor: "http://www.elpais.com"},
	{texto: "El Mundo", valor: "http://www.elmundo.es"},
	{texto: "Marca", valor: "http://www.marca.com"},
	{texto: "as", valor: "http://www.AS.com"}
	];
	for(i=0; i<objeto_optionS.length;i++){
		var elemento_option=document.createElement("option");
		var texto=document.createTextNode(objeto_optionS[i].texto);//cojemos el texto del opj
		elemento_option.appendChild(texto);//se lo metemos al texto del select como si fuera inner html
		elemento_option.value=objeto_optionS[i].valor;//le seteamos el valor
		objeto_Select.appendChild(elemento_option);//se le adjuntamos al elemento select
	}
	document.getElementsByTagName("body")[0].appendChild(objeto_Select);//metemos el select en el body
}

//document.getElementsByTagName("body")[0].onload=function(){crearSelect()};
//esta linea is OP; eventos desde js directamente sobre la var elemento.
function borrarE(){
	//hay ke saber ke es el primero o el orden
	var lista_enlaces=document.getElementsByTagName("a");
	if(lista_enlaces.length!=0)
	{
		var padre_enlace=lista_enlaces[0].parentNode;
		padre_enlace.removeChild(lista_enlaces[0]);
	}
}
function mostrarK(){
	borrarE();
	var obj_a=document.createElement("a");
	obj_a.href="http://www.grupo-kapital.com/kapital/";
	obj_a.innerHTML="Ir a kapi";
	document.getElementsByTagName("body")[0].appendChild(obj_a);
}
function mostrarF(){
borrarE();
	var obj_a=document.createElement("a");
	obj_a.href="http://www.grupo-kapital.com/fabrik/";
	obj_a.innerHTML="Ir a Fabrik";
	document.getElementsByTagName("body")[0].appendChild(obj_a);
	
	
}