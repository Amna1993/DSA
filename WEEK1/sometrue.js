/* 
Problem Solving

some() => The some() method checks if at least one element in the array satisfies the condition( in this case, whether the element is even)
*/

let arr = [1,2,3,4];

let hasEven = arr.some(function(item){
    return item % 2 === 0;
});

console.log(hasEven);

/*
Dry Run:
Initial Setup:

The array arr = [1, 2, 3, 4] is given.
The some() method checks if at least one element in the array satisfies the condition (in this case, whether the element is even).
Iteration:

First Iteration: item = 1
1 % 2 === 0 is false.
Continue to the next element.
Second Iteration: item = 2
2 % 2 === 0 is true.
Since at least one element satisfies the condition, some() immediately returns true without checking the remaining elements.
Result:

Since there is at least one even number (2), hasEven = true.
Output: true

*/