function rectangleOfStars(number) {
    let counter = 0 ;
    while (number > counter){
        console.log("* ".repeat(number));
        counter++;
    }
}

rectangleOfStars(10);