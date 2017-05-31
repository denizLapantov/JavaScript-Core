function censorship(input,arr) {

    RegExp.escape= function(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    };
    let text = input;
    let words = arr.map(RegExp.escape).join("|");
    let regex = new RegExp(words,'g');
    text = text.replace(regex, w => '-'.repeat(w.length));
    return text;

}

console.log(censorship('roses are red, violets are blue', [', violets are', 'red']));

//second decision;

function censor(input,arr) {
    let text = input;
    let words = arr;

    for (let w of words) {
        let replaced = '-'.repeat(w.length);
        while (text.indexOf(w) > -1){
            text = text.replace(w,replaced);
        }
    }

    return text;
}

console.log(censor('roses are red, violets are blue', [', violets are', 'red']));
