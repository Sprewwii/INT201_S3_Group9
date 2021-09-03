let zodiac = ["monkey", "rooster", "dog", "pig", "rat", "ox", "tiger", "rabbit",
    "dragon", "snake", "horse", "sheep"
];

// function findZodiac(youryear) {
//     let year = youryear;
//     yearZodiac = year % 12;
//     return yearZodiac;
// }


// console.log("zodiac is " + zodiac[findZodiac(1900)]);

function zodiacFind(year) {
    return ["monkey", "rooster", "dog", "pig", "rat", "ox", "tiger", "rabbit",
            "dragon", "snake", "horse", "sheep"
        ][Number(year) % 12];
}

console.log(`zodiac is ${zodiacFind('2001')}`);