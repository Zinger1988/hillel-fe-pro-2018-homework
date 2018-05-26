// var info = {
// 	adress: {
// 		city: 'Kiev',
// 		country: 'Ukraine'
// 	}
// };

// Object.defineProperty( info, 'update', {
// 	set: function(value){
// 		if(Array.isArray(value)) {
// 			this.adress.city = value[0];
// 			this.adress.country = value[1];
// 		} else {
// 			this.adress = Object.assign(this.adress, value);
// 		}
// 	}
// });

//-----------------------------

// var state = {
// 	_value: 250,
// 	lastModified: new Date(),
// };

// Object.defineProperty( state, 'value', {

// 	get: function(){
// 		return this._value;
// 	},

// 	set: function(value){
// 		this.lastModified = new Date();

// 		if(!this.log){
// 			this.log = [];
// 		}

// 		this.log.push({
// 			old_value: this._value,
// 			new_value: value
// 		});

// 		this._value = value;

// 	}
// });

var info = {
	_value: 'hello'
};

Object.defineProperty( info, 'str', {
	set: function (){
		if (typeof str == 'string'){
			this._value = str;
		} else {
			console.error('type mismatch');
		}
	}
});