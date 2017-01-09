var waveObj = function() {
	this.x = [];
	this.y = [];
	this.alive = [];
	this.r = [];
}

waveObj.prototype.num = 10;

waveObj.prototype.init = function() {
	for(var i = 0; i < this.num; i++) {
		this.x[i]=0;
		this.y[i]=0;
		this.alive[i] = false;
		this.r[i] = 0;
	}
}

waveObj.prototype.draw = function() {
	cantxt1.save();
	cantxt1.lineWidth = 2;
	cantxt1.shadowBlur = 50;
	cantxt1.shadowColor = "white";
	for(var i = 0; i < this.num; i++) {
		if(this.alive[i]) {
			this.r[i] += deltaTime * 0.05;
			if(this.r[i] > 50) {
				this.alive[i] = false;
				break;
			}
			var alpha = 1 - this.r[i] / 50;
			cantxt1.beginPath();
			cantxt1.arc(this.x[i], this.y[i], this.r[i], 0, Math.PI * 2);
			cantxt1.closePath();
			cantxt1.strokeStyle = "rgba(255,255,255," + alpha + ")";
			cantxt1.stroke();
		}
	}
	cantxt1.restore();
}

waveObj.prototype.born = function(x, y) {
	for(var i = 0; i < this.num; i++) {
		if(!this.alive[i]) {
			this.alive[i] = true;
			this.r[i] = 20;
			this.x[i] = x;
			this.y[i] = y;
			return;
		}
	}
}