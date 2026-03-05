// Sound system
const moveSound = new Audio("sounds/move.mp3")
const captureSound = new Audio("sounds/capture.mp3")

function playMoveSound(captured=false){
    if(captured) captureSound.play()
    else moveSound.play()
}

// Board animation hook
function animateMove(source,target){
    const el = document.querySelector("#board .square-" + source)
    if(el){
        el.style.transition = "all 0.4s ease"
    }
}
