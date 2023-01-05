function QuickSort(arr) {
  if (arr.length < 2) return arr;

  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] >= pivot) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }

  let sortedLeft = QuickSort(left);
  let sortedRight = QuickSort(right);

  return sortedLeft.concat(pivot, sortedRight);
}

function TestSorting(callback) {
  let nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  let sortedNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  let sortedTest = callback(nums);

  if (JSON.stringify(sortedTest) == JSON.stringify(sortedNums)) {
    console.log("Test passed!");
  } else {
    console.log("Test not passed! Output:");
    console.table(sortedTest);
  }
}

TestSorting(QuickSort);

