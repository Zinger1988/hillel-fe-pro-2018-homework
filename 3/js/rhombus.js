stringQuan = +prompt('Введите количество строк', '');

semiString = stringQuan / 2;

for( i = 0; i < semiString; i++ ){

		spaces = "";
		stars = "";

		for( j = 0; j < semiString - i - 1; j++ ) spaces += "&nbsp;";
		for ( s = 0; s <= i * 2; s++ ){
			if ( s != 0 && s != i * 2){
				stars += "&nbsp;";
			} else {
				stars += "*";
			}
		}
		document.write( spaces + stars + '<br>' )
	}

if ( stringQuan % 2 == 0 ) {

	for( i = 0; i < semiString; i++ ){

		spaces = "";
		stars = "";

		for( j = 0; j < i; j++ ) spaces += "&nbsp;";
		for ( s = 0; s <= (semiString - i - 1) * 2; s++ ){
			if ( s != 0 && s != (semiString - i - 1) * 2){
				stars += "&nbsp;";
			} else {
				stars += "*";
			}
		}
		document.write( spaces + stars + '<br>' )
	}

} else {

	for( i = 1; i <= semiString; i++ ){

		spaces = "";
		stars = "";

		for( j = 0; j < i; j++ ) spaces += "&nbsp;";
		for ( s = 0; s <= (semiString - i) * 2 - 1; s++ ){
			if ( s != 0 && s != (semiString - i) * 2 - 1){
				stars += "&nbsp;";
			} else {
				stars += "*";
			}
		}
		document.write( spaces + stars + '<br>' )
	}

}