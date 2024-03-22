/** @type {HTMLCanvasElement} */

const FPS = 30;

var canv = document.getElementById("gameCanvas");

var ctx = canv.getContext("2d");


var ship = {
    x: canv.width / 2 ,
    y: canv.height / 2,
    r: SHIP_SIZE / 2,
    
}

setInterval(update, 1000 / FPS);


function update() {
    // draw space
    ctx.fillStyle = "black";

    ctx.fillRect(0, 0, canv.width, canv.height);



    // draw shape

    // move the ship


}