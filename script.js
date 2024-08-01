let time = 60
let score = 0


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
            }
        }, 1000)
    }
    runTime()
}
timer()

function hit(){
    let randomNum = document.querySelector(".hit")
    randomNum.textContent = Math.floor(Math.random()*10)
}
hit()

function getNewScore(){
    score += 10
    document.querySelector(".score").textContent = score
}




