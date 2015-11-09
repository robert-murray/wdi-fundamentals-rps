////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove === computerMove) {
        winner = 'tie';
    }
    else if ((playerMove === 'scissors' && computerMove === 'rock') || (playerMove === 'paper' && computerMove === 'scissors') || (playerMove === 'rock' && computerMove === 'paper')) {
            winner = 'computer';
    }
    else if ((playerMove === 'rock' && computerMove === 'scissors') || (playerMove === 'scissors' && computerMove === 'paper') || (playerMove === 'paper' && computerMove === 'rock')) {
            winner = 'player';
    } 
    else {
        winner = 'null';
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    var winner;
    if (playerWins === 5) {
        console.log("Game over - You've won 5 times.");
    }
    else if (computerWins === 5) {
        console.log("Game over - Computer won 5 times.");
    }
    else {
        while ((playerWins < 5) && (computerWins < 5)) {
        winner = getWinner(getPlayerMove(), getComputerMove());
            if (!winner) {
                console.log("Oh ho - you made a foul move! Try again.");
            }
            else if (winner === 'player') {
                playerWins += 1;
                console.log("You won this round!");
            } 
            else if (winner === 'computer') {
                computerWins += 1;
                console.log("Computer won this round!");
            } 
            else {
                console.log("Nobody wins this round - It's a tie.");
            }}
    }
    return [playerWins, computerWins];
}

playToFive()