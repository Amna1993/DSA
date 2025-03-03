/*
Problem Solving

sort() => Ascending Order
*/

let arr = [4,2,3,1];
arr.sort((a,b) => a-b);
console.log(arr);

/*
Dry Run:
Initial Array:

arr = [4, 2, 3, 1]
Calling sort():

The sort() method is called with the callback function (a, b) => a - b.
The callback function compares two elements at a time in the array, and based on the result, it determines their order.
First Comparison:

a = 4, b = 2.
The comparison function returns 4 - 2 = 2 (which is positive).
Since the result is positive, a (4) is considered greater than b (2), so they will swap places.
After the swap: arr = [2, 4, 3, 1].
Second Comparison:

a = 4, b = 3.
The comparison function returns 4 - 3 = 1 (which is positive).
Again, since the result is positive, a (4) is considered greater than b (3), so they will swap places.
After the swap: arr = [2, 3, 4, 1].
Third Comparison:

a = 4, b = 1.
The comparison function returns 4 - 1 = 3 (which is positive).
Since the result is positive, a (4) is considered greater than b (1), so they will swap places.
After the swap: arr = [2, 3, 1, 4].
Fourth Comparison:

a = 3, b = 1.
The comparison function returns 3 - 1 = 2 (which is positive).
Since the result is positive, a (3) is considered greater than b (1), so they will swap places.
After the swap: arr = [2, 1, 3, 4].
Fifth Comparison:

a = 2, b = 1.
The comparison function returns 2 - 1 = 1 (which is positive).
Since the result is positive, a (2) is considered greater than b (1), so they will swap places.
After the swap: arr = [1, 2, 3, 4].
Final Sorted Array:

After all the comparisons, the array is now sorted in ascending order: arr = [1, 2, 3, 4].

Explanation:
The sort() method in JavaScript arranges the array elements in ascending order.
The comparison function (a, b) => a - b helps determine the order:
If the result of a - b is positive, a comes after b.
If the result of a - b is negative, a comes before b.
If the result is 0, the order of a and b remains unchanged.
This process ensures the array is sorted from the smallest to the largest value.


*/