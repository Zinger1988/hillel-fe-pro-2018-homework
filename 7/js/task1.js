// Arrays center elements calculating
function getArr(){

	var arg = arguments,
	length = arguments.length,
	result = [],
	newArr = [];

	for(var i = 0; i < length; i++){

		if( arg[i].length % 2 == 0){
			newArr = arg[i].slice(arg[i].length/2 -1, 3);
		} else {
			newArr = arg[i].slice( Math.floor(arg[i].length/2), 2);
		}

		result = result.concat(newArr);
	}

	return result
}

document.write('Начальные массивы: [1,6,1], [1,2,3,1], [1,8,1], [1,2,4,1]. <br> Полученный массив: [' + getArr([1,6,1], [1,2,3,1], [1,8,1], [1,2,4,1]) + ']')