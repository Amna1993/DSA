/*
Problem Solving

Array Destructuring
*/

let arr = [10,20,30,40,50,60,70,80];
let [a,b,c,d,...rest] = arr;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(rest);

/*
Dry Run:
Array Declaration:

arr = [10, 20, 30, 40, 50, 60, 70, 80].
Destructuring:

let [a, b, c, d, ...rest] = arr; will unpack the array into variables:
a = 10 (first element)
b = 20 (second element)
c = 30 (third element)
d = 40 (fourth element)
...rest will capture the remaining elements of the array after the first four elements: [50, 60, 70, 80].
Logging:

console.log(a) will print 10.
console.log(b) will print 20.
console.log(c) will print 30.
console.log(d) will print 40.
console.log(rest) will print [50, 60, 70, 80].
*/