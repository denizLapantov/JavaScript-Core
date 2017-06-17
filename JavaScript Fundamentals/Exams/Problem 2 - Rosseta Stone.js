function solve(input) {

    let templateMatrixLength = Number(input.shift());
    let templateMatrix = getTemplateMatrix(templateMatrixLength);
    let decodedMatrix = getDecodedMatrix(input);
    
    function getTemplateMatrix(size) {
        let matrix = [];
        for (let i = 0; i < size; i++) {
            let row = (input.shift()).split(' ').map(Number);
            matrix.push(row);
        }
        return matrix;
    }

    function getDecodedMatrix(input) {
        let matrix = [];
        for (let row of input) {
            row = row.split(' ').map(Number);
            matrix.push(row);
        }
        return matrix;
    }
       let decodedMassage = '';
       for (let row = 0; row < decodedMatrix.length; row++) {
        for (let col = 0; col < decodedMatrix[row].length; col++) {

            let templateRow = row % templateMatrix.length;
            let templateCol = col % templateMatrix[templateRow].length;
            let cellSum = decodedMatrix[row][col] + templateMatrix[templateRow][templateCol];
            cellSum %= 27;
            if(cellSum === 0){
                decodedMassage += " ";
            }else {
                decodedMassage +=String.fromCharCode(cellSum + 64);
            }
        }
    }

    console.log(decodedMassage);
}




solve(['2',
    '59 36',
    '82 52',
    '4 18 25 19 8',
    '4 2 8 2 18',
    '23 14 22 0 22',
    '2 17 13 19 20',
    '0 9 0 22 22']);