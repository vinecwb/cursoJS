function sempreRetornaUm(){
    return 1;    
}

function textoOuNumero(retornaTexto){
    return retornaTexto ? "Sou um texto!" : 123; // Se for true retorna string se não 123; 
}

const valor = sempreRetornaUm() + 999;
console.log({valor});

console.log({retornoDaFunc: textoOuNumero(false)})

let texto = textoOuNumero(true);
console.log(texto);

console.log(textoOuNumero(false));