function captureTheNumber(input) {
    let regex = /\d+/g;
    let result = [];
    for (let line of input) {
        let match = regex.exec(line)
        while (match){
            result.push(match[0]);
            match = regex.exec(line);
        }
    }
    console.log(result.join(" "));

}

//second decision

function capture(input) {
    let text = input.join(" ");
    let regex = /\d+/g;
    let numbers = text.match(regex);
    console.log(numbers.join(" "));

}

capture(["123a456",
    "789b987",
    "654c321",
    "0"]);

captureTheNumber(["123a456",
    "789b987",
    "654c321",
    "0"]);