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
