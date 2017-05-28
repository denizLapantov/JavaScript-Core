function sumUpDiagonals(matrix) {
    var firsDiagonals =  0;
    var secondDiagonals =  0;
    let matrixLength = matrix.length;

    for (var i = 0; i < matrixLength; i++) {
        firsDiagonals += matrix[i][i];
        secondDiagonals += matrix[i][matrixLength-i-1];
    }
    return firsDiagonals + " "  + secondDiagonals;
}

console.log(sumUpDiagonals([[20, 40],
    [10, 60]]
))