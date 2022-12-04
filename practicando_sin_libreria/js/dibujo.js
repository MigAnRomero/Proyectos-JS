window.onload = function() {
    // Código para el input
    let texto = document.getElementById("textoLineas");
    let boton = document.getElementById("botonUno");
    boton.addEventListener("click", dibujoPorClick);
    // Código para dibujar líneas
    let canvas = document.getElementById("dibujito");
    let ancho = canvas.width; // Ancho del canvas
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
    // Función para cuando un btn es oprimido
    function dibujoPorClick()
    {
        let lineas = parseInt(texto.value);;  // Límite de líneas creadas
        let ele = 0;
        let xI, yI, xF, yF;
        let colorLinea = "#AAF";
        let espacio = ancho / lineas;

        for (ele = 0; ele < lineas; ele++)
        {
            yI = (espacio * ele);
            xF = espacio * (ele + 1);
            dibujarLinea(colorLinea, 0, yI, xF, 300);
            console.log("Línea nro: " + ele);
        }
    
        for (ele = 0; ele < lineas; ele++)
        {
            xI = (espacio * ele);
            yF = espacio * (ele + 1);
            dibujarLinea(colorLinea, xI, 0, 300, yF);
            console.log("Línea dos nro: " + ele);
        }

        dibujarLinea("pink", 1, 1, 1, 299);  //Dibujar línea vertical en eje Y
        dibujarLinea("pink", 1, 299, 299, 299);  //Dibujar línea vertical en eje X
        dibujarLinea("pink", 1, 1, 299, 1);
        dibujarLinea("pink", 299, 1, 299, 299);
    }

    // while (ele < lineas) 
    // {
    //     yI = (10 * ele);
    //     xF = 10 * (ele + 1);
    //     dibujarLinea(colorLinea, 0, yI, xF, 300);
    //     console.log("Línea nro: " + ele);
    //     ele++;
    // }
}