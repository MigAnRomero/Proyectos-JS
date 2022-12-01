window.onload = function() {
    let canvas = document.getElementById("dibujito");
    let lienzo = canvas.getContext("2d");
    let lineas = 30;  // Límite de líneas creadas
    let ele = 0;

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
        dibujarLinea("#AAF", 0, 0, 10, 300);
        ele += 1;
    }
}