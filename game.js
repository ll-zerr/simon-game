// alert ("Hello, Welcome to the game!");
const buttonColours = ["red", "blue", "green", "yellow"];
const gamePattern =[];

function nextSequence () {
  let randomNumber = Math.floor(Math.random() * 4);
  // console.log(randomNumber);
  let randomChosenColour = buttonColours[randomNumber];
  console.log(randomChosenColour);
  gamePattern.push(randomChosenColour);
  console.log(gamePattern);
};

// nextSequence();
