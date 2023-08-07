// A+ -> 10
// A -> 9
// B+ -> 8 
// B -> 7
// C+ -> 6
// C -> 5
// D+ -> 4
// D -> 3
// E+ -> 2
// E -> 1
// F -> 0

const conceito = "C+"

switch (conceito) {
  case "A+":
    console.log("O valor da nota é 10!");
    break;
  case "A":
    console.log("O valor da nota é 9!");
    break;
  case "B+":
    console.log("O valor da nota é 8!");
    break;
  case "B":
    console.log("O valor da nota é 7!");
    break;
  case "C+":
    console.log("O valor da nota é 6!");
    break;
  case "C":
    console.log("O valor da nota é 5!");
    break;
  case "D+":
    console.log("O valor da nota é 4!");
    break;
  case "D":
    console.log("O valor da nota é 3!");
    break;
  case "E+":
    console.log("O valor da nota é 2!");
    break;
  case "E":
    console.log("O valor da nota é 1!");
    break;
  case "F":
    console.log("O valor da nota é 0!");
    break;
  default:
    console.log("Valor de conceito inválido!");
    break;
}

console.log('Fim!')