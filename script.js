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
function playGame(){
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice){
            console.log(`It's a tie: ${humanChoice} vs ${computerChoice}.`);
            console.log(`Human: ${humanScore} | Computer: ${computerScore}`);
        } else if (humanChoice == "rock" && computerChoice == "scissors"){
            console.log(`You won! ${humanChoice} vs ${computerChoice}.`);
            humanScore++;
            console.log(`Human: ${humanScore} | Computer: ${computerScore}`);
        } else if (humanChoice == "paper" && computerChoice == "rock"){
            console.log(`You won! ${humanChoice} vs ${computerChoice}.`);
            humanScore++;
            console.log(`Human: ${humanScore} | Computer: ${computerScore}`);
        } else if (humanChoice == "scissors" && computerChoice == "paper"){
            console.log(`You won! ${humanChoice} vs ${computerChoice}.`);
            humanScore++;
            console.log(`Human: ${humanScore} | Computer: ${computerScore}`);
        } else if (computerChoice == "rock" && humanChoice == "scissors"){
            console.log(`You lose! ${humanChoice} vs ${computerChoice}.`);
            computerScore++;
            console.log(`Human: ${humanScore} | Computer: ${computerScore}`);
        } else if (computerChoice == "paper" && humanChoice == "rock"){
            console.log(`You lose! ${humanChoice} vs ${computerChoice}.`);
            computerScore++;
            console.log(`Human: ${humanScore} | Computer: ${computerScore}`);
        }  else if (computerChoice == "scissors" && humanChoice == "paper"){
            console.log(`You lose! ${humanChoice} vs ${computerChoice}.`);
            computerScore++;
            console.log(`Human: ${humanScore} | Computer: ${computerScore}`);
        }  else {
            console.log("Hold up! Wait a minute, your choice ain't right...");
            console.log("SAME SCORE AS BEFORE")
            console.log(`Human: ${humanScore} | Computer: ${computerScore}`);
        }
    }
    for (let i=0; i < 5; i++) {
        playRound(getHumanChoice(),getComputerChoice());
    }
}
playGame();