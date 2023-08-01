const a = 10;
const b = 28;
const operacao = '?'; // + - * / %

let resultado;

if (operacao === '*') {
    resultado = a * b;
} else if (operacao === '+') {
    resultado = a + b;
} else if (operacao === '-') {
    resultado = a - b;
} else if (operacao === '/') {
    resultado = a / b;
} else if (operacao === '%') {
    resultado = a % b;
} else {
    resultado = 'Insira um valor válido: \n +  \n -   \n *  \n /  \n %'
}


console.log(resultado);