function arrayMin(array) {
    let seq = [];
    array.sort((a,b) =>a-b);
    seq.push(array[0]);
    seq.push(array[1]);

  console.log(seq.join(" "))
}

arrayMin([3, 0, 10, 4, 7, 3]);