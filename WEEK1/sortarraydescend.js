/*
Problem Solving

sort() => Descending Order
*/

let arr = [2,1,4,3];
arr.sort((a,b) => b-a);
console.log(arr);

/*
Dry Run:
Initial Array:

arr = [2, 1, 4, 3].
Calling sort():

The sort() method is called with the callback function (a, b) => b - a.
The comparison function will return a positive value if b is greater than a, ensuring that larger numbers come before smaller ones (sorting in descending order).
First Comparison:

a = 2, b = 1.
The comparison function returns 1 - 2 = -1 (which is negative).
Since the result is negative, a (2) is considered smaller than b (1), so the order stays the same. No swap.
After this comparison: arr = [2, 1, 4, 3].
Second Comparison:

a = 1, b = 4.
The comparison function returns 4 - 1 = 3 (which is positive).
Since the result is positive, b (4) is considered greater than a (1), so they swap places.
After the swap: arr = [2, 4, 1, 3].
Third Comparison:

a = 1, b = 3.
The comparison function returns 3 - 1 = 2 (which is positive).
Since the result is positive, b (3) is considered greater than a (1), so they swap places.
After the swap: arr = [2, 4, 3, 1].
Fourth Comparison:

a = 2, b = 4.
The comparison function returns 4 - 2 = 2 (which is positive).
Since the result is positive, b (4) is considered greater than a (2), so they swap places.
After the swap: arr = [4, 2, 3, 1].
Fifth Comparison:

a = 2, b = 3.
The comparison function returns 3 - 2 = 1 (which is positive).
Since the result is positive, b (3) is considered greater than a (2), so they swap places.
After the swap: arr = [4, 3, 2, 1].
Final Sorted Array:

After all the comparisons and swaps, the array is now sorted in descending order: arr = [4, 3, 2, 1].
*/