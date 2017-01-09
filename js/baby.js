var babyObj = function() {
	this.x;
	this.y;
	this.angle=0;
	this.babyTail = new Image();
	
	this.babyEyeTimer=0;
	this.babyEyeCount=0;
	this.babyInterval=1000;
	this.babyBodyTimer=0;
	this.babyBodyCount=0;
}

babyObj.prototype.init = function() {
	this.x = canWidth*0.5-60;
	this.y = canHeight*0.5;
	this.babyTail.src="./img/babyTail0.png";
}

babyObj.prototype.draw = function() {
	this.x=lerpDistance(mom.x,this.x,0.98);
	this.y=lerpDistance(mom.y,this.y,0.98);
	
	var deltaY=mom.y-this.y;
	var deltaX=mom.x-this.x;
	var beta=Math.atan2(deltaY,deltaX)+Math.PI;
	this.angle=lerpAngle(beta,this.angle,0.7);
	
	this.babyEyeTimer+=deltaTime;
	if (this.babyEyeTimer>this.babyInterval) {
		this.babyEyeCount=(this.babyEyeCount+1)%2;
		this.babyEyeTimer%=this.babyInterval;
		if(this.babyEyeCount==0){
			this.babyInterval=Math.random()*2000+2000;
		}else{
			this.babyInterval=200;
		}
	}
	this.babyBodyTimer+=deltaTime;
	if(this.babyBodyTimer>300){
		this.babyBodyTimer%=300;
		this.babyBodyCount+=1;
		if (this.babyBodyCount>19) {
			this.babyBodyCount=19;
			data.gameOver=true;
		}
	}
	cantxt1.save();
	cantxt1.translate(this.x, this.y);
	cantxt1.rotate(this.angle);
	
	cantxt1.drawImage(babyBodys[this.babyBodyCount], -babyBodys[this.babyBodyCount].width * 0.5, -babyBodys[this.babyBodyCount].height * 0.5);
	cantxt1.drawImage(this.babyTail, -this.babyTail.width * 0.5+25 , -this.babyTail.height * 0.5);
	cantxt1.drawImage(babyEyes[this.babyEyeCount], -babyEyes[this.babyEyeCount].width * 0.5, -babyEyes[this.babyEyeCount].height * 0.5);
	cantxt1.restore();
}