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

// To play "Scissors, Paper, Rock" simple type start(); into your console.

var user = null;
var comp = null;
var playerWins = 0;
var computerWins = 0;

function start(){
    playToFive();
}

function getPlayerMove(move) {
    user = getInput();
    console.log("You picked " + user);
    getComputerMove();
    getWinner();
}

function getComputerMove(move) {
    comp = randomPlay();
    console.log("Computer picked " + comp);
}

function getWinner(playerMove,computerMove) {
  

    if(user == 'rock' && comp == "scissors"){
        console.log("You Win!");
        playerWins++;
        console.log("Player Total Wins " + playerWins);
    }  
    else if (user == 'scissors' && comp == "paper"){
        console.log("You Win!");
        playerWins++;
        console.log("Player Total Wins " + playerWins);
    }
    else if (user == 'paper' && comp == "rock"){
        console.log("You Win!");
        playerWins++;
        console.log("Player Total Wins " + playerWins);
    }
    else if (user == comp){
        console.log("Its a draw!");
    }
    else {
        console.log("You lose!");
        computerWins++;
        console.log("Computer Total Wins " + computerWins);
    }
}

function playToFive(){
    while(playerWins < 5 && computerWins < 5) {
        getPlayerMove();

        if (playerWins ==  5){
            alert("You Win! Congratulations you beat the computer...");
            console.log("You Win! Congratulations you beat the computer...");
            playerWins = 0;
            computerWins = 0;
            return playerWins;
        }

        if (computerWins == 5){
            alert("You Win! lol jks not really, you suck! The computer actually won.");
            console.log("You Win! lol jks not really, you suck! The computer actually won.");       
            playerWins = 0;
            computerWins = 0;
            return computerWins;
        }
    }   
}
