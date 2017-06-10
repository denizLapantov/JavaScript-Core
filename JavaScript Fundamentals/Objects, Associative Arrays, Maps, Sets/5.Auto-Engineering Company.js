function autoEngineeringCompany(input) {
    let map = new Map();

    for (let line of input) {
        let inputAsStr = line.split("|");
        let carBrand = inputAsStr[0].trim();
        let carModel = inputAsStr[1].trim();
        let producedCars =Number(inputAsStr[2]);

        if(!map.has(carBrand)){
           map.set(carBrand,new Map());
        }

        if(!map.get(carBrand).has(carModel)){
            map.get(carBrand).set(carModel,0);
        }

        map.get(carBrand).set(carModel,map.get(carBrand).get(carModel) + producedCars);
    }

    for (let [carBrand] of map) {
        console.log(carBrand);

        for (let [model,sum] of map.get(carBrand)) {
            console.log(`###${model} -> ${sum}`);
        }
    }
}

autoEngineeringCompany(["Audi | Q7 | 1000",
   "Audi | Q6 | 100",
    "BMW | X5 | 1000",
    "BMW | X6 | 100",
    "Citroen | C4 | 123",
    "Volga | GAZ-24 | 1000000",
    "Lada | Niva | 1000000",
    "Lada | Jigula | 1000000",
    "Citroen | C4 | 22",
   "Citroen | C5 | 10"]);