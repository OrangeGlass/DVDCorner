let x;
let y;

let xSpeed;
let ySpeed;

let dvd;
let r, g, b;

let cornerHit;

let ms;

function preload() {
	dvd = loadImage("dvdLogo.png");
	
}

function pickColor() {
	r = random(100, 256);
	g = random(100, 256);
	b = random(100, 256);
	tint(r, g, b);
}

function setup() {
	fullscreen(true);
  createCanvas(screen.width, screen.height);
	x = random(width);
	y = random(height);
	xSpeed = 10;
	ySpeed = 10;
	r = random(100, 256);
	g = random(100, 256);
	b = random(100, 256);
	pickColor();
}

function draw() {
  background(0);
  
  if (cornerHit) {
    confetti();
  }
  if (millis() - ms > 500) {
    cornerHit = false;
  }
  
	//rect(x, y, 80, 60);
	//draw dvd logo
	image(dvd, x, y);
	
	dvd.width = 750/3;
	dvd.height = 350/3;
	
	x += xSpeed;
	y += ySpeed;
	
	checkBounce();
}
	
	function checkBounce() {
		
		wallsHit = 0;
			if (x + dvd.width >= width) {
			xSpeed *= -1;
			x = width - dvd.width;
			wallsHit ++;
		}
		else if (x <= 0) {
			xSpeed *= -1;
			x = 0;
			wallsHit ++;
		}

		if (y + dvd.height >= height) {
			ySpeed *= -1;
			y = height - dvd.height;
			wallsHit ++;
		}
		else if (y <= 0) {
			ySpeed *= -1;
			y = 0;
			wallsHit ++;
		}
		if (wallsHit >= 1) {
			pickColor();
			
		}
		if (wallsHit == 2) {
			cornerHit = true;
      ms = millis();
		}
}

function confetti() {
	var col = {
		r: 200,
		g: 5,
		b: 100,
		a: 180
	};
  
    var spot = {
    x: 50,
    y: 50
  };
  

	for(var i = 0; i <= 50; i++) {
		noStroke();
  	fill(col.r, col.g, col.b, col.a);
  	
    col.r = spot.x / 1.5 + 100;
		col.g = random(5, 200);
  	col.b = spot.y;
  	col.a = random(150, 180);
    
    spot.x = random(0, width);
		spot.y = random(0, height);
    
		ellipse(spot.x, spot.y, 20, 20);
	}
  
}

function mouseWheel(event) {
  var speedChange = event.delta / 100;
  if (xSpeed >= 0) {
    xSpeed += speedChange;
  }
  else if (xSpeed < 0) {
    xSpeed -= speedChange;
  }
  
  if (ySpeed >= 0) {
    ySpeed += speedChange;
  }
  else if (ySpeed < 0) {
    ySpeed -= speedChange;
  }
}















