function solve(commandsArr) {
    let commands = (function (){

        let list = [];

        function add(string) {
            list.push(string);
        }

        function remove(string) {
            list = list.filter(x=>x !== string);
        }

        function print() {
            console.log(list.join(","));
        }

        return {add,remove,print};
    })();

    for (let commandLine of commandsArr) {
        let command = commandLine.split(" ");
        commands[command[0]](command[1]);
    }
}


solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);