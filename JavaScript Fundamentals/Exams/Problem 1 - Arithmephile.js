function arithmephile(input) {
    let sum = Number.NEGATIVE_INFINITY;

    while (input.length > 0){
        let count = Number(input.shift());
        if(count >= 10 || count <0) continue;
        let currentSum = 1;
        for (let i = 0; i < count; i++) {
           currentSum *= Number(input[i]);

        }

        if(currentSum > sum){
            sum = currentSum;
        }


    }

    console.log(sum);

}


arithmephile([10,
    20,
    2,
    30,
    44,
    3,
    56,
    20,
    24]);