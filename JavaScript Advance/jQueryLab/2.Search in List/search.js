function search() {
    let searchText = $('#searchText').val();
    let towns = $('ul#towns li:contains("'+ searchText + '")')
    towns.css('font-weight', 'bold');
    $(':not(:contains(' + searchText + '))').css('font-weight', 'normal');
    $('#result').text(`${towns.length} matches found.`)

}