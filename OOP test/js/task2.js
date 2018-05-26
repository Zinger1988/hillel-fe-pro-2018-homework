// function SuperMath(x,y,znak){
// 	this._x = x;
// 	this._y = y;
// 	this._znak = znak;
// }

// SuperMath.prototype.doMath = function(){
// 	var operation = {
// 		'/': div,
// 		'*': mul,
// 		'-': sub,
// 		'+': sum,
// 		'%': divRem
// 	};

// 	for (var key in operation){
// 		if(this._znak !== key){
// 			continue;
// 		} else {
// 			return this.result = operation[this._znak](this._x,this._y);
// 		}
// 	}

// 	console.log('Указан некорректный оператор')

// 	function div(x,y){
// 		return x / y;
// 	}

// 	function mul(x,y){
// 		return x * y;
// 	}

// 	function sub(x,y){
// 		return x - y;
// 	}

// 	function sum(x,y){
// 		return x + y;
// 	}

// 	function divRem(x,y){
// 		return x % y;
// 	}

// };

// var exemplar = new SuperMath(2, 2, '+');

function SuperMath(x,y,znak){
	this._x = x;
	this._y = y;
	this._znak = znak;
}

// input -----------------------------------------

SuperMath.prototype.input = function(){

	this.__proto__.tempObject = {};

	for(var key in this){
		if(this.hasOwnProperty(key)){
			this.tempObject[key] = getValue(key);
		}
	}

	function getValue(propertyName){
		var result;
		if(propertyName !== '_znak'){
			do{
				result = prompt('Введите значение' + propertyName +':','');
			} while(isNaN(result));
			return result;
		} else {
			do{
				result = prompt('Введите знак' + propertyName +':','');
			} while(true);
		}
	}

	// function isCorrect(propertyName, propertyValue){
	// 	if(propertyName !== '_znak' && isNaN(propertyValue)){
	// 		return true;
	// 	} else {
	// 		alert(propertyName);
	// 	}
	// }

};

// checkObj -----------------------------------------

SuperMath.prototype.checkObj = function(){
	if(confirm('Мат. операция ' + this._x + this._znak + this._y + '. Продолжить?')){
		this.doMath();
	} else {
		this.input();
		this.doMath();
	}
};


// doMath -----------------------------------------

SuperMath.prototype.doMath = function(){
	var operation = {
		'/': div,
		'*': mul,
		'-': sub,
		'+': sum,
		'%': divRem
	};

	for (var key in operation){
		if(this._znak !== key){
			continue;
		} else {
			return this.result = operation[this._znak](this._x,this._y);
		}
	}

	console.log('Указан некорректный оператор')

	function div(x,y){
		return x / y;
	}

	function mul(x,y){
		return x * y;
	}

	function sub(x,y){
		return x - y;
	}

	function sum(x,y){
		return x + y;
	}

	function divRem(x,y){
		return x % y;
	}
};



var exemplar = new SuperMath(2, 2, '+');

exemplar.checkObj();