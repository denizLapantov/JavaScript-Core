function attachEventsListeners() {
    let day = document.getElementById('days');
    let hour = document.getElementById('hours');
    let minute = document.getElementById('minutes');
    let second = document.getElementById('seconds');


    document.getElementById('daysBtn').addEventListener('click',dayConvert);
    document.getElementById('hoursBtn').addEventListener('click',hourConvert);
    document.getElementById('minutesBtn').addEventListener('click',minuteConvert);
    document.getElementById('secondsBtn').addEventListener('click',secondConvert);


        function dayConvert() {
          let resultHour = Number(day.value) *  24;
            let resultMinutes = resultHour *  60;
            let resultSecond = resultMinutes *  60;
            hour.value = resultHour;
            minute.value = resultMinutes;
            second.value = resultSecond;

        }

    function hourConvert() {
        let resulstDays = Number(hour.value) /  24;
        let resultMinutes = Number(hour.value) *  60;
        let resultSecond = resultMinutes *  60;
        day.value = resulstDays;
        minute.value = resultMinutes;
        second.value = resultSecond;

    }
    function minuteConvert() {
        let resultHours = Number(minute.value) / 60;
        let resultDays = resultHours /  24;
        let resultSecond = Number(minute.value) *  60;
        day.value = resultDays;
        hour.value = resultHours;
        second.value = resultSecond;

    }
    function secondConvert() {
        let resultMinutes = Number(second.value) / 60;
        let resultDays = resultHours /  24;
        let resultHours = resultMinutes / 60;
        day.value = resultDays;
        hour.value = resultHours;
        minute.value = resultMinutes;
    }
}
