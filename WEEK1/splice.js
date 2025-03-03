/*
Problem Solving

splice()
*/

let arr = [1, 2, 3, 4];
arr.splice(2, 1, 5, 6);  // Removes 3 and inserts 5 and 6
console.log(arr);  // [1, 2, 5, 6, 4]

/*
Dry Run:
The array arr is [1, 2, 3, 4].
Calling splice(2, 1, 5, 6):
The first number 2 is the index to start at (starting from the third element, which is 3).
The second number 1 means remove 1 element from index 2 (removing 3).
The following numbers 5 and 6 are added to the array at index 2.
The final array after the splice() method is [1, 2, 5, 6, 4].
Output: [1, 2, 5, 6, 4]
*/