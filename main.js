
var canvas = new fabric.Canvas('myCanvas');

ballY = 0
ballX = 0

holeY = 400
holeX = 800

blockImageWidth = 5;
blockImageHeight = 5;

function loadImg() {
	fabric.Image.fromURL("golf-h.png", function (img) {
		hole_obj = img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top: holeY,
			left: holeX
		});
		canvas.add(hole_obj)
	})
	newImage();
}

function newImage() {
	fabric.Image.fromURL("ball.png", function (img) {
		ball_obj = img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
			top: ballY,
			left: ballX
		});
		canvas.add(ball_obj)
	})
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if (ballX == holeX & ballY == holeY) {
		canvas.remove(ball_obj)
		document.getElementById("hd3").textContent = "VOCÊ ATINGIU O OBJETIVO!!!";
		document.getElementById("myCanvas").style.borderColor ="red";
	}

	if (keyPressed == '38') {
		up();
		console.log("up");
	}
	else if (keyPressed == '40') {
		down();
		console.log("down");
	}
	else if (keyPressed == '37') {
		left();
		console.log("left");
	}
	else if (keyPressed == '39') {
		right();
		console.log("right");
	}
}

function up() {
	if (ballY <= 500) {
		ballY = ballY - blockImageHeight;
		console.log("altura da imagem do bloco t= " + blockImageHeight)
		console.log("quando tecla baixo é pressionado x = " + ballX + "Y= " + ballY)
		canvas.remove(ball_obj)
		newImage()
	}
}

function down() {
	if (ballY <= 500) {
		ballY = ballY + blockImageHeight;
		console.log("altura da imagem do bloco t= " + blockImageHeight)
		console.log("quando tecla baixo é pressionado x = " + ballX + "Y= " + ballY)
		canvas.remove(ball_obj)
		newImage()
	}
}

function left() {
	if (ballX > 5) {
		ballX = ballX - blockImageHeight;
		console.log("altura da imagem do bloco t= " + blockImageHeight)
		console.log("quando tecla baixo é pressionado x = " + ballX + "Y= " + ballY)
		canvas.remove(ball_obj)
		newImage()

	}
}
function right() {
	if (ballX <= 1050) {
		ballX = ballX + blockImageHeight;
		console.log("altura da imagem do bloco t= " + blockImageHeight)
		console.log("quando tecla baixo é pressionado x = " + ballX + "Y= " + ballY)
		canvas.remove(ball_obj)
		newImage()
	}
}


