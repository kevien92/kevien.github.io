var dataObj = function() {
	this.fruitNum = 0;
	this.double = 1;
	this.score = 0;
	this.gameOver = false;
	this.alpha = 0;
}

dataObj.prototype.reset = function() {
	this.fruitNum = 0;
	this.double = 1;
	mom.momBodyCount = 0;
}

dataObj.prototype.draw = function() {
	var w = can1.width;
	var h = can1.height;
	cantxt1.fillText("SCORE:  " + this.score, w * 0.5, 80);
	if ((this.score>=100&&this.score<110)&&(!this.gameOver)) {
		this.alpha += deltaTime * 0.0005;
		if(this.alpha > 1) this.alpha = 1;
		cantxt1.fillStyle = "rgba(255,255,255," + this.alpha + ")";
		cantxt1.fillText("你也太无聊了吧！", w * 0.5, h * 0.5-150);
	}
	if(this.gameOver) {
		this.alpha += deltaTime * 0.0005;
		if(this.alpha > 1) this.alpha = 1;
		cantxt1.fillStyle = "rgba(255,255,255," + this.alpha + ")";
		cantxt1.fillText("GAME OVER", w * 0.5, h * 0.5);
	}
}

dataObj.prototype.addScore = function() {
	this.score += this.fruitNum * this.double;
	this.double = 1;
	this.fruitNum = 0;
}