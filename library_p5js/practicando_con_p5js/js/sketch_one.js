window.onload = function() {
    function setup() {
        print("Se ha creado el lienzo");
        createCanvas(400, 400);
        print("Se ha coloreado el fondo del lienzo");
        background(220);
    }
    
    function draw() {
        /* Eje de coordenadas
        line(x1, y1, x2, y2);
        */
        // line(0, 0, 400, 400);
        // line(0, 400, 400, 0);
        // line(0, 200, 400, 200);
        // line(200, 0, 200, 400);
    
        /* Rectangulo
        rect(x1, y1, ancho, alto);
        */
        rect(0, 0, 200, 220);
        rect(10, 10, 25, 15);
        rect(10, 30, 25, 35);
        rect(38, 10, 25, 55);
    }
}