var gamePattern = []
var userClickedPattern = []
// nextSequence()


// Storing the id of the button clicked in an array and playing sound of clicked button
$(".btn").on("click", function(){
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor)
    // console.log(userClickedPattern)
    playSound(userChosenColor);
    animatePress(userChosenColor);
});

// Plays sound of clicked button
function playSound(name){
    // $("#"+name).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    // $("#"+name).click(function(){
        var sound = new Audio (`sounds/${name}.mp3`);
        sound.play()
    // });
}

// Choosing a random color and making Sound when a button is clicked
function nextSequence() {
    var number = Math.floor(Math.random()*4);
    var buttonColors = ["red", "blue", "green", "yellow"]
    var randomChosenColor = buttonColors[number]
    gamePattern.push(randomChosenColor)
    var sound = new Audio (`sounds/${randomChosenColor}.mp3`);
    sound.play()

    $("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor)
    // $("#"+randomChosenColor).click(function(event){
        // var sound = new Audio (`sounds/${randomChosenColor}.mp3`);
        // sound.play()
    // });

}

// Adding some background effects when button is pressed
function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed")
    setTimeout(function () { 
        $("#"+currentColor).removeClass("pressed");
    }, 70);
}
