const div = document.querySelectorAll('div');

function logText(e){
    console.log(this.classList.value);
    e.stopPropagation(); //stop bubbling
}


div.forEach(div =>div.addEventListener('click', logText, { 
    capture: false, //direction
    once: true    // run once
 }));

 button.addEventListener('click', () => {
    console.log('Click!!!');
  }, {
    once: true
  });   // unbind button