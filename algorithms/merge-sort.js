function MergeSort(arr) {
  if(arr.length < 2) return arr;

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  const sortedLeft = MergeSort(left);
  const sortedRight = MergeSort(right);

  return Merge(sortedLeft, sortedRight);
}

function Merge(left, right) {
  const results = [];

  while(left.length && right.length){
    if(left[0] <= right[0]){
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  return results.concat(left, right);
}

function TestSorting(callback) {
  let nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  let sortedNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  let sortedTest = callback(nums);
  
  if(JSON.stringify(sortedTest) == JSON.stringify(sortedNums)){
    console.log("Test passed!");
  } else {
    console.log("Test not passed! Output:");
    console.table(sortedTest);
  }
}

TestSorting(MergeSort);


