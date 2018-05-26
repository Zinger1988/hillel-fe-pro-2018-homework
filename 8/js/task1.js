var array = [],
reqText;

do{
	var arrValue = prompt('Введите значение ячейки массива. (Ок - ввести значение и перейти к следующей ячейке, Отмена - переход к набору искомого текста)','');
	if(arrValue == null) break;
	array[array.length] = arrValue;
} while(true);

reqText = prompt('Искомый текст?','');

document.write('<p class="task-result">Массив: [' + array + ']<br>Ключевое слово: ' + reqText + '<br>Результат поиска: ' + isText(reqText,array) + '</p>');

function isText(targetText,inArray){
	for(var i = 0; i < inArray.length; i++){
		if(inArray[i] === targetText){
			return true;
		}
	}
	return false;
}