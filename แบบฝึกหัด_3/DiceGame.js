let dice = {
    randomDice: function(){return Math.floor(Math.random() * 6)+1;}
}


function playGames(p1, p2, playRound) {
    if(playRound==0){
        return `Please enter another number
        `;
    }

    let countP1Win=0;
    let countP2Win=0;
    let round=1;

    do{
        let person = {
            player1: {name: p1, roll: dice.randomDice(), result:""},
            player2: {name: p2, roll: dice.randomDice(), result:""}
        }

        console.log(`Round : ${round++}`) ;
    if (person.player1.roll == person.player2.roll) {
            person.player1.result = "Draw";
            person.player2.result = "Draw";
            console.log(person);
    } 
    else if (person.player1.roll > person.player2.roll) {
        person.player1.result = "WIN";
        person.player2.result = "LOSE";
        console.log(person);
        countP1Win++;
    } else if (person.player1.roll < person.player2.roll) {
        person.player1.result = "LOSE";
        person.player2.result = "WIN";
        console.log(person);
        countP2Win++;
    }
    playRound--;
}while(playRound>0);
    if(countP1Win==countP2Win){
        return `Draw
        `;
    }else if(countP1Win>countP2Win){
        return`${p1} Winner ${countP1Win} Round!!!
        `;
    }else {
        return`${p2} Winner ${countP2Win} Round!!!
        `;
    }
}

console.log(playGames("Alice", "Bob", 5)); 
console.log(playGames("Prew", "Mhai", 7)); 
console.log(playGames("Fahh", "Yok", 6)); 

console.log(playGames("JameKung", "PungKung", 0));
