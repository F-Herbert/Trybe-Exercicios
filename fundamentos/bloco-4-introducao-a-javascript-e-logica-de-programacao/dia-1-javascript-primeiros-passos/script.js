// const myName = "Felipe";
// const birthCity = "Belo horizonte";
// let birthYear = 1995;
// birthYear = 2030;
// birthCity = "Nova York";


// exercicio 1


// console.log(myName);
// console.log(birthCity);
// console.log(birthYear);

// const base = 5;
// let height = 8;
// const area = base * height;

// const perimeter = 2*(base + height)
// console.log(area);
// console.log(perimeter);



// exercicio 2


// const nota = 50;

// if (nota >=80) {
//     console.log("Parabéns,você foi aprovado(a)!");
// }

// else if (nota < 80 && nota >=60) {
//     console.log("Você está na nossa lista de espera.");
// }

// else {
//     console.log("Você foi reprovado.");
// }


// exercicio 3

// const currentHour = 3;
// let message = "";

// if (currentHour >=22) {
//     message = "Não deveriamos comer nada,é hora de dormir";
    
// }

// else if (currentHour >= 18 && currentHour < 22) {
//     message = "Rango da noite,vamos jantar :D"
    
// }

// else if (currentHour >= 14 && currentHour < 18) {
//     message = "Vamos fazer um bolo pro café da tarde?"
    
// }

// else if (currentHour > 11 && currentHour < 14) {
//     message = "Hora do almoço"
   
// }

// else if (currentHour > 4 && currentHour < 11) {
//     message = "Hummm,cheiro de café recém passsado"

// }

// else {
//     message = "estou dormindo"
// }
// console.log(message);


// exercicio 4


let estado = 33;


switch(estado) {
    case 80:
        console.log("aprovada");
        break;

    case 60:
        console.log("espera");
        break;

    default:
        console.log("reprovado");
}