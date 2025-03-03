/*
Problem Solving

slice()
*/

let arr = [1,2,3,4];
let sliced = arr.slice(1,3);
console.log(sliced);

/*
Dry Run:
The array arr is [1, 2, 3, 4].
Calling slice(1, 3):
It creates a shallow copy of the array starting from index 1 (inclusive) to index 3 (exclusive).
The new array is [2, 3].
Output: [2, 3]
*/