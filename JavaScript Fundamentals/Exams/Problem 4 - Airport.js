function solve(input) {

    let planesLeft = new Map();
    let townsAndPassengers = new Map();
    let planes = new Map();

    for (let line of input) {
        let inputAsStr = line.split(" ");
        let planeId = inputAsStr[0];
        let town = inputAsStr[1];
        let passengersCount =Number(inputAsStr[2]);
        let action = inputAsStr[3];

        if(action === "land"){

            if(!planesLeft.has(planeId)){
                planesLeft.set(planeId,"land");
            }else continue;

            if(!townsAndPassengers.has(town)){
                townsAndPassengers.set(town,[0,0]);
            }
            if(!planes.has(town)){
                planes.set(town,new Set());
            }

            townsAndPassengers.get(town)[0] +=passengersCount;
            planes.get(town).add(planeId);
        }
        else {
            if(!planesLeft.has(planeId)){
                continue;
            }else {
                planesLeft.delete(planeId);
            }
            if(!townsAndPassengers.has(town)){
                townsAndPassengers.set(town,[0,0]);
            }
            if(!planes.has(town)){
                planes.set(town,new Set());
            }

            townsAndPassengers.get(town)[1] +=passengersCount;
            planes.get(town).add(planeId);
        }
    }
        let sortedLeftPlanes = Array.from(planesLeft.keys()).sort((a,b) =>a.localeCompare(b));


    console.log("Planes left:");
    for (let planeId of sortedLeftPlanes) {
        console.log("- " + planeId);
    }

    let sortedTown = Array.from(townsAndPassengers.entries()).sort(sortTowns);

    for (let [town, passengers] of sortedTown) {
        console.log(town);
        console.log(`Arrivals: ${passengers[0]}`);
        console.log(`Departures: ${passengers[1]}`);

        let sortedPlanes =  Array.from(planes.get(town)).sort((a,b) =>a.localeCompare(b));
        console.log("Planes:")
        for (let plane of sortedPlanes) {
            console.log("-- " + plane);
        }
    }
    
    function sortTowns(a,b) {
        let aArrivals = a[1][0];
        let bArrivals = b[1][0];
        let firstCriteria = bArrivals - aArrivals;

        if(aArrivals !== bArrivals){
            return firstCriteria;
        }else {
            return a[0].localeCompare(b[0]);
        }
    }
}

solve([
    "Boeing474 Madrid 300 land",
    "AirForceOne WashingtonDC 178 land",
    "Airbus London 265 depart",
    "ATR72 WashingtonDC 272 land",
    "ATR72 Madrid 135 depart"
]);