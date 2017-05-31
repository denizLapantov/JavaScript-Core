function concatenateReversed(input) {
    let allStr = input.join("");
    let result = Array.from(allStr);
    let reverse = result.reverse();
    let revStr = reverse.join("");
    return revStr;
}

let a = concatenateReversed(["deniz" ,"pff"]);
console.log(a);