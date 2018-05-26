function Level1(){}

Level1.prototype.render = function(){
	console.log(this.x);
};

Level1.prototype.clear = function(){
	this.x = 0;
};


function Level2(){}

Level2.prototype = Object.create(Level1.prototype);
Level2.prototype.constructor = Level2;

Level2.prototype.sum = function(){
	this.result = Math.pow((this.x + this.y),2);
	console.log(this.result);
};

Level2.prototype.div = function(){
	this.result = Math.pow((this.x / this.y),2);
	console.log(this.result);
};

Level2.prototype.mul = function(){
	this.result = Math.pow((this.x * this.y),2);
	console.log(this.result);
};

function Level3(){}

Level3.prototype = Object.create(Level2.prototype);
Level3.prototype.constructor = Level3;

Level3.prototype.reInit = function(){
	for(var i = 0; i < this.arr.length; i++){
		this.arr[i] = Math.floor(Math.random() * 50);
	}
};

Level3.prototype.arr = new Array(200);
Level3.prototype.reInit();


function Level4(x,y){
	this._x = x;
	this._y = y;
}

Level4.prototype = Object.create(Level3.prototype);
Level4.prototype.constructor = Level4;

var exemplar = new Level4(3,5);