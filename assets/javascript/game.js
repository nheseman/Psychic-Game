//Array of letters
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Tracking Variables
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var lettersGuessed = [];
var computerPick = [];

//Computer's Pick
window.onload = function() {
	var compPick = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	computerPick.push(compPick);
	console.log(computerPick[0]);
}

//keypress
document.onkeyup = function(event) {
	var playerGuess = event.key;
	lettersGuessed.push(playerGuess);
    console.log(computerPick[0]);
//logic
if ((playerGuess === computerPick[0]) && (guessesLeft > 0)) {
	wins++;
	guessesLeft = 10;
	lettersGuessed.length = 0;
	computerGuess.length = 0;
	var compPick = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	computerPick.push(compPick);
	console.log(computerPick[0]);
}

else if ((playerGuess !== computerPick[0]) && (guessesLeft > 0)) {
	guessesLeft = guessesLeft-1;
}

else {
	losses++;
	guessesLeft = 10;
	lettersGuessed.length = 0;
	computerPick.length = 0;
	var compPick = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	computerPick.push(compPick);
	console.log(computerPick[0]);
}
//update html
var html ="<h1>Are You Psychic?</h1>" +
        "<p>Try to guess the computer's letter</p>" +
          "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>" +
          "<p>Remaining Guesses: " + guessesLeft + "</p>" +
          "<p>Used Letters: " + lettersGuessed + "</p>";
 
document.querySelector("#psychic").innerHTML = html;

}