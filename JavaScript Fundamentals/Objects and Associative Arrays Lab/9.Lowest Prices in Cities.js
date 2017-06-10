function lowestPricesInCities(input) {

    let result = new Map();
    for (let line of input) {
        let str = line.split("|");
        let town = str[0];
        let  product = str[1];
        let price =Number(str[2]);

        if(!result.has(product)){
            result.set(product,new Map());
        }
        result.get(product).set(town,price);

    }

    for (let [product, insideMap] of result) {
        let lowerPrice = Number.POSITIVE_INFINITY;
        let townWithLowestPr = '';
        for (let [town,price] of insideMap) {
            if(price < lowerPrice){
                lowerPrice = price;
                townWithLowestPr = town;
            }
            
        }
        console.log(`${product}-> ${lowerPrice} (${townWithLowestPr.trim()})`);

    }
}

lowestPricesInCities(["Sample Town | Sample Product | 1000",
    "Sample Town | Orange | 2",
    "Sample Town | Peach | 1",
    "Sofia | Orange | 3",
    "Sofia | Peach | 2",
    "New York | Sample Product | 1000.1",
    "New York | Burger | 10"]);