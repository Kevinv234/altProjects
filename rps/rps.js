//Rock paper siccors game
// The user will go up against a bot and its best out of 2
alert("Welcome to Rock, Paper, Scissors");

var choice = window.prompt("1. One round          2. Best out of 3");


if (choice === '1'){
    alert("Option 1 was chosen, the round is now commencing!");
    optionOne();
}else if(choice === '2'){
    alert("Option 2 was chosen, the rounds are now commencing");
    optionTwo();
}else{
    alert("Choice inputed is not an option, please try again.");
}

// Computer logic lives here
function cpuChoice(){

    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
    computerChoice = "rock";
    } else if(computerChoice <= 0.67) {
    computerChoice = "paper";
    } else {
    computerChoice = "scissors";
    }

    return computerChoice;
}

// This function is for the first choice of the game
// One round
function optionOne(){

    let choice = window.prompt("Please enter your play (rock, paper, sissors): ");
    let cpu = cpuChoice();
    alert("Ro,Sham, Bo!");
    gameLogic(choice, cpu);
}



function optionTwo(){  
    var wins = 0, loss = 0, round = 0;
    
    while((round !== 3) && (wins !== 3 || loss !== 3)){ 
        let choice = window.prompt("Please enter your play (rock, paper, sissors): ");
        let cpu = cpuChoice();
        let roundOutcome = gameLogic(choice, cpu);
        let update = ("CPU: " + loss + "  Player: " + wins);
        alert("Ro,Sham, Bo!");
        
    
        if(roundOutcome === "win"){
            wins++;
            round++;
        }
        if(roundOutcome === "loss"){
            loss++;
            round++;
        }
        
        alert(update);
        
        
    }
    if(wins === 3){
        return alert("Player wins against CPU!");
    }
    else{
        return alert("CPU won against Player!");
    }
}

// Game logic lives here
function gameLogic(playerChoice, cpuChoice){
    // Check if it is a tie 
    if(playerChoice === cpuChoice){
        alert("The result is a tie!");
        return "tie";
    }

    // rock vs sissors; rock
    if(playerChoice === "rock"){
        if(cpuChoice === "sissors"){
            alert("Player wins!");
            return "win";
        }else{
            alert("CPU wins!");
            return "loss";
        }
    }

    //sissors vs paper; sissors
    if(playerChoice === "sissors"){
        if(cpuChoice === "paper"){
            alert("Player wins!");
            return "win";

        }else{
            alert("CPU wins!");
            return "loss";

        }
    }

    //paper vs rock; rock
    if(playerChoice === "paper"){
        if(cpuChoice === "rock"){
            alert("Player wins!");
            return "win";
        }else{
            alert("CPU wins!");
            return "loss";
        }
    }
}