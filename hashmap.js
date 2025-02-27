let s = "hello";

let arr = s.split("");

console.log(arr);

let hashMap = {};

for (let i=0; i<arr.length; i++){
    if(!hashMap[arr[i]]){
        hashMap[arr[i]] = 1;
    }
    else{
        hashMap[arr[i]] += 1;
    }
}
console.log(hashMap);
for (el in hashMap){
    console.log(el, hashMap);
}