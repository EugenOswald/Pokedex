function renderCardHTML(i) {
	let id = allPokemons[i].id;
	let name = allPokemons[i].name;
	let img = allPokemons[i].sprites.other["official-artwork"].front_default;
	let mainTyp = allPokemons[i].types[0].type.name;
	return /*html*/ `
     
            <div  onclick="openPokemonInfos(${i})" class="pokemonCards ${mainTyp}" >
                <div>
                    <span ><b class="idNr"># ${id} </b></span>
                    <h5 class="capitalize">${name} </h5>
            
                    <div class="pokemonTyps" id="pokemonTyps${i}">
                    </div>
                </div>
                <div class="pokemonImgContainer">
                    <img class="pokemonImg" src="${img}" alt=""> 
                </div>
            </div>
         
        

`;
}

function renderPokemonTypsHTML(type) {
	return /*html*/ `
    <div>
        <img class="typeImg" src="${type}" alt="">
        
    </div>
    `;
}

function openPokemonInfosHTML(i) {
	let id = allPokemons[i].id;
	let name = allPokemons[i].name;
	let img = allPokemons[i].sprites.other["official-artwork"].front_default;
	let mainTyp = allPokemons[i].types[0].type.name;
	let hp = allPokemons[i].stats[0].base_stat;
	let attack = allPokemons[i].stats[1].base_stat;
	let defense = allPokemons[i].stats[2].base_stat;
	let special_attack = allPokemons[i].stats[3].base_stat;
	let special_defense = allPokemons[i].stats[4].base_stat;
	let speed = allPokemons[i].stats[5].base_stat;
	let weight = allPokemons[i].weight;
	return /*html*/ `

    <div class="background">
    
        <div class="card px-3 py-3 ${mainTyp}" >
        <button onclick="closePokemonInfos()" type="button" class="btn-close" aria-label="Close"></button>
            <img src="${img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title capitalize">${name}</h5>
                <div>
                    <div>
                        <Span><b>Weight</b> ${weight}g</Span>
                    </div>
                <span>Base HP</span>
                        <div class="progress mt-2">
                            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: ${hp}%">${hp}</div>
                        </div>
                        <span>Base Attack </span>
                        <div class="progress mt-2">
                            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: ${attack}%">${attack}</div>
                        </div>
                        <span>Base Defense</span>
                        <div class="progress mt-2">
                            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: ${defense}%"> ${defense}</div>
                        </div>
                        <span>Base Special Attack:</span>
                        <div class="progress mt-2">
                    
                            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: ${special_attack}%">${special_attack}</div>
                        </div>
                        <span>Base Special Defense</span>
                        <div class="progress mt-2">
                            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: ${special_defense}%"> ${special_defense}</div>
                        </div>
                        <span>Base Speed </span>
                        <div class="progress mt-2">
                            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: ${speed}%">${speed}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    `;
}
