var obj = {
	doFunction: doFunction,
	clear: clear,
	copy: copy
};

function doFunction(fn,x,y){
	var result;
	this.result = fn(x,y);
	return this;
}

function clear(){
	this.result = 0;
	return this;
}

function copy(buffer){
	this[buffer] = null;
	return this;
}

/* function example for doFunction */

function sum(a,b){
	return a + b;
}