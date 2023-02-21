const choices = ["rock", "paper", "scissors"];
var playerSelection;
var computerSelection;

function getRandomNumber(maximum) {
    // Math.random returns random value between 0 and 1;
    return Math.floor(Math.random() * maximum);
}

function getComputerChoice() {
    const randomInt = getRandomNumber(3);
    const computerChoice = choices[randomInt];
    return computerChoice;    
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    var result;
    if (playerSelection == computerSelection) {
        return 0;

    } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            result = -1;
        } else {
            result = 1;
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            result = 1;
        } else {
            result = -1;
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            result = -1;
        } else {
            result = 1;
        }
    } else {
        return "Your choice was invalid, please choose (case insensitive) rock, paper or scissors!";
    }
    return result;
}

function game() {
    var playerScore = 0;
    var computerScore = 0;

    while((playerScore < 5) && (computerScore < 5)) {

        playerSelection = prompt("Choose rock, paper or scissors, case insensitive").toLowerCase();
        // while loop until input is in right format
        while (
            (playerSelection !== "rock") &&
            (playerSelection !== "paper") &&
            (playerSelection !== "scissors")
        ) {
            playerSelection = prompt("Choose rock, paper or scissors, case insensitive").toLowerCase();
        }
        computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);

        if (result > 0) { 
            playerScore++; 
            console.log(`You won! ${playerSelection} beats ${computerSelection}`);
        } else if (result < 0) { 
            computerScore++; 
            console.log(`You lost! ${playerSelection} lost against ${computerSelection}`);
        } else {
            console.log(`It's a tie! You both picked ${playerSelection}`);
        }
        console.log(`score is ${playerScore} to ${computerScore}`);
    }

    if (playerScore === 5) {
        console.log(`You won ${playerScore} to ${computerScore}! Congratulations!`);
    } else {
        console.log(`You lost... but you got ${playerScore} points along the way!`);
    }
}