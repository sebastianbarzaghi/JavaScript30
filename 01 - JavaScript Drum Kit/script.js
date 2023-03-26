// get audio with data key corresponding to that of the key pressed down

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.code}"]`);
    const key = document.querySelector(`div[data-key="${e.code}"]`);
    if (!audio) return this.alert("Try another key");
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
};

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
    console.log(e.propertyName);
};

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);