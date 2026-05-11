console.log("External Javascript works.");
const CHOICES = ["rock","paper","scissors"];
let humanScore = 0;
let computerScore = 0;

const buttonContainer = document.querySelector(".button-container");
buttonContainer.addEventListener("click", e => {
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
})

function getComputerChoice() {
    let x = Math.random() * 3;
    return CHOICES[Math.floor(x)];
}

function playRound(humanChoice, computerChoice = getComputerChoice()) {
    if (humanChoice === computerChoice){
        console.log(`It's a tie: ${humanChoice} vs ${computerChoice}.`);
    } else if (humanChoice === "rock" && computerChoice === "scissors"){
        console.log(`You won! ${humanChoice} vs ${computerChoice}.`);
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock"){
        console.log(`You won! ${humanChoice} vs ${computerChoice}.`);
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper"){
        console.log(`You won! ${humanChoice} vs ${computerChoice}.`);
        humanScore++;
    } else if (computerChoice === "rock" && humanChoice === "scissors"){
        console.log(`You lose! ${humanChoice} vs ${computerChoice}.`);
        computerScore++;
    } else if (computerChoice === "paper" && humanChoice === "rock"){
        console.log(`You lose! ${humanChoice} vs ${computerChoice}.`);
        computerScore++;
    }  else if (computerChoice === "scissors" && humanChoice === "paper"){
        console.log(`You lose! ${humanChoice} vs ${computerChoice}.`);
        computerScore++;
    }  else {
        console.log("Hold up! Wait a minute, your choice ain't right...");
        console.log("SAME SCORE AS BEFORE")
    }
}