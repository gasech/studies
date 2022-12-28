function insertionSort(nums){
  for(let i = 1; i < nums.length; i++) {
    for(let j = i; j <= i && j >= 0; j--) {
      if(nums[j - 1] > nums[j]){
        let aux = nums[j];
        nums[j] = nums[j - 1];
        nums[j - 1] = aux;
      }
    }
  }

  return nums;
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

TestSorting(insertionSort);


