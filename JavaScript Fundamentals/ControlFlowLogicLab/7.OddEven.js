function OddEven(number) {
    if(number % 2 == 0){
        console.log("even")
    }
    if (Math.abs(number % 2) == 1){
        console.log("odd")
    }
    if (number % 1 != 0) {
        console.log("invalid")
    }
}

OddEven(1.4);