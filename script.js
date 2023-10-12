//choose how many dice to roll and modifier score
let modCounter = 0;

function incrementMod(){
    modCounter++;
    document.getElementById("mod-counter").innerHTML = "+" + modCounter;
}

function decrementMod(){
    if (modCounter > 0){
        modCounter--;
        document.getElementById("mod-counter").innerHTML = "+" + modCounter;
    }
}

//ROLL DICE
function rollDice(){
    const diceChecked = document.querySelector('input[name="d"]:checked').value;
    const diceRoll = Math.floor(Math.random() * diceChecked) + 1;
    const showResult = document.getElementById("result");
    const rollsLog = document.getElementById("rolls-log");
    let finalRoll = diceRoll + modCounter;

    showResult.innerHTML = finalRoll;
    rollsLog.innerHTML += "<img class='log-img' src='d" + diceChecked + ".png'/> Dice roll: " + diceRoll + " + Modifier: " + modCounter + " = <b>" + finalRoll + "</b></p>";
}

