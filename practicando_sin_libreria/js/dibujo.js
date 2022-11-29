window.onload = function() {
    var d = document.getElementById("dibujito");
    var lienzo = d.getContext("2d");
    var i;
    var j;
    var xi,xy,xf,yf;

    function dibujarLinea(color,x_i,y_i,x_f,y_f){
        lienzo.beginPath();
        lienzo.strokeStyle =color;
        lienzo.moveTo(x_i,y_i);
        lienzo.lineTo(x_f,y_f);
        lienzo.stroke();
        lienzo.beginPath();
    }
    
    for (i = 1; i <= 300; i=i+3) { 
        j = i %2;
        if (j == 0) {
            xi = i;
            yi = 1;
            xf = 300;
            yf = i;
        } else {
            
            xi = i;
            yi = 300;
            xf = 1;
            yf = i;
        }
        dibujarLinea("#6FF5FF",xi,yi,xf,yf);
    }
}