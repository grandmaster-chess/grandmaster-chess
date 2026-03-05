let whiteTime=300
let blackTime=300

setInterval(function(){

if(game.turn()=="w"){
whiteTime--
}else{
blackTime--
}

document.getElementById("timerWhite").innerText=whiteTime
document.getElementById("timerBlack").innerText=blackTime

},1000)
