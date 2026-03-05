function updateMoves(){

let history=game.history()

let html=""

for(let i=0;i<history.length;i++){

if(i%2===0){

html+=Math.floor(i/2+1)+". "

}

html+=history[i]+" "

}

document.getElementById("moves").innerHTML=html

}

document.getElementById("flipBoard").onclick=function(){

if(board.orientation()=="white"){
board.orientation("black")
}else{
board.orientation("white")
}

}
