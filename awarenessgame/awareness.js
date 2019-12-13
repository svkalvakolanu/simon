//recall local-storage
if (localStorage.getItem("highscore") === null) {
    document.getElementById("highscore").innerHTML = "High Score: 0";
} else {
    document.getElementById("highscore").innerHTML = "High Score: " + localStorage.getItem("highscore");
}


//Variables for About Modal
const openBtn = document.querySelector("#openmodal")
const aboutModal = document.querySelector("#information")
const aboutClose = document.querySelector("#close")

//Functions for About Modal
const openModal = () => {
    aboutModal.style.display = 'block';
}
const closeModal = () => {
    aboutModal.style.display = 'none'
}

//Event Listeners for About Modal
openBtn.addEventListener("click", openModal)
aboutClose.addEventListener("click", closeModal)





//Variables for Game Over Modal
const gameOverClose = document.querySelector("#closego")

//Event Listeners for Game Over Modal
gameOverClose.addEventListener("click", closegoModal)

//Functions for Game Over Modal
function closegoModal(evt) {
    gameOver.style.display = 'none'
}





//Variables For Game Buttons
const turnIndicator = document.querySelector("#turnindicator")
let gbtns = document.querySelectorAll(".gamebutton")
const gameButtonClass = document.querySelector(".gamebutton")
const quit = document.querySelector("#quitgame")
const start = document.querySelector("#startgame")
const gameboard = document.querySelector("#gameboard")
const drpdwn = document.querySelector(".dropdown")
let colors = ["#63b598", "#ce7d78", "#ea9e70", "#a48a9e", "#c6e1e8", "#648177" ,"#0d5ac1" , "#f205e6" ,"#1c0365" ,"#14a9ad" ,"#4ca2f9" ,"#a4e43f" ,"#d298e2" ,"#6119d0", "#d2737d" ,"#c0a43c" ,"#f2510e" ,"#651be6" ,"#79806e" ,"#61da5e" ,"#cd2f00" , "#9348af" ,"#01ac53" ,"#c5a4fb" ,"#996635","#b11573" ,"#4bb473" ,"#75d89e" , "#2f3f94" ,"#2f7b99" ,"#da967d" ,"#34891f" ,"#b0d87b" ,"#ca4751" ,"#7e50a8" , "#c4d647" ,"#e0eeb8" ,"#11dec1" ,"#289812" ,"#566ca0" ,"#ffdbe1" ,"#2f1179" , "#935b6d" ,"#916988" ,"#513d98" ,"#aead3a", "#9e6d71", "#4b5bdc", "#0cd36d", "#250662", "#cb5bea", "#228916", "#ac3e1b", "#df514a", "#539397", "#880977", "#f697c1", "#ba96ce", "#679c9d", "#c6c42c", "#5d2c52", "#48b41b", "#e1cf3b", "#5be4f0", "#57c4d8", "#a4d17a", "#225b8", "#be608b", "#96b00c", "#088baf", "#f158bf", "#e145ba", "#ee91e3", "#05d371", "#5426e0", "#4834d0", "#802234", "#6749e8", "#0971f0", "#8fb413", "#b2b4f0", "#c3c89d", "#c9a941", "#41d158", "#fb21a3", "#51aed9", "#5bb32d", "#807fb", "#21538e", "#89d534", "#d36647", "#7fb411", "#0023b8", "#3b8c2a", "#986b53", "#f50422", "#983f7a", "#ea24a3",  "#79352c", "#521250", "#c79ed2", "#d6dd92", "#e33e52", "#b2be57", "#fa06ec", "#1bb699", "#6b2e5f", "#64820f", "#1c271", "#21538e", "#89d534", "#d36647", "#7fb411", "#0023b8", "#3b8c2a", "#986b53", "#f50422", "#983f7a", "#ea24a3",  "#79352c", "#521250", "#c79ed2", "#d6dd92", "#e33e52", "#b2be57", "#fa06ec","#1bb699", "#6b2e5f", "#64820f", "#1c271", "#9cb64a", "#996c48", "#9ab9b7", "#06e052", "#e3a481", "#0eb621", "#fc458e", "#b2db15", "#aa226d", "#792ed8", "#73872a", "#520d3a", "#cefcb8", "#a5b3d9", "#7d1d85", "#c4fd57", "#f1ae16", "#8fe22a", "#ef6e3c", "#243eeb", "#1dc18", "#dd93fd", "#3f8473", "#e7dbce", "#421f79", "#7a3d93", "#635f6d", "#93f2d7", "#9b5c2a", "#15b9ee", "#0f5997", "#409188", "#911e20", "#1350ce", "#10e5b1", "#fff4d7", "#cb2582", "#ce00be", "#32d5d6", "#17232", "#608572", "#c79bc2", "#00f87c", "#77772a", "#6995ba",  "#fc6b57", "#f07815", "#8fd883", "#060e27", "#96e591", "#21d52e", "#d00043", "#b47162", "#1ec227", "#4f0f6f", "#1d1d58", "#947002", "#bde052", "#e08c56", "#28fcfd", "#bb09b", "#36486a", "#d02e29", "#1ae6db", "#3e464c", "#a84a8f", "#911e7e", "#3f16d9", "#0f525f", "#ac7c0a", "#b4c086", "#c9d730", "#30cc49", "#3d6751", "#fb4c03", "#640fc1", "#62c03e", "#d3493a", "#88aa0b", "#406df9", "#615af0", "#4be47", "#2a3434", "#4a543f", "#79bca0", "#a8b8d4", "#00efd4", "#7ad236", "#7260d8", "#1deaa7", "#06f43a", "#823c59", "#e3d94c", "#dc1c06", "#f53b2a", "#b46238", "#2dfff6", "#a82b89", "#1a8011", "#436a9f", "#1a806a", "#4cf09d", "#c188a2", "#67eb4b", "#b308d3", "#fc7e41", "#af3101", "#ff065", "#71b1f4", "#a2f8a5", "#e23dd0", "#d3486d", "#00f7f9", "#474893", "#3cec35", "#1c65cb", "#5d1d0c", "#2d7d2a", "#ff3420", "#5cdd87", "#a259a4", "#e4ac44", "#1bede6", "#8798a4", "#d7790f", "#b2c24f", "#de73c2", "#d70a9c", "#25b67",  "#88e9b8", "#c2b0e2", "#86e98f", "#ae90e2", "#1a806b", "#436a9e", "#0ec0ff", "#f812b3", "#b17fc9", "#8d6c2f", "#d3277a", "#2ca1ae", "#9685eb", "#8a96c6", "#dba2e6", "#76fc1b", "#608fa4", "#20f6ba", "#07d7f6", "#dce77a", "#77ecca"]
let buttons = ["one","two","three","four","five","six","seven","eight","nine"]
let level = 1
let simonsays = []
let usersays = []
let id = []

