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

document.getElementById("pgnFile").onchange = function(e){
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.onload = function(ev){
        loadPGN(ev.target.result)
    }
    reader.readAsText(file)
}
