function locator(input) {
    function checker(x1,x2) {
        if(x1 >=1 && x1 <=3 && x2 >=1 && x2 <=3){
            console.log("Tuvalu");
        } else if (x1 >=8 && x1 <=9 && x2 >=0 && x2 <=1){
            console.log("Tokelau");
        }else  if(x1 >=5 && x1 <=7 && x2 >=3 && x2 <=6){
            console.log("Samoa");
        }else  if(x1 >=0 && x1 <=2 && x2 >=6 && x2 <=8){
            console.log("Tonga");
        }else  if(x1 >=4 && x1 <=9 && x2 >=7 && x2 <=8){
            console.log("Cook");
        }else {
            console.log("On the bottom of the ocean");
        }
    }
    for (var i = 0; i < input.length; i= i + 2) {
        checker(input[i],input[i + 1]);
    }
}

locator([4, 2, 1.5, 6.5, 1, 3]);