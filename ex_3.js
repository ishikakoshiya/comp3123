function String(str){
    if(str.length < 3){
        throw new Error("length must be at least 3");
    }

    const lastthree = str.slice(-3);
    const restcharacter = str.slice(0, -3);

    return lastthree + restcharacter;
}

const enterstring = "Javascript";
const result = String(enterstring);
console.log(result);