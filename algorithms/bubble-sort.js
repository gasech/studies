function BubbleSortRecursion(nums) {
  let swapped = false;

  for(let i = 0; i < nums.length - 1; i++){
    if(nums[i] > nums[i + 1]){
      let aux;
      aux = nums[i];
      nums[i] = nums[i + 1];
      nums[i + 1] = aux;
      swapped = true;
    }
  }
  
  if(swapped){
    nums = BubbleSortRecursion(nums);
  }

  return nums;
}

function BubbleSort(nums){
  let notSwapped = true;

  while(notSwapped){
    let swaps = 0;

    for(let i = 0; i < nums.length - 1; i++){
      if(nums[i] > nums[i + 1]){
        let aux;
        aux = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = aux;
        swaps++;
      }
    }

    if(swaps == 0){
      notSwapped = false;
    }
  }

  return nums;
}

function TestSorting(callback) {
  let nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  let sortedNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  if(JSON.stringify(callback(nums)) == JSON.stringify(sortedNums)){
    console.log("Test passed!");
  } else {
    console.log("Test not passed!")
  }
}

TestSorting(BubbleSort);
TestSorting(BubbleSortRecursion);
