function templateFormat(input){
    console.log(`<?xml version="1.0" encoding="UTF-8"?>`);
    console.log("<quiz>");
    function drawQuestion(question) {
        let html = "\t<question>\n";
        html += `\t\t${question}\n`;
        html +="\t</question>";

        return html;
    }

    function drawAnswer(answer) {
        let html = "\t<answer>\n";
        html += `\t\t${answer}\n`;
        html +="\t</answer>";

        return html;
    }
     let html = '';

    for (var i = 0; i < input.length; i++) {
        if( i % 2 ==0){
            console.log(drawQuestion(input[i]));
        }else {
            console.log(drawAnswer(input[i]));
        }

    }
    html +="</quiz>";
    console.log(html);
}

templateFormat(["Dry ice is a frozen form of which gas?",
    "Carbon Dioxide",
    "What is the brightest star in the night sky?",
    "Sirius"]

);


