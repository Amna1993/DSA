function countofwords(words){
    let map = {};
    
    for(let word of words){
        if(map[word]){
            map[word]++;
        }
        else{
            map[word] =1;
        }
    }
    return map;

}

console.log(countofwords(["banana", "mango", "grapes", "banana", "mango", "grapes"]))