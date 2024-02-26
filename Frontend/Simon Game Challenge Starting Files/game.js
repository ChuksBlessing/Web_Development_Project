let gamePattern =[];
let userClickedPattern = [];
let gameStarted = false;

function nextSequence(){
    //random numbers from 0-3
    let randomNumber = Math.round(Math.random()*3);
    //array of colours
    let buttonColours = ["green", "red", "yellow", "blue"];
    //chooses random colour
    let randomChosenColour = buttonColours[randomNumber];
    //Chooses the id
    let randomChosenColourId = "#" + randomChosenColour;
    //animate upon click
    $(randomChosenColourId).fadeIn(100).fadeOut(100).fadeIn(100);
    //play sound
    playSound(randomChosenColour)
    
    gamePattern.push(randomChosenColour);
}

function playSound(colour){
    let audio = new Audio("sounds/" + colour + ".mp3");
    audio.play();
}

//start game
$(document).on("keydown", function() {
    if (!gameStarted) {
        startGame();
    }
    });
//Function to start game    
function startGame(){
    nextSequence();
    gameStarted = true;
    }  

  //on key press, add color to array
$(".btn").on("click", function() {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
  });

//animate button press
function animatePress(colour) {
    $("#" + colour).addClass("pressed");
    setTimeout(function() {
      $("#" + colour).removeClass("pressed");
    }, 100);
  }  
//check if users answer is correct or not
function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function() {
                userClickedPattern = [];
                nextSequence();
            }, 1000);
        }
    } else {
        gameOver();
    }
}

//game over
function gameOver() {
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);
    gamePattern = [];
    userClickedPattern = [];
    gameStarted = false;
    $("#level-title").text("Game Over! Press A Key to Restart");
    $(document).on("keydown", function() {
        restartGame();
      });
  }
  function restartGame() {
    $("#level-title").text("Press A Key to Start");
    $(document).off("keydown"); // remove previous keydown event listener
    startGame(); // start the game again
}