function extractNumbers(input) {
    let number =Number(input[0]);
    let arr = [];
       arr.push(number);
    for (var i = 1; i < input.length; i++) {
       if(number <= input[i] ){
           arr.push(input[i]);
           number = input[i];
       }else {
           continue;
       }
    }

    for (let obj of arr) {
        console.log(obj);
    }
}

extractNumbers([20, 3, 2, 15, 6, 1]);

function extractEmails(arr) {
    let result = [];
    for (let email of arr) {
        let[alias,domain] = email.split('@');
        let name = alias + ".";
        let domainParts = domain.split('.');
        domainParts.forEach(x=>name += x[0]);
        result.push(name)
    }

   console.log(result.join(", "));


}

extractEmails(["deniz@ds.vf","elis@dasda.bg.bg"]);