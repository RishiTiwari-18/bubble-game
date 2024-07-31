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


