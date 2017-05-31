function validateEmail(str) {
    function validateEmail(email)
    {
        var re =/^[a-zA-Z0-9]+@[a-z]+.[a-z]+$/;
        return re.test(email);
    }

    let email = validateEmail(str);

    if(email){
        console.log("Valid");
    }else {
        console.log("Invalid");

    }
}
validateEmail('invalid@emai1.bg');