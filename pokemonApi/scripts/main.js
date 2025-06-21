const listaPokemon = document.querySelector("#listaPokemon");
const url = "https://pokeapi.co/api/v2/pokemon";
const botonesHeader = document.querySelectorAll(".btn-header");

for(let i = 1; i<= 151; i++){
    fetch(url + "/" + i)
        .then((response) => response.json())
        .then(data => mostrarPokemon(data))
}

function mostrarPokemon(poke){

    let tipos = poke.types.map(type => 
        `<p class="tipo ${type.type.name}">${type.type.name}</p>`);
    tipos = tipos.join("");

    let pokeId = poke.id.toString();
    if(pokeId.length === 1){
        pokeId = "00" + pokeId;
    }else if(pokeId.length === 2){
        pokeId = "0" + pokeId;
    }
    console.log(pokeId);

    const div = document.createElement("div");
    div.classList.add("pokemon");

    const imagen = poke.sprites.front_default 
        ? poke.sprites.front_default 
        : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/500px-Pokebola-pokeball-png-0.png";

    div.innerHTML = `
        <p class="pokemon-id-back">#025</p>
        <div class="pokemon-imagen">
            <img src="${imagen}" alt="Pokemon" loading="lazy">
        </div>
        <div class="pokemon-info">
            <div class="nombre-contenedor">
                <p class="pokemon-id">#${pokeId}</p>
                <h2 class="pokemon-nombre">${poke.name}</h2>
                <div class="pokemon-tipos">
                    ${tipos}
                </div>
                <div class="pokemon-stats">
                    <p class="stat">${poke.height}</p>
                    <p class="stat">${poke.weight}</p>
                </div>
            </div>
        </div>
    `;
    listaPokemon.appendChild(div);
}

botonesHeader.forEach(boton => boton.addEventListener("click", (event) => {
    const botonId = event.currentTarget.id;

    listaPokemon.innerHTML = "";

    for(let i = 1; i<= 151; i++){
    fetch(url + "/" + i)
        .then((response) => response.json())
        .then(data => {

            if(botonId === "ver-todos"){
                mostrarPokemon(data);
            }else{
                const tipos = data.types.map(type => type.type.name);
                if(tipos.some(tipo => tipo.includes(botonId))){
                mostrarPokemon(data);
            }
            }
        })
    }
}))