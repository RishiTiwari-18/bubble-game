let time = 60
let score = 0
let randomNum = 0

function makeBubble(){
    let clutter = ""


let pannel = document.querySelector(".pannel-bottom")
 for(i = 1; i < 153; i++){
    let num = Math.floor(Math.random() * 10)
    clutter +=   `<div class="bubble">${num}</div>`
}

pannel.innerHTML = clutter
}
makeBubble()

function timer(){
    function runTime(){
    let timerInit = setInterval(() => {
            if(time > 0){
                time--
            document.querySelector(".box-timer").textContent = time
            }else{
                clearInterval(timerInit)
                document.querySelector(".pannel-bottom").innerHTML = `<h1>Game Over
                Your Score = ${score}</h1>
                `

            }
        }, 1000)
    }
    runTime()
}
timer()

function hit(){
 randomNum = Math.floor(Math.random()*10)
    document.querySelector(".hit").textContent = randomNum
}
hit()

function getNewScore(){
    score += 10
    document.querySelector(".score").textContent = score
}


document.querySelector(".pannel-bottom").addEventListener("click",(dets) =>{
    let scoreNum = Number(dets.target.textContent)
    if(randomNum === scoreNum ){
        getNewScore()
        makeBubble()
        hit()

    }else{
        hit()
        makeBubble()

    }
})





