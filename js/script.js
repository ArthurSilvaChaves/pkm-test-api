async function showpkm(){
    pokemon = document.getElementById("pkm").value;
    nomePokemon = document.getElementById("name");


    try{
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

        if(!res.ok){
            throw new Error("Erro");
        }
        const dados = await res.json();
        
        nomePokemon.textContent = `Pokémon name: ${dados.name}`;
        
        
        imgpkm = document.getElementById("img").src = dados.sprites.front_default;
    } catch(erro){
        resposta.textContent = erro;
    }
}