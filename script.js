let playerSelection;
let computerSelection;

function getComputerChoice(computerChoice) {
    let randomNumber = Math.floor(Math.random() * 3);
    
    if (randomNumber === 0) {
        computerChoice = "rock";
    } else if (randomNumber === 1) {
        computerChoice = "paper";
    } else if (randomNumber === 2) {
        computerChoice = "scissors";
    }
    return computerChoice;
}

function playSingleRound(playerSelection, computerSelection) {
    playerSelection = prompt("What is your selection?").toLowerCase();
    computerSelection = getComputerChoice();
    
    let result;
    
    // Logic for player choosing paper
    if ((playerSelection === "paper") && (computerSelection === "rock")) {
        result = "You won! Paper beats rock.";
    } else if ((playerSelection === "paper") && (computerSelection === "scissors")) {
        result = "You lose! Scissors beats paper.";
    } else if ((playerSelection === "paper") && (computerSelection === "paper")) {
        result = "You tied! Try again.";
    }

    // Logic for player choosing scissors
    if ((playerSelection === "scissors") && (computerSelection === "paper")) {
        result = "You won! Scissors beats paper.";
    } else if ((playerSelection === "scissors") && (computerSelection === "rock")) {
        result = "You lose! Rock beats scissors.";
    } else if ((playerSelection === "scissors") && (computerSelection === "scissors")) {
        result = "You tied! Try again.";
    }

    // Logic for player choosing rock
    if ((playerSelection === "rock") && (computerSelection === "scissors")) {
        result = "You won! Rock beats scissors";
    } else if ((playerSelection === "rock") && (computerSelection === "paper")) {
        result = "You lose! Paper beats rock.";
    } else if ((playerSelection === "rock") && (computerSelection === "rock")) {
        result = "You tied! Try again.";
    }
    console.log(result);

}

function game() {
    for (let i = 0; i < 5; i++) {
        playSingleRound();
    }
}

game();