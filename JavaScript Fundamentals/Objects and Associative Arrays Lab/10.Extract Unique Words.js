function extractUniqueWords(input) {
    let result = new Set();
    let regex = /\b[a-zA-Z]+\b/g;

    for (let line of input) {
        let matches = line.match(regex);
        matches.forEach(x=>result.add(x.toLowerCase()));
    }
    console.log([...result.values()].join(", "));
}
extractUniqueWords(["Interdum et malesuada fames ac ante ipsum primis in faucibus.",
    "Vestibulum volutpat lacinia blandit.",
     "Pellentesque dignissim odio in hendrerit lacinia.",
        "Vivamus placerat porttitor purus nec hendrerit.",
        "Aliquam erat volutpat. Donec ac augue ligula.",
        "Praesent venenatis sapien vitae libero ornare, nec pulvinar velit finibus.",
        "Proin dui neque, rutrum vel dolor ut, placerat blandit sapien.",
        "Pellentesque at est arcu.",
        "Nullam eget orci laoreet, feugiat nisi vitae, egestas libero.",
        "Pellentesque pulvinar aliquet felis.",
        "Interdum et malesuada fames ac ante ipsum primis in faucibus.",
        "Etiam sit amet nisl ex.",
        "Sed lacinia pretium metus quis fermentum.",
        "Praesent a ante suscipit, efficitur risus cursus, scelerisque risus."]);