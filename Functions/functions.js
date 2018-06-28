// // 1. Add
// function add ( a, b) {
//     return a+b;
//     }
//     var x =add( 2, 4); 
// console.log(x);
// printAnswer(add(2, 4));

// // 2. Multiply
// function multiply ( a, b) {
//       let y = 0;
// for (let i=0; i<b; i++){
//     y = add( y, a);
// }

// var r = multiply( 6, 8);
// console.log(y);
// return (y);
// }



//Printing the answer!
const destination = document.body;

function printAnswer(answer) {
    let div = document.createElement("div");
    div.textContent = answer;
    destination.appendChild(div);
}

//1. Add
function add(a, b) {
    return a + b;
}
let answer1 = add(2, 4);
console.log(answer1);

printAnswer(answer1);



//2. Multiply
function mult(x, y) {
    let answer2 = 0;
    for (let i = 0; i < y; i++) {
        answer2 = add(answer2, x)
    }
    return answer2;
}
let name= mult(6,8)
printAnswer(name);

//3. Power
function pow(x,y) {
    let answer3 = 1;
    for (let i = 0; i < y; i++) {
        answer3 = mult(answer3, x)
    }
    return answer3;
}
let ranya= pow(2, 8)
printAnswer(ranya);

//4. Factorial
function Factorial(x) {
    let answer4 = x;
    for (let i = x; i >= 2; i = add(i,-1)) {
        answer4 = mult(answer4, add(i,-1))
    }
    return answer4;
}
let Fact= Factorial(4)
printAnswer(Fact);

//5. 