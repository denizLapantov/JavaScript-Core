function solve(input) {

    let persons = new Set();
    let subscribes =new Map();
    let subscribesTo = new Map();

    for (let line of input) {
        if(line.length === 1){
            let person = line[0];

            if(!persons.has(person)){
                persons.add(person);
                subscribes.set(person,[]);
                subscribesTo.set(person,[]);
            }
        }
        else {
            let inputAsStr = line.split("-");
            let firstPeople = inputAsStr[0];
            let secondPeople = inputAsStr[1];

            if(persons.has(firstPeople) && persons.has(secondPeople) && secondPeople !== firstPeople ){
                if(!subscribes.get(secondPeople).some(x=>x === firstPeople)){
                    subscribes.get(secondPeople).push(firstPeople);
                }

                if(!subscribesTo.get(firstPeople).some(x=>x === secondPeople)){
                    subscribesTo.get(firstPeople).push(secondPeople);
                }
            }
        }
    }
    let sorted = Array.from(persons).sort((a, b) => subscribes.get(b).length - subscribes.get(a).length
    || subscribesTo.get(b).length - subscribesTo.get(a).length);



    console.log(sorted[0]);
    let counter = 1;
    for (let i = 0; i < subscribes.get(sorted[0]).length; i++) {
        console.log(`${i+1}. ${subscribes.get(sorted[0])[i]}`);

    }

}

solve(["A",
    "B",
    "C",
    "D",
    "A-B",
    "B-A",
    "C-A",
    "D-A"]);