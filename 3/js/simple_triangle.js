stringQuan = +prompt('Введите количество строк', '');

for( i = 0; i < stringQuan; i++){

	space = "";
	star =""

	for( n = 0; n < stringQuan - i - 1; n++){
		space += "&nbsp;"
	}

	if ( i != stringQuan - 1){

		for( j = 0; j < i * 2 + 1; j++){
			if ( j == 0 || j == i * 2 ){
				star += "*"
			} else {
				star += "&nbsp;";
			}
		}
	} else {
		for( j = 0; j < i * 2 + 1; j++){
			star += "*";
		}
	}

		document.write(space + star + '<br>');
	}