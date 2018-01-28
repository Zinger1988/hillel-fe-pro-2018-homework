A = [1,2,3,4,5,6,7,8,9];
length = A.length;
OldA = A.join(',');

for ( i = 0; i < length; i++){

	if( i % 2 == 0){
		if (i < length - 1){
			A.push( A[i + 1]);
		}
		A.push(A[i]);
	};

};

A.splice(0, length);

alert( 'Старый массив A [ ' + OldA + ' ]. Преобразованный массив A [ ' + A + ' ]');

//----------------------------------------------------------------------------------------------

n = 10;
m = 20;
max = 0;
min = 0;

B = new Array(n);

for( i = 0; i < B.length; i++ ){
	B[i] = new Array(m);;
	}

for( i = 0; i < B.length; i++ ){
	for( j = 0, sum = 0; j < B[i].length; j++){
		B[i][j] = Math.floor(Math.random() * 10);
		sum += B[i][j];
		document.write(B[i][j] + '  ');
	}

	if ( max <= sum ){
		max = sum;
		rowMax = i;
		min = max;
	}

	document.write('<br> Сумма ряда: ' + sum + '<br>');
}
document.write('Наибольшее значение суммы ряда: ' + max + ' (Ряд №' + rowMax + ')');