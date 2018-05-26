var array = [];

do{
	var arrValue = prompt('Введите значение ячейки массива. (Ок - ввести значение и перейти к следующей ячейке, Отмена - переход к выбору функции)','');
	if(arrValue == null) {
		break;
	} else if( isNaN(+arrValue)){
		alert('Некорректное значение');
		continue;
	}
	array[array.length] = arrValue;
} while(true);

fnName = prompt('Выберите функцию (square || div || fact)','square');

console.log();

document.write('<p class="task-result">Массив: [' + array + ']<br>Функция: ' + fnName + '<br>Результат: [' + doFunction(fnName, array) + ']</p>');

function doFunction(fn, array){
	for(var i = 0, newArray = []; i < array.length; i++){
		newArray.push(eval(fn)(array[i]));
	}
	return newArray;
}

function square(x){
	return x *= x;
}

function div(x){
	return x /= x;
}

function fact(x){
	for(var i = 1, factResult = 1; i <= x; i++){
		factResult *= i;
	}
	return factResult;
}