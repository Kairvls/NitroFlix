function reverseTheWord(word){
    let output = "";

    for (let i = word.length - 1; i >= 0; i--){
        output += word[i];
    }

    return output;
    
}

console.log (reverseTheWord("programer"));