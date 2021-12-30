function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(ball.x, ball.y, ball.radius)
  fill (ball.color[0])
  ball.x= ball.x+ ball.xspeed
  ball.y= ball.y +ball.yspeed
}
var ball={
x:10,
y:12,
radius:15,
xspeed:5,
yspeed:5,
color:["purple", "blue", "black"]
}
