
var game=[
    'scissor',
    'rock',
    'paper'
];


const stone = document.getElementById("stone");
const hand = document.getElementById("hand");

stone.addEventListener("click", function() {
    hand.style.display = "block";
    document.addEventListener("click", hideHand);
    calculateScore('rock',game[getRandomCompChoice()]);
    
});

const paper = document.getElementById("paper");
const pap = document.getElementById("pap");

paper.addEventListener("click", function() {
    pap.style.display = "block";
    document.addEventListener("click", hideHand1);
    calculateScore('paper',game[getRandomCompChoice()]);
    
});
const scissor = document.getElementById("scissor");
const sci = document.getElementById("sci");

scissor.addEventListener("click", function() {
    sci.style.display = "block";
    document.addEventListener("click", hideHand2);
    calculateScore('scissor',game[getRandomCompChoice()]);
    
});
function hideHand(e) {
        if (e.target !== stone && e.target !== hand  ) {
        hand.style.display = "none";
    }
}
function hideHand1(e) {
    if (e.target !== paper && e.target !== pap) {
    pap.style.display = "none";
    
}
}
function hideHand2(e) {
    if (e.target !== scissor && e.target !== sci) {
    sci.style.display = "none";
}
}

const getRandomCompChoice=()=>{
    const randomIndex=Math.floor(Math.random()*game.length);
    const handComp=document.getElementById('handComp');
    const papComp=document.getElementById('papComp');
    const sciComp=document.getElementById('sciComp');
    switch(game[randomIndex])
      {
        case 'rock' :   handComp.style.display='block';
                        papComp.style.display='none';
                        sciComp.style.display='none';
                        break;
        case 'paper':   handComp.style.display='none';
                       papComp.style.display='block';
                       sciComp.style.display='none';
                        break;
        case 'scissor': handComp.style.display='none';
                        papComp.style.display='none';
                        sciComp.style.display='block';
                         break;


      }
      return randomIndex;

}
let userScore=0,compScore=0;
const calculateScore=(user,comp)=>{
    
     if(user==='scissor' && comp==='paper')
     {
        userScore+=1;
     }
     else if(user==='scissor' && comp==='rock')
     {
        compScore+=1;
     }
     else if(user==='rock' && comp==='paper')
     {
        compScore+=1;
     }
     else if(user==='rock'&&comp==='scissor')
     {
        userScore+=1;
     }
     else if(user==='paper' && comp==='scissor')
     {
        compScore+=1;
     }
     else if(user==='paper' && comp==='rock')
     {
        userScore+=1;
    }
    displayGameOver();
    document.getElementById('user-score').textContent=userScore;
    document.getElementById('comp-score').textContent=compScore;
}

function displayGameOver() {
    if (userScore === 5 || compScore === 5) {
      const won = document.getElementById("won");
      won.textContent = userScore === 5 ? "You won the game!" : "Computer won the game!";
  
      const play = document.getElementById("play");
      play.style.display = "block"; 

      userScore = 0;
      compScore = 0;
         document.getElementById('user-score').textContent = userScore;
        document.getElementById('comp-score').textContent = compScore;
        hand.style.display = "none";
        pap.style.display = "none";
        sci.style.display = "none";
        handComp.style.display = "none";
        papComp.style.display='none';
        sciComp.style.display='none';
        stone.style.display='none';
        paper.style.display='none';
        scissor.style.display='none';

        play.addEventListener("click", function() {
        stone.style.display='block';
        paper.style.display='block';
        scissor.style.display='block';
        

         })

  }
}