class Element {
	constructor(selector) {
		this.target = document.querySelector(selector);
	}

	html(value){
		var newElem = document.createElement('span');
		newElem.innerHTML = ' ' + value;
		this.target.appendChild(newElem);
		return this;
	}

	attr(value){
		this.target.classList.add(value);
		return this.reload();
	}

	append(value){
		var newElem = document.createElement('span');
		newElem.innerHTML += value +  ' ';
		this.target.insertAdjacentElement('afterbegin',newElem);
		return this;
	}

	prepend(value){
		var newElem = document.createElement('span');
		newElem.innerHTML += ' ' + value;
		this.target.insertAdjacentElement('beforeend',newElem);
		return this;
	}

	reload(){
		this.target.innerHTML += ' class="' + this.target.className + '"';
		return this;
	}
}

var target = new Element('.target');