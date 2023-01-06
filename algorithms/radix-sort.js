function getDigit(number, place, longestNumber) {
  const string = number.toString();
  const size = string.length;

  const mod = longestNumber - size;
  return string[place - mod] || 0;
}

function getLongestNumber(nums) {
  let longest = 0;

  for (let i = 0; i < nums.length; i++) {
    const currentLength = nums[i].toString().length;
    longest = currentLength > longest ? currentLength : longest;
  }

  return longest;
}

function RadixSort(nums) {
  const longestNumber = getLongestNumber(nums);

  const buckets = new Array(10).fill().map(() => [])

  for (let i = longestNumber - 1; i >= 0; i--) {
    while (nums.length) {
      const current = nums.shift();

      buckets[getDigit(current, i, longestNumber)].push(current);
    }

    for (let j = 0; j < 10; j++) {
      while (buckets[j].length) {
        nums.push(buckets[j].shift())
      }
    }
  }

  return nums;
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

TestSorting(RadixSort);

