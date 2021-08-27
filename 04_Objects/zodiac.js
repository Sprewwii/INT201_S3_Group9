// let year = 1900;

let zodiac = ["monkey", "rooster", "dog", "pig", "rat", "ox", "tiger", "rabbit",
                "dragon", "snake", "horse", "sheep"];

function findZodiac(youryear) {
    let year = youryear;
    yearZodiac = year % 12;
    return yearZodiac;
}
 

console.log("zodiac is " + zodiac[findZodiac(1900)]);