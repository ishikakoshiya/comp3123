function Integer(a,b,c){
    return Math.max(a,b,c);
}

const num1 = 11;
const num2 = 24;
const num3 = 15;

const largest = Integer(num1, num2, num3);
console.log("The largest among three integers is:", largest);

