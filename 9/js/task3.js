getData();

function getData(){
	var array = [];

	do{
		arrValue = prompt('Введите значение ячейки массива. (Ок - ввести значение и перейти к следующей ячейке, Отмена - переход к набору искомого текста)','');
		if(arrValue == null) break;
		array[array.length] = arrValue;
	} while(true);

	var text = prompt('Искомый текст?','');

	document.write('<p class="task-result">Массив: [' + array + ']<br>Ключевое слово: ' + text + '<br>Результат поиска: ' + isText(text,array));
}

function isText(targetText,targetArray){
	for(var i = 0; i < targetArray.length; i++){
		if(targetArray[i] === targetText){
			return true;
		}
	}
	return false;
}