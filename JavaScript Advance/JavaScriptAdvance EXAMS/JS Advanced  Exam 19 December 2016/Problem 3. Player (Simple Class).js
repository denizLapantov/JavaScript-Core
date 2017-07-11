class Player {
    constructor(nickName){
        this.list = [];
        this.nickName = nickName;
    }

    addScore(score){
        if(!isNaN(score) && score !== null){
            this.list.push(Number(score));
            this.list.sort((a,b) => b-a);
        }
        return this;
    }
    get scoreCount(){
        return this.list.length;
    }

    get highestScore(){
        if(this.list.length === 0) return undefined;
        return  Math.max.apply(null, this.list);
    }

    get topFiveScore(){
        return this.list.sort((a, b) => b -a).slice(0,5);
    }

    toString() {
        let finalResult = this.list.sort((a,b) =>  b -a);
        return `${this.nickName}: [${finalResult}]`

    }
}
let peter = new Player("Peter");
console.log('Highest score: ' + peter.highestScore);
console.log(`Top 5 score: [${peter.topFiveScore}]`);
console.log('' + peter);
console.log('Score count: ' + peter.scoreCount);
peter.addScore('23');
peter.addScore(200);
console.log('Highest score: ' + peter.highestScore);
console.log(`Top 5 score: [${peter.topFiveScore}]`);
console.log('' + peter);
peter.addScore(2000);
peter.addScore(300);
peter.addScore(50);
peter.addScore(700);
peter.addScore(700);
console.log('Highest score: ' + peter.highestScore);
console.log(`Top 5 score: [${peter.topFiveScore}]`);
console.log('' + peter);
console.log('Score count: ' + peter.scoreCount);
console.log();
let maria = new Player("Maria");
maria.addScore(350);
maria.addScore(779);
maria.addScore(180);
console.log('Highest score: ' + maria.highestScore);
console.log(`Top 5 score: [${maria.topFiveScore}]`);
console.log('' + maria);

