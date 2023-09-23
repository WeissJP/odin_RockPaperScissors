function getComputerChoice() {
    let computerChoice;
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    
    if (randomNumber >= 0 && randomNumber <= 33) {
        computerChoice = "rock";
    } else if (randomNumber > 33 && randomNumber <= 66) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    
    return computerChoice;
}

function playSingleRound(playerSelection, computerSelection) {
    // Logic for player choosing paper
    if ((playerSelection === "paper") && (computerSelection === "rock")) {
        alert("You won! Paper beats rock.");
    } else if ((playerSelection === "paper") && (computerSelection === "scissors")) {
        alert("You lose! Scissors beats paper.");
    } else if ((playerSelection === "paper") && (computerSelection === "paper")) {
        alert("You tied! Try again.");
    }

    // Logic for player choosing scissors
    if ((playerSelection === "scissors") && (computerSelection === "paper")) {
        alert("You won! Scissors beats paper.");
    } else if ((playerSelection === "scissors") && (computerSelection === "rock")) {
        alert("You lose! Rock beats scissors.");
    } else if ((playerSelection === "scissors") && (computerSelection === "scissors")) {
        alert("You tied! Try again.");
    }

    // Logic for player choosing rock
    if ((playerSelection === "rock") && (computerSelection === "scissors")) {
        alert("You won! Rock beats scissors");
    } else if ((playerSelection === "rock") && (computerSelection === "paper")) {
        alert("You lose! Paper beats rock.");
    } else if ((playerSelection === "rock") && (computerSelection === "rock")) {
        alert("You tied! Try again.");
    }

}


let playerSelection = prompt("What is your selection?").toLowerCase();
let computerSelection = getComputerChoice();
playSingleRound(playerSelection, computerSelection);