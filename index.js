var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = true;


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
$(document).keydown(function () { 
    if (started){
        nextSequence();
        started = false;
    }
});

// Game checker
function checkAnswer(currentLevel){
    if (userClickedPattern == gamePattern){
        console.log("Success")
    }else{
        console.log("Wrong")
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
