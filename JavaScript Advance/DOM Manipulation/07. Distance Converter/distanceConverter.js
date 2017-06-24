function attachEventsListeners() {
    document.getElementById('convert').addEventListener('click', convert);
    let rates = {
        'km': 1000,
        'm': 1,
        'cm': 0.01,
        'mm': 0.001,
        'mi': 1609.34,
        'yrd': 0.9144,
        'ft': 0.3048,
        'in': 0.0254
    };

    function convert() {
        let incNum = Number(document.getElementById('inputDistance').value);
        let inUnit = document.getElementById('inputUnits').value;
        let outUnit = document.getElementById('outputUnits').value;
        let result = incNum * rates[inUnit] / rates[outUnit];
        document.getElementById('outputDistance').value = result;
    }
}