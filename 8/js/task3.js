obj1 = {
	 x: 10,
	 y: 20
};

obj2 = {
	 y: 30,
	 z: 40
};

var flag = confirm('Задайте flag (Ok == true || Cancel == false)');
document.write('<p class="task-result"> Заданные объекты:<br>'  + toString(obj1) + '<br>' + toString(obj2) + '<br>flag = ' + flag + '<br>Результат: ' + toString(assignObjects(obj1,obj2, flag)) + '</p>');

function assignObjects(obj1,obj2){
	var newObj = {};
	for(var key in obj1){
		newObj[key] = obj1[key];
	}
	for(var key in obj2){
		if(newObj.hasOwnProperty(key) && flag){
			continue;
		} else {
			newObj[key] = obj2[key];
		}
	}
	return(newObj);
}

function toString(obj){
	var string = "";
	for(var key in obj){
		string += key + ':' + obj[key] + ' ';
	}
	return string;
}