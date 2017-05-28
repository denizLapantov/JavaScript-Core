function evenPosition(arr) {
    let newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if(i % 2 == 0){
            newArr.push(arr[i]);
        }
    }

   console.log(newArr.join(" "));
}

evenPosition(['20', '30', '40']);