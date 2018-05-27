var list = [1, 2, 3]
function square(x) { return x * x; }
var squareGen = fmap(square, list);

function fmap(fun, arr){
  
  return (function* (fun, arr){
    for(let key of arr){
      yield fun(key);
    }
  })(fun, arr)

}

console.log(squareGen.next()); // 1
console.log(squareGen.next()); // 4
console.log(squareGen.next()); // 9
console.log(squareGen.next()); // undefined