class Element {
	constructor(selector) {
		this.elem = document.querySelector(selector);
	}

	html(value){
		this.elem.innerHTML += value;
		return this;
	}

	attr(value){
		this.elem.classList.add(value);
		return this;
	}

	append(value){
		var newElem = document.createElement('span');
		newElem.innerHTML += value;
		this.elem.insertAdjacentElement('afterbegin',newElem);
		return this;
	}

	prepend(value){
		var newElem = document.createElement('span');
		newElem.innerHTML += value;
		this.elem.insertAdjacentElement('beforeend',newElem);
		return this;
	}
}

var elem = new Element('.target');