function firstAndLastKNumbers(arr) {
    let count = Number(arr[0]);
    arr.shift();
    console.log(arr.slice(0, count).join(" "));
    console.log(arr.slice(arr.length - count,arr.length).join(" "));
}

firstAndLastKNumbers([2,
    7, 8, 9]
);