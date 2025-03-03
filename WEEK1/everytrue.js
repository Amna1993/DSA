/*
Problem Solving 

every() => The every() method checks if all elements in the array satisfy the condition (in this case, whether the element is even)
*/

let arr = [2,4,6,8];

let allEven = arr.every(function(item){
    return item % 2 === 0;
});
console.log(allEven);

/*
Dry Run:
Initial Setup:

The array arr = [2, 4, 6, 8] is given.
The every() method checks if all elements in the array satisfy the condition (in this case, whether the element is even).
Iteration:

First Iteration: item = 2
2 % 2 === 0 is true.
Continue to the next element.
Second Iteration: item = 4
4 % 2 === 0 is true.
Continue to the next element.
Third Iteration: item = 6
6 % 2 === 0 is true.
Continue to the next element.
Fourth Iteration: item = 8
8 % 2 === 0 is true.
Since all elements satisfy the condition, every() returns true.
Result:

Since all elements are even, allEven = true.
Output: true
*/