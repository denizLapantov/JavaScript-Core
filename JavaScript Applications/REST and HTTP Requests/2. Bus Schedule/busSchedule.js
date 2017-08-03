function solve() {
    let currentId = 'depot';
    let nextStop = '';
    
    function depart() {
        $('#depart').attr("disabled",true);
        $('#arrive').removeAttr("disabled");


        let request = {
            url: `https://judgetests.firebaseio.com/schedule/${currentId}.json`,
            method: "GET",
            success : updateInfo,
            error : disableButton
        };
        $.ajax(request);
    }

    function updateInfo(data) {
        $('.info').text(`Next stop ${data.name}`);
        currentId = data.next;
        nextStop = data.name;
    }
    function disableButton() {
        $('#depart').attr("disabled",true);
        $('#arrive').attr("disabled",true);
        $('#info').text("Error");
    }
    function arrive() {
        $('#depart').removeAttr("disabled");
        $('#arrive').attr("disabled",true);
        $('.info').text(`Arriving at ${nextStop}`)
    }

    return {
        depart,
        arrive
    };
}