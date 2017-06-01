function extractTheLinks(input) {
    let regex = /www\.[a-zA-Z0-9\-]+(\.[a-z]+)+/g;
    for (let line of input) {
        let match = "";
        while (match =  regex.exec(line)){
            console.log(match[0]);
        }
    }
}
extractTheLinks(["Join WebStars now for free, at www.web-stars.com",
   "You can also support our partners:",
"Internet - www.internet.com",
"WebSpiders - www.webspiders101.com",
"Sentinel - www.sentinel.-ko"]);
