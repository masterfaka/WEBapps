<?php
//revisar funcinamiento de global!!  entender
$nombre=$_POST['nombre'];
$telefono=$_POST['telefono'];
$db_nombre="mi_agenda";
grabarDatos($nombre, $telefono);


function grabarDatos($nombre, $telefono)
{
	//global $nombre, $telefono;
	/* esto no hace falta pero SI, Sino no se pasaran como paramentro*/
	global $db_nombre;
	$servername="localhost";
	$username="root";
	$password="";
	
	try {
		crearBd();
		crearT($db_nombre, $servername,$username,$password);
   /* $conn = new PDO("mysql:host=$servername", $username, $password);
	$sql="CREATE DATABASE IF NOT EXISTS mi_agenda";
	$conn->exec($sql);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connected successfully"; 
	
	
	$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	//$conn->$dbname="mi_agenda";
	$sql="CREATE TABLE if not exists contactos (id  int NOT NULL AUTO_INCREMENT , nombre varchar(50), telefono varchar(15), PRIMARY KEY (id))";
	$conn->exec($sql);
	$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	*/
	$conn = new PDO("mysql:host=$servername;dbname=mi_agenda", $username, $password);
	$sql="INSERT INTO contactos(nombre, telefono) VALUES('$nombre', '$telefono')";
	$conn->exec($sql);
	echo "El contacto $nombre $telefono ha sido insertado";
	
    }catch(PDOException $e)
    {
    echo "Connection failed: " . $e->getMessage();
    }
	
}

function crearBd(){
	global $db_nombre;
	$servername="localhost";
	$username="root";
	$password="";
	try {
	$conn= new PDO("mysql:host=$servername", $username, $password);
		$sql="CREATE DATABASE IF NOT EXISTS $db_nombre";
		$conn->exec($sql);
		 $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    	echo "bd creada"; 
    }catch(PDOException $e){
    		echo "Connection failed: " . $e->getMessage();
    }
    $conn=null;//cerramos conex
}
function crearT($db_nombre, $server, $user, $pass){
	try {
	$conn = new PDO("mysql:host=$server;dbname=$db_nombre", $user, $pass);
		$sql="CREATE TABLE if not exists contactos (id  int NOT NULL AUTO_INCREMENT , nombre varchar(50), telefono varchar(15), PRIMARY KEY (id))";
		$conn->exec($sql);
		 $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    	echo "tabla creada!!!"; 
    }catch(PDOException $e){
    		echo "Connection failed: " . $e->getMessage();
    }
    $conn=null;
}
?>