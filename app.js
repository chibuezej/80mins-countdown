const getTime = 60;
let time = getTime *60;

const countdownEl = document.getElementById('countdown');
setInterval(updatecountdown, 1000);
function updatecountdown(){
    const minutes = Math.floor(time/60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEl.innerHTML = `${minutes}: ${seconds}`;
    time--;
}