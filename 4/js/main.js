A = [];
B = [];

do{
	length = +prompt('Укажите длину массива А','');
	error = length <= 0;
} while(error);

A.length = length;

// array randomization + detecting prime numbers

nextPrime:
for (i = 0; i < A.length; i++ ){
	A[i] = Math.floor(Math.random() * 30 + 2);

	for(n = A[i] - 1; n > 1; n--){
		if ( A[i] % n == 0 || A[i] == 0 ) continue nextPrime;
	}

	B[B.length] = A[i];
}

// detecting max number

for(i = 0, max = 0; i < A.length; i++){
	if( max < A[i] ) max = A[i];
}

// detecting min number

for(i = 0, min = max; i < A.length; i++){
	if( min > A[i] ) min = A[i];
}

alert('На основе случайного массива А [ ' + A + ' ] с длиной A.length = ' + length + ' создан массив простых чисел B [ ' + B + ' ]. Максимальное значение ячейки массива А(max) = ' + max + ', минимальное А(min) = ' + min + '.')

// Transfering cells data between min and max from array A to array B

OldB = B.join(',');

minIndex = (A.indexOf(min));
maxIndex = (A.indexOf(max));

if(minIndex < maxIndex){
	for( i = minIndex + 1; i < maxIndex; i++){
		B.push(A[i]);
	}
} else {
	for( i = maxIndex + 1; i < minIndex; i++){
		B.push(A[i]);
	}
}

alert('Ячейки массива А [ '+ A +' ], лежащие между максимальным А(max) = ' + max + ' и минимальным А(min) = ' + min + ' значением скопированы в массив B [ ' + OldB + ' ], результат [' + B + ']');

// reshuffle min and max values of array A

OldA = A.join(',');

A[minIndex] = max;
A[maxIndex] = min;

alert('Произведена перестановка минимального и максимального значения массива A [ ' + OldA + ' ] результат - [ ' + A + ' ]');

//reverse array A

OldA = A.join(',');

for( i = A.length - 1, k = 0; i >= 0; i--, k++){
	A.push(A[i]);
	A.splice(i, 1);
}

// detecting difference > 5 between min value and others

for(i = 0, k = 0; i < A.length; i++){
	if( A[i] - min >= 5 ) k++;
}

alert('На основе случайного массива A [ '+ OldA + ' ] получен реверс следующего вида: A(rev) [ ' + A + ' ]. Количество значений, отличающихся от минимального более чем на 5 A(dif) = ' + k);




