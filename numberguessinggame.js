//create a variable for the first person
//number must not exceed 6
//create a variable for the second person
//number must not exceed 6
//compare both values
//if player 2 guess the same as player 1, tell player 2 he or she has won
//obviously, if the guess is wrong, player two loses

var playerOne = prompt("Enter a number between 1-6");
if ((playerOne < 1) || (playerOne > 6) || isNaN(playerOne)) {
  window.alert("You cannot follow directions");
}
  else {
    var playerTwo = prompt("Guess a number between 1-6");
    if (playerOne == playerTwo) {
      window.alert("You win!");
  }
  else {
    window.alert("Player one answer was " + playerOne);
    window.alert("You chose " + playerTwo)
  }
}