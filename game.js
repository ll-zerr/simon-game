const buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let started = false;
let level = 0;

// start the game
$("#start").click (function(event) {
  if (!started) {
    $("#level-title").text("Level " + level);
    $("#start").addClass("hidden");
    nextSequence();
    started = true;
  }
});

//  create a game pattern
function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
};

//  listen for user clicked pattern
$(".btn").click(function() {
  if (!started) {
    $("#level-title").text("Please Press Start to Play Game");
  } else {
  const userChosenColour = this.id;
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);
  }
});

// sounds and animation
function playSound(name) {
  const audio = new Audio(`sounds/${name}.mp3`);
  audio.play();
};

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
};

//  check user clicked pattern against game pattern
function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {

    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");
    $("#level-title").text("Game Over, Press Start to Play Again");
    $("body").addClass("game-over");
    setTimeout (function() {
      $("body").removeClass("game-over");
    }, 200);
    $("#start").removeClass("hidden");
    startOver();
  }
};

// start the game again
function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
};
