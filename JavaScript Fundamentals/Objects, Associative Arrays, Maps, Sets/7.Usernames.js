function userNames(input) {
    let names = new  Set();
    for (let word of input) {
        names.add(word);
    }

    function SortByLength(a,b) {
        return a.length - b.length || sortByName(a,b);
    }

    function sortByName(a,b) {

        return a.localeCompare(b);
    }
        Array.from(names).sort((a,b) => SortByLength(a,b)).forEach(c=>console.log(c));
}

userNames(["Ashton",
    "Kutcher",
    "Ariel",
    "Lilly",
    "Keyden",
    "Aizen",
    "Billy",
    "Braston"]);