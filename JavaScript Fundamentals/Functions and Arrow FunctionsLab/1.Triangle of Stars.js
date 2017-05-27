function triangleOfStars(number) {

    for (let i = 0; i <= number; i++) {
        console.log("*".repeat(i));
    }

    for (let i = number - 1; i > 0; i--) {
        console.log("*".repeat(i));
    }
}

triangleOfStars(4);