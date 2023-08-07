const futuro = Date.now() + 1000; // Date now + 1000 milisegundos / 1 segundo.
let quantidade = 0;

while (Date.now() < futuro) {
  quantidade++;
}

console.log("Quantidade: " + quantidade);
