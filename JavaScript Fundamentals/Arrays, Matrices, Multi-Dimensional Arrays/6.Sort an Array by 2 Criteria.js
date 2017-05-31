function sort(input) {

    function SortByLength(a,b) {
        return a.length - b.length || sortByName(a,b);
    }
    
    function sortByName(a,b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
    }

    input.sort((a,b) => SortByLength(a,b)).forEach(c=>console.log(c));
}

sort(["Isacc", "Theodor", "Jack", "Harrison", "George"]);