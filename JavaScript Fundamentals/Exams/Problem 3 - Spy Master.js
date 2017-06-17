function solve(input) {
    let specialKey = input.shift();

        let pattern = `(\\s|^)(${specialKey})(\\s*)([#!%$A-Z]{8,})(\\.|,|\\s|$)`
    let regex = new RegExp(pattern, 'gi');

    for (let line of input) {
        let match;
        while (match = regex.exec(line)){
            if(match[4].toUpperCase() !== match[4]){
              continue;
            }

           let decodedMessage =  match[4].toLowerCase().replace(/!/g, "1").replace(/%/g, "2").
           replace(/#/g, "3").replace(/\$/g, "4");
           let decoded = match[4].replace(match[4], decodedMessage);
           line = line.replace(match[0], match[1] + match[2] + match[3] +  decoded + match[5]);
        }
        console.log(line);
    }
}

solve(["enCode",
  "ome messages are just not encoded what can you do?",
   "RE - ENCODE THEMNOW! - he said.",
   "Damn encode, ITSALLHETHINKSABOUT, eNcoDe BULL$#!%."])
