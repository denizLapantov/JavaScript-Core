function initializeTable() {
    $('#createLink').click(addCountry);
    createCountry("Bulgaria","Sofia")
    createCountry("Germany","Berlin")
    createCountry("Russia","Moscow")
    fixLinks();

    function fixLinks() {
        $('tr a').show();
        $('tr:last-child a:contains(Down)').hide();
        $('tr:nth-child(3n) a:contains(Up)').hide();
    }

    function addCountry() {
    let name = $('#newCountryText').val();
    let capital = $('#newCapitalText').val();
    createCountry(name,capital);
    }

    function createCountry(name,capital) {
    $('<tr>')
        .append($(`<td>${name}</td>`))
        .append($(`<td>${capital}</td>`))
        .append($(`<td>`)
            .append($('<a href="#">[Up]</a>').click(moveUp))
            .append($('<a href="#">[Down]</a>').click(moveDown))
            .append($('<a href="#">[Delete]</a>').click(Delete)))
        .appendTo($('#countriesTable'))
        fixLinks()
    }
    
    function moveUp() {
        let currentRow = $(this).parent().parent();
        currentRow.insertBefore(currentRow.prev());
        fixLinks();
    }

    function moveDown() {
        let currentRow = $(this).parent().parent();
        currentRow.insertAfter(currentRow.next());
        fixLinks();
    }

    function Delete() {
    $(this).parent().parent().remove();
    }
}
