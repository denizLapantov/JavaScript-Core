function wordsUppercase(str) {
    let strUpper = str.toUpperCase();
   function extractWords() {
       return strUpper.split(/\W+/);;
   } 
      let words = extractWords();
      words = words.filter(x=>x != '');
      return words.join(', ');
}

console.log(wordsUppercase('Hi, how are you?'));
