var input = [1, 2, 3, 4, 5, 6];

isEven = function(x){
	return x % 2 == 0;
};

function filter(arr, func){
	return arr.filter(function(item){
		return func(item);
	});
}

console.log(filter(input, isEven));