x = prompt('Число X','');
y = prompt('Число Y','');
action = prompt('Действие (sum, div, mul, power)','');

alert(getFunction(getNumber(x),getNumber(y),action));

function getNumber(value){
	return value == ''? value = undefined: value = +value;
}

function getFunction(x,y,func){

	if (x && y){
		return eval(action)(x,y);
	} else {
		for (var i = 0; i < arguments.length; i++){
			if ( !isNaN(arguments[i]) ) return fact(arguments[i]);
		}
	}

	function power(){
		for(var i = 1, res = x; i < y; i++){
			res *= x;
		}
		return x + '^' + y + ' = ' + res;
	}

	function mul(){
		return x + ' * ' + y + ' = ' + (x * y);
	}

	function div(){
		return x + ' / ' + y + ' = ' + (x / y);
	}

	function sum(){
		return x + ' + ' + y + ' = ' + (x + y);
	}

	function fact(x){
		for(var i = x, res = 1; i >= 1; i--){
			res *= i;
		}
		return '!' + x + '=' + res;
	}
	
}





