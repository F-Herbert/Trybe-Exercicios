let eu = document.querySelector('#elementoOndeVoceEsta');
let pai = document.querySelector('#elementoOndeVoceEsta').parentElement;
pai.style.color = 'red';

let filho = document.querySelector('#primeiroFilhoDoFilho');
filho.innerText = "filho";

let primeiroFilho = pai.firstElementChild;

