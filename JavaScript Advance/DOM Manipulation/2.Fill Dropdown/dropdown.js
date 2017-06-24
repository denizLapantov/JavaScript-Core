function addItem() {

    let option = document.createElement('option')
    let text = document.getElementById('newItemText').value;
    let value = document.getElementById('newItemValue').value;
    let select = document.getElementById('menu');
    option.text = text;
    option.value = value;

    select.add(option);
    text = document.getElementById('newItemText').value = ''
    value = document.getElementById('newItemValue').value = ''
}