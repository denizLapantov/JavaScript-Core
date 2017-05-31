function extractText(str) {
    let result = [];
    let rightPar = - 1;
    while (true){
        let leftPar = str.indexOf("(",rightPar + 1);
        if(leftPar == -1){
            break;
        }
        rightPar = str.indexOf(")",leftPar + 1);
        if(rightPar == -1){
            break;
        }
        let textInside = str.substring(leftPar + 1,rightPar);
        result.push(textInside)

    }

    return result.join(", ");
}
console.log(extractText('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)'));