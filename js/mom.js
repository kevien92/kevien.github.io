var momObj = function() {
	this.x;
	this.y;
	this.angle = 0;
	this.bigBody = new Image();

	this.momTailTimer = 0;
	this.momTailCount = 0;

	this.momEyeTimer = 0;
	this.momEyeCount = 0;
	this.momInterval = 1000;

	this.momBodyCount = 0;
}

momObj.prototype.init = function() {
	this.x = can1.width * 0.5;
	this.y = can1.height * 0.5;
	this.bigBody.src = "./img/bigSwim0.png";
}

momObj.prototype.draw = function() {
	this.x = lerpDistance(mx, this.x, 0.97);
	this.y = lerpDistance(my, this.y, 0.97);

	var deltaY = my - this.y;
	var deltaX = mx - this.x;
	var beta = Math.atan2(deltaY, deltaX) + Math.PI;
	this.angle = lerpAngle(beta, this.angle, 0.7);

	this.momTailTimer += deltaTime;
	this.momEyeTimer += deltaTime;
	if(this.momTailTimer > 50) {
		this.momTailCount = (this.momTailCount + 1) % 8;
		this.momTailTimer %= 50;
	}

	if(this.momEyeTimer > this.momInterval) {
		this.momEyeCount = (this.momEyeCount + 1) % 2;
		this.momEyeTimer %= this.momInterval;
		if(this.momEyeCount == 0) {
			this.momInterval = Math.random() * 2000 + 2000;
		} else {
			this.momInterval = 200;
		}
	}

	cantxt1.save();
	cantxt1.translate(this.x, this.y);
	cantxt1.rotate(this.angle);
	var momBody = data.double == 2 ? momBodysBlue[this.momBodyCount] : momBodysOra[this.momBodyCount];
	cantxt1.drawImage(momBody, -momBody.width * 0.5, -momBody.height * 0.5);
	cantxt1.drawImage(bigTails[this.momTailCount], -bigTails[this.momTailCount].width * 0.5 + 30, -bigTails[this.momTailCount].height * 0.5);
	cantxt1.drawImage(bigEyes[this.momEyeCount], -bigEyes[this.momEyeCount].width * 0.5, -bigEyes[this.momEyeCount].height * 0.5);
	cantxt1.restore();
}