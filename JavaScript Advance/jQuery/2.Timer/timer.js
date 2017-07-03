function timer() {
    let time = 0;
    let  intervalId;
    let isRunning = false;
    let startBtn = $('#start-timer');
    let stopBtn = $('#stop-timer');

    startBtn.on('click',startTimer);

    stopBtn.on('click',stopTimer);

    function startTimer() {
        if(!isRunning){
            intervalId = setInterval(increaseTime,1000);
            isRunning = true;
        }
    }

    function stopTimer() {
        clearInterval(intervalId);
       isRunning = false;
    }

    function increaseTime() {
        time++;
        $('#hours').text(('0' + Math.trunc(time / 3600)).slice(-2));
        $('#minutes').text(('0' + Math.trunc(time / 60) % 60).slice(-2));
        $('#seconds').text(('0' + Math.trunc(time % 60)).slice(-2));
    }
}