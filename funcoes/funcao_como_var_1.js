
const x = 123;
let y = 321;
var z = 323;



// IIFFE
// const somar = function (a, b){
//     return a + b;
// }

const somar = (a, b) => a + b;

console.log(somar(x, y));
