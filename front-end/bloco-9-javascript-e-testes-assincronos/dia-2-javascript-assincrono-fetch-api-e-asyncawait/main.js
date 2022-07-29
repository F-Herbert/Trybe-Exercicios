const botao = document.getElementById('botao')
const input = document.getElementById('input')

function append(data) {
    const img = document.getElementById('imagem')
    img.src = data.sprites.front_default;

}

const escolhePokemon = async (pokemon) => {

    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    const request = await fetch(url);
    const json = await request.json();
    append(json)

    if(request !== json) {
        return alert('pokemon não existe ou foi escrito de forma incorreta!')
    }

}

function exibePokemon() {
    botao.addEventListener('click',() => {
        const valor = input.value;
        escolhePokemon(valor)
    })
}

exibePokemon();
