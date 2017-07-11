class MailBox {
    constructor(){
        this.box = [];
    }

    addMessage(subject,text){
     this.box.push({
         subject: subject,
         text: text
     });

     return this;
    }
    get messageCount(){
        return this.box.length;
    }
    deleteAllMessages(){
        this.box = [];
    }

    findBySubject(substr){
        let newArr = [];
        this.box.filter(i => i.subject.includes(substr)).forEach(x=>newArr.push(x));
        return newArr;
    }

    toString(){
        if(this.box.length === 0){
            return "* (empty mailbox)";
        }
        let output = '';
            for (let obj of this.box) {
                output += `* [${obj.subject}] ${obj.text}\n`
            }
           return output;
    }
}

let mb = new MailBox();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
mb.addMessage("meeting", "Let's meet at 17/11");
mb.addMessage("beer", "Wanna drink beer tomorrow?");
mb.addMessage("question", "How to solve this problem?");
mb.addMessage("Sofia next week", "I am in Sofia next week.");
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
console.log("Messages holding 'rakiya': " +
    JSON.stringify(mb.findBySubject('rakiya')));
console.log("Messages holding 'ee': " +
    JSON.stringify(mb.findBySubject('ee')));

mb.deleteAllMessages();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);

console.log("New mailbox:\n" +
    new MailBox()
        .addMessage("Subj 1", "Msg 1")
        .addMessage("Subj 2", "Msg 2")
        .addMessage("Subj 3", "Msg 3")
        .toString());
