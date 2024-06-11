let userScore=0;
let compScore=0;
let msg=document.querySelector("#msg");
let msgcontainer=document.querySelector(".msg-container");
let userscore=document.querySelector("#user-score")
let compscore=document.querySelector("#comp-score")

const choices=document.querySelectorAll(".choice");

const generateCompChoice = () => {
//rock paper scissors
const options=["rock","paper","scissors"];
let optionSelected=Math.floor(Math.random() *3);
return options[optionSelected];
};

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userscore.innerText=userScore;
        msgcontainer.classList.remove("red");
        console.log("You Win");
        msg.innerText=`You won , Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compscore.innerText=compScore;
        msgcontainer.classList.remove("green");
        console.log("Computer Wins");
        msg.innerText=`You lost , Computers ${compChoice} beats ${userChoice}`
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
   const compChoice= generateCompChoice();
   if(userChoice===compChoice){
    msg.innerText="Game was DRAW, Play Again!";
    msg.style.backgroundColor="#551B14";
   }else {
    let userWin = true;
    if(userChoice==="rock"){
        userWin=compChoice==="paper" ? false: true
    }else if(userChoice==="paper"){
        userWin=compChoice==="scissors"?false:true
    }else if(userChoice==="scissors"){
        userWin=compChoice==="rock"?false:true
    }
    showWinner(userWin,userChoice,compChoice);
   }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});