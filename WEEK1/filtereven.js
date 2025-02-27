/*
Problem Solving

filter() => Print even numbers like return a new array of even numbers
*/

let arr = [1,2,3,4];

let evenNumbers = arr.filter(function(item){
    return item % 2 === 0;
});

console.log(evenNumbers);

/*
Dry Run:
Initial Setup:

The array arr = [1, 2, 3, 4] is given.
We call filter() to create a new array with only the even numbers.
Iteration:

First Iteration: item = 1
1 % 2 === 0 is false.
So, 1 is not included in the new array.
Second Iteration: item = 2
2 % 2 === 0 is true.
So, 2 is included in the new array.
Third Iteration: item = 3
3 % 2 === 0 is false.
So, 3 is not included in the new array.
Fourth Iteration: item = 4
4 % 2 === 0 is true.
So, 4 is included in the new array.
Result:

The new array evenNumbers is [2, 4].
Output: [2, 4]
*/