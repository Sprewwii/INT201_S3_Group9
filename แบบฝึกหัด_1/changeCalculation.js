function changeCalculation(cost, money) {
    let fiveHundred = 0;
    let oneHundred = 0;
    let fifty = 0;
    let twenty = 0;
    let ten = 0;
    let five = 0;
    let two = 0;
    let one = 0;
    let allCost = 0;
    let charges = 0;
    let yourMoney = 0;

    if (money - cost < 0) {
        return "can't pay";
    } else {
        allCost = cost;
        yourMoney = money;
        total = money - cost;
        charges = money - cost;
    }
    do {
        if (total - 500 >= 0) {
            total = total - 500;
            fiveHundred++;
        } else if (total - 100 >= 0) {
            total = total - 100;
            oneHundred++;
        } else if (total - 50 >= 0) {
            total = total - 50;
            fifty++;
        } else if (total - 20 >= 0) {
            total = total - 20;
            twenty++;
        } else if (total - 10 >= 0) {
            total = total - 10;
            ten++;
        } else if (total - 5 >= 0) {
            total = total - 5;
            five++;
        } else if (total - 2 >= 0) {
            total = total - 2;
            two++;
        } else if (total - 1 >= 0) {
            total = total - 1;
            one++;
        }
    } while (total > 0);
    return `yourmoney is ${yourMoney}   
            total is ${allCost}
            FiveHundred Banknotes : ${fiveHundred}
            OneHundred Banknotes : ${oneHundred}
            Fifty Banknotes : ${fifty}
            Twenty Banknotes : ${twenty}
            Ten Coin : ${ten}
            Five Coin : ${five}
            Two Coin : ${two}
            One Coin : ${one}`;

}

console.log(changeCalculation(500,2010));

// console.log(`hello`);