var aneObj=function(){
	this.rootx= [];
	this.headx=[];
	this.heady=[];
	this.agle=0;
	this.amp=[];
}
aneObj.prototype.num=50;
aneObj.prototype.init=function(){
	for (var i=0;i<this.num;i++) {
		this.rootx[i]=i*16+Math.random()*20;
		this.headx[i]=this.rootx[i];
		this.heady[i]=canHeight-200+Math.random()*50;
		this.amp[i]=10+Math.random()*50;
	}
}
aneObj.prototype.draw=function(){
	this.agle+=deltaTime*0.0005;
	cantxt2.save();
	cantxt2.globalAlpha=0.6
	cantxt2.lineWidth=20;
	cantxt2.lineCap="round"
	cantxt2.strokeStyle="#3b154e";
	for (var i=0;i<this.num;i++) {
		cantxt2.beginPath();
		cantxt2.moveTo(this.rootx[i],canHeight);
		this.headx[i]=this.rootx[i]+this.amp[i]*Math.sin(this.agle)
		cantxt2.quadraticCurveTo(this.rootx[i],canHeight-100,this.headx[i],this.heady[i]);
		cantxt2.stroke();
	}
	cantxt2.restore() ;
}
