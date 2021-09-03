console.log(reverse('Hello World'));
// // console.log(reverse2('Hello World'));


// function reverse(s){
//     return s.split("").reverse().join("");
// }

// function reverse2(s){
//     return [...s].reverse().join("");
// }

function reverse(text=[]) {
    let s = "";
    let i = text.length;
    while (i>0) {
        s += this.substring(i-1,i);
        i--;
    }
    return s;
}

// function reverse(s) {
//     let o = '';
//     for (let i = s.length - 1; i >= 0; i--)
//       o += s[i];
//     return o;
//   }