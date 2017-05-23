function StringOfNumbers1toN(a){
    let number = Number(a);
    let finalNumber = '';

    for (i = 1; i <= number; i++){
        finalNumber += i;
    }
    return finalNumber
}

console.log(StringOfNumbers1toN('101'));