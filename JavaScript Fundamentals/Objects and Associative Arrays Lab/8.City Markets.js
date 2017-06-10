function cityMarkets(input) {

    let townWithProduct = new Map();
    for (let line of input) {
        let inputAsStr = line.split("->");
        let city = inputAsStr[0];
        let  product = inputAsStr[1];
        let sales = inputAsStr[2].split(":");
        let amountOfSales = sales[0];
        let priceForOneUnit = sales[1];

        if(!townWithProduct.has(city)){
            townWithProduct.set(city,new Map());
        }
         let income = amountOfSales * priceForOneUnit;
        let oldIncome = townWithProduct.get(city).get(product);
        if(oldIncome){
            income +=oldIncome;
        }

        townWithProduct.get(city).set(product,income);
    }

    for (let [city] of townWithProduct) {
        console.log("Town - "+city);
        for (let [product,income] of townWithProduct.get(city)) {
            console.log(`$$$${product.trim()} : ${income}`);
        }
    }
}

cityMarkets(["Sofia -> Laptops HP -> 200 : 2000",
    "Sofia -> Raspberry -> 200000 : 1500",
"Sofia -> Audi Q7 -> 200 : 100000",
"Montana -> Portokals -> 200000 : 1",
"Montana -> Qgodas -> 20000 : 0.2",
"Montana -> Chereshas -> 1000 : 0.3"]);