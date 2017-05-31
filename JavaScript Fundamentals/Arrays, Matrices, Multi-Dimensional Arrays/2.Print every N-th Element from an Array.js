function printEveryElement(input) {
    let step = input[input.length - 1];
    input.pop();
    let arr = [];

    for (var i = 0; i < input.length ; i++) {

        if(i % step == 0){
            arr.push(input[i])
        }
    }

    for (let obj of arr) {
        console.log(obj);
    }
}

printEveryElement(["dsa",
    "asd",
    "test",
    "tset",
    2

]);