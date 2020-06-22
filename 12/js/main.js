pressedArray = [];
const secretCode = 'bubu';

window.addEventListener('keyup', (e)=> {
    pressedArray.push(e.key);
    pressedArray.splice(-secretCode.length-1, pressedArray.length-secretCode.length);

if(pressedArray.join('').includes(secretCode)) {
    alert('Bingo');
    cornify_add();
    }
    
   
});