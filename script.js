// 0 Rock
// 1 Paper
// 2 Scissors

const choices = ["rock", "paper", "scissors"];
const choicesIconClass = [
                            "fa-solid fa-hand-back-fist", 
                            "fa-solid fa-hand-spock", 
                            "fa-solid fa-hand-peace"
                        ];

let playerScore = document.querySelector("#score #player #pts");
let computerScore = document.querySelector("#score #computer #pts");
let gameLogs = document.getElementById("logs");
let playerScoreCount = 0;
let computerScoreCount = 0;

/* When any of the buttons is triggered, 
   the game will start immediately
*/

let choiceButtons = document.querySelectorAll("#options .btn");
for (let i = 0; i < choiceButtons.length; i++) {
    choiceButtons[i].addEventListener("click", () => {
        game(i);
    });
}


/*
*/

function getComputerChoice() {
    return (Math.floor(Math.random() * 3));
}

function playRound (playerSelection, computerSelection) {
    if (computerSelection == playerSelection) {
        playerScoreCount++;
        computerScoreCount++;
        return "Draw";
    }
    else if (computerSelection == (playerSelection + 1) % 3) {
        computerScoreCount++;
        return "You lost";
    }
    else {
        playerScoreCount++;
        return "You won";
    }
}

function game (playerSelection) {
    
    let computerSelection = getComputerChoice();

    let playerChoiceIcon = document.querySelector("#round #player-choice i");
    let computerChoiceIcon = document.querySelector("#round #computer-choice i");

    playerChoiceIcon.setAttribute("class", choicesIconClass[playerSelection]);
    computerChoiceIcon.setAttribute("class", choicesIconClass[computerSelection]);

    let roundStatus = document.getElementById("round");
    roundStatus.removeAttribute("style");
    setTimeout(
        () => roundStatus.setAttribute("style", "display:none;"), 
    1000);

    

    let roundReport = document.createElement('div');
    roundReport.innerHTML = `<p>Your choice was <b> ${choices[playerSelection]} </b> and computer's choice was <b> ${choices[computerSelection]} </b> 
                         --- <b><i> ${playRound(playerSelection, computerSelection)} </i><b></p>`;
    gameLogs.prepend(roundReport);
    playerScore.innerHTML = `${playerScoreCount}`;
    computerScore.innerHTML = `${computerScoreCount}`;
    if (playerScoreCount == 5 || computerScoreCount == 5) {
        endGame();
        playerScore.innerHTML = `0`;
        computerScore.innerHTML = `0`;
    }
}

function endGame() {
    let announcement = document.createElement('div');
    if (playerScoreCount == computerScoreCount) {
        announcement.setAttribute('id', 'draw');
        announcement.innerHTML = `<p>So in the end, no one is the winner huh... 😒</p>`;
    } else if (playerScoreCount > computerScoreCount) {
        announcement.setAttribute('id', 'win');
        announcement.innerHTML = `<p>Congratz!!! You are really destined to be the last savior of humanity 😲👏</p>`
    } else {
        announcement.setAttribute('id', 'lose');
        announcement.innerHTML = `<p>What a sorrow day for humanity! The robot once again claims the victory 😭🤖 </p>`
    }
    gameLogs.prepend(announcement);
    playerScoreCount = 0;
    computerScoreCount = 0;
}