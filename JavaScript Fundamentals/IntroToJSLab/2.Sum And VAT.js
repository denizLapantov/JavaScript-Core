function Sum(input) {
    let sum = 0;
    for (let num of input)
        sum += Number(num);
    console.log("sum = " + sum)
    console.log("Vat = " + sum * 0.2)
    console.log("total = " + sum *1.2)
}