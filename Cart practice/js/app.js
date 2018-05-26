var product = require('./product.js');
var cart = require('./cart.js');
var storage = require('./storage.js');

window.onload = function() {

var productList = document.querySelectorAll('.cart-btn');

productList.forEach(function( item, i, productList ){
	item.addEventListener('click', function(){
		storage.set();
	});
});

console.dir(productList);
};