
const buttonColours = ["red", "blue", "green", "yellow"];
const gamePattern =[];
const userClickedPattern =[];

function nextSequence () {
  let randomNumber = Math.floor(Math.random() * 4);
  // console.log(randomNumber);
  let randomChosenColour = buttonColours[randomNumber];
  console.log(randomChosenColour);
  gamePattern.push(randomChosenColour);
  console.log(gamePattern);
  $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  const audio = new Audio(`sounds/${randomChosenColour}.mp3`);
  audio.play();
};

$(".btn").click(function () {
  const userChosenColour = this.id;
  console.log(userChosenColour);
  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);
});
