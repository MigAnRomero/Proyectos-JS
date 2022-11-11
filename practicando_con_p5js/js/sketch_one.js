function setup() {
    print("Se ha creado el lienzo");
    createCanvas(400, 400);
    print("Se ha coloreado el fondo del lienzo");
    background(220);
}

function draw() {
    line(0, 0, 400, 400);
    line(0, 400, 400, 0);
    line(0, 200, 400, 200);
    line(200, 0, 200, 400);
}