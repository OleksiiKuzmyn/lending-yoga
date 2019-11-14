function timer(){
    let deadLine = '2019-12-31';

    function getTimeRemaining(endTime){
        let t = Date.parse(endTime) - Date.parse(new Date),
        seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor((t/(1000*60*60)));
        //hours = Math.floor((t/1000/60/60) % 24),
        //days = Math.floor((t/(1000*60*60*24))),
       return { 
            total: t,
            hours: hours,
            minutes: minutes,
            seconds: seconds 
        };

    }

    function setClock(id, endTime){
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1);

        function updateClock(){

            let t = getTimeRemaining(endTime);
            t.hours > 9 ? hours.textContent = t.hours : hours.textContent = '0'+t.hours;
            t.minutes > 9 ? minutes.textContent = t.minutes : minutes.textContent = '0'+t.minutes;
            t.seconds > 9 ? seconds.textContent = t.seconds : seconds.textContent = '0'+t.seconds;

            if(t.total <= 0){
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }

    }

    setClock('timer', deadLine);
}


module.exports = timer;