// function isEmpty(obj) {
// 	for( var key in obj){
// 		return false;
// 	} 
// 	return true;
// }

// var schedule = {};

// alert( isEmpty(schedule) );

// schedule["8:30"] = "подъём";

// alert( isEmpty(schedule) );

//--------------------------------------------------------

// var menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// multiplyNumeric(menu);

// function multiplyNumeric(obj){
// 	for(key in obj){
// 		if( !isNaN(obj[key])) obj[key] *= 2;
// 	}
// }

//--------------------------------------------------------

"use strict";

var salaries = {
  "Вася": 600,
  "Петя": 5600,
  "Даша": 350
};

var max = 0,
user = '';

for( name in salaries ){
	if(max < salaries[name]){
		max = salaries[name];
		user = name;
	}
}

alert('наибольшая ЗП у ' + user + ': ' + max);
