# Algorithms Notes

* English is not my first language, this should have some grammar mistakes.
* Not everything is necessarily correct I just use this to write my study notes. 
* All examples here are written in JavaScript.

## Big O
TL;DR It's a method used to measure how efficient is an algorithm, if you don't know how it works you can't judge if your algorithm is getting faster or slower.

Big O is not precise, and it's okay, since the objective


**Example:**
```javascript
let nums = [1,2,3,4];

for(let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}

```
This code is **x + 2** because it only has 1 loop, and 2 commands.

* Let's replace the **x** with **n** because of arbitrary reasons.
* We have **n + 2**.
* Ignore the **+ 2** because it's not relevant close to **n**
* Finished, now we are left with O(n), which is the Big O of this algorithm.

**Example 2:**
```javascript
let nums = [[1,2,3,4],[1,2,3,4]];

for(let i = 0; i < nums.length; i++){
  for(let j = 0; j < nums[i].length; j++){
    console.log(nums[j]);
  }
}
```

This code is **x2 + x

## Bubble Sort
* Normally not used in real life scenarios, because insertion sort is slightly better in every way.
* The algorithms pops up the numbers to the top, just like a bubble, that's why the name

## Insertion Sort
