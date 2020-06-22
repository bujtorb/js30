function removeTransition(e) {
    if (e.propertyName !== 'transform') {
        return;
    }
    this.classList.remove('playing');
}

function playSound(e, dataKey) {
    let audio;
    let key;

    if (e != null) {
        audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    } else {
        audio = document.querySelector("audio[data-key='" + dataKey + "']");
        key = document.querySelector(".key[data-key='" + dataKey + "']");
    }

    if (!audio) {
        return;
    }
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));


keys.forEach(key => {
    key.addEventListener('click', function (e) {
        const dataKey = this.dataset.key;
        playSound(null, dataKey);
    });
});

window.addEventListener('keydown', playSound);