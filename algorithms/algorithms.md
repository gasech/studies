# Algorithm Analysis

## Big O Time Complexity
It's a method used to measure how efficient is an algorithm without getting into too much details, if you don't know how it works you can't judge if your algorithm is getting faster or slower.

> In industry (and therefore in interviews), people seem to have merged Big $\theta$ (Theta) and Big O together. Industry's meaning of Big O is closer to what academics mean by $\theta$.

Think of the O as a vacuum that sucks in all the unimportant information and just leaves you with the important stuff. 

Say we have the equation $3x^2 + x + 1$. If our input is 5, the first term will be 75, the second term will be 5, and the third will be 1.

> A "term" in mathematics just means one piece of the equation (normally separated by + or - signs). In $3x^2 + x + 1$, $3x²$ is the first term, $x$ is the second, and $1$ is the third.

In other words, most of the piece of the pie comes from the first term, to the point we can just ignore the other terms. If we plug in huge numbers, it becomes even more apparent. IE if we do 5,000,000, the first term is 75,000,000,000,000, the second is 5,000,000, and the last 1. A huge gap.

We ignore the little parts and concentrate on the big parts. Keeping with $3x² + x + 1$, the Big O for this equation would be O(n²) where O is just absorbing all the other fluff (including the factor on the biggest term.) Just grab the biggest term.


**Example:**
```javascript
function findNumber(nums, value){
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] == value) return true;
  }

  return false;
}
```

This code is $n + 1$ because it has a loop that depends on the quantity of entries on input and also has some commands that doesn't not depend of input.

Ignore the $+ 1$ because it's not relevant close to $n$, now we are left with O(n), which is the Big O of this algorithm.

**Example 2:**
```javascript
function combineAndPrintNums(nums){
  let combinedNums = [];

  for(let i = 0; i < nums.length; i++){
    for(let j = 0; j < nums.length; j++){
      combinedNums.push(nums[i] + nums[j]);
    }
  }

  for(let i = 0; i < combinedNums.length; i++){
    console.log(combindNums[i]);
  }
}
```
Now, this code is $n^2 + n + 1$, we just ignore the smaller terms... The big O is O($n^2$)

The time of the algorithm is greatly affected depending on the input. Here we can see a graphical example.

<img alt="Graph showing different algorithm performance by time" src="https://droidtechknow.com/programming/algorithms/big-o-notation/images/big-o-notation.jpg" width="500"/>

## Spatial Complexity
Spatial Complexity is the amount of space (e.g. how much RAM or disk space) an algorithm needs to complete.

One space complexity algorithm isn't necessarily better than the other. And very frequently you need to make the trade off of computational complexity vs spatial. Some algorithms eat a lot of memory but go fast and there are lots that eat zero memory but go slow. It just depends on what your needs are.

### Linear
Let's say we have an algorithm that for every item in the array, it needs to create another array in the process of sorting it. So for an array of length 10, our algorithm will create 10 arrays. For an array of 100, it'd create 100 extra arrays. This would be O(n) in terms of its spatial complexity.

### Logarithmic
What about another for every item in the array, it needed to create a diminishing amount of extra arrays. For example: for an array of length 10, it'd create 7 arrays. For an array of 100, it'd create 12 arrays. For an array of 1000, it'd created 20 arrays. This would be O(log n).

### Constant
What if we didn't create any extra arrays when we did our algorithm? We just used the same space we were given when we first started. Or if we created just 10 arrays, no matter how long the array is? This would be O(1) since it's constant no matter what. Its spatial need don't increase with longer arrays.

### Quadratic
Let's say we input a array into our algorithm that contains 10 elements.
If we create exact 10 (length of the input array) extra arrays for each element, than that would be an example of a quadratic spatial time complexity, O(n$^2$).

# Iterative Sorts

## Bubble Sort

