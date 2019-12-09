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
const gbtns = document.querySelectorAll(".gamebutton")
const quit = document.querySelector("#quitgame")
const start = document.querySelector("#startgame")
const gameboard = document.querySelector("#gameboard")
let buttons = ["one","two","three","four","five","six","seven","eight","nine"]
let level = 1
let simonsays = []
let usersays = []

//Event Listeners for Game Buttons
start.addEventListener("click", reset)
start.addEventListener("click", generatesimon)

for (i=0; i < gbtns.length; i++) {
    gbtns[i].addEventListener("click", user)
}

for (i=0; i < gbtns.length; i++) {
    gbtns[i].addEventListener("mouseover", hoverState)
}

for (i=0; i < gbtns.length; i++) {
    gbtns[i].addEventListener("mouseout", undohoverState)
}

quit.addEventListener("click", quitGame)


//Functions for Game Buttons
function reset() {
    level = 1
    score = 0
    gameScore.innerHTML = "Current Score: " + score
    currlevel.innerHTML = "Current Level: " + level
    usersays = []
    simonsays=[]
}

function generatesimon() {

    while (simonsays.length < level)   {
        simonsays.push(buttons[Math.floor(Math.random() * 9)])
    }

    for (j = 0; j < simonsays.length; j++) {
        flashSimon(j)
    }

    turnIndicator.innerHTML = "A game is in progress."
}

function flashSimon(j) {
    setTimeout(function() {
        let flashing = gbtns[buttons.indexOf(simonsays[j])]
            
        setTimeout(() => {
                flashing.classList.add("opacity")
            }, 200)

            setTimeout(() => {
                flashing.classList.remove("opacity")
            }, 1000)

    }, 1000 * j)
}

function user(evt) {
        usersays.push(evt.target.id)
        evt.target.style.border = "10px solid black"
        setTimeout(() => {
            evt.target.style.border = "none"
        }, 500)
}

function quitGame(evt) {
    gameOver.style.display = 'block';
    finalScore.innerHTML= "Your score for this game was: " + score
    currHS.innerHTML= "Your current High Score: " + highScore
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

function hoverState(evt) {
    evt.target.style.opacity = .75
}

function undohoverState(evt) {
    evt.target.style.opacity = 1
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
function checkScore(evt) {
    if (usersays.length === simonsays.length) {
        
        if (checkArrays() === true) {
            score += level

            if (score > highScore) {
                highScore = score
            }

            level += 1

            gameScore.innerHTML = "Current Score: " + score
            gameHighScore.innerHTML = "High Score: " + highScore
            currlevel.innerHTML = "Current Level: " + level

            usersays=[]
            setTimeout(() => {
                generatesimon()
            }, 1000)
            
        } else if (checkArrays() === false) {
            gameOver.style.display = 'block';
            finalScore.innerHTML= "Your score for this game was: " + score
            gameHighScore.innerHTML = "High Score: " + highScore
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
    }
}

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






