import inquirer from 'inquirer'

inquirer.prompt([
  {
    name: "greeting",
    message: "What is your name?",
    type: "input",
  },
  {
    name: "colors",
    message: "What color do yo hate the most?",
    type: "list",
    choices: ["black", "orange", "blue", "gray", "green", "pink"]
  },
  {
    name: "age",
    message: "How old are you?",
    type: "number",
  },
  {
    name: "hobbies",
    message: "What do you do in your free time?",
    type: "checkbox",
    choices: ["sleeping", "sports", "cooking", "traveling", "painting", "gaming"]
  },
  {
    name: "confirm",
    message: "Are you really sure?",
    type: "confirm",
  },
  {
    name: "password",
    message: "Enter your password",
    type: "password",
  },
  {
    name: "rappers",
    message: "Who is your favourite rapper?",
    type: "choices",
    choices: ["Kendrick Lamar", "Kanye West", "J Cole", "Tyler the Creator", "Lil Baby", "Dababy"]
  },
  {
    name: "singers",
    message: "Who is your favourite singer?",
    type: "choices",
    choices: ["Taylor Swift", "Katy Perry", "Adele", "Michael Jackson", "Ariana Grande", "Yuno Miles"]
  },
  {
    name: "places",
    message: "Where would you like to travel?",
    type: "choices",
    choices: ["Kosovo", "Slovenia", "Slovakia", "Macedonia", "Romania", "Serbia"]
  },
  {
    name: "games",
    message: "What is your favourite game?",
    type: "choices",
    choices: ["League of Legends", "Valorant", "CS2", "Genshin impact", "Rocket league", "Tetris"]
  },
  {
    name: "flavours",
    message: "Whats your favourite ice cream flavour?",
    type: "choices",
    choices: ["vanilla", "chocolate", "mint", "banana", "strawberry", "pear"]
  },
  {
    name: "bedtime",
    message: "What is your bedtime?",
    type: "choices",
    choices: ["8pm", "9pm", "10pm", "11pm", "12am", "5am"]
  }
])
.then(function (answers) {
  console.log(answers);
});