![Bubble Sort Graphical Example](https://upload.wikimedia.org/wikipedia/commons/c/c8/Bubble-sort-example-300px.gif) 

Normally Bubble Sort is not used in real life scenarios due to how it scales with larger amounts of data, but is a good teaching algorithm.

The algorithms pops up the numbers to the top, just like a bubble (that's a good way of reminding how it works).

* The algorithm loops through the list and swaps numbers if they are larger than the next.
* If did not swap items, your list is sorted.
* If you swapped items, then you have to loop again and again, until no swaps happens.


### Step-by-step example
```
[1, 5, 4, 2, 3]

Are 1 and 5 out of order? No.
Are 5 and 4 out of order? Yes. Swap.

[1, 4, 5, 2, 3]

Are 5 and 2 out of order? Yes. Swap.

[1, 4, 2, 5, 3]

Are 5 and 3 out of order? Yes. Swap.

[1, 4, 2, 3, 5]

End of the array, did we swap anything? Yes. Loop again.
Are 1 and 4 out of order? No.
Are 4 and 2 out of order? Yes. Swap.

[1, 2, 4, 3, 5]

Are 4 and 3 out of order? Yes. Swap.

[1, 2, 3, 4, 5]

Are 4 and 5 out of order? No.
End of the array, did we swap anything? Yes. Loop again.
Are 1 and 2 out of order? No.
Are 2 and 3 out of order? No.
Are 3 and 4 out of order? No.
Are 4 and 5 out of order? No.
End of the array, did we swap anything? No. List is sorted.
```

### JavaScript Code Example

```javascript
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
```

### Best, worst, and average cases
The best case scenario of this sorting algorithm should be a sorted list, since all the numbers are already sorted, no swaps happen, so one iteration is enough, O(n).

The worst case scenario of this is a reversed sorted list, since you have to iterate for every swap, O(n$^2$)

Average case looks like O(log n) since we are making less swaps then the length of the input, but if you have a larger set of data, it's not gonna be any different than O(n$^2$).

### Spatial Complexity
We don't create any extra array using this algorithm, so that would be constant O(1).

## Insertion Sort

![Insertion Sort Graphical Example](https://upload.wikimedia.org/wikipedia/commons/0/0f/Insertion-sort-example-300px.gif) 

This algorithm stars at index 1 (assuming we are starting at 0), compares the index with the left part of the array and inserts it in the right place.

### Step-by-step example
```
[3, 2, 5, 4, 1]

    ↓
[3, 2, 5, 4, 1] // the ↓ is the number we're looking to insert, everything before is sorted

Is 2 larger than 3? No. Move 3 to the right.
Beginning of list, insert 2 at index 0.

       ↓
[2, 3, 5, 4, 1]

Is 5 larger than 3? Yes.
Insert after 3 (it's already there so it doesn't move)

          ↓
[2, 3, 5, 4, 1]

Is 4 larger than 5? No. Move 5 to the right.
Is 4 larger than 3? Yes.
Insert after 3 at index 2.

             ↓
[2, 3, 4, 5, 1]

Is 1 larger than 5? No. Move 5 to the right.
Is 1 larger than 4? No. Move 4 to the right.
Is 1 larger than 3? No. Move 3 to the right.
Is 1 larger than 2? No. Move 2 to the right.
Beginning of list, insert 1 at index 0

[1, 2, 3, 4, 5]

Reached end of list, list is sorted.
```

### JavaScript Code Example
```javascript
function insertionSort(nums) {
  for (let i = 1; i < nums.length; i++) {
    let numberToInsert = nums[i];
    let j;

    for (j = i - 1; nums[j] > numberToInsert && j >= 0; j--) {
      nums[j + 1] = nums[j];
    }

    nums[j + 1] = numberToInsert;
  }
  return nums;
}
```

### Best, worst, and average cases
The best case input is an array that is already sorted. In this case insertion sort has a linear running time O(n).

The simplest worst case input is an array sorted in reverse order, resulting in O(n$^2$).

The average case is also quadratic O(n$^2$), which makes insertion sort impractical for sorting large arrays. However, insertion sort is one of the fastest algorithms for sorting very small arrays, even faster than quicksort. 

### Spatial Complexity
Insertion Sort does not create any extra array, so it's constant time O(1).

# Recursive Sorts

## Merge Sort

### Best, worst, and average cases

### Spatial Complexity

## Quick Sort

### Best, worst, and average cases

### Spatial Complexity

# Non-Comparison Sorts

## Radix Sort

