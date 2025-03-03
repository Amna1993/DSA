
function sumoffive(num){
    // return (num*(num+1)/2);
    let sum = 0;
   for (let i=1; i<=num; i++){
        sum = sum + i;
    }
    return sum;
}

console.log(sumoffive(5));