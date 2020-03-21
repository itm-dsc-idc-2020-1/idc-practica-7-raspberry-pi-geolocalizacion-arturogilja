<!DOCTYPE html>

<html lang="es">
	<head>
        <meta charset="utf-8" />
		<title>PHP Mi Mapa</title>
        <link rel="stylesheet" type="text/css" href="css/styles.css"/>
        
        <script language="javascript" src="js/php_mi_mapa.js"></script>

	</head>
	<body>
		<h1>Mi Mapa con CANVAS y PHP</h1>
        <br>
        <canvas id="mapa" width="1000px" height="500px">
			Tu navegador no soporta CANVAS
		</canvas>
        <?PHP
            include "php/conexion.php";
            
            $sql = "select * from lugares where nombre='Edificio O'";
            $resultado=mysqli_query($conn, $sql);
            echo "<br><br><h3>Valor de las coordenadas:</h3>";

            $renglon=mysqli_fetch_array($resultado,MYSQLI_ASSOC);
            $latitud1 = $renglon['latitud'];
            $longitud1 = $renglon['longitud'];
            echo "Latitud 1: ".$latitud1. " Longitud 1: ".$longitud1;
            
            $renglon=mysqli_fetch_array($resultado,MYSQLI_ASSOC);
            $latitud2 = $renglon['latitud'];
            $longitud2 = $renglon['longitud'];
            echo "<br />Latitud 2: ".$latitud2. " Longitud 2: ".$longitud2; 
            
            $renglon=mysqli_fetch_array($resultado,MYSQLI_ASSOC);
            $latitud3 = $renglon['latitud'];
            $longitud3 = $renglon['longitud'];
            echo "<br />Latitud 3: ".$latitud3. " Longitud 3: ".$longitud3; 

            $renglon=mysqli_fetch_array($resultado,MYSQLI_ASSOC);
            $latitud4 = $renglon['latitud'];
            $longitud4 = $renglon['longitud'];
            echo "<br />Latitud 4: ".$latitud4. " Longitud 4: ".$longitud4;

            echo "<script>dibujar($latitud1, $longitud1, $latitud2, $longitud2, $latitud3, $longitud3, $latitud4, $longitud4);</script>";
            mysqli_close($conn);
		?>
	</body>
</html>
