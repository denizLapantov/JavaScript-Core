function modifyAverage(number) {
        function getAverage(number) {

            var str = number.toString();
            var sum = 0;

            for (let i = 0; i < str.length; i++) {
                sum += parseInt(str.charAt(i), 10);
            }

        let averageOfSum = sum / str.length;
            return averageOfSum;
    }

    let average = getAverage(number);

    let addNine = x => x + "9";

    while (average <= 5) {
        number = addNine(number);
        average = getAverage(number);
    }

    console.log(number);
}

modifyAverage(101);