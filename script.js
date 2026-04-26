console.log("External Javascript works.");
const choices = ["rock","paper","scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let x = Math.random() * 2;
    return choices[Math.round(x)];
}

function getHumanChoice() {
    return prompt("Your turn! Rock, Paper or Scissors?  ").toLowerCase();
}