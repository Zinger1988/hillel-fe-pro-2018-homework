var radius, square, height, volume, error = '(некорректное значение)';

radius = prompt('Задайте радиус основания цилиндра', '');

if (radius == null || radius <= 0 || isNaN(radius) ) {
	alert(error);
	radius = square = height = volume = error
} else {
	square = Math.PI * Math.pow(radius, 2);
	height = prompt('Задайте высоту цилиндра', '');
	if (height == null || height <= 0 || isNaN(height)) {
		alert(error);
		height = volume = error
	} else {
		volume = square * height;
	}
}