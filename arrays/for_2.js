const notas = [7, 8 , 3, 5, 10, 9, 8, 8];


let valores = '';
//for each
for(let nota of notas){
    console.log(nota);
}

for(let nota of notas){
    valores += nota + ' ';
}

console.log(valores);

//percorrer os indices do array

let indices = '';

for(let indice in notas){
    indices += indice + ' ';
}

console.log(indices);