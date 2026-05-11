function test(dados){
    // for(let i = 0;i < dados.moves.length;i++){
    //     console.log(dados.moves[i].move.name);
    // }

    console.log(dados)
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
    imgpkm = document.getElementById("img");

    try{
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

        if(!res.ok){
            throw new Error("Erro");
        }
        const dados = await res.json();
        
        test(dados);

        nomePokemon.textContent = `Pokémon name: ${dados.name}`;
        
        showType(dados,tipoPokemon);
    
        showAbilities(dados,habilidadesPokemon)

        imgpkm.src = dados.sprites.front_default;
    
        imgpkm.addEventListener("mouseenter", () =>{
            imgpkm.src = dados.sprites.front_shiny;
        });

        imgpkm.addEventListener("mouseleave", () => {
            imgpkm.src = dados.sprites.front_default;
        });

    } catch(erro){
        pokemon.textContent = erro;
    }
}