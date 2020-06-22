const triggers = document.querySelectorAll('a');
const highligth = document.createElement('span');
highligth.classList.add('highlight');
document.body.append(highligth);

function highligthLink() {
    const linkCoords = this.getBoundingClientRect();
    console.log(linkCoords);
    const coords = {
        width: linkCoords.width,
        height: linkCoords.height,
        top: linkCoords.top + window.scrollY,
        left: linkCoords.left + window.scrollX
    };

    highligth.style.height = `${coords.height}px`;
    highligth.style.width = `${coords.width}px`;
    highligth.style.transform = `translate(${coords.left}px, ${coords.top}px)`;

}


triggers.forEach(a => a.addEventListener('mouseenter', highligthLink));