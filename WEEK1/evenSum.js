let arr = [1, 2, 3, 4, 5, 6];
let evenSum = arr.reduce((acc, current) => current % 2 === 0 ? acc + current : acc, 0);
console.log(evenSum);  // Output: 12

/*
Dry Run:
Initial Setup:
arr = [1, 2, 3, 4, 5, 6]
The accumulator acc = 0 (the starting point).
The array is [1, 2, 3, 4, 5, 6].
First Iteration (current = 1):
acc = 0
current = 1
Condition: current % 2 === 0 → 1 % 2 === 0 → false
Since the condition is false (1 is odd), acc is unchanged.
acc = 0
Move to the next element.
Second Iteration (current = 2):
acc = 0
current = 2
Condition: current % 2 === 0 → 2 % 2 === 0 → true
Since the condition is true (2 is even), add current to acc:
acc = 0 + 2 = 2
Move to the next element.
Third Iteration (current = 3):
acc = 2
current = 3
Condition: current % 2 === 0 → 3 % 2 === 0 → false
Since the condition is false (3 is odd), acc remains unchanged.
acc = 2
Move to the next element.
Fourth Iteration (current = 4):
acc = 2
current = 4
Condition: current % 2 === 0 → 4 % 2 === 0 → true
Since the condition is true (4 is even), add current to acc:
acc = 2 + 4 = 6
Move to the next element.
Fifth Iteration (current = 5):
acc = 6
current = 5
Condition: current % 2 === 0 → 5 % 2 === 0 → false
Since the condition is false (5 is odd), acc remains unchanged.
acc = 6
Move to the next element.
Sixth Iteration (current = 6):
acc = 6
current = 6
Condition: current % 2 === 0 → 6 % 2 === 0 → true
Since the condition is true (6 is even), add current to acc:
acc = 6 + 6 = 12
Now we have processed all the elements in the array.
Final Result:
The final value of the accumulator acc is 12, which is the sum of the even numbers in the array [2, 4, 6].
*/