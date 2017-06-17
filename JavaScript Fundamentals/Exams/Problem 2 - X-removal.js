function solve(input) {

    let matrix = input.map(x=>x.split(""));
    let result = input.map(x=>x.toLowerCase().split(""));


    for (let row = 0; row < result.length - 2; row++) {
        for (var col = 0; col < result[row].length; col++) {
            let currentEl =result[row][col];

            if(result[row][col + 2] === currentEl &&
                result[row + 1][col + 1] === currentEl &&
                result[row + 2][col] === currentEl&&
                result[row+ 2][col + 2] === currentEl){

                matrix[row][col]= "";
                matrix[row][col + 2] = "";
                matrix[row + 1][col + 1] ="";
                matrix[row + 2][col] ="";
                matrix[row+ 2][col + 2] ="";

            }
        }

    }


    for (let obj of matrix) {
        console.log(obj.join(""));
    }
}

solve(["abnbjs","xoBab",
   "Abmbh",
   "aabab",
   "ababvvvv"]);