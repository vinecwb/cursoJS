// Criar função que irá ignorar a menor nota e vai calcular a média das duas maiores notas;
// Aprovado se a nota for maior ou igual 7;
// Recuperação nota for maior ou igual a 4 e menor que 7;
// Reprovado se qualquer nota for menor do que 4;


const nota1 = 7.8;
const nota2 = 3.1;
const nota3 = 6.7;

function minimo(n1, n2) {
  if (n1 <= n2) {
    return n1;
  } else {
    return n2;
  }
}

function mediaDuasMaiores(n1, n2, n3) {
  const menorNota = minimo(n1, minimo(n2, n3));

  if (menorNota === n1) {
    return (n2 + n3) / 2;
  } else if (menorNota === n2) {
    return (n1 + n3) / 2;
  } else {
    return (n1 + n2) / 2;
  }
}

function mediaParaStatus(media) {
  if (media >= 7) {
    return "Aprovado";
  } else if (media >= 4) {
    return "Recuperação";
  } else {
    return "Reprovado";
  }
}

const mediaFinal = media(nota1, nota2, nota3);
const statusFinal = mediaParaStatus(mediaFinal);

console.log(`O resultado final do aluno é ${statusFinal}`);