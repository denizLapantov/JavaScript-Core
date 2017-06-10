function townsToJSON(input) {
    let townAsStr=[];
    for (let line of input.slice(1)) {
        let [name,lag,lng] = line.split("|").filter(x=>x !== "");
        let obj = {
            Town: name.trim(),
            Latitude:  Number(lag.trim()),
            Longitude:  Number(lng.trim()),
        };
        townAsStr.push(obj);
    }
    console.log(JSON.stringify(townAsStr));
}

townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);