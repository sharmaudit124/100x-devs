function updateClockInSimpleFormat() {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    hours = (hours < 10) ? String(0) + hours : hours
    let minutes = currentTime.getMinutes();
    minutes = (minutes < 10) ? String(0) + minutes : minutes
    let seconds = currentTime.getSeconds();
    seconds = (seconds < 10) ? String(0) + seconds : seconds

    let timeFormat = hours + ':' + minutes + ':' + seconds;
    console.log(timeFormat);
}

function updateClockInHoursFormat() {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    minutes = (minutes < 10) ? String(0) + minutes : minutes;
    seconds = (seconds < 10) ? String(0) + seconds : seconds;
    let amPm = (hours > 12) ? 'PM' : 'AM';
    hours = (amPm === 'PM') ? hours - 12 : hours;
    hours = (hours < 10) ? String(0) + hours : hours

    let timeFormat = hours + ':' + minutes + ':' + seconds + ' ' + amPm;
    console.log(timeFormat);
}

//setInterval(updateClockInSimpleFormat, 1000);
setInterval(updateClockInHoursFormat, 1000);
