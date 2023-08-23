

const produto = {
    nome: 'Caneta',
    preco: 9.99,
    desconto: 0.2
};

console.log(produto.nome, produto.preco, produto.desconto);
console.log(`O Produto é ${produto.nome}, seu preço é ${produto.preco}, o desconto que pode ser aplicado é de ${produto.desconto * 100}%`);