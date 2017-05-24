function ColorfulNumbers(number) {

    console.log("<ul>")
    for(i = 1; i <= number ; i++){
        if(i % 2 !=0){
            console.log("<li><span style='color:green'>" + i + "</span></li>")

        }
        if (i % 2 ==0){
            console.log("<li><span style='color:blue'>"+ i +"</span></li>")
        }
    }
    console.log("</ul>")
}

ColorfulNumbers(10);