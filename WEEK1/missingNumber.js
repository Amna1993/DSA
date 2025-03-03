
function missingNumber(arr){
    let n = arr.length;
    let expectedSum = (n * (n+1))/2;
    let actualSum = arr.reduce((acc,arr) => acc+arr, 0);
    return expectedSum - actualSum;
}

console.log(missingNumber([3,0,1]));


/*
Dry Run for Example 1: [3, 0, 1]
Input Array: [3, 0, 1]
Calculate n: The length of the array is 3 (so n = 3).
Expected Sum: Calculate the sum of the first n numbers:
expectedSum
=
3
×
(
3
+
1
)
2
=
3
×
4
2
=
6
expectedSum= 
2
3×(3+1)
​
 = 
2
3×4
​
 =6
Actual Sum: Calculate the sum of the numbers in the array:
actualSum
=
3
+
0
+
1
=
4
actualSum=3+0+1=4
Missing Number: The missing number is:
missingNumber
=
expectedSum
−
actualSum
=
6
−
4
=
2
missingNumber=expectedSum−actualSum=6−4=2
Thus, the missing number is 2.
*/