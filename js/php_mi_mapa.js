function dibujar(latitud1, longitud1, latitud2, longitud2, latitud3, longitud3, latitud4, longitud4) {
    var canvas = document.getElementById('mapa');
    if (canvas && canvas.getContext) {
        var ctx = canvas.getContext("2d");

        if (ctx) {

            //Conversion de datos que se reciben
            a = parseFloat(latitud1);
            b = parseFloat(longitud1);
            c = parseFloat(latitud2);
            d = parseFloat(longitud2);
            e = parseFloat(latitud3);
            f = parseFloat(longitud3);
            g = parseFloat(latitud4);
            h = parseFloat(longitud4);
            //document.write("<br/>Recibiendo: " + a + " " + b + " " + c + " " + d + " " + e + " " + f + " " + g + " " + h + " ");

            // Regla de 3 para calcular el primer punto ((19.723225 - 19.722418) * 500)/0.01108
            // latitud_superior = 19.723225;
            // longitud_superior = -101.186831;
            // divisor_lat = 0.01108;
            // divisor_long = -0.001597;

            latitud_superior = 19.721991;
            longitud_superior = -101.186139;

            latitud_superior2 = 19.722177;
            longitud_superior2 = -101.185484;

            latitud_superior3 = 19.721529;
            longitud_superior3 = -101.186559;

            latitud_superior4 = 19.721359;
            longitud_superior4 = -101.185418;

            divisor_lat = 0.01108;
            divisor_long = -0.001597;

            y1 = ((latitud_superior - a) * 500) / divisor_lat;
            x1 = ((longitud_superior - b) * 1000) / divisor_long;
            document.write("<br><br><h3>Valor de las coordenadas en pixeles:</h3>");
            document.write("x1: " + x1 + " y1: " + y1);

            // Dibujar un círculo en el primer punto
            // ctx.beginPath();
            // ctx.arc(x1, y1, 4, 0, 2 * Math.PI, true);
            // ctx.stroke();

            // Regla de 3 para calcular el segundo punto
            y2 = ((latitud_superior - c) * 500) / divisor_lat;
            x2 = ((longitud_superior - d) * 1000) / divisor_long;
            document.write("<br />x2: " + x2 + " y2: " + y2);


            // Regla de 3 para calcular el 3er punto
            y3 = ((latitud_superior - e) * 500) / divisor_lat;
            x3 = ((longitud_superior - f) * 1000) / divisor_long;
            document.write("<br />x3: " + x3 + " y3: " + y3);


            // Regla de 3 para calcular el 3er punto
            y4 = ((latitud_superior - g) * 500) / divisor_lat;
            x4 = ((longitud_superior - h) * 1000) / divisor_long;
            document.write("<br />x4: " + x4 + " y4: " + y4);



            // Dibujar linea
            // Grosor de línea
            ctx.scale(3.5, 6);
            ctx.lineWidth = 1;
            // Color de línea
            ctx.strokeStyle = "#212121";
            // Color de relleno
            ctx.fillStyle = "#1565C0";
            // Comenzamos la ruta de dibujo, o path
            ctx.beginPath();
            // Mover a la esquina superior izquierda
            ctx.moveTo(x1, y1);
            // Dibujar la línea hacia la derecha
            ctx.lineTo(x2, y2);
            // Ahora la que va hacia abajo
            ctx.lineTo(x4, y4);
            // La que va hacia la izquierda
            ctx.lineTo(x3, y3);
            // Y dejamos que la última línea la dibuje JS
            ctx.closePath();
            // Hacemos que se dibuje
            ctx.stroke();
            // Lo rellenamos
            ctx.fill();

            // Regla de tres para el punto del raspberry
            // variables xr yr para la posicion del raspberry
            document.write("<br><br><h3>Valor de las coordenadas del Raspberry:</h3>");
            latR = 19.721850;
            longR = -101.185813;
            yr = ((latitud_superior - latR) * 500) / divisor_lat;
            xr = ((longitud_superior - longR) * 1000) / divisor_long;
            document.write("xr: " + xr + " yr: " + yr);


            // Dibujar un círculo de la posicion del raspberry

            ctx.beginPath();
            ctx.fillStyle = "#FFFF00";
            ctx.arc(xr, yr, 0.8, 0, 2 * Math.PI, true);
            ctx.fill();


        } else { alert("Error al crear el contexto"); }
    }
}