
function checkPalindrome(num){
  
    let originalNumber = num;
    let reversedNumber = 0;
    
    while(num > 0){
        let lastDigit = num%10;
        reversedNumber = reversedNumber * 10 + lastDigit;
        num = Math.floor(num/10)
        
    }
    return originalNumber === reversedNumber;

}

console.log(checkPalindrome(12321));

/*
Dry Run with number = 12321:
Initial Setup:

number = 12321
originalNumber = 12321
reversedNumber = 0
First Iteration:

lastDigit = 12321 % 10 = 1 (extract last digit)
reversedNumber = 0 * 10 + 1 = 1
number = Math.floor(12321 / 10) = 1232 (remove last digit)
Second Iteration:

lastDigit = 1232 % 10 = 2
reversedNumber = 1 * 10 + 2 = 12
number = Math.floor(1232 / 10) = 123
Third Iteration:

lastDigit = 123 % 10 = 3
reversedNumber = 12 * 10 + 3 = 123
number = Math.floor(123 / 10) = 12
Fourth Iteration:

lastDigit = 12 % 10 = 2
reversedNumber = 123 * 10 + 2 = 1232
number = Math.floor(12 / 10) = 1
Fifth Iteration:

lastDigit = 1 % 10 = 1
reversedNumber = 1232 * 10 + 1 = 12321
number = Math.floor(1 / 10) = 0
Final Comparison:

originalNumber = 12321
reversedNumber = 12321
Since they are equal, the function returns true.
*/