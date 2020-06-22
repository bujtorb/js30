const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

msg.text = document.querySelector('[name="text"]').value;

function populateVoices() {
    voices = this.getVoices();
    voicesDropdown.innerHTML = voices
   /*  .filter(voices => voice.lang.include('en')) */
    .map(voices => `<option value ="${voices.name}">${voices.name} (${voices.lang})</option>`).join('');

}


function setVoice () {
msg.voice = voices.find(x=> x.name === this.value);
toggle();
}

function toggle(startOver = true) {
    speechSynthesis.cancel();

    if(startOver) {
        speechSynthesis.speak(msg);
    }
   
}

function setOption () {
    msg[this.name] = this.value;
    toggle();

}


speechSynthesis.addEventListener('voiceschanged', populateVoices);
voicesDropdown.addEventListener('change', setVoice);
options.forEach(o => o.addEventListener('change', setOption));
speakButton.addEventListener('click', toggle);
stopButton.addEventListener('click', ()=>toggle(false));
