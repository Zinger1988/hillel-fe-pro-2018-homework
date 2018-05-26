var characters = [
		{ 'name': 'barney', 'age': 36 },
		{ 'name': 'fred', 'age': 40 }
	];

console.log(pluck.call(characters, 'name'));

function pluck(val){
	return this.map(function(item){
		for(var key in item){
			if(key === val){
				return item[key];
			}
		}
	});
}