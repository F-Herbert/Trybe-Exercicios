// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let valorImpar = [];
let valorPar = [];

for(let i = 0;i < numbers.length;i += 1) {
    if(numbers[i]%2 == 1) {
        valorImpar.push(numbers[i])
    } 
    else if(numbers[i]%2 == 0) {
        valorPar.push(numbers[i])
    }
    
}
if(valorImpar.length > 0) {
    console.log(valorImpar);
} else {
    console.log("nenhum valor encontrado");
}

