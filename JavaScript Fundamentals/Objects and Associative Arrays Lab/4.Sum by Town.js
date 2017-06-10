function sumByTown(input) {
    let sums ={};
    for (let i = 0; i < input.length; i +=2) {
         let town = input[i];
         let income = Number(input[i + 1]);

         if (!sums[town]){
             sums[town] =0;
         }
             sums[town] +=income;
    }

     console.log(JSON.stringify(sums));
}

sumByTown(["Sofia",
    "20",
    "Varna",
    "3",
    "Sofia",
    "5",
    "Varna",
    "4"]);