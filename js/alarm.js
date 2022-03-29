console.log("connected");

const Alarm = (time) => {
    setTimeout(() => {
        if (document.querySelector(".timer").innerHTML == `${time.HH}:${time.MM}:${time.SS} ${time.timeZone}`) {
            // console.log("wake up!!");
            document.querySelector('#wakeUpTitle').innerHTML = `Wake up it's ${time.HH}:${time.MM}:${time.SS} ${time.timeZone} 😲`;
            setTimeout(() => {
                document.querySelector('#wakeUpTitle').innerHTML = `😪`;
            }, 10000);
        } else {
            Alarm(time);
        }
    }, 100);
};

const setAlarm = () => {
    let cardList = document.querySelector(".cardList");

    const time = {
        HH: document.querySelector("#HH").value,
        MM: document.querySelector("#MM").value,
        SS: document.querySelector("#SS").value,
        timeZone: document.querySelector("#zoneSelect").value,
    };

    html =
        cardList.innerHTML +
        `<article class="card">
                                    <p>Alarm set for</p>
                                    <h2>${time.HH}:${time.MM}:${time.SS} ${time.timeZone}</h2>
                                </article>`;

    cardList.innerHTML = html;

    Alarm(time);
};

document.querySelector("#setBtn").addEventListener("click", setAlarm);
