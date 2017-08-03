function attachEvents() {

    $('#refresh').click(getMessages);
    $('#submit').click(sendMessage);

    function sendMessage() {
        let jsonMessage = {
            'author': $('#author').val(),
            'content': $('#content').val(),
            'timestamp': Date.now()
        };

        let sendMassageRequest = {
            url: `https://messenger-88d25.firebaseio.com/.json`,
            method: "POST",
            data: JSON.stringify(jsonMessage),
            success: getMessages

        };
        $('#content').val('');
        $.ajax(sendMassageRequest);
    }

    function getMessages() {
        $.get(`https://messenger-88d25.firebaseio.com/.json`).then(displayMessages)
    }
    function displayMessages(messages) {
        let output = $('#messages');
        output.empty();
        let result = '';
        for (let key in messages) {

            result += `${messages[key]['author']}: ${messages[key]['content']}\n`
        }
        output.append(result);
    }
}
