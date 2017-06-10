function cappyJuice(input) {

    let quantities = {};
    let bottles = {};

    for (let line  of input) {
        let inputAsStr = line.split(" => ");
        let juiceName = inputAsStr[0];
        let juiceQuantity =Number(inputAsStr[1]);

        if(! quantities.hasOwnProperty(juiceName)){
            quantities[juiceName] = 0;
        }
        quantities[juiceName] += juiceQuantity;
        if(quantities[juiceName] >= 1000){
            bottles[juiceName] = parseInt(quantities[juiceName] / 1000);
        }
    }

    for (let key of Object.keys(bottles)) {
        console.log(`${key} => ${bottles[key]}`);
    }
}

cappyJuice(["Orange => 2000",
    "Peach => 1432",
    "Banana => 450",
    "Banana => 2323",
    "Strawberry => 549"]);