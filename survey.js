const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :) ", (name) => {
  
  rl.question('What is an activity you like doing? ', (activity) => {

    rl.question('What do you listen to while doing that? ', (music) => {

      rl.question("Which meal is your favourite? (eg: dinner, brunch, etc.) ", (meal) =>{

        rl.question("What's your favourite thing to eat in that meal? ", (food) => {

          rl.question("What is your absolute favourite sport? ", (sport) => {

            rl.question("If you could have any superpower what would it be? ", (superpower) =>{

              console.log(`${name} enjoys ${activity} and during that activity likes listening to ${music}. Their favourite mealtime is ${meal} and in that they love eating ${food}. Their favourite sport is ${sport} and their secret superpower is ${superpower}.`);

              rl.close();
            })
          })
        })
      })
    })
  })
});

