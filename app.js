let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerHTML = userScore;
        msg.innerHTML = `You win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerHTML = compScore;
        msg.innerHTML = `You lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const drawGame = () => {
    msg.innerHTML = "Game draw! play again!";
    msg.style.backgroundColor = "yellow";
    msg.style.color = "black";
}

const genCompChoice = ()=> {
    let options = ["rock", "paper", "scissor"];
    let randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const playGame = (userChoice)=>{ 
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        drawGame();
    }   else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper"? false : true;
        } else if (userChoice === "paper"){
            userWin = compChoice === "scissor"? false : true;  
        } else {
            userWin = compChoice === "rock"? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});