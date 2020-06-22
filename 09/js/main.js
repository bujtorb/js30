const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

    // Regular
    console.log();

    // Interpolated
    /* console.log(`Hello i am ${variable}`); */


    // Styled
    console.log('%c Its a text', 'font-size:50px; background: red;  text-shadow: 10px 10px 0 blue');
    // warning!
    console.warn('OH NOOO');

    // Error :|
    console.error('ERROR!');

    // Info
    console.info('This is an info');

    // Testing
    const p = document.querySelector('p');

    console.assert(p.classList.contains('wrong element'), 'That is wrong elment')

    // clearing
   /*  console.clear(); */

    // Viewing DOM Elements
    console.log(p);
    console.dir(p);

    // Grouping together

  


    dogs.forEach(dog => {
       /*  console.group(`${dog.name}`); */
        console.groupCollapsed(`${dog.name}`);
        console.log(`Dog is ${dog.name} `);
        console.log(`Dog age is ${dog.age}`);
        console.groupEnd(`${dog.name}`);
    });

    // counting
    console.count('Test1');
    console.count('Test1');
    console.count('Test1');
    console.count('Test2');
    console.count('Test2');
    console.count('Test2');
    console.count('Test1');
    console.count('Test1');
    console.count('Test2');
    console.count('Test2');
    console.count('Test1');

    // timing

    console.time('fetching data');
    fetch('https://api.github.com/users/wesbos')
      .then(data => data.json())
      .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
      });

    console.table(dogs);
