function countWordsInAText(input) {
    let inputAsStr = input.join('\n');

    let words = inputAsStr.split(/[^A-Za-z0-9_]+/).filter(x=> x!="");
    let wordCount = {};
    for (let w of words) {
        wordCount[w] ? wordCount[w]++ : wordCount[w] = 1;

    }
    return JSON.stringify(wordCount);
}
console.log(countWordsInAText(["JS devs use Node.js for server-side JS.-- JS for devs"]));