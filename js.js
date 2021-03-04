
// Встановіть час:

let end = new Date("March 4, 2021 1:30:40").getTime();

let hoursInner = document.getElementById("hours");
let minutesInner = document.getElementById("minutes");
let secondsInner = document.getElementById("seconds");

let hoursText = document.getElementById("hoursText");
let minutesText = document.getElementById("minutesText");
let secondsText = document.getElementById("secondsText");

let x = setInterval(function() {
    let now = new Date().getTime();
    
    let distance = end - now;
    
    let hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let second = Math.floor((distance % (1000 * 60)) / 1000);

    hoursInner.innerHTML = hour;
    minutesInner.innerHTML = minute;
    secondsInner.innerHTML = second;
    

    if (hour == 1 || hour == 21) {
        hoursText.innerHTML = "година";
    }
    if (hour == 0 || (hour >= 5 && hour <= 20)) {
        hoursText.innerHTML = "годин";
    }
    if ((hour >= 2 && hour <= 4) || (hour >= 22 && hour <= 24)) {
        hoursText.innerHTML = "години";
    }


    if (minute == 1 || minute == 21 || minute == 31 || minute == 41 || minute == 51) {
        minutesText.innerHTML = "хвилина";
    }
    if (minute == 0 || (minute >= 5 && minute <= 20) || (minute >= 25 && minute <= 30) || (minute >= 35 && minute <= 40) || (minute >= 45 && minute <= 50) || (minute >= 55 && minute <= 59)) {
        minutesText.innerHTML = "хвилин";
    }
    if ((hour >= 2 && hour <= 4) || (hour >= 22 && hour <= 24) || (minute >= 32 && minute <= 34) || (minute >= 42 && minute <= 44) || (minute >= 52 && minute <= 54) || (minute >= 55 && minute <= 59)) {
        minutesText.innerHTML = "хвилини";
    }


    if (second == 1 || second == 21 || second == 31 || second == 41 || second == 51) {
        secondsText.innerHTML = "секунда";
    }
    if (second == 0 || (second >= 5 && second <= 20) || (second >= 25 && second <= 30) || (second >= 35 && second <= 40) || (second >= 45 && second <= 50) || (second >= 55 && second <= 59)) {
        secondsText.innerHTML = "секунд";
    }
    if ((second >= 2 && second <= 4) || (second >= 22 && second <= 24) || (second >= 32 && second <= 34) || (second >= 42 && second <= 44) || (second >= 52 && second <= 54) || (second >= 55 && second <= 59)) {
        secondsText.innerHTML = "секунди";
    }


    if (distance < 0) {
        clearInterval(x);
        document.getElementById("button").style.visibility = "hidden";
    }

}, 1000);