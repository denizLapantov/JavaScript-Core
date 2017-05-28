function biggestElement(matrixRows) {
    let matrix = matrixRows.map(
        row => row.map(Number));
        let biggestNum = Number.NEGATIVE_INFINITY;
        matrix.forEach(r => r.forEach(c => biggestNum = Math.max(biggestNum, c)));

        return biggestNum;
}

console.log(biggestElement(
    [[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
));


