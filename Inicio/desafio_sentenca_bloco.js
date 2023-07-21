/*
DESAFIO, CRIE UM CÓDIGO ONDE IMPRIMA OS NÚMEROS IMPARES EM UM BLOCO DE CÓDIGO E
OS NÚMEROS PARES EM UM SEGUNDO BLOCO
*/

let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) {

        console.log('Esse número é par: ', numeros[i])

    } else {
        console.log('Esse número é impar: ', numeros[i])
    }
}
