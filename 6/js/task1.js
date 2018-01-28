A = new Array(getLength('внешнего массива А', '0'));

for( var i = 0; i < A.length; i++){

	A[i] = new Array(getLength('внутреннего массива B', i));

	for( var j = 0; j < A[i].length; j++){
		A[i][j] = getRand(0, 10);
		document.write(A[i][j] + '  ')
	}

	document.write('<br>')
}

// Arrays legth setting
function getLength(name, index){
	do{
		var value = +prompt('Задайте длину ' + name + index,'');
	} while ( value < 1 );
	return value
}

// Math random
function getRand(min, max){
	return Math.floor(Math.random() * (max - min) + min);
}

// A = [new Array(5), new Array(5), new Array(5), new Array(5)];

// getArray(A);

// function getArray(Arr){
// 	for(var i = 0; i < Arr.length; i++){
// 		for( var j = 0; j < Arr[i].length; j++){
// 			Arr[i][j] = getRand(0, 9);
// 			document.write(Arr[i][j] + ' ');
// 		}
// 		document.write('<br>');
// 	}
// }