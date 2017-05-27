function final([speed,zone]) {

    function getLimit(zone) {
        switch (zone) {
            case 'motorway':
                return 130;
            case 'residential':
                return 20;
            case 'city':
                return 50;
            case 'interstate':
                return 90;
        }
    }

    let limit = getLimit(zone);


    function getInfraction(speed, limit) {
        let overSpeed = speed - limit;

        if(overSpeed <= 0) {
            return false;
        } else if(overSpeed > 0 && overSpeed <= 20){
            return "speeding";
        } else if(overSpeed > 20 && overSpeed <= 40) {
            return "excessive speeding";
        } else {
            return "reckless driving";
        }
    }

    let infraction = getInfraction(speed, limit);

    if(infraction) {
        console.log(infraction);
    }
}
final([120, 'interstate']);