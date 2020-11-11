/* var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight ;

var c = canvas.getContext('2d');

var hite = innerHeight * .55;
var bayse = innerWidth * .4;
var startx = innerWidth * .6 ;
var starty = innerHeight *.85;

c.fillRect(100,50,5,5);

var mouse = {
    x: 100,
    y: 50
};


// Helper functions
function r2d(rads) { return rads * (180/Math.PI);}


// EVENT LISTENINGS
/*window.addEventListener('mousemove',
    function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    console.log(r2d(Math.atan((starty - mouse.y)/(startx- mouse.x))))
    });

function FTriangle(x, y, dx, dy, hite, bayse) {
    this.x = x;
    this.y = y;
    this.dx = dy;
    this.dy = dy;
    this.hite = hite;
    this.bayse = bayse;

    this.draw = function () {
        c.beginPath();
        c.moveTo(this.x, this.y);
        c.lineTo(this.x + ((this.bayse / 2) - this.dx), (this.y ) - this.hite - this.dy);
        c.lineTo(this.x + (this.bayse) - this.dx, this.y- this.dy);
        c.closePath();
        c.strokeStyle = "#c558ff";
        c.stroke();
        c.fillStyle = "#c558ff";
        c.fill();

    };
};

function Triangle(x, y, hite, bayse) {
    this.x = x;
    this.y = y;
    this.hite = hite;
    this.bayse = bayse;

    this.draw = function () {
        c.beginPath();
        c.moveTo(this.x, this.y);
        c.lineTo(this.x + (this.bayse / 2), (this.y ) - this.hite);
        c.lineTo(this.x + (this.bayse) , this.y);
        c.closePath();
        c.strokeStyle = "black";
        c.stroke();
        c.fill();
    };

    this.update = function () {

    }
}

var t = new FTriangle(startx, starty, 0, 0, hite, bayse);
var opposite = starty - mouse.y;
var adjacent = startx - mouse.x;
var theta = r2d(Math.atan(opposite/adjacent));
console.log(theta);
var shifty = (bayse/2) * Math.sin(theta);
var shiftx =  Math.sqrt(Math.pow((bayse/2), 2) - Math.pow((starty+shifty) - starty, 2), 2);
var tt = new Triangle(startx, starty, hite, bayse);
//t.draw();

//tt.draw();

*/

(async function main() {
  let canvas = document.querySelector('canvas');
  canvas.width = window.innerWidth ;
  canvas.height = window.innerHeight ;
  let ctx = canvas.getContext('2d');

  function loadImage(path) {
    let image = new Image();
    let promise = new Promise((resolve, reject) => {
      image.onload = () => resolve(image);
      image.onerror = reject;
    });
    image.src = path;
    return promise;
  }

  let arrow = await loadImage('static/images/main_triangle.png'); // points right http://i.imgur.com/U4hfvaH.png

  let keys = new Array(0xff).fill(0);
  document.addEventListener('keydown', e => keys[e.key] = 1);
  document.addEventListener('keyup', e => keys[e.key] = 0);

  const LEFT = 37;
  const UP = 38;
  const RIGHT = 39;
  const DOWN = 40;

  let mx = 0;
  let my = 0;
  canvas.addEventListener('mousemove', e => {
  	mx = e.offsetX;
    my = e.offsetY;
  });

  let x = innerWidth * .8 ;
  let y =  innerHeight *.5;
  const SPEED = 200;

  const MAX_DELTA = 40;
  let prev = 0;
  (function loop(now) {
  	let t = (Math.min(now - prev, MAX_DELTA) / 1000);
    prev = now;

    let dx = keys[RIGHT] - keys[LEFT];
    let dy = keys[DOWN] - keys[UP];

    x += dx * t * SPEED;
    y += dy * t * SPEED;

    let rx = mx - x;
    let ry = my - y;

    ctx.fillStyle = '#FFF1D8';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(Math.atan2(ry, rx));
  	ctx.drawImage(arrow, -arrow.width / 2, -arrow.height / 2);
    ctx.restore();

    window.requestAnimationFrame(loop);
  })(0);
})();

canvas.innerHTML