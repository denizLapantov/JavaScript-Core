function populationInTowns(str) {
let map = new Map();
    for (let line  of str) {
        let input = line.split("<->");
        let town = input[0];
        let  population =Number(input[1]);
        if(map.has(town)){
           map.set(town, map.get(town) + population)
        }else {
            map.set(town ,population);
        }

    }

    for (let [town,sum] of map) {
        console.log(town + ": " + sum)
    }

}

populationInTowns(["Sofia <-> 1200000",
"Montana <-> 20000","New York <-> 10000000",
"Washington <-> 2345000",
"Las Vegas <-> 1000000", "Las Vegas <-> 1000000"]);