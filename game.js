
const buttonColours = ["red", "blue", "green", "yellow"];
const gamePattern =[];
const userClickedPattern =[];
let started = false;
let level = 0;

// start the game
$(document).keydown(function (event) {
  // console.log(event.key);
if (!started) {
  $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});


function nextSequence () {
  level++;
  $("#level-title").text("Level " + level);
  let randomNumber = Math.floor(Math.random() * 4);
  // console.log(randomNumber);
  let randomChosenColour = buttonColours[randomNumber];
  console.log(randomChosenColour);
  gamePattern.push(randomChosenColour);
  console.log(gamePattern);
  $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
};

$(".btn").click(function () {
  const userChosenColour = this.id;
  console.log(userChosenColour);
  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);
  playSound(userChosenColour);
  animatePress(userChosenColour);
});

function playSound (name) {
  const audio = new Audio(`sounds/${name}.mp3`);
  audio.play();
};

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
};
