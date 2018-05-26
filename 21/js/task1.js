// var targetArr = [3,2,3,4,5,"str", false, true],
//     targetType = "boolean";

// function* gen(arr, type) {
//   var resArr = arr.filter( item => typeof item == type)
//   yield resArr;
// }

// for (let item of gen(targetArr, targetType)){
//   console.log(item)
// }


var list = [1, 2, 3]
function square(x) { return x * x; }
var squareGen = fmap(square, list);

function fmap(fun, arr){
  
  function* gen(fun, arr){
    for(let key of arr){
      yield fun(key);
    }
  }

  return gen(fun, arr)

}



console.log(squareGen.next()); // 1
console.log(squareGen.next()); // 4
console.log(squareGen.next()); // 9
console.log(squareGen.next()); // undefined