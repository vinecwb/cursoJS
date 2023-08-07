let nota = 9;

switch (Math.ceil(nota)) {
  case 10: //Como todos as notas tem como final: Aprovado podemos simplificar todas em apenas 1 case.
  case 9:
  case 8:
  case 7:
    console.log("Parabéns!");
    break; // Se não inserir o break ele vai para o proximo case.
  case 6:
  case 5:
    console.log("Recuperação!");
    break;
  case 4:
  case 3:
  case 2:
    console.log("Reprovado!");
    break;
  case 1:
  case 0:
    console.log("Muito reprovado!");
    break;
default:
        console.log('Nota invalida!') //COMO É O ULTIMO NÃO TEM NECESSIDADE DO BREAK

}

console.log("Fim!");
