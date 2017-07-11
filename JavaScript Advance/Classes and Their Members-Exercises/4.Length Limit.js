class Stringer{
    constructor(string ,lenght){
        this.innerString  = string ;
        this.innerLength = lenght;
    }
    increase(lenght){
         this.innerLength +=lenght;
        if(this.innerLength < 3){
            this.innerLength = 0;
        }
    }
    decrease(lenght){
        this.innerLength -=lenght;
        if(this.innerLength < 3){
            this.innerLength = 0;
        }
    }
    toString(){
        if(this.innerLength < 3){
            return "...";
        }

        if(this.innerString.length > this.innerLength){
            this.innerString = this.innerString.substr(0, this.innerLength) + "...";
        }
        return this.innerString;
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); //Test

test.decrease(3);
console.log(test.toString()); //Te...

test.decrease(5);
console.log(test.toString()); //...

test.increase(4);
console.log(test.toString()); //Test
