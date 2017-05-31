function escaping(input) {
    String.prototype.htmlEscape = function() {
        return this.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    };
    let result = [];

    for (let str of input) {

      let  replaced =  str.htmlEscape();
       result.push(replaced);
    }

    console.log('<ul>');
    for (let str of result) {
        console.log(`<li>${str}</li>`)
    }
    console.log('</ul>');
}

escaping(['<div style=\"color: red;\">Hello, Red!</div>', '<table><tr><td>Cell 1</td><td>Cell 2</td><tr>']);