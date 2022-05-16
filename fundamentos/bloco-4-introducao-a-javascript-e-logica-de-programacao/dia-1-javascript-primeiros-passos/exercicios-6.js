// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

const porcentagem = -3;


if (porcentagem >= 90) {
    console.log("sua nota foi A");
}

else if (porcentagem >= 80 && porcentagem< 90) {
    console.log("sua nota foi B");
}

else if (porcentagem >= 70 && porcentagem< 80) {
    console.log("sua nota foi C");
}

else if (porcentagem >= 60 && porcentagem< 70) {
    console.log("sua nota foi C");
}

else if (porcentagem >= 50 && porcentagem <60) {
    console.log("sua nota foi D");
}

else if (porcentagem >= 50 && porcentagem< 60) {
    console.log("sua nota foi F");
}

else if (porcentagem >100 || porcentagem < 0) {
    console.log("erro 404");

}