A = [1,13,1];
B = [2,24,2]

console.log(getBigArr(A, B));

function getBigArr(arrA , arrB){

	calcSum = function(arr) {
		for(var i = 0, sum = 0; i <arr.length; i++){
			sum += arr[i];
		}
		return sum;
	}

	if(calcSum(arrA) > calcSum(arrB)){
		return arrA
	} else {
		return arrB
	}

	return calcSum(arrA) > calcSum(arrB) ? arrA : arrB;

}