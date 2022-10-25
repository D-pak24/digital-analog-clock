const hrs = document.querySelector('.hrs');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');
const mon = document.querySelector('.month');
const dates = document.querySelector('.date');
const todays = document.querySelector('.day')

function analogClock() {
    const time = new Date();
    let weekDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    let today = weekDay[time.getDay()];
    let date = time.getDate();
    let month = time.getMonth();
    const seconds = time.getSeconds();
    const mins = time.getMinutes();
    const hr = time.getHours();
    const secondsDeg = ((seconds / 60) * 360) + 90;
    const minDeg = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
    const hrsDeg = ((hr / 12) * 360) + ((mins / 60) * 30) + 90;
    sec.style.transform = `rotate(${secondsDeg}deg)`;
    min.style.transform = `rotate(${minDeg}deg)`;
    hrs.style.transform = `rotate(${hrsDeg}deg)`;
    todays.innerText = today;
    dates.innerText = date < 10 ? "0" + date : date;
    mon.innerText = month < 10 ? "0" + month : month;
}

setInterval(analogClock, 1000);
analogClock();