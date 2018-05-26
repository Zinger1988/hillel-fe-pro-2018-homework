window.onload = function() {

	var range = document.querySelector('#range'),
			text = document.querySelector('#value'),
			scale = document.querySelector('#scale .value'),
			comission = document.querySelector('#scale .comission');

	// range
	range.addEventListener('input', function(event){
		var currentValue = range.value;

		text.value = currentValue;
		scale.style.height = currentValue + 'px';
		getComission(currentValue);
	});

	// input
	text.addEventListener('input', function(event){
		var currentValue = text.value;

		currentValue = currentValue > parseInt(range.max)?
		parseInt(range.max):
		currentValue;

		range.value = currentValue;
		scale.style.height = currentValue + 'px';
		getComission(currentValue);
	});

	// comission
	function getComission(value){
		comission.style.bottom = value + 'px';
		if(value < 20){
			comission.style.height = value * 0.02 + 'px';
		} else if (value < 50){
			comission.style.height = value * 0.04 + 'px';
		} else if (value < 75){
			comission.style.height = value * 0.06 + 'px';
		} else if (value > 75){
			comission.style.height = value * 0.08 + 'px';
		}
	}

};


