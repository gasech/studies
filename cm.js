// Closure
function outer() {
  let counter = 0;

  function incrementCounter() {
    counter++;
    console.log(counter);
  }

  return incrementCounter;
}

// Each function in outer scope should have returned its own backpack with outer's counter inside
let f1 = outer();
f1(); // 1
f1(); // 2

// It's individual so it won't have the same counter.
let f2 = outer();
f2(); // 1
f2(); // 2

// Memoizing   

// You can actually take an advatange of this by making the function not be initialized more than once
function outer2() {
  let counter = 0;

  function incrementCounter() {
    if (counter === 0) {
      counter++;
      console.log(counter);
    } else {
      console.log("Can't be called more than one time")
    }
  }

  return incrementCounter;
}

// 
let g1 = outer2();
g1(); // 1
g1(); // Can't be called more than one time
