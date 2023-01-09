function BinarySearch(arr, id) {
  let min = 0;
  let max = arr.length - 1;
  let index;

  while (min <= max) {
    index = Math.floor((min + max) / 2);
    if (arr[index] == id) return arr[index];

    if (arr[index] < id) {
      min = index + 1;
    } else {
      max = index - 1;
    }
  }

  return false;
}

function testSearch(callback) {
  const arr = [2, 7, 10, 12, 15, 20]

  console.log(callback(arr, 2) == 2 ? "Test 1 Passed." : "Test 1 not passed.")
  console.log(callback(arr, 15) == 15 ? "Test 2 Passed." : "Test 2 not passed.")
  console.log(callback(arr, 20) == 20 ? "Test 3 Passed." : "Test 3 not passed.")
  console.log(callback(arr, 11) == false ? "Test 4 Passed." : "Test 4 not passed.")
}

testSearch(BinarySearch);
