function spiceMustFlow(input) {

    let number = Number(input);
    let consumerEndDay = 26;
    let drobsDay = 10;
    let sum = 0;
    let counter = 0;

    while (number >=100){
        counter++;
        let current = number - consumerEndDay
        sum+=current;
        number-=drobsDay;
    }
    sum-=consumerEndDay;

    if(sum < 0){
       sum = 0;
    }

    console.log(counter);
    console.log(sum)
}

spiceMustFlow(3434);