window.onload = function() {

	var squareList = document.querySelectorAll('.square-item'),
			speed = document.querySelector('#speed');

	for(var i = 0; i < squareList.length; i++){
		squareList[i].addEventListener('click', function(event){
			this.style.transitionDuration = parseInt(speed.value) / 1000 + 's';
			this.style.top === ''?
			this.style.top = '100%':
			this.style.top = '';
		});
	}

};