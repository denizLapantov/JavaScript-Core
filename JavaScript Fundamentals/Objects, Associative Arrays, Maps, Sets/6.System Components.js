function systemComponents(input) {

    function sortSystems(s1, s2) {
        if(result.get(s1).size !== result.get(s2).size) {
            return result.get(s2).size - result.get(s1).size;
        } else {
            return s1.toLowerCase().localeCompare(s2.toLowerCase());
        }
    }

    function sortComponents(system, c1, c2) {
        return result.get(system).get(c2).length - result.get(system).get(c1).length;
    }


    let result = new Map();
    for (let line of input) {
        let inputAsStr = line.split(" | ");
        let systemName = inputAsStr[0];
        let componentName = inputAsStr[1];
        let subComponentName = inputAsStr[2];

        if(!result.get(systemName)){
            result.set(systemName, new Map());
        }
        if(!result.get(systemName).get(componentName)){
            result.get(systemName).set(componentName,[]);
        }

        result.get(systemName).get(componentName).push(subComponentName);

    }

    let sortedSystem = Array.from(result.keys()).sort((s1, s2) => sortSystems(s1,s2));


    for (let system of sortedSystem) {
        console.log(system);

        let sortedArg = Array.from(result.get(system).keys()).sort((s1 ,s2) => sortComponents(system,s1,s2));
         for (let sor of sortedArg) {
             console.log(`|||${sor}`);
             for (let obj of result.get(system).get(sor)) {
                 console.log(`||||||${obj}`)
             }

         }
    }
}

systemComponents(["SULS | Main Site | Home Page",
    "SULS | Main Site | Login Page",
    "SULS | Main Site | Register Page",
    "SULS | Judge Site | Login Page",
    "SULS | Judge Site | Submittion Page",
    "Lambda | CoreA | A23",
    "SULS | Digital Site | Login Page",
    "Lambda | CoreB | B24",
    "Lambda | CoreA | A24",
    "Lambda | CoreA | A25",
    "Lambda | CoreC | C4",
    "Indice | Session | Default Storage",
    "Indice | Session | Default Security"]);