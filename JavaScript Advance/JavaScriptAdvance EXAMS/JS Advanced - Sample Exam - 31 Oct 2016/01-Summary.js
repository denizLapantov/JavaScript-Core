function attachEvents(button) {
    $(button).on('click',extractT);

    function extractT() {
        let textToDisplay = $('#content strong').text();
        let newDiv =$('<div>').attr('id', 'summary').
        append($('<h2>').text("Summary"))
            .append($('<p>').text(textToDisplay));

        $('#content').parent().append(newDiv);
    }
}