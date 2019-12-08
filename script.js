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
let count = document.querySelectorAll(".active").length
let buttons = ["one","two","three","four","five","six","seven","eight","nine"]
let level = 2
let simonsays = []
let usersays = []


//Event Listeners for Game Buttons
// for (i=0; i < gbtns.length; i++) {
//     gbtns[i].addEventListener("click", simon)
// }

turnIndicator.addEventListener("click", simon)

for (i=0; i < gbtns.length; i++) {
    gbtns[i].addEventListener("click", user)
}

//Functions for Game Buttons
function simon(evt) {
    for (i=0; i < level; i++) {
        simonsays.push(buttons[Math.floor(Math.random() * 9)])
    }
    console.log(simonsays)
}

function user(evt) {
        usersays.push(evt.target.id)
}


function clearBoard(evt) {

}





//Variables for Turn Indicator
// const turnIndicator = document.querySelector("#turnindicator")

//Event Listeners for Turn Indicator
gameboard.addEventListener("click",  flipindicator)

//Function for Turn Indicator
function flipindicator(evt) {
    evt.preventDefault()
    if (count === 0 || count === 2 || count === 4 || count === 6 || count === 8) {
        turnIndicator.classList.remove("selectRed")
        turnIndicator.classList.add("selectBlue")
        turnIndicator.innerHTML = "Player 1's Turn"
        count = document.querySelectorAll(".active").length
    } else if (count === 1 || count === 3 || count === 5 || count === 7) {
        turnIndicator.classList.remove("selectBlue")
        turnIndicator.classList.add("selectRed")
        turnIndicator.innerHTML = "Player 2's Turn"
        count = document.querySelectorAll(".active").length
    } else if (count === 9) {
        turnIndicator.classList.remove("selectBlue")
        turnIndicator.innerHTML = "The Game is Over"
    }
}





//Variables for Win States
const gameOver = document.querySelector("#gameover")
const finalScore = document.querySelector("#finalscore")
const currHS = document.querySelector("#currenthighscore")
const simonseq = document.querySelector("#simonseq")
const userseq = document.querySelector("#userseq")
const gameScore = document.querySelector("#currentscore")
const gameHighScore = document.querySelector("#highscore")
let counter = 0
let score = 0
let highScore = 0

//Event Listeners for Win States
gameboard.addEventListener("click", checkScore)

//Function for Win States
function checkScore(evt) {
    if (usersays.length === level) {
        if (checkArrays() === true) {
            console.log(score)
            score =+ level
            if (score > highScore) {
                highScore = score
            }
            console.log(score)
            gameScore.innerHTML = "Current Score: " + score
            gameHighScore.innerHTML = "High Score: " + highScore
            level += 1
            console.log(level)
            simonsays=[]
            usersays=[]
        } else if (checkArrays() === false) {
            gameOver.style.display = 'block';
            finalScore.innerHTML= "Your score for this game was: " + score
            currHS.innerHTML= "Your current High Score: " + highScore
            simonseq.innerHTML= "The final sequence was: " + simonsays.join(", ")
            userseq.innerHTML= "You guessed: " + usersays.join(", ")
            level = 1
        }
    }
}

function checkArrays() {
    counter = 0
    for (i = 0; i < simonsays.length; i++) {
        for (j=0; j < usersays.length; j++) {
            if (simonsays[i] === usersays[j]) {
                counter += 1
            }
        }
    }
console.log(level)
console.log(counter)

    if (counter === level) {
        console.log(true)
        return true
    } else {
        console.log(false)
        return false
    }
}