//Event Listeners for Game Buttons
start.addEventListener("click", reset)
start.addEventListener("click", generateSimon)
drpdwn.addEventListener("change", generateBoard)

for (i=0; i < gbtns.length; i++) {
    gbtns[i].addEventListener("click", user)
}

quit.addEventListener("click", quitGame)

//Functions for Game Buttons
//resets board
function reset() {
    level = 1
    score = 0
    gameScore.innerHTML = "Current Score: " + score
    currlevel.innerHTML = "Current Level: " + level
    usersays = []
    simonsays=[]
}

//generates simonsays array for game + calls flashes for buttons (see function below)
function generateSimon() {
    while (simonsays.length < level)   {
        simonsays.push(buttons[Math.floor(Math.random() * (drpdwn.value*drpdwn.value))])
    }

    for (j=0; j < simonsays.length; j++) {
        flashSimon(j)
    }
}

//if the dropdown is used, generates the new boards
function generateBoard(evt) {
    while (gameboard.firstChild) {
          gameboard.removeChild(gameboard.firstChild);
    }

        gameboard.style.gridTemplateColumns = `repeat(${drpdwn.value}, 1fr)`
        gameboard.style.gridTemplateRows = `repeat(${drpdwn.value}, 1fr)`

        for (i=0; i<drpdwn.value*drpdwn.value; i++) {
            let newSquare = document.createElement("button")
            newSquare.innerHTML = "a" + i
            newSquare.classList.add("gamebutton")
            newSquare.id = "a" + i
            newSquare.style.background = colors[Math.floor(Math.random() * colors.length)]
            gameboard.appendChild(newSquare)
        }

    buttons = []

    for (j=0; j < drpdwn.value*drpdwn.value; j++) {
        buttons.push("a" + j)
    }
 }

 //flashes simon buttons
