function sortArray(inputArray,sortMethod) {

    let ascending = function (a,b) {
        return a - b;
    };

    let descending = function (a,b) {
        return b - a;
    };

    let sortStrategies = {
        'asc': ascending,
        'desc': descending
    };

    return inputArray.sort(sortStrategies[sortMethod]);
}

console.log(sortArray([14, 7, 17, 6, 8], 'desc'));

