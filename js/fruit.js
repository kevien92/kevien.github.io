var fruitObj = function() {
	this.alive = [];
	this.x = [];
	this.y = [];
	this.l = [];
	this.spd = [];
	this.fruitType=[];
	this.aneNo=[];
	this.orange = new Image();
	this.blue = new Image();
}

fruitObj.prototype.num = 20;

fruitObj.prototype.init = function() {
	this.orange.src = "./img/fruit.png";
	this.blue.src = "./img/blue.png";
	for(var i = 0; i < this.num; i++) {
		this.alive[i] = true;
		this.x[i] = 0;
		this.y[i] = 0;
		this.l[i] = 0;
		this.aneNo[i]=0;
		this.spd[i] = Math.random() * 0.017 + 0.005;
		this.fruitType[i]="";
		this.born(i);
	}
}

fruitObj.prototype.draw = function() {
	for(var i = 0; i < this.num; i++) {
		if(this.alive[i]) {
			if(this.l[i] <= 14) {
				this.x[i]=ane.headx[this.aneNo[i]];
				this.y[i]=ane.heady[this.aneNo[i]];
				this.l[i] += this.spd[i] * deltaTime;
				cantxt2.drawImage(this.fruitType[i]=="orange"?this.orange:this.blue, this.x[i] - this.l[i] * 0.5,
				this.y[i] - this.l[i] * 0.5, this.l[i], this.l[i]);
			} else {
				this.y[i] -= this.spd[i] *7* deltaTime;
				cantxt2.drawImage(this.fruitType[i]=="orange"?this.orange:this.blue, this.x[i] - this.l[i] * 0.5,
				this.y[i] - this.l[i] * 0.5, this.l[i], this.l[i]);
			}
			if(this.y[i] < 10) {
				this.alive[i] = false;
			}
		}

	}
}

fruitObj.prototype.born = function(i) {
	this.aneNo[i] = Math.floor(Math.random() * ane.num);
	this.l[i] = 0;
	this.alive[i]=true;
	if (Math.random()<0.5) {
		this.fruitType[i]="blue";
	} else{
		this.fruitType[i]="orange";
	}
}

fruitObj.prototype.dead=function(i){
	this.alive[i]=false;
}

function fruitMonitor() {
	var num = 0;
	for(var i = 0; i < fruit.num; i++) {
		if(fruit.alive[i]) num++;
	}
	if(num < 15) {
		sendFruit();
		return;
	}
}

function sendFruit() {
	for(var i = 0; i < fruit.num; i++) {
		if(!fruit.alive[i]) {
			fruit.born(i);
			return;
		}
	}
}

fruitObj.prototype.update = function() {
	var num = 0;
	for(var i = 0; i < this.num; i++) {
		if(this.alive) num++;
	}

}