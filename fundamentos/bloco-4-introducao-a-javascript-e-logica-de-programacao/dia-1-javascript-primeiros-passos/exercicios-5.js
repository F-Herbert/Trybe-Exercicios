// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)

const movimento1 = "diagonal";
const movimento2 = "reto";
const movimento3 = "movimento em L"


let bispo = 3;

switch (bispo) {
    case 1:
        bispo = movimento1;
        console.log(bispo);
        break;
    
    case 2:
        bispo = movimento2;
        console.log(bispo);
        break;

    case 3:
        bispo = movimento3;
        console.log(bispo);
        break;
}