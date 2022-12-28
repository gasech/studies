function nestedAdd(arr){
  let sum = 0;

    for(let i = 0; i < arr.length; i++){
      if(Array.isArray(arr[i])){
        sum = sum + nestedAdd(arr[i])
      } else {
        sum = sum + arr[i];
      }
    } 
  
  return sum;
}

function factorial(n) {
  if(n == 1) return n;
  return n * factorial(n - 1);
}

function testNestedAdd(callback){
  // Test 1
  if(callback([1, 2, 3]) == 6) {
    console.log("Test 1 Passed!");
  }

  // Test 2
  if(callback([1, [2], 3]) == 6) {
    console.log("Test 2 Passed!");
  }

  // Test 3
  if(callback([[[[[[[[[5]]]]]]]]]) == 5) {
    console.log("Test 3 Passed!");
  }

  // Test 4
  if(callback([10, [12, 14, [1], [16, [20]]], 10, 11]) == 94) {
    console.log("Test 4 Passed!");
  }
}

console.log(factorial(6));
testNestedAdd(nestedAdd);
