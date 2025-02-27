// Problem Solving

// forEach() => Loops through the array and executes a callback for each element

let arr = [1,2,3,4];

arr.forEach(function(item){
    console.log(item);
})

// Dry Run:
// Initial Setup: We have an array arr with the values [1, 2, 3, 4].
// Calling forEach(): The forEach() method is used to iterate over each element in the array. The forEach() method accepts a callback function that is executed once for each item in the array. In this case, the callback function is function(item) { console.log(item); }.
// Iterating Over the Array:
// First Iteration:
// The first element of the array is 1, so the callback function is called with item = 1.
// console.log(1) is executed, printing 1 to the console.
// Second Iteration:
// The second element of the array is 2, so the callback function is called with item = 2.
// console.log(2) is executed, printing 2 to the console.
// Third Iteration:
// The third element of the array is 3, so the callback function is called with item = 3.
// console.log(3) is executed, printing 3 to the console.
// Fourth Iteration:
// The fourth element of the array is 4, so the callback function is called with item = 4.
// console.log(4) is executed, printing 4 to the console.
// End of Loop: After the callback function has been executed for all elements in the array, the loop finishes, and the program moves to the next step.