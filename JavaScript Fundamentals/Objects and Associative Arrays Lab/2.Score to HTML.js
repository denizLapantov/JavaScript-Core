function scoreToHTML(input) {
    String.prototype.htmlEscape = function() {
        return this.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    };

    let inputAsStr = JSON.parse(input);

    console.log('<table>');
    console.log(' <tr><th>name</th><th>score</th></tr>');

    for (let line of inputAsStr) {
        console.log(`<tr><td>${line.name.htmlEscape()}</td><td>${line.score}</td></tr>`)
    }

    console.log("</table>");
}

scoreToHTML(['[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]']);