const choices = ["Rock", "Paper", "Scissors"];

function getRandomNumber(maximum) {
    return Math.floor(Math.random() * maximum);
}

function getComputerChoice() {
    const randomInt = getRandomNumber(3);
    const computerChoice = choices[randomInt];
    return computerChoice;    
}