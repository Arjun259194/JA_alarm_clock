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
  };

  timer.innerHTML = `${time.hours}:${time.minutes}:${time.seconds}`;

  setTimeout(() => {
    currantTime();
  }, 1000);
};

currantTime();
