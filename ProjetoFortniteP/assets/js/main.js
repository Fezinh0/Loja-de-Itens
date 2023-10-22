const btnMobile = document.getElementById('btnMobile');

function toggleMenu(event){
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav','fundo');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);








// function Regressive(duration, display) {
//     var timer = duration, minutes, seconds;

//     setInterval(function() {
//         minutes = parseInt(timer / 60, 10);
//         seconds = parseInt(timer % 60, 10);
        
//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;
        
//         display.textContent = minutes + ":" + seconds;

//         if(--timer < 0) {
//             timer = duration;
//         }

//     }, 1000)
// }

// window.onload = function() {
//     var duration = 60 * 24;
//     var display = document.querySelector("#timer");

//     startTimer(duration, display);
// }