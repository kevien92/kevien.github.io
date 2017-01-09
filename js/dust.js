var dustObj=function(){
	this.x=[];
	this.y=[];
	this.amp=[];
	this.No=[];
	this.agle;
}

dustObj.prototype.num=30;

dustObj.prototype.init=function(){
	for (var i=0;i<this.num;i++) {
		this.x[i]=Math.random()*canWidth;
		this.y[i]=Math.random()*canHeight;
		this.amp[i]=20+Math.random()*15;
		this.No[i]=Math.floor(Math.random()*7);
	}
	this.agle=0;
}

dustObj.prototype.draw=function(){
	this.agle+=deltaTime*0.0005;
	for (var i=0;i<this.num;i++) {
		cantxt1.drawImage(dustPic[this.No[i]],this.x[i]+this.amp[i]*Math.sin(this.agle),this.y[i]);
	}
}
