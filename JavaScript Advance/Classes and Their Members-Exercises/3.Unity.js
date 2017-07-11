class Rat{
    constructor(name){
        this.name = name;
        this.rats = [];
    }

    unite(otherRat){
        if(otherRat instanceof Rat){
            this.rats.push(otherRat);
        }
    }
    getRats(){
        return this.rats;
    }

    toString(){
      let str = `${this.name}`;

        for (let rat of this.rats) {
            str += `\n##${rat}`
        }

        return str;
    }
}


let test = new Rat("Pesho");
console.log(test.toString());
test.unite(new Rat("Gosho"));
test.unite(new Rat("Sasho"));
console.log(test.toString());

