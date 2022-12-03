window.onload = function() {
    // Código para el input
    let texto = document.getElementById("textoLineas");
    let boton = document.getElementById("botonUno");
    boton.addEventListener("click", dibujoPorClick);
    // Código para dibujar líneas
    let canvas = document.getElementById("dibujito");
    let lienzo = canvas.getContext("2d");
    let lineas = 30;  // Límite de líneas creadas
    let ele = 0;
    let xI, yI, xF, yF;
    let colorLinea = "#AAF";

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
        alert("Btn oprimido");
    }

    // while (ele < lineas) 
    // {
    //     yI = (10 * ele);
    //     xF = 10 * (ele + 1);
    //     dibujarLinea(colorLinea, 0, yI, xF, 300);
    //     console.log("Línea nro: " + ele);
    //     ele++;
    // }

    for (ele = 0; ele < lineas; ele++)
    {
        yI = (10 * ele);
        xF = 10 * (ele + 1);
        dibujarLinea(colorLinea, 0, yI, xF, 300);
        console.log("Línea nro: " + ele);
    }

    for (ele = 0; ele < lineas; ele++)
    {
        xI = (10 * ele);
        yF = 10 * (ele + 1);
        dibujarLinea(colorLinea, xI, 0, 300, yF);
        console.log("Línea dos nro: " + ele);
    }

    dibujarLinea("pink", 1, 1, 1, 299);  //Dibujar línea vertical en eje Y
    dibujarLinea("pink", 1, 299, 299, 299);  //Dibujar línea vertical en eje X
    dibujarLinea("pink", 1, 1, 299, 1);
    dibujarLinea("pink", 299, 1, 299, 299);
}