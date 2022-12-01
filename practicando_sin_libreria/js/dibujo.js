window.onload = function() {
    let canvas = document.getElementById("dibujito");
    let lienzo = canvas.getContext("2d");
    let lineas = 30;  // Límite de líneas creadas
    let ele = 0;
    let xI, yI, xF, yF;

    // Función para dibujar una línea en el canvas 
    function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal)
    {
        lienzo.beginPath();
        lienzo.strokeStyle = color;
        lienzo.moveTo(xInicial, yInicial);
        lienzo.lineTo(xFinal, yFinal);
        lienzo.stroke();
        lienzo.closePath();
    }

    while (ele < lineas) 
    {
        yI = (10 * ele);
        xF = 10 * (ele + 1);
        dibujarLinea("#AAF", 0, yI, xF, 300);
        console.log("Línea nro: " + ele);
        ele += 1;
    }

    dibujarLinea("pink", 1, 1, 1, 299);  //Dibujar línea vertical en eje Y
    dibujarLinea("pink", 1, 299, 299, 299);  //Dibujar línea vertical en eje X
}