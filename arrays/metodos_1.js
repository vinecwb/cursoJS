const numeros = [1, 2, 3, 4, 5];

numeros.push(6); // Adicionando elemento no array
numeros[0] = 100; //Alterar o valor na posição especifica no array


console.log(numeros.indexOf(4)); //Vai retornar qual é o índice onde está o valor 4
console.log(numeros.join(',')); //Vai juntar todos os elementos do array separando com a virgula
console.log(numeros);
console.log(numeros.includes(10)); //Vai verificar se o valor consta no array

const numeros2 = numeros.concat(7, 8, 9); // Vai criar um novo array sem interferir no primeiro
console.log(numeros2);
