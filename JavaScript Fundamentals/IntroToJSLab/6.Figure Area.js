
function calcArea(a,b,c,d) {
    let area = ((a * b) + (c * d));
    area -= Math.min(a, c) * Math.min(b, d);

   return area
}

console.log(calcArea(13,2,5,8))