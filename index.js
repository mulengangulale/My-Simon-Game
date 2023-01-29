var gamePattern = [];
var userClickedPattern = [];
var level = 0;



// Storing the id of the button clicked in an array and playing sound of clicked button
$(".btn").on("click", function(){
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor)

    // console.log(userClickedPattern)
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
    
});

// Calling nextSequence with keyboard and shows that game has started
function startGame(){
    var started = true;
    $(document).keydown(function () { 
        if (started){
            nextSequence();
            started = false;
        }
    });
}
startGame()

// This fuction checks if the user pattern and 
function checkAnswer(currentLevel){
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () { 
                nextSequence()
                userClickedPattern = [];
            }, 1000);
        }
        
    }else{
        // Play wrong sound if the user misses the pattern
        var sound = new Audio ("sounds/wrong.mp3");
        sound.play()

        // Change the H1 to Game over and add some css
        $("body").addClass("game-over")
        setTimeout(function () { 
            $("body").removeClass("game-over");
        }, 70);
        $("h1").text("Game Over, Press A Key to Start");

        // Call the start game to restart the game
        startGame();
        level = 0
        gamePattern = [];
        userClickedPattern = [];


    }
    
}

// Plays sound of clicked button
function playSound(name){
        var sound = new Audio (`sounds/${name}.mp3`);
        sound.play()
}

// Choosing a random color and making Sound when a button is clicked
function nextSequence() {
    // Incrementing game level
    level += 1
    var number = Math.floor(Math.random()*4);
    var buttonColors = ["red", "blue", "green", "yellow"]
    var randomChosenColor = buttonColors[number]
    gamePattern.push(randomChosenColor)
    console.log(gamePattern)
    var sound = new Audio (`sounds/${randomChosenColor}.mp3`);
    sound.play()

    // Evert time nextSequence is called, the game level changes
    $("h1").text("Level "+level);

    // Creates an animation background whenever player clicks on a button
    $("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor)
    
}

// Adding some background effects when button is pressed
function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed")
    setTimeout(function () { 
        $("#"+currentColor).removeClass("pressed");
    }, 70);
}
