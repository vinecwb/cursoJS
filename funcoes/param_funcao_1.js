function somar (a, b, c, d){
    return a + b + c + d;
}

console.log(somar(1,2,3,4));
console.log(somar(1,2,3)); // Vai gerar um NaN pois como faltou 1 parâmetro o valor de d foi como undefined.

console.log("Fim !");