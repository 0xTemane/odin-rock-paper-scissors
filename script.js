console.log("External Javascript works.");
const CHOICES = ["rock","paper","scissors"];
let humanScore = 0;
let computerScore = 0;

const body = document.querySelector("body");
const buttonContainer = document.querySelector(".button-container");
buttonContainer.addEventListener("click", getHumanChoiceThenPlay);

const displayRound = document.querySelector("p.display-round");
const displayHumanScore = document.querySelector("span#display-human-score");
const displayComputerScore = document.querySelector("span#display-computer-score");

function getHumanChoiceThenPlay(e) {
    switch(e.target.id){
        case "rock":
            playRound("rock");
            break;
        case "paper":
            playRound("paper");
            break;
        case "scissors":
            playRound("scissors");
            break;
    }
}

function getComputerChoice() {
    return CHOICES[Math.floor(Math.random() * 3)];
}

function playRound(humanChoice, computerChoice = getComputerChoice()) {
    if (humanChoice === computerChoice){
        displayRound.textContent = `It's a tie: ${humanChoice} vs ${computerChoice}.`;
    } else if (humanChoice === "rock" && computerChoice === "scissors"){
        displayRound.textContent = `You won! ${humanChoice} vs ${computerChoice}.`;
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock"){
        displayRound.textContent = `You won! ${humanChoice} vs ${computerChoice}.`;
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper"){
        displayRound.textContent = `You won! ${humanChoice} vs ${computerChoice}.`;
        humanScore++;
    } else if (computerChoice === "rock" && humanChoice === "scissors"){
        displayRound.textContent = `You lose! ${humanChoice} vs ${computerChoice}.`;
        computerScore++;
    } else if (computerChoice === "paper" && humanChoice === "rock"){
        displayRound.textContent = `You lose! ${humanChoice} vs ${computerChoice}.`;
        computerScore++;
    }  else if (computerChoice === "scissors" && humanChoice === "paper"){
        displayRound.textContent = `You lose! ${humanChoice} vs ${computerChoice}.`;
        computerScore++;
    }  else {
        displayRound.textContent = "Hold up! Wait a minute, you are trying to cheat...";
    }
    displayHumanScore.textContent = humanScore;
    displayComputerScore.textContent = computerScore;
    checkGameEnd();
}

function checkGameEnd() {
    if (humanScore === 5){
        buttonContainer.removeEventListener("click", getHumanChoiceThenPlay)
        const winner = document.createElement("h3");
        winner.style.color = "green";
        winner.textContent = "You won - Congratulations big fella!";
        body.appendChild(winner);
    } else if (computerScore === 5) {
        buttonContainer.removeEventListener("click", getHumanChoiceThenPlay)
        const winner = document.createElement("h3");
        winner.style.color = "red";
        winner.textContent = "Computer won! - Sorry for you big fella...";
        body.appendChild(winner);
    }
}