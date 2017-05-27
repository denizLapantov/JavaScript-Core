function calculator(number1,number2,operation) {
    switch (operation){
        case '+' : return number1 + number2;
        break;
        case '-' : return number1 - number2;
            break;
        case '*' : return number1 * number2;
            break;
        case '/' : return number1 / number2;
            break;
    }

}

console.log(calculator(3,4,"*"));