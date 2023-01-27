var gamePattern = []
var randomChosenColor = nextSequence()
gamePattern.push(randomChosenColor)

// Adding sound and making the button flash
$("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
$("#"+randomChosenColor).click(function(){
    var sound = new Audio (`sounds/${randomChosenColor}.mp3`);
    sound.play()
})

// Choosing a random color
function nextSequence() {
    var number = Math.floor(Math.random()*4);
    var buttonColors = ["red", "blue", "green", "yellow"]
    var color = buttonColors[number]
    return color
}
