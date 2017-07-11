class Record{
    constructor(temperature, humidity, pressure, windSpeed){
        this.id = Record.counter();
        this.temperature =Number(temperature);
        this.humidity =humidity;
        this.pressure =pressure;
        this.windSpeed =windSpeed;
    }
    static counter() {
        if (!Record.currentId)
            Record.currentId = 0;
        return Record.currentId++;
    }

    toString(){
        return `Reading ID: ${this.id}\n` +
            `Temperature: ${this.temperature}*C\n` +
            `Relative Humidity: ${this.humidity}%\n` +
            `Pressure: ${this.pressure}hpa\n` +
            `Wind Speed: ${this.windSpeed}m/s\n` +
            `Weather: ${this.weather()}`

    }

    weather(){
        if(this.temperature < 20 && (this.pressure < 700 || this.pressure > 900) && this.windSpeed > 25)
            return `Stormy`;
        return 'Not stormy'
    }
}



let record1 = new Record(32, 66, 760, 12);
console.log(record1.toString());

let record2 = new Record(32, 66, 760, 12);
console.log(record2.toString());
