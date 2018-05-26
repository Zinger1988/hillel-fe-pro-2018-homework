var model = {
	list: [
		{itemId: 'item1'},
		{itemId: 'item2'},
		{itemId: 'item3'},
		{itemId: 'item4'},
		{itemId: 'item5'}
	],
	cart: []
}

function addCart(itemId){
	var mod = this;
	this.list.forEach(function(item){
		if(item.itemId == itemId){
			mod.cart.push(item);
		}
	});
}

	// function moveItem(catalog, cart){
	// 	cart.forEach(function(item){
	// 		if(item.itemId == catalog){
	// 			return cart.splice(item, 1);
	// 		}
	// 	});
	// }


window.onload = function() {
	// var getCart = localStorage.getItem(items);

	// var itemList = [
	// 	{itemId: 'item1'},
	// 	{itemId: 'item2'},
	// 	{itemId: 'item3'},
	// 	{itemId: 'item4'},
	// 	{itemId: 'item5'}
	// ],
	// itemCard = [];

	// function addItem(item){
	// 	return itemCard.push(item);
	// }



	// itemList.forEach(function(item){
	// 	var newItem = document.createElement('article'),
	// 			toCart = document.createElement('button'),
	// 			catalogList = document.querySelector('.catalog-inner');

	// 			newItem.classList.add('catalog-item');
	// 			toCart.classList.add('cart-btn');
	// 			toCart.innerHTML = "Add to cart";


	// 	toCart.setAttribute('data-id', item.itemId);
	// 	catalogList.appendChild(newItem);
	// 	newItem.appendChild(toCart);

	// 	toCart.addEventListener('click', function(){
	// 		itemList.forEach(function(item){
	// 			if(item.itemId == toCart.dataset.id){
	// 				itemCard.push(item);
	// 				updateCart(itemCard);
	// 			}
	// 		});
	// 	});
	// });

};