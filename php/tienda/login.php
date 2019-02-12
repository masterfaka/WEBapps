<?php
//Login para tienda
$nombre=$_POST['nombre'];
$contra=$_POST['psw'];
$db_nombre="tiendaphp";
grabarDatos($nombre, $contra);


function grabarDatos($nombre, $contra)
{
	//global $nombre, $contra;
	/* esto no hace falta pero SI, Sino no se pasaran como paramentro*/
	global $db_nombre;
	$servername="localhost";
	$username="root";
	$password="";
	
	try {
		crearBd();
		crearT($db_nombre, $servername,$username,$password);
   
	$conn = new PDO("mysql:host=$servername;dbname=$db_nombre", $username, $password);
	//antes de insertar hasheamos la contra
	/*logo para comparar se hace// Query the database for username and password
if(password_verify($password, $hashed_password)) {*/
	$hasheoP=password_hash($password, PASSWORD_DEFAULT);
	//aki remediar y no falsear el login hacerlo bien
	$sql="INSERT INTO contactos(nombre, contra) VALUES('$nombre', '$hasheoP')";
	$conn->exec($sql);
	echo "El contacto $nombre $contra ha sido insertado";
	header('Location: cp.html');
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
		$sql="CREATE TABLE if not exists contactos (id  int NOT NULL AUTO_INCREMENT , nombre varchar(50), contra varchar(15), PRIMARY KEY (id))";
		$conn->exec($sql);
		 $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    	echo "tabla creada!!!"; 
    }catch(PDOException $e){
    		echo "Connection failed: " . $e->getMessage();
    }
    $conn=null;
}
?>