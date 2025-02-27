function sum_target(arr, target){
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i]+arr[j]===target){
                return [i,j];
            }
        }
    }
}

console.log(sum_target(arr=[12,7,9,2], 9));