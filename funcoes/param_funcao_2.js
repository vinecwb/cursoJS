// inserindo 0 nos parâmetros para caso falte enviar qualquer um deles ele vai assumir o valor padrão
function somar(a = 0, b = 0, c = 0, d = 0) {
  return a + b + c + d;
}

console.log(somar(1, 2, 3, 4, 5, 6)); // Vai ignorar os outros 2 parâmetros.
console.log(somar(1, 2, 3, 4));
console.log(somar(1, 2, 3)); // Vai gerar um NaN pois como faltou 1 parâmetro o valor de d foi como undefined.
console.log(somar(1, 2));
console.log(somar(1));
console.log(somar());

console.log("Fim !");