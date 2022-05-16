// Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

const custoDeProduto = 30;
const valorDeVenda = 50;
const impostoSobreOCusto = (custoDeProduto * 20)/100;
const custoTotal = custoDeProduto + impostoSobreOCusto;
const lucro = valorDeVenda - custoTotal;
const lucroSobreMillProdutos = lucro * 1000;


console.log(lucroSobreMillProdutos);


