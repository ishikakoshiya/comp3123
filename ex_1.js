function Word(str){
    return str
    .split(' ')
    .map(word =>
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join(' ');
}

const inputString = "i like javascript";
const CapitalWord = Word(inputString);
console.log(CapitalWord);
