// start with strings, numbers and booleans

  let age = 100;
  let age2 = age;
  console.log(age, age2);
  age = 300;
  console.log(age, age2);

  let name ="Géza";
  let name2 = name;
  console.log(name, name2);
  name = "Béla"
  console.log(name, name2);


    // array (reference)
    const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

    const team = players;
    team[3]="Géza";
    console.log(players, team);
   
    /* copy -------------------------------------------- */
    const team2 = players.slice();
    team2[3]="Béla";
    console.log(players, team2);
    /* copy -------------------------------------------- */

    const team3 = [].concat(players);
    team3[3]="Teszt Elek";
    console.log(players, team3);
    /* copy -------------------------------------------- */
    const team4 = [...players];
    team4[3]="Pista";
    console.log(players, team4);
     /* copy -------------------------------------------- */
     const team5 = Array.from(players);
     team5[3]="Anna";
     console.log(players, team5);
    

    /* reference -------------------------------------------- */
    const person = {
      name: 'Wes Bos',
      age: 80
    };
    console.log(person);
    const person2 = person;
    person2.number = 99;
    console.log(person);
  
    /* copy -------------------------------------------- */

    const person3 = Object.assign({}, person, {number: 999});
    console.log(person, person3);

    /* not working -------------------------------------------- */

    /*  const person4 = {...person};  */

    /* copy -------------------------------------------- */
    const bb = {
      name: 'BB',
      age: 100,
      social: {
        twitter: '@bb',
        facebook: 'bb.developer'
      }
    };

    /* Object.assign only does 1 level deep */
    const dev = Object.assign({}, bb);
    dev.name = 'Cc';

    console.log(bb, dev);

    /* DONT DO THIS */
    const dev2 = JSON.parse(JSON.stringify(wes));







