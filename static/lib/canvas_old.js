var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight ;

var c = canvas.getContext('2d');

/*



var mouse = {
    x: undefined,
    y: undefined
};

var maxRadius = 40;
var minRadius = 4;

var colorArray = [
    "#483659",
    "#31223B",
    "#55ff44",
    "#11EBCB",
    "#11EBCB"
];

window.addEventListener('mousemove',
    function(event){
    mouse.x = event.x;
    mouse.y = event.y
    });

window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init()
});



function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

    this.draw = function(){
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2) ;
        c.strokeStyle = "black";
        c.stroke();
        c.fillStyle = this.color;
        c.fill()
    };

    this.update = function() {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius <0) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        //interactivity
        if (mouse.x - this.x < 50 && mouse.x - this.x > -50
            && mouse.y - this.y < 50 && mouse.y - this.y > -50
        ) {
            if (this.radius < maxRadius) {
                this.radius +=1;
            }
        } else if (this.radius > this.minRadius) {
            this.radius -=1;
        }

        this.draw = function() {

        }
    }
}



var circleArray = [];


function init() {
    circleArray = [];
    for (var i = 0; i < 800; i++) {
        var radius = Math.random() * 3 + 1;
        var x = Math.random() * (innerWidth - radius * 2) + radius;
        var y = Math.random() * (innerHeight - radius * 2) + radius;
        var dx = (Math.random() - 0.5) * 4;
        var dy = (Math.random() - 0.5) * 4 ;
        circleArray.push(new Circle(x, y, dx, dy, radius))
    }
}


function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0, innerWidth, innerHeight);

    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }

}
init();
animate();
*/
var angle = 60;
var hite = innerHeight *.55;
var halfBayse = (innerWidth*.4)/2;
var bayse = (innerWidth*.4);
var startx = innerWidth * .6 ;
var starty = innerHeight *.85;
var mouse = {
    x: undefined,
    y: undefined
};

c.beginPath();
c.moveTo(startx, starty);
c.lineTo(startx + halfBayse , (starty - hite) );
c.lineTo(startx + (bayse) , starty );
c.closePath();
c.strokeStyle = "black";
c.stroke();
c.fill();
var newx = Math.sqrt(Math.pow((bayse/2),2) + Math.pow((bayse/2), 2) - (2 *(bayse/2)*(bayse/2))* Math.cos(angle));
var newy = Math.sqrt(Math.pow(hite, 2) + Math.pow(hite, 2) - (2 * hite * hite) * Math.cos(angle));


/*

window.addEventListener('mousemove',
    function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    console.log(mouse);
    var opp = Math.abs(- mouse.x);
    var adjacent = Math.abs(innerHeight *.85 - mouse.y);
    var angle = Math.atan(opp, adjacent);
    var newx = Math.sqrt(Math.pow((bayse/2),2) + Math.pow((bayse/2), 2) - (2 *(bayse/2)*(bayse/2))* Math.cos(angle));
    var newy = Math.sqrt(Math.pow(hite, 2) + Math.pow(hite, 2) - (2 * hite * hite) * Math.cos(angle));
    triangleArray.push(new Triangle(newx, newy, 0,0, hite, bayse))
    });


function Triangle(x, y, dx, dy, hite, bayse){
    this.x = x;
    this.y = y;
    this.dx = dy;
    this.dy = dy;
    this.hite = hite;
    this.bayse = bayse;

    this.draw = function() {
        c.beginPath();
        c.moveTo(this.x, this.y);
        c.lineTo(this.x + (this.bayse/2) , (this.y - this.hite) );
        c.lineTo(this.x + (this.bayse) , this.y );
        c.closePath();
        c.strokeStyle = "black";
        c.stroke();
        c.fill();
    };

    /!*this.update = function() {
        var opp = Math.abs(this.x - mouse.x);
        var adjacent = Math.abs(this.y - mous.y);
        var angle = Math.atan(opp, adjacent);
        this.x = Math.sqrt(Math.pow((bayse/2),2) + Math.pow((bayse/2), 2) - (2 *(bayse/2)*(bayse/2))* Math.cos(angle));
        this.y = Math.sqrt(Math.pow(hite, 2) + Math.pow(hite, 2) - (2 * hite * hitw) * Math.cos(angle))
    }*!/

}

//t = new Triangle(startx, starty, 0, 0,hite, bayse);
//t.draw();

var newx = Math.sqrt(Math.pow((bayse/2),2) + Math.pow((bayse/2), 2) - (2 *(bayse/2)*(bayse/2))* Math.cos(angle));
var newy = Math.sqrt(Math.pow(hite, 2) + Math.pow(hite, 2) - (2 * hite * hite) * Math.cos(angle));
t = new Triangle(startx - newx, stary-newy, 0, 0,hite, bayse);
t.draw();
triangleArray = [];


c.font = '50px existencelight ';
c.fillStyle = "#c3cbff";
c.fillText("Bryan González", innerWidth *.6, innerHeight* .85);
*/

/*

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0, innerWidth, innerHeight);

    for (var i = 0; i < triangleArray.length; i++) {
        triangleArray[i].draw();
    }

}
//init();
animate();*/
