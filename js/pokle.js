async function test(){
    const number = Math.floor(Math.random() * 1025) + 1;

    const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${number}`
    );

    const dados = await res.json();

    console.log(dados.name)
}

test();