ctx.strokeStyle = "white",
ctx.lineWidth = SHIP_SIZE / 20;
ctx.beginPath();
ctx.moveTo(
    ship.x + ship.r * Math.cos(ship.a),
    ship.y - ship.r * Math.sin(ship.a),
);

ctx.lineTo( // rear left 
    ship.x - ship.r * (Math.cos(ship.a) + Math.sin(ship.a)),
    ship.y + ship.r * (Math.sin(ship.a) - Math.cos(ship.a))
);

 ctx.lineTo( // rear right
    ship.x - ship.r * (Math.cos(ship.a) - Math.sin(ship.a)),
    ship.y + ship.r * (Math.sin(ship.a) + Math.cos(ship.a))
);

var ship = {
    x: canv.width / 2,
    y: canv.height / 2,
    r: SHIP_SIZE / 2,
    a: 90 / 180 * Math.PI // convert to radians
}