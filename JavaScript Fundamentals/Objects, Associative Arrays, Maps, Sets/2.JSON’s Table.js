function jsonTable(json) {
    String.prototype.htmlEscape = function() {
        return this.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    };
   let html = '<table>\n';
    for (let line of json) {
        let input = JSON.parse(line);
        html +='    <tr>\n';
        html +=`        <td>${input.name.htmlEscape()}</td>\n`;
        html +=`        <td>${input.position.htmlEscape()}</td>\n`;
        html +=`        <td>${input.salary}</td>\n`;
        html +='    <tr>\n';
    }
    html +="</table>";
    console.log(html);
}

jsonTable(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}']);