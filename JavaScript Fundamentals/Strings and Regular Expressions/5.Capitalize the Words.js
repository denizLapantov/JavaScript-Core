function capitalize(string) {
    let toUpper = string.toLowerCase();
    let result = toUpper.split(" ");
    let words = [];
    for (let obj of result) {
        let word = (obj.charAt(0).toUpperCase())+ obj.slice(1);
        words.push(word);
    }
    console.log(words.join(" "));
}
capitalize("hoe EEEE");