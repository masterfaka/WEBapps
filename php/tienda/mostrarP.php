<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
</head>
<body>
	 <table class="w3-table-all w3-hoverable w3-centered">
	 	    <thead>
      <tr class="w3-light-grey">
        <th> Name</th>
        <th>Precio</th>
        <th>Stock</th>
            <th>accion</th>
      </tr>
    </thead>

<?php
listarContactos();
function listarContactos()
{
	$db_nombre="tiendaphp";

	$servername="localhost";
	$username="root";
	$password="";
	
	try {
   
	
	$conn = new PDO("mysql:host=$servername;dbname=$db_nombre", $username, $password);
	
	$sql="SELECT * FROM productos";
	//PDOStatement
	$resultado=$conn->query($sql);//$resultado es un PDOStatement
	$lista_filas=$resultado->fetchAll();
	for ($i=0; $i<count($lista_filas); $i++)
		{
			$fila=$lista_filas[$i];
			echo("<tr><td>".$fila['nombre']."</td><td>".$fila['precio']."</td><td>".$fila['stock']."</td><td><a href='#'>comprar</a></td></tr>");
		}
    }
catch(PDOException $e)
    {
    echo "Connection failed: " . $e->getMessage();
    }
	
}
?>
</table>
<a href="javascript:history.go(-1);"><button class="w3-button  w3-indigo w3-block" >Atras</button></a>
</body>
</html>