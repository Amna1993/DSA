/*
Problem Solving

split()
*/

let str = "Hello World";
let arr = str.split(' ');  // Splits the string into an array at each space
console.log(arr);  // ["Hello", "World"]

/*
Explanation:
split(' ') splits the string str into an array of substrings at each space (' ').
The resulting array will be ["Hello", "World"].
*/
let str1 = "apple,banana,cherry";
let arr1 = str1.split(',');
console.log(arr1);  // ["apple", "banana", "cherry"]

/*
Initial String:

str1 = "apple,banana,cherry"
Calling split(','):

The method split(',') looks for each comma in the string and splits it into separate substrings.
Result:
The string is split into three substrings: ["apple", "banana", "cherry"].
*/
let str3 = "hello";
let arr3 = str3.split('');
console.log(arr3);  // ["h", "e", "l", "l", "o"]

/*
Calling split(''): This splits the string into an array of individual characters.
Output: ["h", "e", "l", "l", "o"]
Summary of split():
split() is a string method that divides a string into an array based on a given 
separator (e.g., space, comma, or an empty string for characters).
*/
