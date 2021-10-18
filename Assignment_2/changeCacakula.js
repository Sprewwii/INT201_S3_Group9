function calculation(x, y) {
    bankAndCoin = {
        fiveHundred: 500,
        oneHundred: 100,
        fifty: 50,
        twenty: 20,
        ten: 10,
        five: 5,
        two: 2,
        one: 1
    }

    fiveHundred = 0;
    oneHundred = 0;
    fifty = 0;
    twenty = 0;
    ten = 0;
    five = 0;
    two = 0;
    one = 0;

    let product = x;
    let payMoney = y;

    let total = payMoney - product;
    do {
        if (total >= bankAndCoin.fiveHundred) {
            total -= bankAndCoin.fiveHundred;
            fiveHundred++;
        } else if (total >= bankAndCoin.oneHundred) {
            total -= bankAndCoin.oneHundred;
            oneHundred++;
        } else if (total >= bankAndCoin.fifty) {
            total -= bankAndCoin.fifty;
            fifty++;
        } else if (total >= bankAndCoin.twenty) {
            total -= bankAndCoin.twenty;
            twenty++;
        } else if (total >= bankAndCoin.ten) {
            total -= bankAndCoin.ten;
            ten++;
        } else if (total >= bankAndCoin.five) {
            total -= bankAndCoin.five;
            five++;
        } else if (total >= bankAndCoin.two) {
            total -= bankAndCoin.two;
            two++;
        } else if (total >= bankAndCoin.one) {
            total -= bankAndCoin.one;
            one++;
        }

    } while (total > 0);

    return `yourmoney is ${payMoney}   
    total is ${payMoney-product}
    FiveHundred Banknotes : ${fiveHundred}
    OneHundred Banknotes : ${oneHundred}
    Fifty Banknotes : ${fifty}
    Twenty Banknotes : ${twenty}
    Ten Coin : ${ten}
    Five Coin : ${five}
    Two Coin : ${two}
    One Coin : ${one}`;
}

console.log(calculation(500, 1000));
