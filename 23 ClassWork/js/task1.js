window.onload = function() {

	var squareList = document.querySelectorAll('.square-item');

	for(var i = 0; i < squareList.length; i++){
		squareList[i].addEventListener('click', function(event){
				this.classList.toggle('active');
		});
	}

};