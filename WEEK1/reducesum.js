/*
Problem Solving

reduce() => the reduce() method is used to calculate the sum, starting with an initial accumulator value of 0.
*/

let arr = [1,2,3,4]

let sum = arr.reduce(function(accumulator,item){
    return accumulator + item;
},0);

console.log(sum);

/*
Dry Run:
Initial Setup:

The array arr = [1, 2, 3, 4] is given.
The reduce() method is used to calculate the sum, starting with an initial accumulator value of 0.
Iteration:

First Iteration: accumulator = 0, item = 1
accumulator + item = 0 + 1 = 1.
Now, accumulator = 1.
Second Iteration: accumulator = 1, item = 2
accumulator + item = 1 + 2 = 3.
Now, accumulator = 3.
Third Iteration: accumulator = 3, item = 3
accumulator + item = 3 + 3 = 6.
Now, accumulator = 6.
Fourth Iteration: accumulator = 6, item = 4
accumulator + item = 6 + 4 = 10.
Now, accumulator = 10.
Result:

The final accumulated value is 10.
Output: 10
*/