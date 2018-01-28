// x = number('X');
// y = number('Y');

// znak = znak();
// alert(doMath(x, znak, y));

// function number(name){
// 	do {
// 		var value = prompt('Введите значение числа' + name,'');
// 	} while(isNaN(value) || value == '' || typeof value == 'object');
// 	return +value;
// }

// function znak(){
// 	do {
// 		var value = prompt('Введите знак','');
// 	} while( !(value == '+' || '-' || '*' || '/' || '%' || '^') || value == '' || typeof value == 'object');
// 	return value;
// }

// function doMath(x,znak,y){
// 	var math = 0;
// 	switch(znak) {
// 		case '+':
// 		math = x + y;
// 		break;

// 		case '-':
// 		math = x - y;
// 		break;

// 		case '*':
// 		math = x * y;
// 		break;

// 		case '/':
// 		math = x / y;
// 		break;

// 		case '%':
// 		math = x % y;
// 		break;

// 		case '^':
// 		math = x ^ y;
// 		break;
// 	}
// 	return math
// }

var x = +prompt('X',''),
y = +prompt('Y',''),
znak = prompt('znak','');

var math = new Function( 'x, znak, y', 'return ' + x + znak + y);

alert(math());