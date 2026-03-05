let evalHistory=[]

function updateEvalGraph(score){
    evalHistory.push(score)
    const bar = document.getElementById("evalFill")
    const latest = evalHistory[evalHistory.length-1]
    const percent = 50 + latest/20
    bar.style.height = Math.min(100,Math.max(0,percent)) + "%"
}

// Real-time analysis
engine.onmessage = function(event){
    if(event.data.startsWith("score cp")){
        const score = parseInt(event.data.split("cp ")[1].split(" ")[0])
        updateEvalGraph(score)
    }
}
