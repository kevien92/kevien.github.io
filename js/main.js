var can1;
var can2;

var cantxt1;
var cantxt2;

var lastTime;
var deltaTime;

var bgPic;
var canWidth;
var canHeight;

var ane;
var fruit;
var mom;
var baby;
var data;
var wave;
var halo;

var mx;
var my;

var bigTails = [];
var bigEyes = [];
var babyEyes = [];
var babyBodys = [];
var momBodysOra = [];
var momBodysBlue = [];

var dust;
var dustPic=[];

document.body.onload = game;

function game() {
	init();
	lastTime = Date.now();
	deltaTime = 0;
	bgPic = new Image();
	bgPic.src = "./img/background.jpg";
	gameloop();
}

function init() {
	//获得canvas context

	can1 = document.getElementById("canvas1"); //在前面
	cantxt1 = can1.getContext('2d');
	can2 = document.getElementById("canvas2"); //在后面
	cantxt2 = can2.getContext('2d');
	can1.addEventListener("mousemove", onMouseMove, false);
	canWidth = can1.width;
	canHeight = can1.height;

	cantxt1.fillStyle = "white";
	cantxt1.textAlign = "center";
	cantxt1.font = "30px Verdana";
	cantxt1.shadowBlur=10;
	cantxt1.shadowColor="white";
	
	ane = new aneObj();
	ane.init();
	fruit = new fruitObj();
	fruit.init();
	mom = new momObj();
	mom.init();
	baby = new babyObj();
	baby.init();
	mx = canWidth * 0.5;
	my = canHeight * 0.5;

	data = new dataObj();
	for(var i = 0; i < 8; i++) {
		bigTails[i] = new Image();
		bigTails[i].src = "./img/bigTail" + i + ".png";
		if(i < 2) {
			bigEyes[i] = new Image();
			bigEyes[i].src = "./img/bigEye" + i + ".png";
			babyEyes[i] = new Image();
			babyEyes[i].src = "./img/babyEye" + i + ".png";
		}
		momBodysBlue[i] = new Image();
		momBodysBlue[i].src = "./img/bigSwimBlue" + i + ".png";
		momBodysOra[i] = new Image();
		momBodysOra[i].src = "./img/bigSwim" + i + ".png";
		if(i<7){
			dustPic[i]=new Image();
			dustPic[i].src="./img/dust"+i+".png";
		}
	}
	for(var i = 0; i < 20; i++) {
		babyBodys[i] = new Image();
		babyBodys[i].src = "./img/babyFade" + i + ".png";
	}
	
	
	wave=new waveObj();
	wave.init();
	halo=new haloObj();
	halo.init();
	dust=new dustObj();
	dust.init();
}

function gameloop() {
	requestAnimFrame(gameloop); //setInter,setTimeout
	var now = Date.now();
	deltaTime = now - lastTime;
	if(deltaTime >= 50) deltaTime = 50;
	lastTime = now;
	cantxt1.clearRect(0, 0, canWidth, canHeight);
	cantxt2.clearRect(0, 0, canWidth, canHeight);
	drawBackground();
	ane.draw();
	fruitMonitor();
	fruit.draw();
	mom.draw();
	momFruitCollision();
	momBabyCollision();
	baby.draw();
	data.draw();
	wave.draw();
	halo.draw();
	dust.draw();
}

function onMouseMove(e) {
	if(data.gameOver) return;
	if(e.offset || e.layerX) {
		mx = e.offsetX == undefined ? e.layerX : e.offsetX;
		my = e.offsetY == undefined ? e.layerY : e.offsetY;

	}
}