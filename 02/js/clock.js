const hourHand = document.querySelector('.hour-hand');
const minutesHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');
const allHands = document.querySelectorAll('.hand');


function setDate ()  {
    const now = new Date();

    const sec = now.getSeconds();
    const secDeg = ((sec / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secDeg}deg)`;

    const min = now.getMinutes();
    const minDeg = ((min / 60) * 360) + 90;
    minutesHand.style.transform = `rotate(${minDeg}deg)`;

    const hour = now.getHours();
    const hourDeg = ((hour / 60) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;

    if(secDeg === 90|| minDeg === 90 || hourDeg === 90 ) {
        allHands.forEach(hand => hand.style.transition = 'none');
    } else {
        allHands.forEach(hand => hand.style.transition = '');
    }
}

setInterval (()=>{
    setDate();
}, 1000);