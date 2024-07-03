let win = 0
let loss = 0
let tie = 0

let scoreCard = null

function playGame(playerMove){
    

    const game_out  = document.getElementById('game_output')

    let result = ''

    const moves = ['Rock', 'Paper', 'Scissors']
    
    const computerMove = moves[Math.floor(Math.random() * moves.length)]    
    
    if (!game_out) {
        console.error('The element with id "game_output" was not found.');
        return;
    }
    
    console.log(`computerMove: ${computerMove}, playerMove:${playerMove}`)
    if (computerMove === playerMove){
        result  = `It's a Tie!!!!`
        tie += 1
    }
    else if (
        (playerMove ==="Rock" && computerMove ==="Scissors")||(playerMove ==="Paper" && computerMove ==="Rock")||(playerMove ==="Scissors" && computerMove ==="Paper")
    ) {
        result = `You win!!!!`
        win += 1
    }
    else{
        result = `You lost!!!!`
        loss += 1
    }
    
    scoreCard = `${result}. You choose ${playerMove} and AI Bot choose ${computerMove}\n <br><br> Win: ${win}, Loss: ${loss}, Tie: ${tie} <br><br>`
    
    let maxCount = 5
    if ([win, loss, tie].includes(maxCount)){
        // maxCount = 6
        let finalResult = null

        if(win>loss){
            
            finalResult = "You Won the game with Bot."
        }
        else if(win<loss){
            
            finalResult = "You Lost the game. Bot Won"
        }
        else {
            finalResult = "The game tied."

        }

        game_out.innerHTML = scoreCard.concat(`<br> Game Over!!! ${finalResult}`)
        

        win = 0
        loss = 0
        tie = 0
        
    }
    else {
        
        game_out.innerHTML = scoreCard
    }

    saveData()
    
    
    
}   

function saveData(){
    console.log(`scoreCard: ${scoreCard}`)
    const savedVal = JSON.stringify(scoreCard)
    localStorage.setItem("data", savedVal)

}

function loadData(){

    const oldVal  = localStorage.getItem("data")
    if (oldVal) scoreCard = JSON.parse(oldVal)
    
}


document.addEventListener("DOMContentLoaded",loadData)