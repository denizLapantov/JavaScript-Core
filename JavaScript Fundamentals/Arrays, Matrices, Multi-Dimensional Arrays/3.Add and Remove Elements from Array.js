function addRemoveFromArray(input) {
    let number = 1;
    let result = [];

    for (let obj of input) {
        if (obj == "add"){
            result.push(number);
        }else {
            result.pop();
        }
        number++;
    }

    if(result.length == 0){
        console.log("Empty");
    }else {
         result.forEach(x=> console.log(x))
    }
}

addRemoveFromArray(["add", "add", "add","add"]);