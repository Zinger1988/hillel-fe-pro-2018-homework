// 1. Fibonacci sequence

n = +prompt('Какое количество знаков последовательности Фибоначчи вывести на экран?', '' );

char1 = 0;
char2 = char1 + 1;
sum = 0;
result = "";

for(i = 0; i < n; i++){
	sum = char1 + char2;
	result += sum + ', ';
	char1 = char2;
	char2 = sum;
}

alert(result);

// 2. Factorials

// 2.1 Checking numbers

do {
	a = +prompt ('Введите число A,', 0);
	b = +prompt ('Введите число B, которое больше А', 0);
	errorNum = ( a >= b || a == '' || b == '' || a == null || b == null );
	
	if( errorNum ){
		alert('Введены некорректные значения');
	}
} while ( errorNum );

// 2.2 Checking step

do {
	h = +prompt ('Длина шага', 0);
	errorStep = ( h <= 0 || h == '' || h == null );
	
	if( errorStep ){
		alert('Шаг должен быть больше 0');
	}
} while ( errorStep );

// 2.3 Calculating

for ( i = a, sum = 0; i <= b; i += h ) {
	for( j = 1, multi = 1; j <= i; j++ ){
		multi *= j;
	}
	sum += multi;
	alert('Факториал ' + i + ' равен ' + multi + '. Текущая сумма факториала ' + sum );
};