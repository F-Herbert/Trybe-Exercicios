// 🚀 Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


let a = numbers[0]
let numeroMaior;

for(let i = 1; i < numbers.length; i+= 1) {
    if(numbers[i] > a) {
        numeroMaior = numbers[i];
        a = [numbers[i]];
    }
}


console.log(numeroMaior);