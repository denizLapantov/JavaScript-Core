function daggersAndSwords(input) {
    console.log('<table border="1">');
    console.log('<thead>');
    console.log('<tr><th colspan="3">Blades</th></tr>')
    console.log('<tr><th>Length [cm]</th><th>Type</th><th>Application</th></tr>');
    console.log('</thead>');
    console.log('<tbody>');

    function checkNumber(num) {
        if(num <= 40 && num >10){
            return "dagger";
        }else {
            return "sword";
        }
    }
    for (let line of input) {
        let num = Number(line);
        let number = Math.floor(num);

        if (number <= 10){
            continue;
        }
        else {
                if((number - 1) % 5 === 0){
                    console.log(`<tr><td>${number}</td><td>${checkNumber(number)}</td><td>blade</td></tr>`)
                }
                if((number - 2) % 5 === 0){
                    console.log(`<tr><td>${number}</td><td>${checkNumber(number)}</td><td>quite a blade</td></tr>`)
                }
                if((number - 3) % 5 === 0){
                console.log(`<tr><td>${number}</td><td>${checkNumber(number)}</td><td>pants-scraper</td></tr>`)
                }
                if((number - 4) % 5 === 0){
                console.log(`<tr><td>${number}</td><td>${checkNumber(number)}</td><td>frog-butcher</td></tr>`)
                }
                if((number - 5) % 5 === 0){
                console.log(`<tr><td>${number}</td><td>${checkNumber(number)}</td><td>*rap-poker</td></tr>`)
                }
        }
    }

    console.log("</tbody>");
    console.log("</table>");
}

daggersAndSwords([17.8,
    19.4,
    13,
    55.8,
    126.96541651,
    3]);