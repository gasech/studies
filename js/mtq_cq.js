// Defines display function
function display(data){
  console.log(data)
}

// Defines printHello function
function printHello(){
  console.log("Hello");
}

function blockFor300ms(){
  /* blocks js thread for 300ms */ 
}

// First we call setTimeout and we use the function printHello with 0 time delay
// This function however is not triggered instantly, even thought it has 0ms delay. Instead it goes to the Callback Queue
// it waits for all the synchronous code to run first before calling printHello 
setTimeout(printHello, 0); 

// Callback Queue -> printHello

// Now we call another asynchronous code that doesn't really have a time defined but it should run the 'display' function after it fetches, right?
const futureData = fetch('https://random.data/api')
futureData.then(display)
// No, instead it goes to the Microtask Queue... for all the synchronous code to run first before calling itself

// Microtask Queue -> display(fetch('https://random.data/api'))

blockFor300ms() // Code that lasts 300ms

console.log("Me first!"); // Console logs "Me first"
// Then after all the synchronous is read, we should run our asynchronous codes
// displays data 
// prints hello

// This order is not incorrect since Microtask Queue has a higher priority than Callback Queue.
