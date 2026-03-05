// Simple JSON openings
const openings = {
    "e4 e5 Nf3 Nc6 Bb5": "Ruy Lopez",
    "d4 d5 c4": "Queen's Gambit"
}

function showOpening(){
    const moves = game.history().join(" ")
    for(const key in openings){
        if(key.startsWith(moves)){
            document.getElementById("status").innerText = "Opening: "+openings[key]
            return
        }
    }
    document.getElementById("status").innerText = ""
}
