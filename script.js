// 0 Rock
// 1 Paper
// 2 Scissors

const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return (Math.floor(Math.random() * 3));
}

function getUserChoice() {
    return parseInt(prompt("Please choose: \n 0: Rock \n 1: Paper \n 2: Scissors"));
}

function playRound (playerSelection, computerSelection) {
    if (computerSelection == playerSelection) return "Draw!!!";
    else if (computerSelection == (playerSelection + 1) % 3) return "You lost!!!";
    else return "You won!!!";
}

function game() {
    let playerSelection = getUserChoice();
    let computerSelection = getComputerChoice();
    console.log(`Your choice was ${choices[playerSelection]} and computer's choice was ${choices[computerSelection]}`);
    console.log(playRound(playerSelection, computerSelection));
}

for (let i = 0; i < 5; i++) {
    game();
}