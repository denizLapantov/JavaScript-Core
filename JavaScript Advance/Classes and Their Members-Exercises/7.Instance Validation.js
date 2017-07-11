class CheckingAccount {
    constructor(clientId, email, firstName, lastName ){
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        if(value.length < 3 || value.length > 20 ) throw new TypeError(`Last name must be between 3 and 20 characters long`);
        let validCharacters = /^[a-zA-Z]*$/g;
        if(!value.match(validCharacters)) throw new TypeError(`Last name must contain only Latin characters`);
        this._lastName = value;
    }
    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        if(value.length < 3 || value.length > 20 ) throw new TypeError(`First name must be between 3 and 20 characters long`);
        let validCharacters = /^[a-zA-Z]*$/g;
        if(!value.match(validCharacters)) throw new TypeError(`First name must contain only Latin characters`);
        this._firstName = value;
    }
    get email() {
        return this._email;
    }

    set email(value) {
        let regex = /^[a-zA-Z{1}]*@[a-zA-Z]+[.A-Za-z]*$/g;
        if(!value.match(regex))  throw new TypeError("Invalid e-mail");
        this._email = value;
    }
    get clientId() {
        return this._clientId;
    }

    set clientId(value) {
        if(value.length !== 6) throw new TypeError("Client ID must be a 6-digit number");
        this._clientId = value;
    }
}

try {
    let acc = new CheckingAccount('545454', 'deniz@gmail.com', 'deniz', 'lapantov');
        console.log(acc);
}catch (ex){
    console.log(ex.message);
}
