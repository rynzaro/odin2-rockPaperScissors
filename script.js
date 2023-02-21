const choices = ["rock", "paper", "scissors"];

function getRandomNumber(maximum) {
    // Math.random returns random value between 0 and 1;
    return Math.floor(Math.random() * maximum);
}

function getComputerChoice() {
    const randomInt = getRandomNumber(3);
    const computerChoice = choices[randomInt];
    return computerChoice;    
}

function playGame(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    var playerWon;
    if (playerSelection == computerSelection) {
        return `It's a draw! Both players chose ${playerSelection}`;

    } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            playerWon = false;
        } else {
            playerWon = true;
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            playerWon = true;
        } else {
            playerWon = false;
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            playerWon = false;
        } else {
            playerWon = true;
        }
    } else {
        return "Your choice was invalid, please choose (case insensitive) rock, paper or scissors!";
    }
    return playerWon ? `You won! ${playerSelection} wins against ${computerSelection}` : `You lost! ${playerSelection} lost against ${computerSelection}`
}

function test() {
    function printAndPlay(playerChoice) {
        console.log(`Player chooses ${playerChoice}`);
        console.log(playGame(playerChoice, getComputerChoice()));
    }

    printAndPlay("rock");
    printAndPlay("rOCk");
    printAndPlay("rokk");
}