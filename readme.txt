Zhi Zeng's Cella Lark's Ant Project

Class: CPSC335
Project: Project #1, Cella Lark's Ant
Team Name: TheBigOS
Team Member: Zhi Zeng 

My team decided to do the project individually for project #1, while 
helping each other out and answering each other's questions. 

Intro
  This project draws a grid with P5. It contains an invisible "ant"/"bot".
  This ant moves around the grid based on the color of it's current tile. It
  moves around in the grid changing it's colors and continues to move.
  
  If the ant passes a black or blue tile, it turns the tile yellow and turns left.

  If the ant passes a yellow tile, it turns the tile red and goes straight (blue).

  If the ant passes a red tile, it turns the tile black again.


Contents
  File readme.txt.  This file.

  File cellalarksweb.png.  A snapshot of the example webpage.

  File sample.png. A snapshot of the program after a while.

  File index-js-p5-example.html. Drag and drop this into a browser to run the example.
    The file will run automatically. F5 or refresh the page to reload the canvas. 

  File p5.js. This is the P5 package.  It is loaded inside the html.

  File cs-sketch.js; This contains several P5 user-defined linkage functions
   (setup, draw, move, left, right, straight, countdown), 
   P5's setup() is run once before page display.
   P5's draw() is run once per display frame, so you can do animation.

  File assets/styles.css.  
    Styles the html page. 

  File assets/draw-stuff.js.
    This draws the canvas and the lines. 


External Requirements
  None


Installation & Running
  1. Extract the .zip file into a folder.

  2. Drag the index HTML file, index-js-p5-example.html, into a browser
    window. 

  3. The program runs automatically. 


Known Bugs
  o- The number lines are a bit thick. 


Sample Invocation
  o- Can be seen in sample.png


Warnings
  o- Testing was light.  Didn't try all key or mouse combos.


Testing
  o- Ran the program with different count numbers, different mod (speeds)
  o- I watched it run until it hit the edge of the canvas and it wrapped around. 


Credits
  Most of the code is from Professor Chuck Siska's example P5 Program. The
  Draw and Move functions are adjusted to fit the project requirements. 
  
