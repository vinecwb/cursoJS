// Objeto data 
// Atributos: (dia/mes/ano)
// Método: exibir -> "dia/mes/ano"

const data = {
    dia: 01,
    mes: 02,
    ano: 2023,
    exibir: function(){
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
};

console.log(data.exibir());