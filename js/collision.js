function momFruitCollision() {
	if(data.gameOver)return;
	for(var i = 0; i < fruit.num; i++) {
		if(fruit.alive[i]) {
			var l = calLength2(fruit.x[i], fruit.y[i], mom.x, mom.y);
			if(l < 900) {
				fruit.dead(i);
				mom.momBodyCount++;
				if(mom.momBodyCount > 7) mom.momBodyCount = 7;
				data.fruitNum++;
				if(fruit.fruitType[i] == "blue") {
					data.double = 2;
				}
				wave.born(fruit.x[i],fruit.y[i]);
			}
		}
	}
}

function momBabyCollision() {
	if (data.gameOver)return; 
	var l = calLength2(mom.x, mom.y, baby.x, baby.y);
	if(data.fruitNum>0&&l < 900) {
		baby.babyBodyCount = 0;
		data.addScore();
		data.reset();
		halo.born(baby.x,baby.y);
	}
}