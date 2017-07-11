function result(worker) {

    if(worker.handsShaking === true){
        worker.bloodAlcoholLevel += 0.1 * worker.weight * worker.experience;
        worker.handsShaking = false;
    }

    return worker;
}

console.log(result({  weight: 80,
    experience: 1,
    bloodAlcoholLevel: 0,
    handsShaking: true }));