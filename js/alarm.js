console.log("connected");

const setAlarm = () => {
    let cardList = document.querySelector(".cardList");

    let HH = document.querySelector('#HH').value;
    let MM = document.querySelector('#MM').value;
    let SS = document.querySelector('#SS').value;
    let timeZone = document.querySelector('#zoneSelect').value;

    html = cardList.innerHTML + `<article class="card">
                                    <p>Alarm set for</p>
                                    <h2>${HH}:${MM}:${SS} ${timeZone}</h2>
                                </article>`;
    
    cardList.innerHTML = html;
};


document.querySelector('#setBtn').addEventListener('click',setAlarm);
