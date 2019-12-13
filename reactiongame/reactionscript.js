//recall local-storage
if (localStorage.getItem("reactHS") === null) {
    document.getElementById("reactHS").innerHTML = "Best Time: -";
} else {
    document.getElementById("reactHS").innerHTML = "Best Time: " + localStorage.getItem("reactHS") + "s."
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

let startGame = document.querySelector("#startgame")
startGame.addEventListener("click", reactionStart)
let gameboard = document.querySelector("#gameboard")
gameboard.addEventListener("click", reactionScore)
const gameOver = document.querySelector("#gameover")
const rTime = document.querySelector("#rtime")
let reactScore = 0
let realScore = 0
let flashTime = 0
let clickTime = 0
let randomTimer = 0
let score = 0
let reactHS = 100000000000
const gameScore = document.querySelector("#lastscore")
const gameHighScore = document.querySelector("#reactHS")

function reactionStart() {

    randomTimer = Math.floor((Math.random() * 10000)+1500)

    setTimeout(() => {
        document.querySelector("#one").classList.add("opacity")
    }, randomTimer)

    

    setTimeout(() => {
        document.querySelector("#one").classList.remove("opacity")
    }, randomTimer + 10)


    flashTime = Date.now()
}


//Variables for Game Over Modal
const gameOverClose = document.querySelector("#closego")

//Event Listeners for Game Over Modal
gameOverClose.addEventListener("click", closegoModal)

//Functions for Game Over Modal
function closegoModal(evt) {
    gameOver.style.display = 'none'
}


function reactionScore() {

    clickTime = Date.now()

    reactScore = (clickTime - flashTime - randomTimer)/1000
    

    if (reactScore >= 0) {
        score = reactScore
        if (score < reactHS) {
            reactHS = score
            localStorage.setItem("reactHS", reactHS);
        }
    } 

    gameOver.style.display = 'block';
    if (reactScore < 0) {
        rTime.innerHTML = "You clicked too early." 
    } else {
        rTime.innerHTML = "Your reaction time was: " + score + "s."
        gameScore.innerHTML = "Last Time: " + score + "s."
        gameHighScore.innerHTML = "Best Time: " + reactHS + "s."
    }    
}



