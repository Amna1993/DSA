/*
Problem Solving

map() => Creates a new array with the results of calling a provided function on every element. 
*/

let arr = [1,2,3,4]

for(let i=0; i<arr.length; i++){
    console.log(arr[i]*2);
}

let doubled = arr.map(function(item){
    return item*2;
});

console.log(doubled);
/*
Dry Run:
Initial Setup: We have an array arr with the values [1, 2, 3, 4].
Calling map(): The map() method is used to create a new array by applying the callback function to each element of the original array. The callback function here is function(item) { return item * 2; }, which doubles each element.
Iterating Over the Array:
First Iteration:
The first element of the array is 1, so the callback function is called with item = 1.
The callback function returns 1 * 2 = 2, which is added to the new array doubled.
Second Iteration:
The second element of the array is 2, so the callback function is called with item = 2.
The callback function returns 2 * 2 = 4, which is added to the new array doubled.
Third Iteration:
The third element of the array is 3, so the callback function is called with item = 3.
The callback function returns 3 * 2 = 6, which is added to the new array doubled.
Fourth Iteration:
The fourth element of the array is 4, so the callback function is called with item = 4.
The callback function returns 4 * 2 = 8, which is added to the new array doubled.
End of map(): The map() method has completed iterating over all the elements in the original array, and it has created a new array doubled with the values [2, 4, 6, 8].
Output: Finally, console.log(doubled) prints the new array to the console.
*/

/*

Time Complexity of for loop:
Time Complexity: O(n).
The loop runs for each element in the array, so the time complexity is linear with respect to the number of elements in the array.

Space Complexity: O(1) (constant space).
The for loop doesn't create any additional data structures (like new arrays or objects). It just iterates over the array and performs operations (printing to the console in this case).
It uses a small, fixed amount of space to store the loop index (i), which doesn't depend on the size of the input array.

Time Complexity of map():
Time Complexity: O(n).
map() internally iterates over the array, applying the function to each element once, so the time complexity is also linear with respect to the size of the array.
Space Complexity: O(n) (linear space).
The map() method creates a new array (doubled in this case) that has the same number of elements as the original array.
So, in addition to the original array arr, you are also storing a new array doubled with the transformed values.
Therefore, the space used by the new array is proportional to the size of the input array.

*/