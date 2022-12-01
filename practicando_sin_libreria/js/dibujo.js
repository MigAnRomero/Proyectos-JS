window.onload = function() {
    let canvas = document.getElementById("dibujito");
    let lienzo = canvas.getContext("2d");

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

    dibujarLinea("red", 0, 0, 150, 150);
    dibujarLinea("yellow", 0, 4, 146, 150);
    dibujarLinea("red", 150, 150, 200, 75);
    dibujarLinea("yellow", 146, 150, 190, 75);
    dibujarLinea("red", 200, 75, 0, 0); // Se cierra el triangulo rojo
    dibujarLinea("yellow", 190, 75, 0, 4); // Se cierra el triangulo amarillo
}