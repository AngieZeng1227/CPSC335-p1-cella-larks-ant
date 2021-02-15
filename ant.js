//Cella Lark Ant Main
//CPSC335-cella-larks-ant Team TheBigOs

var gCanvas = {
    drawCellSize: 10,
    drawWidth: 60,
    drawHeight: 40
}; //Cell size = 10 by 10 pixels, 60 by 40 grid

function setup() //Set up grid & draw it
{
    let sz = gCanvas.drawCellSize;
    let width = sz * gCanvas.drawWidth; // Our 'canvas' uses cells of given size, not 1x1 pixels.
    let height = sz * gCanvas.drawHeight;
    createCanvas(width, height); // Make a P5 canvas.
    draw_grid(10, 50, 'white', 'white');
}