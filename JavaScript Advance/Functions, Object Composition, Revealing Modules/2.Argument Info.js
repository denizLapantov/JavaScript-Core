function argumentInfo() {
    let typeCounts = {};
    for(let arg of arguments){
        console.log(`${typeof(arg)}: ${arg}`);
        if(!typeCounts.hasOwnProperty(typeof(arg))){
            typeCounts[typeof(arg)] = 0;
        }
            typeCounts[typeof(arg)]++;

    }
    for (let key of  Object.keys(typeCounts).sort((a, b) => typeCounts[b] - typeCounts[a])) {
            console.log(`${key} = ${typeCounts[key]}`);
    }
}

argumentInfo('cat', 42,23,23, function () { console.log('Hello world!'); });