function countWordsWithMaps(input) {

    let inputsAsStr = input.join('\n').toLowerCase().split(/[^A-Za-z0-9_]+/).filter(x=> x!="");
    let map = new Map();

    for (let w of inputsAsStr) {
         map.has(w) ? map.set(w,map.get(w)+ 1) : map.set(w,1);
    }
    let allWords = Array.from(map.keys()).sort();
    allWords.forEach(x=> console.log(`'${x}' -> ${map.get(x)} times`));


}

countWordsWithMaps(["Far too slow, you're far too slow."]);