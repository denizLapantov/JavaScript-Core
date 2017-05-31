function userNames(input) {
let result = [];

    for (let email of input) {
        let[name,domain] = email.split('@');
        name  = name + ".";
        let domainParts= domain.split('.');
        domainParts.forEach(x=>name +=x[0]);
        result.push(name);
    }
    console.log(result.join(", "));
}

userNames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);
