const numeros = [1, 2, 3, 4, 5, 6];

function paraCadaElemento(elemento, indice, array) {
    console.log(elemento, indice);
}


numeros.forEach(paraCadaElemento);

numeros.forEach(function (el){
    console.log(el);
})


// for (let n of numeros){
//     console.log(n);
// }



// for (let i = 0; i < numeros.length; i++) {
//     console.log(numeros[i]);
    
// }