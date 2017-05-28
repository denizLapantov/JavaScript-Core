function processOddNumbers(arr) {
    let seq = [];
    for (var i = arr.length - 1; i >= 0; i--) {
       if(i % 2 !=0){
           seq.push(arr[i] * 2);
       }
    }
    console.log(seq.join(" "));

}

processOddNumbers([10, 15, 20, 25]);