/*
Problem 1: Filter and Sort
You have an array of numbers, and you need to:

Filter out all even numbers.
Sort the remaining numbers in ascending order.
Example:

let arr = [10, 15, 3, 8, 6, 23, 74, 18];
Expected Output:
[3, 15,23]
Steps:
Use filter() to get the odd numbers.
Use sort() to sort them in ascending order.
*/

// Brute Force Approach

let arr = [10,15,3,8,6,23,74,18];

let odd= arr.filter(function(item){
    return item % 2 != 0;
});
let ascend = odd.sort((a,b) => a-b);
console.log(ascend);

// Optimized Code

let oddSorted = arr.reduce((acc,item)=>{
    if(item % 2 != 0){
        acc.push(item);
    }
    return acc;
},[]).sort((a,b)=> a-b);

console.log(oddSorted);

/*
Step 1: Initial Setup
Array: arr = [10, 15, 3, 8, 6, 23, 74, 18]
Initial accumulator (acc): [] (an empty array)
Step 2: reduce() Iteration
The reduce() method is iterating over each element in the array. During each iteration, it checks if the element is odd (i.e., item % 2 !== 0). If the element is odd, it pushes it into the accumulator array acc.

First Iteration (item = 10):

item = 10
item % 2 !== 0 → 10 % 2 !== 0 → false (10 is even).
Since the condition is false, we skip adding this item to acc.
Accumulator after this iteration: [].
Second Iteration (item = 15):

item = 15
item % 2 !== 0 → 15 % 2 !== 0 → true (15 is odd).
Since the condition is true, we push 15 into acc.
Accumulator after this iteration: [15].
Third Iteration (item = 3):

item = 3
item % 2 !== 0 → 3 % 2 !== 0 → true (3 is odd).
Since the condition is true, we push 3 into acc.
Accumulator after this iteration: [15, 3].
Fourth Iteration (item = 8):

item = 8
item % 2 !== 0 → 8 % 2 !== 0 → false (8 is even).
Since the condition is false, we skip adding this item to acc.
Accumulator after this iteration: [15, 3].
Fifth Iteration (item = 6):

item = 6
item % 2 !== 0 → 6 % 2 !== 0 → false (6 is even).
Since the condition is false, we skip adding this item to acc.
Accumulator after this iteration: [15, 3].
Sixth Iteration (item = 23):

item = 23
item % 2 !== 0 → 23 % 2 !== 0 → true (23 is odd).
Since the condition is true, we push 23 into acc.
Accumulator after this iteration: [15, 3, 23].
Seventh Iteration (item = 74):

item = 74
item % 2 !== 0 → 74 % 2 !== 0 → false (74 is even).
Since the condition is false, we skip adding this item to acc.
Accumulator after this iteration: [15, 3, 23].
Eighth Iteration (item = 18):

item = 18
item % 2 !== 0 → 18 % 2 !== 0 → false (18 is even).
Since the condition is false, we skip adding this item to acc.
Accumulator after this iteration: [15, 3, 23].
Step 3: Sorting the Filtered Odd Numbers
After the reduce() method completes, the filtered odd numbers array acc is [15, 3, 23].

Sorting: Now, we use the sort() method to sort the filtered odd numbers in ascending order.

The sort() method uses the comparison function (a, b) => a - b to sort the array.
Sorting Process:
The first comparison: a = 15, b = 3 → 15 - 3 = 12 (positive, so 15 is greater than 3).
The second comparison: a = 15, b = 23 → 15 - 23 = -8 (negative, so 15 is smaller than 23).
The third comparison: a = 3, b = 23 → 3 - 23 = -20 (negative, so 3 is smaller than 23).
Final sorted array: [3, 15, 23].

Step 4: Logging the Result
console.log(sortedOdds) will log the sorted array [3, 15, 23].
*/