n = prompt('Введите ширину N', '');
m = prompt('Введите высоту M', '');
fullLine = "";
line = "";

for(i = 1; i <= n; i++){
	fullLine += '*';
}

fullLine += '<br>';

for(i = 1; i <= m - 2; i++){
	
	for(s = 1; s <= n; s++){
		if( s == 1 || s == n ){
			line += '*';
		} else {
			line += '-';
		}
	}
	line += '<br>';
}

document.write(fullLine);
document.write(line);
document.write(fullLine);