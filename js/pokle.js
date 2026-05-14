let pokemonSecreto;
let dicas = 0;

const resultado = document.getElementById("resultado");
const dica = document.getElementById("dica");
const imagem = document.getElementById("pkmImg");

async function test(){
    const number = Math.floor(Math.random() * 1025) + 1;

    const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${number}`
    );

    const dados = await res.json();

    console.log(dados.name);
}

async function game() {
    const number = Math.floor(Math.random() * 1025) + 1;

    const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${number}`
    );

    pokemonSecreto = await res.json();

    console.log(pokemonSecreto.name)

    dicas = 0;

    resultado.textContent = "Pokemon: "

    dica.textContent = "Tips: "

    imagem.src = pokemonSecreto.sprites.front_default;

    imagem.style.filter = "brightness(0)"
}

function verificar(){
    const tentativa = document.getElementById("tentativa").value.toLowerCase();

    if(tentativa === pokemonSecreto.name){
        resultado.textContent = `that's right! the pokemon was ${pokemonSecreto.name}`
        imagem.style.filter = "brightness(1)"
    } else{
        resultado.textContent = "não foi dessa vez hein"
        document.getElementById("tentativa").value = ""
    }


}

function showtips() {
    dicas++;
    
    if(dicas === 1){
        try {
            dica.textContent = `type: ${pokemonSecreto.types[0].type.name} | ${pokemonSecreto.types[1].type.name}`;
        } catch (error) {
            dica.textContent = `type: ${pokemonSecreto.types[0].type.name}`;
        }
    } else if (dicas === 2){
        dica.textContent = `height: ${pokemonSecreto.height}`;
    } else if(dicas === 3){
        dica.textContent = `pokedex number: ${pokemonSecreto.id}`;
    } else{
        dicas = 0;
    }
}

document.getElementById("tentativa").addEventListener("keydown", (e) => {
    if (e.key === "enter"){
        verificar()
    }
})

function giveup(){
    resultado.textContent = `the pokemon was ${pokemonSecreto.name}`
    imagem.style.filter = "brightness(1)"
}

game()