function flashSimon(j) {
    gbtns = document.querySelectorAll(".gamebutton")
    
    for (i=0; i < gbtns.length; i++) {
        gbtns[i].addEventListener("click", user)
    }

    setTimeout(function() {
        let flashing = gbtns[buttons.indexOf(simonsays[j])]
            console.log(flashing)
        setTimeout(() => {
                flashing.classList.add("opacity")
            }, 200)

        setTimeout(() => {
                flashing.classList.remove("opacity")
        }, 1000)

    }, 1000 * j)
}

//creates an array of user inputs
function user(evt) {
        usersays.push(evt.target.id)
        console.log(usersays)
        evt.target.style.border = "10px solid black"

        setTimeout(() => {
            evt.target.style.border = "none"
        }, 500)
}

//ends the game immediately
function quitGame(evt) {
    gameOver.style.display = 'block';
    finalScore.innerHTML= "Your score for this game was: " + score
    gameHighScore.innerHTML= "Your current High Score: " + highScore
    simonseq.innerHTML= "The final sequence was: " + simonsays.join(", ")
    userseq.innerHTML= "You guessed: " + usersays.join(", ")

    level = 1
    score = 0

    gameScore.innerHTML = "Current Score: " + score
    currlevel.innerHTML = "Current Level: " + level
    turnIndicator.innerHTML = "The game is over."
    
    usersays = []
    simonsays=[]
}





//Variables for Win States
const gameOver = document.querySelector("#gameover")
const finalScore = document.querySelector("#finalscore")
const simonseq = document.querySelector("#simonseq")
const userseq = document.querySelector("#userseq")
const gameScore = document.querySelector("#currentscore")
const gameHighScore = document.querySelector("#highscore")
const currlevel = document.querySelector("#currentlevel")
let counter = 0
let score = 0
let highScore = 0

//Event Listeners for Win States
gameboard.addEventListener("click", checkScore)

//Function for Win States
//win condition + game over condition
function checkScore(evt) {
    if (usersays.length === simonsays.length) {
        
        if (checkArrays() === true) {
            score += level

            if (score > highScore) {
                highScore = score
                localStorage.setItem("highscore", highScore);
            }

            level += 1

            gameScore.innerHTML = "Current Score: " + score
            gameHighScore.innerHTML = "High Score: " + highScore
            currlevel.innerHTML = "Current Level: " + level

            usersays=[]
            setTimeout(() => {
                generateSimon()
            }, 1000)
            
        } else if (checkArrays() === false) {
            gameOver.style.display = 'block'
            finalScore.innerHTML= "Your score for this game was: " + score
            gameHighScore.innerHTML = "High Score: " + highScore
            simonseq.innerHTML= "The final sequence was: " + simonsays.join(" ")
            userseq.innerHTML= "You guessed: " + usersays.join(", ")
            level = 1
            score = 0
            gameScore.innerHTML = "Current Score: " + score
            currlevel.innerHTML = "Current Level: " + level
            turnIndicator.innerHTML = "The game is over."
            usersays = []
            simonsays=[]
        }
    }
}

//compares arrays after each round
function checkArrays() {
    counter = 0

    for (i = 0; i < simonsays.length; i++) {
        if (simonsays[i] === usersays[i]) {
            counter += 1
        }
    }

    if (counter === level) {
        return true
    } else {
        return false
    }
}