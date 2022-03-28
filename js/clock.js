console.log("connected");

let timer = document.querySelector(".timer");

let currantDate = new Date();

let currantTime = () => {
    let currantDate = new Date();

    let time = {
        seconds: currantDate.getSeconds(),
        minutes: currantDate.getMinutes(),
        hours:
            currantDate.getHours() > 12
                ? Math.ceil(currantDate.getHours() % 12)
                : currantDate.getHours(),
        zone: currantDate.getHours() > 12 ? "PM" : "AM"
    };

    if (time.hours == 0) {
        time.hours = 12;
    }

    timer.innerHTML = `${time.hours}:${time.minutes}:${time.seconds} ${time.zone}`;

    setTimeout(() => {
        currantTime();
    }, 1000);
};

currantTime();
