let number=[];
for(let i =0; i<3; i++){
    number[i] = randomNumber();
}

function randomNumber(){
    return Math.floor(Math.random() * 100) + 1;
}

console.log(number);


//sumnumber
    let sumNumber = number.reduce((sum, nums) => {
        return sum + nums;
        });
console.log(sumNumber);
        
        
//MinNumber
function minNumber(x) {
    return Math.min(...x);
}

console.log(minNumber(number));


//MaxNumber
function maxNumber(x) {
    return Math.max(...x);
}

console.log(maxNumber(number));
