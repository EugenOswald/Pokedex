let allPokemons = [];
let searchArray = [];
let allTypes = [];

async function init() {
    for (let i = 1; i <= 60; i++) {
        await loadPokemon(i);
    }
    rednerPokemons()
}


async function loadPokemon(i) {
    let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    let response = await fetch(url);
    let responseAsJS = await response.json();
    allPokemons.push(await responseAsJS);
}



function rednerPokemons() {
    for (let i = 0; i < allPokemons.length; i++) {
        document.getElementById('cardMenu').innerHTML += renderCardHTML(i)
        renderPokemonTypes(i);
    }
    loadingScreen()
}

/*
*  @parma {number} newLength - new length from allPokemons
*/

function loadmorePokemons(newLength) {
    newLength--;
    for (let i = newLength; i < allPokemons.length; i++) {
        document.getElementById('cardMenu').innerHTML += renderCardHTML(i)
        renderPokemonTypes(i);
    }
    document.getElementById('loadeMoreButton').style.display = 'flex';
    document.getElementById('loadingButton').classList.add('d-none');
}

function renderPokemonTypes(i) {
    for (let j = 0; j < allPokemons[i].types.length; j++) {
        document.getElementById(`pokemonTyps${i}`).innerHTML += renderTypeImg(i, j);
    }
}


function loadingScreen() {
    document.getElementById('loadingScreen').style.display = 'none';
}

function closePokemonInfos() {
    document.getElementById('pokemonInfoCard').innerHTML = "";
}

async function loadmore() {
    document.getElementById('loadeMoreButton').style.display = 'none';
    document.getElementById('loadingButton').classList.remove('d-none');
    let length = allPokemons.length + 1;
    let newLength = length + 30;
    for (let i = length; i <= newLength; i++) {
        await loadPokemon(i);
    }
    loadmorePokemons(length);
}


function openPokemonInfos(i) {
    document.getElementById('pokemonInfoCard').innerHTML = openPokemonInfosHTML(i);
}

function searchPokemon() {
    let search = document.getElementById('search').value;
    search = search.toLowerCase(); 

    document.getElementById('cardMenu').innerHTML = "";
    
    for (let i = 0; i < allPokemons.length; i++) {
        let name = allPokemons[i].name;
        if (name.toLowerCase().includes(search)) { 
            document.getElementById('cardMenu').innerHTML += renderCardHTML(i)
        } 
    }
    
}



function renderTypeImg(i, j) {
    const typeName = allPokemons[i].types[j].type.name
    const type = `imgs/${typeName}.png`;
    return renderPokemonTypsHTML(type);
}

/******************************************HTML*******************************************************/

function renderCardHTML(i) {
    let id = allPokemons[i].id;
    let name = allPokemons[i].name;
    let img = allPokemons[i].sprites.other['official-artwork'].front_default;
    let mainTyp = allPokemons[i].types[0].type.name;
    return /*html*/`
     
            <div  onclick="openPokemonInfos(${i})" class="pokemonCards ${mainTyp}" >
                <div>
                    <span><b># ${id} </b></span>
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


    return /*html*/`
    <div>
        <img class="typeImg" src="${type}" alt="">
        
    </div>
    `;
}


function openPokemonInfosHTML(i) {
    let id = allPokemons[i].id;
    let name = allPokemons[i].name;
    let img = allPokemons[i].sprites.other['official-artwork'].front_default;
    let mainTyp = allPokemons[i].types[0].type.name;
    let hp = allPokemons[i].stats[0].base_stat;
    let attack = allPokemons[i].stats[1].base_stat;
    let defense = allPokemons[i].stats[2].base_stat;
    let special_attack = allPokemons[i].stats[3].base_stat;
    let special_defense = allPokemons[i].stats[4].base_stat;
    let speed = allPokemons[i].stats[5].base_stat;
    let weight = allPokemons[i].weight;
    return /*html*/`

    <div class="background">
    
        <div class="card px-3 py-3 ${mainTyp}" style="width: 18rem;">
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