function storeCatalogue(input) {
    let result = new Map();

    for (let line  of input) {
        let inputAsStr = line.split(":");
        let word = inputAsStr[0];
        let price = inputAsStr[1];
        result.set(word,price);
    }

    let initial = new Set();
    Array.from(result.keys()).forEach(x=>initial.add(x[0]));

    for (let char of Array.from(initial.keys()).sort()) {
        console.log(char);

        for (let product of Array.from(result.keys()).sort()) {
            if(product.startsWith(char)){
                console.log(`   ${product.trim()}:${result.get(product)}`)
            }
        }
    }
}

storeCatalogue(["Appricot : 20.4",
 "Fridge : 1500",
"TV : 1499",
"Deodorant : 10",
"Boiler : 300",
"Apple : 1.25",
"Anti-Bug Spray : 15",
"T-Shirt : 10"]);
