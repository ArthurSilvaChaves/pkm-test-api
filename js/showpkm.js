function test(dados){
    console.log(dados.moves[1].move.name)
}

function showType(dados,p){
    try{
        p.textContent = `Pokemon type: ${dados.types[0].type.name} & ${dados.types[1].type.name}`;
    } catch{
        p.textContent = `Pokemon type:${dados.types[0].type.name}`;
    }
}

function showAbilities(dados,p){
    try{
        p.textContent = `Abilities: ${dados.abilities[0].ability.name} & ${dados.abilities[1].ability.name}`
    } catch{
        p.textContent = `Abilities: ${dados.abilities[0].ability.name}`
    }
}

async function showpkm(){
    pokemon = document.getElementById("pkm").value;
    nomePokemon = document.getElementById("name");
    tipoPokemon = document.getElementById("type");
    habilidadesPokemon = document.getElementById("abilities");

    try{
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

        if(!res.ok){
            throw new Error("Erro");
        }
        const dados = await res.json();
        

        nomePokemon.textContent = `Pokémon name: ${dados.name}`;
        
        showType(dados,tipoPokemon);
    
        showAbilities(dados,habilidadesPokemon)

        imgpkm = document.getElementById("img").src = dados.sprites.front_default;
    
        test(dados);
    } catch(erro){
        pokemon.textContent = erro;
    }
}