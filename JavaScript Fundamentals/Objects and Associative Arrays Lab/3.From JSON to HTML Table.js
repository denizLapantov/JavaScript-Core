function fromJSONToHTMLTable(json) {

    String.prototype.htmlEscape = function() {
        return this.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    };

    let arr = JSON.parse(json);

     let html = `<table>\n`;
     html +='   <tr>';
    for (let obj of Object.keys(arr[0])) {
      html += `<th>${obj.htmlEscape()}</th>`
    }
    html += `</tr>\n`;

    for (let obj of arr) {
          html +='   <tr>';
        for (let value of Object.keys(obj)) {
            let escaped =String(obj[value]);
             html += `<td>${escaped.htmlEscape()}</td>`
        }
         html +='</tr>\n';
    }
           html+=`</table>`;

    console.log(html);
}

fromJSONToHTMLTable('[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]');