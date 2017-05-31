function formFilter(userName,emailAdr,phone,input) {
    let name = userName;
    let email = emailAdr;
    let number = phone;
    let form = input;

    for(let line of form) {
        console.log(line.replace(/<![a-zA-Z]+!>/g,name).replace(/<@[a-zA-Z]+@>/g,email).replace(/<\+[a-zA-Z]+\+>/g,number));
    }
}

formFilter('Pesho',
    'pesho@softuni.bg',
    '90-60-90',
    ['Hello, <!username!>!',
        'Welcome to your Personal profile.',
        'Here you can modify your profile freely.',
        'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)',
        'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',
        'Your current phone number is: <+number+>. Would you like to change that? (Y/N)']);