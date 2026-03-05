let game = new Chess()

let board

let moveHistory=[]

function newGame(){

game.reset()

board.start()

moveHistory=[]

document.getElementById("moves").innerHTML=""

}

document.getElementById("newGame").onclick=newGame
