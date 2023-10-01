let playerSelection;
let computerSelection;
let roundResult;

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
    
    if (playerSelection === "paper") /*Logic for player choosing paper*/ {
        if (computerSelection === "rock") {
            roundResult = "You won! Paper beats rock.";
        } else if (computerSelection === "scissors") {
            roundResult = "You lose! Scissors beats paper.";
        } else if (computerSelection === "paper") {
            roundResult = "You tied! Try again.";
        }
    } else if (playerSelection === "scissors") /*Logic for player choosing scissors*/ {
        if (computerSelection === "paper") {
            roundResult = "You won! Scissors beats paper.";
        } else if (computerSelection === "rock") {
            roundResult = "You lose! Rock beats scissors.";
        } else if (computerSelection === "scissors") {
            roundResult = "You tied! Try again.";
        }
    } else if (playerSelection === "rock") /*Logic for player choosing rock*/ {
        if (computerSelection === "scissors") {
            roundResult = "You won! Rock beats scissors.";
        } else if (computerSelection === "paper") {
            roundResult = "You lose! Paper beats rock.";
        } else if (computerSelection === "rock") {
            roundResult = "You tied! Try again.";
        }
    }

    return roundResult;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let tiedCounter = 0;
    let gameWinner;

    for (let i = 0; i < 5; i++) {
        playSingleRound(playerSelection, computerSelection);
        console.log(roundResult);

        if (roundResult.includes("won")) {
            playerScore++;
        } else if (roundResult.includes("lose")) {
            computerScore++;
        } else if (roundResult.includes("tied")) {
            tiedCounter++;
        }
    }

    if (playerScore > computerScore) {
        gameWinner = "You won the game!";
    } else {
        gameWinner = "You lost the game!";
    }
    console.log(`You won ${playerScore} round(s). The computer won ${computerScore} round(s). You tied ${tiedCounter} round(s).`)
    console.log(gameWinner);
}

game();