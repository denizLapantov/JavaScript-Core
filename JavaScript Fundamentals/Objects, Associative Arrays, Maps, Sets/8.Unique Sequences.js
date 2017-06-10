function uniqueSequences(json) {

    let set = [];
    for (let line of json) {
        let input = JSON.parse(line);
        set.push(input.map(Number).sort((a,b) => b-a));
    }
    function arraysEqual(arr1, arr2) {
        if(arr1.length !== arr2.length)
            return false;
        for(let i = arr1.length; i--;) {
            if(arr1[i] !== arr2[i])
                return false;
        }
        return true;
    }

    for (let i = 0; i < set.length; i++) {
        for (let j = i + 1; j < set.length; j++) {
           if(arraysEqual(set[i],set[j])){
               set.splice(j,1);
               j--;
             }
           }
        }
        set.sort(function(a, b){
        return a.length - b.length;
    });

    set.forEach(a => console.log("[" + a.join(", ") + "]"));
}

uniqueSequences(["[7.14, 7.180, 7.339, 80.099]",
    "[7.339, 80.0990, 7.140000, 7.18]",
    "[7.339, 7.180, 7.14, 80.099]"]);