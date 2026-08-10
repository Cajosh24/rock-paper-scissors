let humanScore = 0;
let computerScore = 0;
let round = 1


function getComputerChoice() {
    let value = Math.floor(Math.random() * 3)

    switch (value) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2: 
            return "Scissors";
        default:
            return "Invalid";
    }
}

function getHumanChoice() {
    let choice = prompt(`Round: ${round}\n
        Score: { Player[${humanScore}] - CPU[${computerScore}] }\n
        Enter valid choice.\n
        ['Rock', 'Paper', or 'Scissors']:`)

    while (true){
        if(choice === "Rock" || choice === "Paper" || choice === "Scissors")
            return choice

        choice = prompt(`Round: ${round}\n
            Score: { Player[${humanScore}] - CPU[${computerScore}] }\n
            Invalid choice. Try again.\n
            ['Rock', 'Paper', or 'Scissors']:`)
    }
}

function playRound(humanChoice,computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    const winCondition = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    }

    if (humanChoice === computerChoice) {
        return `Tied, ${humanChoice}(Player) ties with ${computerChoice}(CPU)`;
    } else if(winCondition[humanChoice] === computerChoice) {
        humanScore += 1
        return `Player wins, ${humanChoice}(Player) beats ${computerChoice}(CPU)!`;
    } else {
        computerScore += 1
        return `CPU wins, ${computerChoice}(CPU) beats ${humanChoice}(Player)!`;
    }
}

function playGame() {
    while (round <= 5 && humanScore != 3 && computerScore != 3) {
        console.log(playRound(getHumanChoice(),getComputerChoice()));
        round += 1
    }
    console.log("Game Complete:");

    if (humanScore == computerScore)
        console.log(`Tie! Score: { Player[${humanScore}] = CPU[${computerScore}] }`);
    else if (humanScore > computerScore)
        console.log(`Player Wins! Score: { Player[${humanScore}] > CPU[${computerScore}] }`);
    else
        console.log(`CPU Wins! Score: { Player[${humanScore}] < CPU[${computerScore}] }`);
}

playGame();