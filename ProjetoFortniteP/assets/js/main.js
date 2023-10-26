

// MENU --------------------------------------------------
const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event){
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav','fundo');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);


// Contagem //
function startTimer(duration, display) {
    var mTimer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(mTimer / 60, 10);
        seconds = parseInt(mTimer % 60, 10);
        minutes = minutes < 60 ? + minutes : minutes;
        seconds = seconds < 60 ?  + seconds : seconds;
        display.textContent = minutes + ":" + seconds;
        if (--mTimer < 0) {
            mTimer = duration;
        }
    }, 1000);
}
window.onload = function () {
    var duration = 720 * 5; 
        display = document.querySelector('#mTimer'); 
    startTimer(duration, display);

};


