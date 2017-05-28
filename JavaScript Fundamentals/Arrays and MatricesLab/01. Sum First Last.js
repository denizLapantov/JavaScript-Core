function sumFirstAndLast(arr) {
    let firstNumber = Number(arr[0]);
    let lastNumber = Number(arr[arr.length - 1]);

    return lastNumber + firstNumber;
}

console.log(sumFirstAndLast(['20', '30', '40']));