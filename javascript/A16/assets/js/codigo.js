updateClock();

setInterval(updateClock, 1000);

function updateClock() {
    let date = new Date();
    document.querySelector('.reloj').innerText = date.getHours() + ' : ' + date.getMinutes() + ' : ' + date.getSeconds();
}