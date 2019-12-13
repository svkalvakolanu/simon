//recall local-storage
if (localStorage.getItem("awhighscore") === null) {
  document.getElementById("highscore").innerHTML = "High Score: 0";
} else {
  document.getElementById("highscore").innerHTML =
    "High Score: " + localStorage.getItem("awhighscore");
}

//Variables for About Modal
const openBtn = document.querySelector("#openmodal");
const aboutModal = document.querySelector("#information");
const aboutClose = document.querySelector("#close");

//Functions for About Modal
const openModal = () => {
  aboutModal.style.display = "block";
};
const closeModal = () => {
  aboutModal.style.display = "none";
};

//Event Listeners for About Modal
openBtn.addEventListener("click", openModal);
aboutClose.addEventListener("click", closeModal);

//Variables for Game Over Modal
const gameOverClose = document.querySelector("#closego");

//Event Listeners for Game Over Modal
gameOverClose.addEventListener("click", closegoModal);

//Functions for Game Over Modal
function closegoModal(evt) {
  gameOver.style.display = "none";
}

//Variables For Game Buttons
let gbtns = document.querySelectorAll(".gamebutton");
const gameButtonClass = document.querySelector(".gamebutton");
const quit = document.querySelector("#quitgame");
const start = document.querySelector("#startgame");
const gameboard = document.querySelector("#gameboard");

let buttons = [];
let level = 1;
let gridLevel = (level + 1) * (level + 1);
let simonsays = [];
let usersays = [];
let id = [];

//Event Listeners for Game Buttons
start.addEventListener("click", reset);
start.addEventListener("click", generateBoard);

for (i = 0; i < gbtns.length; i++) {
  gbtns[i].addEventListener("click", user);
}

quit.addEventListener("click", quitGame);

//Functions for Game Buttons
//resets board
function reset() {
  level = 1;
  score = 0;
  gameScore.innerHTML = "Current Score: " + score;
  currlevel.innerHTML = "Current Level: " + level;
  usersays = [];
  simonsays = [];
}

//generates simonsays array for game + calls flashes for buttons (see function below)
function generateSimon() {
  
  gridLevel = (level + 1) * (level + 1);  
  
  simonsays = [];

  simonsays.push(
      buttons[Math.floor(Math.random() * (gridLevel))]
    );
  
    flashSimon(0);

}

//if the dropdown is used, generates the new boards
function generateBoard() {
  while (gameboard.firstChild) {
    gameboard.removeChild(gameboard.firstChild);
  }

  gridLevel = (level + 1) * (level + 1);
  console.log(level)
  console.log(gridLevel)

  gameboard.style.gridTemplateColumns = `repeat(${Math.sqrt(gridLevel)}, 1fr)`;
  gameboard.style.gridTemplateRows = `repeat(${Math.sqrt(gridLevel)}, 1fr)`;

  for (i = 0; i < gridLevel; i++) {
    let newSquare = document.createElement("button");
    newSquare.classList.add("gamebutton");
    newSquare.id = "a" + i;
    gameboard.appendChild(newSquare);
  }

  buttons = [];

  for (j = 0; j < gridLevel; j++) {
    buttons.push("a" + j);
  }

  generateSimon()
}

//flashes simon buttons
function flashSimon(j) {
  gbtns = document.querySelectorAll(".gamebutton");

  for (i = 0; i < gbtns.length; i++) {
    gbtns[i].addEventListener("click", user);
  }

    let flashing = gbtns[buttons.indexOf(simonsays[j])];
    setTimeout(() => {
      flashing.classList.add("opacity");
    }, 200);

    setTimeout(() => {
      flashing.classList.remove("opacity");
    }, 300);

}

//creates an array of user inputs
function user(evt) {
  usersays.push(evt.target.id);
  evt.target.style.border = "10px solid black";

  setTimeout(() => {
    evt.target.style.border = "none";
  }, 500);
}

//ends the game immediately
function quitGame(evt) {
  gameOver.style.display = "block";
  finalScore.innerHTML = "Your score for this game was: " + score;
  gameHighScore.innerHTML = "Your current High Score: " + highScore;
  simonseq.innerHTML = "The final sequence was: " + simonsays.join(", ");
  userseq.innerHTML = "You guessed: " + usersays.join(", ");

  level = 1;
  score = 0;

  gameScore.innerHTML = "Current Score: " + score;
  currlevel.innerHTML = "Current Level: " + level;
  turnIndicator.innerHTML = "The game is over.";

  usersays = [];
  simonsays = [];
}

//Variables for Win States
const gameOver = document.querySelector("#gameover");
const finalScore = document.querySelector("#finalscore");
const simonseq = document.querySelector("#simonseq");
const userseq = document.querySelector("#userseq");
const gameScore = document.querySelector("#currentscore");
const gameHighScore = document.querySelector("#highscore");
const currlevel = document.querySelector("#currentlevel");
let counter = 0;
let score = 0;
let highScore = 0;

//Event Listeners for Win States
gameboard.addEventListener("click", checkScore);

//Function for Win States
//win condition + game over condition
function checkScore(evt) {
  if (usersays.length === simonsays.length) {
    if (checkArrays() === true) {
      score += 1;

      if (score > highScore) {
        highScore = score;
        localStorage.setItem("awhighscore", highScore);
      }

      level += 1;
      gameScore.innerHTML = "Current Score: " + score;
      gameHighScore.innerHTML = "High Score: " + highScore;
      currlevel.innerHTML = "Current Level: " + level;

      usersays = [];
      setTimeout(() => {
        generateBoard();
      }, 1000);
    } else if (checkArrays() === false) {
      gameOver.style.display = "block";
      finalScore.innerHTML = "Your score for this game was: " + score;
      gameHighScore.innerHTML = "High Score: " + highScore;
      level = 1;
      score = 0;
      gameScore.innerHTML = "Current Score: " + score;
      currlevel.innerHTML = "Current Level: " + level;
      usersays = [];
      simonsays = [];
    }
  }
}

//compares arrays after each round
function checkArrays() {
    if (simonsays[0] === usersays[0]) {
      return true
    } else {
    return false
  }
  }
