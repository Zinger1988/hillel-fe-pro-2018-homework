// request
// XMLHttpRequest

window.onload = function () {

	var button = document.querySelector('.getArray');

	button.addEventListener('clcik', function(event){
		getArray('GET', 'data.json');
	});

	function getArray(type, source){

		var request = new XMLHttpRequest(),
		array1;

		request.open(type, source, true);
		request.send();

		request.onreadystatechange = function() {
			if (request.readyState != 4) {
				return;
			}
			
			array1 = JSON.parse(request.responseText);
			console.log(array1);
		};
	}

};
