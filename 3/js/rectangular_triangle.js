quantity = prompt('Количество строк прямоугольного треугольника N', '');
space = "&nbsp;";
star = "*";
line = "";

for( i = 1; i <= quantity; i++){

	if ( i != quantity ){

		for( s = 1; s <= i; s++){

			if( s == 1 || s == i ){
				line += star;
			} else {
				line += space;
			}

		}

		line += '<br>';

	} else {

		for( s = 1; s <= i; s++){
			line += star;
		}

	}
	
}

document.write(line);