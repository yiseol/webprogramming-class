console.log("Hello, world!");
let a = 10;
let b = 20;
console.log(a + b);

if (a < b) {
    console.log("a is less than b");
} else {
    console.log("a is not less than b");
}

function add(x, y) {
    let sum = x + y;
    return sum;
}
let result = add(123456789, 987654321);
console.log(result);

let body = document.querySelector('body');
body.style.margin = '8px';
let header = document.querySelector('##header');
header.style.backgroundColor = 'lightblue';
let main = document.querySelector('.nav');
main.style.backgroundColor = 'lightgreen';