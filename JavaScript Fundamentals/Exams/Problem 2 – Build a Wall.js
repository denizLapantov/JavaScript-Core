function buildAWall(input) {
    let complete = false;
    input = input.map(Number);
    let oneDay = 195;
    let log = [];

    while (!complete){
        let create = 0;
        complete = true;
        for (let i = 0; i < input.length; i++) {
            if(input[i] < 30){
                input[i]++;
                create +=oneDay;
                complete = false;
            }
        }
        if(!complete) log.push(create)
    }



    console.log(log.join(", "));
    console.log(log.reduce((a,b) =>a + b) * 1900 + " pesos")


}

buildAWall(["21","25","28"]);
