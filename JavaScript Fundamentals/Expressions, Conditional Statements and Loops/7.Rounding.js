function Rounding([number,precision]) {
    if(precision >15){
        precision = 15;
    }
    console.log(Number(number.toFixed(precision)));
}

Rounding([10.5, 3])