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

    if (playerSelection == computerSelection) result = 0;
    else if (playerSelection === "rock") result = computerSelection === "paper" ? -1 : 1;
    else if (playerSelection === "paper") result = computerSelection === "scissors" ? -1 : 1;
    else if (playerSelection === "scissors") result = computerSelection === "rock" ? -1 : 1;
    else result = 0;

    return result;
}

function game() {
    var playerScore = 0;
    var computerScore = 0;

    while((playerScore < 5) && (computerScore < 5)) {

        playerSelection = prompt("Choose rock, paper or scissors, case insensitive").toLowerCase();
        // while loop until input is in right format
        while ( !choices.includes(playerSelection) ) {
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
            console.log(`It's a tie or wrong input! You (both) picked ${playerSelection}`);
        }
        console.log(`score is ${playerScore} to ${computerScore}`);
    }

    if (playerScore === 5) {
        console.log(`You won ${playerScore} to ${computerScore}! Congratulations!`);
    } else {
        console.log(`You lost... but you got ${playerScore} points along the way!`);
    }
}