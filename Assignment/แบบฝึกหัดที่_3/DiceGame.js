
let dice = {
    randomDice: function(){return Math.floor(Math.random() * 6)+1;}
}


function playGames(p1, p2, play) {
    let p1Win=0;
    let p2Win=0;
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
        p1Win++;
    } else if (person.player1.roll < person.player2.roll) {
        person.player1.result = "LOSE";
        person.player2.result = "WIN";
        console.log(person);
        p2Win++;
    }
    play--;
}while(play>0);
    if(p1Win==p2Win){
        return `Drow`;
    }else if(p1Win>p2Win){
        return`${p1} Winner ${p1Win} Round!!! `;
    }else {
        return`${p2} Winner ${p2Win} Round!!!`;
    }
}

console.log(playGames("Alice", "Bob", 5));
// console.log(playGames("Prew", "Mhai", 5));
// console.log(playGames("Fahh", "Yok", 5));
console.log(typeof(dice));
