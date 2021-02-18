//The Larks #34 ant will start in an all black 60 by 40 grid 
//(with each grid cell being 10 by 10 pixels) at cell location (30,20), 
//and the ant's nose will be facing up (north) toward the cell (0,20) at the top-edge of column 20.

//This function draws a grid
//CPSC335-cella-larks-ant Team TheBigOs

function draw_grid(gLineSize, majorLines, gStrokeColor, gFillColor) {
    stroke(gStrokeColor); //Stroke color for lines
    fill(gFillColor);

    let sz = gCanvas.drawCellSize;
    let width = sz * gCanvas.drawWidth; // Our 'canvas' uses cells of given size, not 1x1 pixels.
    let height = sz * gCanvas.drawHeight;

    for (var ix = 0; ix < width; ix += gLineSize) { //Draw vertical lines on X-axis
        let big_linep = (ix % majorLines == 0);
        let line_wgt = 1;
        if (big_linep) {
            line_wgt = 2;
        } //Major lines every 5 (50px)
        strokeWeight(line_wgt);
        line(ix, 0, ix, height);
        strokeWeight(1);
        if (ix % majorLines == 0) {
            text(ix / 10, ix, 10);
        }
    }

    for (var iy = 0; iy < height; iy += gLineSize) { //Draw horizontal lines on Y-axis
        let big_linep = (iy % majorLines == 0);
        let line_wgt = 1;
        if (big_linep) {
            line_wgt = 2;
        } //Major lines every 5 (50px)
        strokeWeight(line_wgt);
        line(0, iy, width, iy);
        strokeWeight(1);
        if (iy % majorLines == 0) {
            text(iy / 10, 0, iy + 10);
        }
    }
}