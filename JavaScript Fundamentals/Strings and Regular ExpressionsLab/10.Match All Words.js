function matchAllWords(str) {

    console.log(str.split(/\W+/).filter(x=> x != "").join("|"));

}
matchAllWords('_(Underscores) are also word characters');