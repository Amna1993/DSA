
function factorialRecursion(num){
    if(num===0){
        return 1;
    }
    return num * factorialRecursion(num - 1);
}

console.log(factorialRecursion(5));